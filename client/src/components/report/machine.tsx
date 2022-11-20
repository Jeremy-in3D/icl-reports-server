import React, { useState } from "react";
import { Route } from "../../classes/route";
import { machineParts } from "../../data/machine-parts";
import { MachineForm } from "./machine-form";
import { MachinePartsList } from "./machine-parts-list";

//Only load Machine contents if it is open for performance

export const Machine: React.FC<{
  routeData: Route;
  machine: [string, string[]];
  michlolName: string;
}> = ({ routeData, machine: [machineName, parts], michlolName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const isComplete = routeData.isMachineAnswered(michlolName, machineName);
  function areaAnswered(areaName: string) {
    return routeData.isMachineAreaAnswered(michlolName, machineName, areaName);
  }
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;
  const currentPart = machineParts.find((part) => part.id === parts[view])!;
  function updateView() {
    if (view + 1 < parts.length) setView((prevState) => ++prevState);
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
        <MachinePartsList
          checkAnswered={areaAnswered}
          parts={parts}
          setView={setView}
          view={view}
        />
        <MachineForm
          routeData={routeData}
          key={`${machineName}-${currentPart.id}`}
          part={currentPart}
          machineName={machineName}
          michlolName={michlolName}
          updateView={updateView}
        />
      </div>
    </div>
  );
};
