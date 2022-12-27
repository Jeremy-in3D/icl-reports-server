import React, { useState } from "react";
import { Route } from "../../classes/route";
import { machineParts } from "../../data/machine-parts";
import { MachineForm } from "./machine-form";
import { MachinePartsList } from "./machine-parts-list";
import { MachineDetails, MachineFilter } from "./route-view";

function getMachineStyle(machineState: MachineFilter) {
  if (machineState === "הושלם") return "completed";
  if (machineState === "חלקי") return "partial";
  if (machineState === "לא הושלם") return "incomplete";
}

export const Machine: React.FC<{
  reportInstance: Route;
  machine: MachineDetails;
}> = ({
  reportInstance,
  machine: { machineName, michlolId, michlolName, parts, equipmentUnit },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const [machineComplete, setMachineComplete] = useState(
    reportInstance.getMachineComplete(machineName)
  );
  const [partsComplete, setPartsComplete] = useState<boolean[] | undefined>();
  const openStyle = `${isOpen ? "opened" : "closed"}`;
  //Get parts from question bank online
  const currentParts = parts.map(
    (partId) => machineParts.find((part) => part.questionId === partId)!
  );
  const currentPart = currentParts[view];
  const reportDetails: ReportDetails = {
    michlolName: michlolName,
    michlolId: michlolId,
    machineName,
    equipmentUnit,
    partName: currentPart.partName,
  };

  return (
    <div className="machine">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${getMachineStyle(machineComplete)} ${openStyle}`}
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
              reportInstance={reportInstance}
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
                    body: reportInstance.sendMachineData(machineName),
                  });
                  if (machineResponse.status === 200) {
                    reportInstance.setMachineComplete(machineName);
                    setMachineComplete(
                      reportInstance.getMachineComplete(machineName)
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
  equipmentUnit: string;
  partName: string;
};
