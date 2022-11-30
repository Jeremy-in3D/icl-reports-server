import React, { useState } from "react";
import { Route } from "../../classes/route";
import { machineParts } from "../../data/machine-parts";
import { MichlolContents } from "../../data/reports-data";
import { MachineForm } from "./machine-form";
import { MachinePartsList } from "./machine-parts-list";

export const Machine: React.FC<{
  routeData: Route;
  machine: [string, string[]];
  michlolData: MichlolContents | undefined;
}> = ({ routeData, machine: [machineName, partsId], michlolData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const [machineComplete, setMachineComplete] = useState(
    routeData.isMachineComplete(machineName)
  );
  const [partsComplete, setPartsComplete] = useState<boolean[] | undefined>();
  const openStyle = `${isOpen ? "opened" : "closed"}`;
  const currentParts = partsId.map(
    (partId) => machineParts.find((part) => part.id === partId)!
  );
  const currentPart = currentParts[view];
  const reportDetails: ReportDetails = {
    michlolName: michlolData?.michlolName,
    michlolId: michlolData?.michlolId,
    machineName,
    partName: currentPart.name,
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
              key={`${machineName}-${currentPart.id}`}
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
                  if (!routeData.reportIsSubmitted()) {
                    const reportResponse = await fetch("/save-report", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: routeData.sendReportData(),
                    });
                    if (reportResponse.status === 200) {
                      routeData.markReportSubmitted();
                    }
                  }
                  const machineResponse = await fetch("/save-machine", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: routeData.sendMachineData(machineName),
                  });
                  if (machineResponse.status === 200) {
                    const id = await machineResponse.text();
                    routeData.markMachineComplete(machineName, id);
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
  michlolName: string | undefined;
  michlolId: string | undefined;
  machineName: string;
  partName: string;
};
