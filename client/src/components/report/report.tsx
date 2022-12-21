import React, { useEffect, useRef, useState } from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { ShowError } from "../misc/show-error";
import { RouteView } from "./route-view";

export const Report: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  routes: Routes | undefined;
}> = ({ setScreen, routes }) => {
  const [routeView, setRouteView] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const reportInstance = useRef(new Route()).current;

  if (routeView)
    return (
      <div className="report">
        <RouteView routeData={reportInstance} setScreen={setScreen} />
      </div>
    );

  useEffect(() => {
    if (errorMessage) {
      const timeoutId = setTimeout(() => {
        setErrorMessage(undefined);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [errorMessage]);

  return (
    <div className="reports">
      {errorMessage && <ShowError message={errorMessage} />}
      <p className="page-title">יצור דו"ח</p>
      <div className="routes-selections">
        {routes &&
          routes.map((route, idx) => (
            <button
              className="routes-selection-btn"
              onClick={() => {
                createReport(
                  route,
                  reportInstance,
                  setRouteView,
                  setErrorMessage
                );
              }}
              key={idx}
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
