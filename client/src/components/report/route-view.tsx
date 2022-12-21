import React, { useState } from "react";
import { Route } from "../../classes/route";
import { Filter } from "./filter";
import { MachinesList } from "./machines-list";

const filterItems: MachineFilter[] = ["הכל", "הושלם", "חלקי", "לא הושלם"];

export const RouteView: React.FC<{
  reportInstance: Route;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ reportInstance, setScreen }) => {
  const [machineFilter, setMachineFilter] = useState<MachineFilter>("הכל");
  const machines: MachineDetails[] = [];
  //For each michlol, push a machine object with the michlol details
  reportInstance.michlolim?.forEach((michlol) => {
    for (let [key, value] of Object.entries(michlol.machines)) {
      machines.push({
        machineName: key,
        michlolId: michlol.michlolId,
        michlolName: michlol.michlolName,
        parts: value,
      });
    }
  });
  // Filter machines based on filter state and then sort based on name
  const finalMachines = machines
    .filter((machine) => {
      if (machineFilter !== "הכל")
        return (
          reportInstance.getMachineComplete(machine.machineName) ===
          machineFilter
        );
      return true;
    })
    .sort((a, b) => {
      if (a.machineName > b.machineName) return 1;
      return -1;
    });

  return (
    <>
      <h1 className="page-title">{reportInstance.routeName}</h1>
      <Filter
        setFilter={setMachineFilter}
        filterItems={filterItems}
        currentFilter={machineFilter}
      />
      <MachinesList
        reportInstance={reportInstance}
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
