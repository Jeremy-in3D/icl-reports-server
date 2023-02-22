import { Route } from "../../../classes/route";
import { Routes } from "../../../data/reports-data";
import { numberOfMachinesByRoute } from "../common/reportTypes";

export function getMachineComplete(selectedRoute: any, currentReports: Routes) {
  let completedMachines: number | undefined = 0;
  const numberOfCompletedMachines = currentReports.map((report) => {
    if (report.routeName == selectedRoute.routeName) {
      completedMachines = report.completedMachines;
    }
  });
  if (
    completedMachines > 0 &&
    completedMachines < numberOfMachinesByRoute[selectedRoute.routeName]
  )
    return "partial";
  if (
    completedMachines === numberOfMachinesByRoute[selectedRoute.routeName] ||
    completedMachines > numberOfMachinesByRoute[selectedRoute.routeName]
  ) {
    return "completed";
  }
  return "incomplete";
}
