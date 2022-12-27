import React, { useState } from "react";
import { Route } from "../../../classes/route";
import { MachineDetails, MachineFilter } from "../route-view";
import { EngineeringMachineForm } from "./engineering-machine-form";

function getMachineStyle(machineState: MachineFilter) {
  if (machineState === "הושלם") return "completed";
  if (machineState === "חלקי") return "partial";
  if (machineState === "לא הושלם") return "incomplete";
}

export const EngineeringMachine: React.FC<{
  reportInstance: Route;
  machine: MachineDetails;
}> = ({ reportInstance, machine: { machineName } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [machineComplete, setMachineComplete] = useState(
    reportInstance.getMachineComplete(machineName)
  );
  const openStyle = `${isOpen ? "opened" : "closed"}`;

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
            {/* <EngineeringMachineForm /> */}
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
