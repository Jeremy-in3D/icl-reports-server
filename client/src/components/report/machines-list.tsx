import React from "react";
import { Route } from "../../classes/route";
import { SurveyMachine } from "./survey/survey-machine";
import { MachineDetails } from "./route-view";
import { EngineeringMachine } from "./engineering/engineering-machine";

export const MachinesList: React.FC<{
  reportInstance: Route;
  machineList: MachineDetails[];
}> = ({ reportInstance, machineList }) => {
  let machinesDisplay;
  switch (reportInstance.type) {
    case "survey":
      machinesDisplay = machineList.map((machine) => (
        <SurveyMachine
          key={`${reportInstance.routeId}-${machine.machineName}`}
          reportInstance={reportInstance}
          machine={machine}
        />
      ));
      break;
    case "engineering":
      machinesDisplay = machineList.map((machine) => (
        <EngineeringMachine
          key={`${reportInstance.routeId}-${machine.machineName}`}
          reportInstance={reportInstance}
          machine={machine}
        />
      ));
      break;
  }

  return (
    <div className="machines">
      <h2 className="machines-header">מכונות</h2>
      {machinesDisplay}
    </div>
  );
};
