import React, { useState } from "react";
import { Route } from "../../classes/route";
import { routes } from "../../data/reports-data";
import { Machine } from "./machine";

export const RouteView: React.FC<{
  routeData: Route;
}> = ({ routeData }) => {
  const michlolim = routes.find((report) => report.id === routeData.id)
    ?.michlolim!;
  const [view, setView] = useState(0);
  const machines = Object.entries(michlolim[view].machines);

  return (
    <>
      <h1 className="page-title">{routeData.name}</h1>
      <div className="michlolim-selections">
        {michlolim.map((michlol, i) => (
          <div className="michlol-selection" key={i} onClick={() => setView(i)}>
            {michlol.name}
          </div>
        ))}
      </div>
      {machines.map(([name, questions], i) => (
        <Machine
          key={i}
          routeData={routeData}
          name={name}
          questions={questions}
        />
      ))}
      {/* Save Survey */}
      {/* <button
      onClick={() => {
        const answer = confirm("אתה רוצה לסיים את הדוח ולשלוח לשרת?");
        if (answer)
          fetch("/save-report", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reportInstance.saveSurvey()),
          });
      }}
    >
      שלח תשובות וסיים דוח
    </button> */}
    </>
  );
};
