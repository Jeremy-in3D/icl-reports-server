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
import { getMachineComplete } from "./logic/getMachineComplete";
import dayjs from "dayjs";

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
    if (
      (reportInstance.reportId && !appContext.selectedReport) ||
      appContext.extra?.isFromAlertAndMachine
    ) {
      setRouteView(true);
    }
  }, []);

  if (routeView)
    return (
      <div className="report">
        <RouteView
          reportInstance={reportInstance}
          setScreen={setScreen}
          setRouteView={setRouteView}
        />
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
              className={`routes-selection-btn ${getMachineComplete(
                route,
                appContext.reports,
                appContext.selectedReport
              )}`}
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
      {appContext.selectedReport ? (
        <div style={{ marginTop: 180 }}>
          Last Edited: {dayjs().format("MM/DD/YYYY HH:mm:ss")} by{" "}
          {appContext.user.name}
        </div>
      ) : (
        <button
          onClick={async () =>
            await publishReport(
              appContext.reports,
              appContext.setReports,
              setScreen,
              reportInstance,
              routes,
              appContext.user
            )
          }
          className="publish-report-btn"
        >
          {`לפרסם דו"ח`}
        </button>
      )}
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
      const instantiateReport = await appContext.reports.map((report: any) => {
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
