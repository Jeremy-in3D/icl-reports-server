import React, { useState } from "react";
import { Route } from "../../classes/route";
import { machineAreas } from "../../data/machine-areas";
import { MachineForm } from "./machine-form";
import { MachineAreasList } from "./machine-areas-list";

export const Machine: React.FC<{
  routeData: Route;
  machine: [string, string[]];
  michlolName: string;
}> = ({ routeData, machine: [machineName, areaIds], michlolName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const isComplete = routeData.isMachineComplete(machineName);
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;
  const currentArea = machineAreas.find((area) => area.id === areaIds[view])!;

  return (
    <div className="machine">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${completedClass} ${openClass}`}
      >
        {machineName}
      </div>
      <div className={`michlol-contents ${completedClass} ${openClass}`}>
        <MachineAreasList areaIds={areaIds} setView={setView} />
        <MachineForm
          routeData={routeData}
          key={`${machineName}-${currentArea.id}`}
          area={currentArea}
          machineName={machineName}
          michlolId={michlolName}
        />
      </div>
    </div>
  );
};
