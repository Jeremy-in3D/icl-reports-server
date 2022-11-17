import React, { useState } from "react";
import { Route } from "../../classes/route";
import { machineAreas } from "../../data/machine-areas";
import { MachineForm } from "./machine-form";
import { MachineAreasList } from "./machine-areas-list";

//Only load Machine contents if it is open for performance

export const Machine: React.FC<{
  routeData: Route;
  machine: [string, string[]];
  michlolName: string;
}> = ({ routeData, machine: [machineName, areaIds], michlolName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const isComplete = routeData.isMachineAnswered(michlolName, machineName);
  function areaAnswered(areaName: string) {
    return routeData.isMachineAreaAnswered(michlolName, machineName, areaName);
  }
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;
  const currentArea = machineAreas.find((area) => area.id === areaIds[view])!;
  function updateView() {
    if (view + 1 < areaIds.length) setView((prevState) => ++prevState);
    else setView(0);
  }

  return (
    <div className="machine">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${completedClass} ${openClass}`}
      >
        {machineName}
      </div>
      <div className={`michlol-contents ${completedClass} ${openClass}`}>
        <MachineAreasList
          checkAnswered={areaAnswered}
          areaIds={areaIds}
          setView={setView}
          view={view}
        />
        <MachineForm
          routeData={routeData}
          key={`${machineName}-${currentArea.id}`}
          area={currentArea}
          machineName={machineName}
          michlolName={michlolName}
          updateView={updateView}
        />
      </div>
    </div>
  );
};
