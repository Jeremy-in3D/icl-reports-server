import React from "react";
import { Route } from "../../classes/route";
import { michlolim, Routes } from "../../data/reports-data";
import { MachinesList } from "./machines-list";

export const RouteView: React.FC<{
  routeData: Route;
  route: Routes[number];
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ route, routeData, setScreen }) => {
  //Refactor
  const machinesArray = route.michlolim.map(
    (michlolId) => michlolim.find((m) => m.michlolId === michlolId)?.machines
  );
  const finalMachines: { [id: string]: string[] } = {};
  for (let machinesObj of Object.values(machinesArray)) {
    if (machinesObj !== undefined) {
      for (let [key, value] of Object.entries(machinesObj)) {
        finalMachines[key] = value;
      }
    }
  }
  console.log(finalMachines);
  //Sort the final machine list by number
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
