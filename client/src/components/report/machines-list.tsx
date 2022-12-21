import React from "react";
import { Route } from "../../classes/route";
import { Machine } from "./machine";
import { MachineDetails, MachineFilter } from "./route-view";

export const MachinesList: React.FC<{
  reportInstance: Route;
  machineList: MachineDetails[];
  machineFilter: MachineFilter;
}> = ({ reportInstance, machineList, machineFilter }) => {
  return (
    <div className="machines">
      <h2 className="machines-header">מכונות</h2>
      {machineList.map((machine) => (
        <Machine
          key={`${reportInstance.routeId}-${machine.machineName}-${machineFilter}`}
          reportInstance={reportInstance}
          machine={machine}
        />
      ))}
    </div>
  );
};
