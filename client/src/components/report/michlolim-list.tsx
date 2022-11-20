import React from "react";
import { michlolim, Routes } from "../../data/reports-data";

export const MichlolimList: React.FC<{
  view: number;
  route: Routes[number];
  setView: React.Dispatch<React.SetStateAction<number>>;
}> = ({ view, route, setView }) => {
  return (
    <div className="michlolim-selections">
      <h2 className="michlolim-header">מכלולים</h2>
      {route?.michlolim.map((m, i) => {
        const michlol = michlolim.find((michlol) => michlol.michlolId === m);
        return (
          <div
            key={i}
            className={`michlol-selection ${view === i ? "current" : "idle"}`}
            onClick={() => setView(i)}
          >
            {michlol?.michlolName}
          </div>
        );
      })}
    </div>
  );
};
