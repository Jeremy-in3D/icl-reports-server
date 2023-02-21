import React, { useEffect, useState, useContext } from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { ShowError } from "../misc/show-error";
import { RouteView } from "./route-view";
import AppContext, { Context } from "../../context/context";
import { isShouldCreateNewReport } from "./logic/isShouldCreateNewReport";
import {
  createNewReport,
  getMachines,
  publishReport,
} from "../../routes/routes";

export const Report: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  routes: Routes | undefined;
  reportInstance: Route;
}> = ({ setScreen, routes, reportInstance }) => {
  const [routeView, setRouteView] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const appContext = useContext<Context>(AppContext);

  useEffect(() => {
    if (errorMessage) {
      const timeoutId = setTimeout(() => {
        setErrorMessage(undefined);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (reportInstance.reportId && !appContext.selectedReport) {
      setRouteView(true);
    }
  }, []);

  if (routeView)
    return (
      <div className="report">
        <RouteView reportInstance={reportInstance} setScreen={setScreen} />
      </div>
    );

  return (
    <div className="reports">
      {/* If error exists in state, show it */}
      {errorMessage && <ShowError message={errorMessage} />}
      <p className="page-title">יצור דו"ח</p>
      <div className="routes-selections">
        {/* Show the different routes pulled as options, with a dynamic onclick based on the route */}
        {routes &&
          routes.map((route, idx) => (
            <button
              key={idx}
              className="routes-selection-btn"
              onClick={() => {
                createReport(
                  route,
                  reportInstance,
                  setRouteView,
                  setErrorMessage,
                  appContext
                );
              }}
            >
              {route.routeName}
            </button>
          ))}
      </div>
      <button
        onClick={() =>
          handlePublishReport(
            appContext.reports,
            appContext.setReports,
            setScreen
          )
        }
        className="publish-report-btn"
      >
        {appContext.selectedReport ? "Edit" : "publish"}
      </button>
    </div>
  );
};

async function createReport(
  route: Routes[number],
  reportInstance: Route,
  setRouteView: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>,
  appContext: Context
) {
  //Creates new report on the instance using the route
  const newReport = reportInstance.newReport(route);

  if (appContext.selectedReport) {
    // set with server. Right now, the selected report is an array of the completed-semi completed
    // report, so any not on the list is "red" or not completed. We need this reportId and machines from the server. start
    // by setting them and then add the css colours so we start to have that down.
    const selectedReportReport = await fetch("/get-published-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        route: route.routeName,
        report: appContext.selectedReport,
      }),
    });
    const { reportFromReportHistory, machinesForReport } =
      await selectedReportReport.json();

    reportInstance.instantiateReport(reportFromReportHistory);
    reportInstance.loadMachines(machinesForReport);

    setRouteView(true);
    return;
  }

  try {
    const shouldCreateNewReport = isShouldCreateNewReport(
      appContext.reports,
      route.routeName
    );

    if (shouldCreateNewReport) {
      await createNewReport(reportInstance, newReport, appContext);
    } else {
      let reportId;
      const instantiateReport = appContext.reports.map((report: any) => {
        if (report.routeName == route.routeName) {
          reportId = report.reportId;
          reportInstance.instantiateReport(report);
        }
      });
      await getMachines(reportId, reportInstance);
    }
  } catch (e) {
    if (e instanceof Error) setErrorMessage(`Error: ${e.message}`);
  }

  setRouteView(true);
}

async function handlePublishReport(
  reports: [],
  setReports: React.Dispatch<React.SetStateAction<[]>>,
  setScreen: React.Dispatch<React.SetStateAction<string>>
) {
  await publishReport(reports, setReports, setScreen);
}
