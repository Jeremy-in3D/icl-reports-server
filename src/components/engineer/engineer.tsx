import React, { useState } from "react";
import { OilReports } from "./oil-reports";
import { QuakeReports } from "./quake-reports";

export const Engineer: React.FC = () => {
  const [report, setReport] = useState<string>();

  if (report === "Oil") return <OilReports />;
  if (report === "Quake") return <QuakeReports />;

  return (
    <div className="surveys-selections">
      <h1>Engineer Reports</h1>
      <button
        className="survey-selection"
        onClick={() => {
          setReport("Oil");
        }}
      >
        Oil Report
      </button>
      <button
        className="survey-selection"
        onClick={() => {
          setReport("Quake");
        }}
      >
        Quake Report
      </button>
    </div>
  );
};
