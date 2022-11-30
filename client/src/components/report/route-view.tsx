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
  const currentMichlolId = route.michlolim[view];
  const currentMichlolData = michlolim.find(
    (m) => m.michlolId === currentMichlolId
  );

  return (
    <>
      <h1 className="page-title">{routeData.routeName}</h1>
      <MichlolimList view={view} route={route} setView={setView} />
      <MachinesList
        view={view}
        route={route}
        routeData={routeData}
        michlolData={currentMichlolData}
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
