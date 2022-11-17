import React, { useState } from "react";
import { Route } from "../../classes/route";
import { routes } from "../../data/reports-data";
import { Machine } from "./machine";

export const RouteView: React.FC<{
  routeData: Route;
}> = ({ routeData }) => {
  const [view, setView] = useState(0);
  const route = routes.find((route) => route.id === routeData.id);
  const machines = Object.entries(route?.michlolim[view].machines!);

  return (
    <>
      <h1 className="page-title">{routeData.name}</h1>
      <div className="michlolim-selections">
        {route?.michlolim.map((michlol, i) => (
          <div className="michlol-selection" key={i} onClick={() => setView(i)}>
            {michlol.name}
          </div>
        ))}
      </div>
      {machines.map((machine, i) => (
        <Machine
          key={i}
          routeData={routeData}
          machine={machine}
          michlolName={route?.michlolim[view].name!}
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
