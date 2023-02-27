import React, { useContext } from "react";
import { Route } from "../../classes/route";
import { SurveyMachine } from "./survey/survey-machine";
import { MachineDetails } from "./route-view";
import { EngineeringMachine } from "./engineering/engineering-machine";
import AppContext, { Context } from "../../context/context";

export const MachinesList: React.FC<{
  reportInstance: Route;
  machineList: MachineDetails[];
}> = ({ reportInstance, machineList }) => {
  const appContext = useContext<Context>(AppContext);
  let machinesDisplay;
  switch (reportInstance.type) {
    case "survey":
      machinesDisplay = machineList.map((machine) => (
        <SurveyMachine
          key={`${reportInstance.routeId}-${machine.machineName}`}
          reportInstance={reportInstance}
          machine={machine}
          isFromAlerts={appContext.extra?.screen == "status"}
        />
      ));
      break;
    case "engineering":
      machinesDisplay = machineList.map((machine) => (
        <EngineeringMachine
          key={`${reportInstance.routeId}-${machine.machineName}`}
          reportInstance={reportInstance}
          machine={machine}
          isFromAlerts={appContext.extra?.screen == "status"}
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
