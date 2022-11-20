import React, { useState } from "react";
import { Route } from "../../classes/route";
import { machineParts } from "../../data/machine-parts";
import { MachineForm } from "./machine-form";
import { MachinePartsList } from "./machine-parts-list";

export const Machine: React.FC<{
  routeData: Route;
  machine: [string, string[]];
  michlolName: string;
}> = ({ routeData, machine: [machineName, parts], michlolName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const isComplete = routeData.isMachineComplete(machineName);
  const openStyle = `${isOpen ? "opened" : "closed"}`;
  const currentPart = machineParts.find((part) => part.id === parts[view])!;

  function isPartComplete(partName: string) {
    return routeData.isPartComplete(machineName, partName);
  }

  return (
    <div className="machine">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${isComplete} ${openStyle}`}
      >
        {machineName}
      </div>
      <div className={`michlol-contents ${isComplete} ${openStyle}`}>
        {isOpen && (
          <>
            <MachinePartsList
              view={view}
              setView={setView}
              parts={parts}
              checkPart={isPartComplete}
            />
            <MachineForm
              routeData={routeData}
              key={`${machineName}-${currentPart.id}`}
              part={currentPart}
              machineName={machineName}
              michlolName={michlolName}
            />
            <button
              className="machine-submit-btn"
              onClick={() => {
                console.log(routeData.sendMachineData(machineName));
                setIsOpen(false);
              }}
            >
              Send
            </button>
          </>
        )}
      </div>
    </div>
  );
};
