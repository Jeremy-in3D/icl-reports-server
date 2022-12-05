import React from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { Machine } from "./machine";
import { MachineDetails, MachineFilter } from "./route-view";

export const MachinesList: React.FC<{
  route: Routes[number];
  routeData: Route;
  machineList: MachineDetails[];
  machineFilter: MachineFilter;
}> = ({ route, routeData, machineList, machineFilter }) => {
  return (
    <div className="machines">
      <h2 className="machines-header">מכונות</h2>
      {machineList.map((machine) => (
        <Machine
          key={`${route?.routeId}-${machine.machineName}-${machineFilter}`}
          routeData={routeData}
          machine={machine}
        />
      ))}
    </div>
  );
};
