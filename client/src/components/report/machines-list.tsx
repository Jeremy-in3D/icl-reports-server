import React from "react";
import { Route } from "../../classes/route";
import { MichlolContents, Routes } from "../../data/reports-data";
import { Machine } from "./machine";

export const MachinesList: React.FC<{
  route: Routes[number];
  view: number;
  routeData: Route;
  michlolData: MichlolContents | undefined;
}> = ({ route, routeData, view, michlolData }) => {
  const machines = Object.entries(michlolData?.machines!);

  return (
    <div className="machines">
      <h2 className="machines-header">מכונות</h2>
      {machines.map((machine, i) => (
        <Machine
          key={`${route?.routeId}-${view}-${i}`}
          routeData={routeData}
          machine={machine}
          michlolData={michlolData}
        />
      ))}
    </div>
  );
};
