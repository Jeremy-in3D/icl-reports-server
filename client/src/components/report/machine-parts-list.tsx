import React from "react";
import { machineParts } from "../../data/machine-parts";

export const MachinePartsList: React.FC<{
  parts: string[];
  setView: React.Dispatch<React.SetStateAction<number>>;
  checkAnswered: (areaName: string) => boolean;
  view: number;
}> = ({ parts, setView, checkAnswered, view }) => {
  const currentParts = parts.map(
    (current) => machineParts.find((part) => part.id === current)!
  );

  return (
    <div className="michlol-questions-array">
      {currentParts.map((part, idx) => {
        const answered = checkAnswered(part.name);

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
