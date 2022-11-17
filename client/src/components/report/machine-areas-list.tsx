import React from "react";
import { machineAreas } from "../../data/machine-areas";

export const MachineAreasList: React.FC<{
  areaIds: string[];
  setView: React.Dispatch<React.SetStateAction<number>>;
}> = ({ areaIds, setView }) => {
  const areas = areaIds.map(
    (areaId) => machineAreas.find((area) => area.id === areaId)!
  );

  return (
    <div className="michlol-questions-array">
      {areas.map((area, idx) => {
        return (
          <div
            key={idx}
            className={`m-question-marker`}
            onClick={() => setView(idx)}
          >
            {area?.name}
          </div>
        );
      })}
    </div>
  );
};
