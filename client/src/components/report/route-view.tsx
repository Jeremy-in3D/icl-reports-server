import React from "react";
import { Route } from "../../classes/route";
import { michlolim, Routes } from "../../data/reports-data";
import { MachinesList } from "./machines-list";

export const RouteView: React.FC<{
  routeData: Route;
  route: Routes[number];
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ route, routeData, setScreen }) => {
  const michlolimArray = route.michlolim.map(
    (michlolId) => michlolim.find((m) => m.michlolId === michlolId)!
  );
  const finalMachines: MachineDetails = {};
  michlolimArray.forEach((michlol) => {
    for (let [key, value] of Object.entries(michlol.machines)) {
      finalMachines[key] = {
        michlolId: michlol.michlolId,
        michlolName: michlol.michlolName,
        parts: value,
      };
    }
  });

  return (
    <>
      <h1 className="page-title">{routeData.routeName}</h1>
      <MachinesList
        route={route}
        routeData={routeData}
        machineList={finalMachines}
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

export type MachineDetails = {
  [machineId: string]: {
    michlolId: string;
    michlolName: string;
    parts: string[];
  };
};
