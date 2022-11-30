import React from "react";
import { MachineParts } from "../../data/machine-parts";

export const MachinePartsList: React.FC<{
  view: number;
  setView: React.Dispatch<React.SetStateAction<number>>;
  parts: MachineParts;
  partsComplete: boolean[] | undefined;
}> = ({ view, setView, parts, partsComplete }) => {
  return (
    <div className="michlol-questions-array">
      {parts.map((part, idx) => {
        let answered;
        if (partsComplete) answered = partsComplete[idx];
        return (
          <div
            key={`${idx}`}
            className={`m-question-marker ${idx === view ? "current" : ""} ${
              answered ? "green" : "red"
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
