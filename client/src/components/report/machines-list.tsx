import React from "react";
import { Route } from "../../classes/route";
import { Machine } from "./machine";
import { MachineDetails, MachineFilter } from "./route-view";

export const MachinesList: React.FC<{
  routeData: Route;
  machineList: MachineDetails[];
  machineFilter: MachineFilter;
}> = ({ routeData, machineList, machineFilter }) => {
  return (
    <div className="machines">
      <h2 className="machines-header">מכונות</h2>
      {machineList.map((machine) => (
        <Machine
          key={`${routeData.routeId}-${machine.machineName}-${machineFilter}`}
          routeData={routeData}
          machine={machine}
        />
      ))}
    </div>
  );
};
