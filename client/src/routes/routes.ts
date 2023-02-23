import { Route } from "../classes/route";
import { arrayOfRouteNames } from "../components/report/common/reportTypes";
import { Context } from "../context/context";
import { Routes } from "../data/reports-data";

export const createNewReport = async (
  reportInstance: Route,
  newReport: any,
  appContext: Context
) => {
  const reportResponse = await fetch("/create-report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newReport),
  });
  if (reportResponse.status === 200) {
    reportInstance.instantiateReport(newReport);
    const existingReports = [...appContext.reports, newReport];
    appContext.setReports(existingReports);
  } else {
    throw new Error("Failed to create new report");
  }
};

export const getMachines = async (
  reportId: string | undefined,
  reportInstance: Route
) => {
  const reportResponse = await fetch("/get-docs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reportId }),
  });
  if (reportResponse.status === 200) {
    const responseBody = await reportResponse.json();
    reportInstance.loadMachines(responseBody);
  } else {
    throw new Error("Failed to create new report");
  }
};

export const publishReport = async (
  reports: [],
  setReports: React.Dispatch<React.SetStateAction<[]>>,
  setScreen: React.Dispatch<React.SetStateAction<string>>,
  reportInstance: Route,
  routes: Routes | undefined
) => {
  if (!reports.length) {
    alert("No reports to publish");
    return;
  }

  confirm("Are you sure you want to publish the report?");
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

  try {
    const response = await fetch("/publish-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reportsCopy),
    });

    if (response.status === 200) {
      setReports([]);
      setScreen("home");
    }
  } catch (err) {
    console.log("error publishing report", err);
  }
};
