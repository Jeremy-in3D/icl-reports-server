import React, { useState } from "react";
import { Route } from "../../classes/route";
import { machineParts } from "../../data/machine-parts";
import { MachineForm } from "./machine-form";
import { MachinePartsList } from "./machine-parts-list";

export const Machine: React.FC<{
  routeData: Route;
  machine: [
    string,
    {
      michlolId: string;
      michlolName: string;
      parts: string[];
    }
  ];
}> = ({ routeData, machine: [machineName, machineDetails] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const [machineComplete, setMachineComplete] = useState(
    routeData.isMachineComplete(machineName)
  );
  const [partsComplete, setPartsComplete] = useState<boolean[] | undefined>();
  const openStyle = `${isOpen ? "opened" : "closed"}`;
  const currentParts = machineDetails.parts.map(
    (partId) => machineParts.find((part) => part.questionId === partId)!
  );
  const currentPart = currentParts[view];
  const reportDetails: ReportDetails = {
    michlolName: machineDetails.michlolName,
    michlolId: machineDetails.michlolId,
    machineName,
    partName: currentPart.partName,
  };

  return (
    <div className="machine">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${machineComplete} ${openStyle}`}
      >
        {machineName}
      </div>
      <div className={`michlol-contents ${machineComplete} ${openStyle}`}>
        {isOpen && (
          <>
            <MachinePartsList
              view={view}
              setView={setView}
              parts={currentParts}
              partsComplete={partsComplete}
            />
            <MachineForm
              routeData={routeData}
              key={`${machineName}-${currentPart.questionId}`}
              currentPart={currentPart}
              parts={currentParts}
              reportDetails={reportDetails}
              setMachineComplete={setMachineComplete}
              setPartsComplete={setPartsComplete}
            />
            <button
              className="submit-data-btn"
              onClick={async () => {
                const answer = confirm("אתה רוצה לסיים את הדוח ולשלוח לשרת?");
                if (answer) {
                  const machineResponse = await fetch("/save-machine", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: routeData.sendMachineData(machineName),
                  });
                  if (machineResponse.status === 200) {
                    routeData.markMachineComplete(machineName);
                    setMachineComplete(
                      routeData.isMachineComplete(machineName)
                    );
                  }
                  setIsOpen(false);
                }
              }}
            >
              שלח
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export type ReportDetails = {
  michlolName: string;
  michlolId: string;
  machineName: string;
  partName: string;
};
