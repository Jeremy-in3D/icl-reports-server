import React from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { Machine } from "./machine";

export const MachinesList: React.FC<{
  machines: [string, string[]][];
  route: Routes[number];
  view: number;
  routeData: Route;
  currentMichlol: string;
}> = ({ machines, route, currentMichlol, routeData, view }) => {
  return (
    <div className="machines">
      <h2 className="machines-header">מכונות</h2>
      {machines.map((machine, i) => (
        <Machine
          key={`${route?.routeId}-${view}-${i}`}
          routeData={routeData}
          machine={machine}
          michlolName={currentMichlol}
        />
      ))}
    </div>
  );
};
