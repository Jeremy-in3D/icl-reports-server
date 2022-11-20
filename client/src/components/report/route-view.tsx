import React, { useState } from "react";
import { Route } from "../../classes/route";
import { michlolim, Routes } from "../../data/reports-data";
import { MachinesList } from "./machines-list";
import { MichlolimList } from "./michlolim-list";

export const RouteView: React.FC<{
  routeData: Route;
  route: Routes[number];
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ route, routeData, setScreen }) => {
  const [view, setView] = useState(0);
  const currentMichlol = route.michlolim[view];
  const currentMichlolData = michlolim.find(
    (m) => m.michlolId === currentMichlol
  );
  const machines = Object.entries(currentMichlolData?.machines!);

  return (
    <>
      <h1 className="page-title">{routeData.name}</h1>
      <MichlolimList view={view} route={route} setView={setView} />
      <MachinesList
        view={view}
        route={route}
        machines={machines}
        routeData={routeData}
        currentMichlol={currentMichlol}
      />
      <button
        className="route-submit-btn"
        onClick={() => {
          setScreen("home");
        }}
      >
        סגור מסלול
      </button>
    </>
  );
};

//  <button
// className="route-submit-btn"
// onClick={() => {
//   const answer = confirm("אתה רוצה לסיים את הדוח ולשלוח לשרת?");
//   if (answer)
//     fetch("/save-report", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: routeData.saveSurvey(),
//     });
//   localStorage.setItem(routeData.id, routeData.saveSurvey());
//   setScreen("home");
// }}
// >
// שלח מסלול
// </button>
