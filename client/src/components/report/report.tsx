import React, { useEffect, useRef, useState } from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { ShowError } from "../misc/show-error";
import { RouteView } from "./route-view";

export const Report: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  routes: Routes | undefined;
  reportInstance: Route;
}> = ({ setScreen, routes, reportInstance }) => {
  const [routeView, setRouteView] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    if (errorMessage) {
      const timeoutId = setTimeout(() => {
        setErrorMessage(undefined);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (reportInstance.reportId) setRouteView(true);
  }, []);

  console.log(reportInstance);

  if (routeView)
    return (
      <div className="report">
        <RouteView reportInstance={reportInstance} setScreen={setScreen} />
      </div>
    );

  return (
    <div className="reports">
      {errorMessage && <ShowError message={errorMessage} />}
      <p className="page-title">יצור דו"ח</p>
      <div className="routes-selections">
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
                  setErrorMessage
                );
              }}
            >
              {route.routeName}
            </button>
          ))}
      </div>
    </div>
  );
};

async function createReport(
  route: Routes[number],
  reportInstance: Route,
  setRouteView: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>
) {
  const newReport = reportInstance.newReport(route);
  try {
    const reportResponse = await fetch("/create-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReport),
    });
    if (reportResponse.status === 200) {
      reportInstance.instantiateReport(newReport);
      setRouteView(true);
    } else {
      throw new Error("Failed to create new report");
    }
  } catch (e) {
    if (e instanceof Error) setErrorMessage(`Error: ${e.message}`);
  }
}
