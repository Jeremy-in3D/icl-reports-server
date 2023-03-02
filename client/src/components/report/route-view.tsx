import React, { useState } from "react";
import { Route } from "../../classes/route";
import { Context } from "../../context/context";
import { Filter } from "./filter";
import { MachinesList } from "./machines-list";

const filterItems: MachineFilter[] = ["הכל", "הושלם", "חלקי", "לא הושלם"];

export const RouteView: React.FC<{
  reportInstance: Route;
  setRouteView: React.Dispatch<React.SetStateAction<boolean>>;
  appContext: Context;
  setRouteViewHelper: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ reportInstance, setRouteView, appContext, setRouteViewHelper }) => {
  const [machineFilter, setMachineFilter] = useState<MachineFilter>("הכל");
  const machines: MachineDetails[] = [];
  //For each michlol, push a machine object with the michlol details
  if (reportInstance.type === "survey") {
    reportInstance.michlolim?.forEach((michlol) => {
      for (let [key, value] of Object.entries(michlol.machines)) {
        machines.push({
          machineName: key,
          michlolId: michlol.michlolId,
          michlolName: michlol.michlolName,
          equipmentUnit: michlol.equipmentUnit,
          parts: value,
        });
      }
    });
  } else {
    reportInstance.machines?.forEach((machine) =>
      machines.push({
        machineName: machine,
      })
    );
  }

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
      />
      <button
        className="route-submit-btn"
        onClick={() => {
          if (appContext.selectedReport) {
            // appContext.setSelectedReport("");
          }
          setRouteViewHelper(true);
          setRouteView(false);
        }}
      >
        סגור מסלול
      </button>
    </>
  );
};

export type MachineDetails = {
  machineName: string;
  michlolId?: string;
  michlolName?: string;
  equipmentUnit?: string;
  parts?: string[];
};

export type MachineFilter = "הכל" | "הושלם" | "חלקי" | "לא הושלם";
