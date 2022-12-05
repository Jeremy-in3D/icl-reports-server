import React from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { Machine } from "./machine";
import { MachineDetails } from "./route-view";

export const MachinesList: React.FC<{
  route: Routes[number];
  routeData: Route;
  machineList: MachineDetails;
}> = ({ route, routeData, machineList }) => {
  const machines = Object.entries(machineList);

  return (
    <div className="machines">
      <h2 className="machines-header">מכונות</h2>
      {machines.map((machine, i) => (
        <Machine
          key={`${route?.routeId}-${i}`}
          routeData={routeData}
          machine={machine}
        />
      ))}
    </div>
  );
};
