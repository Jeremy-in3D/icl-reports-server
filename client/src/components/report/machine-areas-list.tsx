import React from "react";
import { machineAreas } from "../../data/machine-areas";

export const MachineAreasList: React.FC<{
  areaIds: string[];
  setView: React.Dispatch<React.SetStateAction<number>>;
  checkAnswered: (areaName: string) => boolean;
  view: number;
}> = ({ areaIds, setView, checkAnswered, view }) => {
  const areas = areaIds.map(
    (areaId) => machineAreas.find((area) => area.id === areaId)!
  );

  return (
    <div className="michlol-questions-array">
      {areas.map((area, idx) => {
        const answered = checkAnswered(area.name);

        return (
          <div
            key={idx}
            className={`m-question-marker ${
              idx === view ? "current" : answered ? "green" : "red"
            }`}
            onClick={() => setView(idx)}
          >
            {area?.name}
          </div>
        );
      })}
    </div>
  );
};
