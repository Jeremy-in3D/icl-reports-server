import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { arrayOfRouteNames } from "../report/common/reportTypes";

export const fillMissinReportData = async (
  reports: [],
  reportInstance: Route,
  routes: Routes | undefined
) => {
  if (!reports.length) {
    alert("No reports to publish");
    return;
  }

  const numberOfReportsForCompleteReport = 7;
  const reportsCopy: any[] = [...reports];

  if (reports.length < numberOfReportsForCompleteReport) {
    const checkForMissingReports = arrayOfRouteNames.map((routeName) => {
      let routeAlreadyExistsInReport = false;
      const searchReportsForExistingReport = reportsCopy.map((report: any) => {
        if (report.routeName == routeName) {
          routeAlreadyExistsInReport = true;
        }
      });

      if (!routeAlreadyExistsInReport) {
        const createNewReport = routes?.map((route) => {
          if (route.routeName === routeName) {
            const newReport = reportInstance.newReport(route);
            reportsCopy.push(newReport);
          }
        });
      }
    });
  }
  return reportsCopy;
};
