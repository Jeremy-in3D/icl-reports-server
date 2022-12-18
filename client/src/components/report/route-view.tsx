import React, { useState } from "react";
import { Route } from "../../classes/route";
import { michlolim, Routes } from "../../data/reports-data";
import { Filter } from "./filter";
import { MachinesList } from "./machines-list";

const filterItems: MachineFilter[] = ["הכל", "הושלם", "חלקי", "לא הושלם"];

export const RouteView: React.FC<{
  routeData: Route;
  route: Routes[number];
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ route, routeData, setScreen }) => {
  const [machineFilter, setMachineFilter] = useState<MachineFilter>("הכל");

  //Arrange Michlolim into an array of machines
  const michlolimArray = route.michlolim.map(
    //@ts-ignore
    (michlolId) => michlolim.find((m) => m.michlolId === michlolId)!
  );
  const machines: MachineDetails[] = [];
  //For each michlol, push a machine object with the michlol details
  michlolimArray.forEach((michlol) => {
    for (let [key, value] of Object.entries(michlol.machines)) {
      machines.push({
        machineName: key,
        michlolId: michlol.michlolId,
        michlolName: michlol.michlolName,
        parts: value,
      });
    }
  });

  //Filter machines based on filter state and then sort based on name
  const finalMachines = machines
    .filter((machine) => {
      if (machineFilter !== "הכל")
        return (
          routeData.isMachineComplete(machine.machineName) === machineFilter
        );
      return true;
    })
    .sort((a, b) => {
      if (a.machineName > b.machineName) return 1;
      return -1;
    });

  return (
    <>
      <h1 className="page-title">{routeData.routeName}</h1>
      <Filter
        setFilter={setMachineFilter}
        filterItems={filterItems}
        currentFilter={machineFilter}
      />
      <MachinesList
        route={route}
        routeData={routeData}
        machineList={finalMachines}
        machineFilter={machineFilter}
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
  machineName: string;
  michlolId: string;
  michlolName: string;
  parts: string[];
};

export type MachineFilter = "הכל" | "הושלם" | "חלקי" | "לא הושלם";
