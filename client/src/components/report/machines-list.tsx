import React from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { Machine } from "./machine";
import { MachineDetails } from "./route-view";

export const MachinesList: React.FC<{
  route: Routes[number];
  routeData: Route;
  machineList: MachineDetails[];
}> = ({ route, routeData, machineList }) => {
  return (
    <div className="machines">
      <h2 className="machines-header">מכונות</h2>
      {machineList.map((machine) => (
        <Machine
          key={`${route?.routeId}-${machine.machineName}`}
          routeData={routeData}
          machine={machine}
        />
      ))}
    </div>
  );
};
