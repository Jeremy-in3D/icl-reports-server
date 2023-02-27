import React, { useState, useContext, useEffect } from "react";
import { Route } from "../../../classes/route";
import AppContext, { Context } from "../../../context/context";
import { MachineDetails, MachineFilter } from "../route-view";
import { EngineeringOilForm } from "./engineering-oil-form";
import { EngineeringQuakeForm } from "./engineering-quake-form";

function getMachineStyle(machineState: MachineFilter) {
  if (machineState === "הושלם") return "completed";
  if (machineState === "חלקי") return "partial";
  if (machineState === "לא הושלם") return "incomplete";
}

export const EngineeringMachine: React.FC<{
  reportInstance: Route;
  machine: MachineDetails;
  isFromAlerts: boolean;
}> = ({ reportInstance, machine: { machineName }, isFromAlerts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [machineComplete, setMachineComplete] = useState(
    reportInstance.getMachineComplete(machineName)
  );
  const appContext = useContext<Context>(AppContext);

  if (
    isFromAlerts &&
    appContext.extra?.selectedAlert &&
    appContext.extra?.selectedAlert !== machineName
  ) {
    return null;
  }

  const openStyle = `${isOpen ? "opened" : "closed"}`;

  let machineForm;
  if (reportInstance.routeName === 'דו"ח רעידות') {
    machineForm = (
      <EngineeringQuakeForm
        reportInstance={reportInstance}
        machineName={machineName}
        setMachineComplete={setMachineComplete}
      />
    );
  }
  if (reportInstance.routeName === 'דו"ח מערכת שמן') {
    machineForm = (
      <EngineeringOilForm
        reportInstance={reportInstance}
        machineName={machineName}
        setMachineComplete={setMachineComplete}
      />
    );
  }

  useEffect(() => {
    if (isFromAlerts && appContext.extra?.selectedAlert == machineName) {
      setIsOpen(true);
    }
  }, []);

  const addCompletedMachineToReports = () => {
    appContext.reports.map((report: any) => {
      if (report.routeName == reportInstance.routeName) {
        if (!report.completedMachines) {
          report.completedMachines = 1;
        } else {
          report.completedMachines++;
        }
      }
    });
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
            {machineForm}
            <button
              className="submit-data-btn"
              onClick={async () => {
                const answer = confirm("אתה רוצה לסיים את הדוח ולשלוח לשרת?");
                if (answer) {
                  const machineResponse = await fetch("/save-machine", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: reportInstance.sendMachineData(
                      machineName,
                      appContext.selectedReport?.length,
                      appContext.user
                    ),
                  });
                  if (machineResponse.status === 200) {
                    reportInstance.setMachineComplete(machineName);
                    setMachineComplete(
                      reportInstance.getMachineComplete(machineName)
                    );
                  }
                  addCompletedMachineToReports();
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
