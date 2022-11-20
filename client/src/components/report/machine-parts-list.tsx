import React from "react";
import { machineParts } from "../../data/machine-parts";

export const MachinePartsList: React.FC<{
  parts: string[];
  view: number;
  setView: React.Dispatch<React.SetStateAction<number>>;
  checkPart: (partName: string) => boolean;
}> = ({ parts, setView, checkPart, view }) => {
  const currentParts = parts.map(
    (current) => machineParts.find((part) => part.id === current)!
  );

  return (
    <div className="michlol-questions-array">
      {currentParts.map((part, idx) => {
        const answered = checkPart(part.name);
        return (
          <div
            key={idx}
            className={`m-question-marker ${
              idx === view ? "current" : answered ? "green" : "red"
            }`}
            onClick={() => setView(idx)}
          >
            {part?.name}
          </div>
        );
      })}
    </div>
  );
};
