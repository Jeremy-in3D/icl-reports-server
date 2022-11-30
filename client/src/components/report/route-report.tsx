import React, { useEffect, useRef, useState } from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { RouteView } from "./route-view";
import { isExistingReport } from "../../helpers/is-existing-report";
import { RouteOption } from "./route-option";
import { ShowError } from "../show-error";

export const RouteReport: React.FC<{
  route: Routes[number];
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ route, setScreen }) => {
  const [routeView, setRouteView] = useState(false);
  const routeData = useRef(new Route(route)).current;
  const [existingReport, existingReportDetails] = isExistingReport(
    route.routeId
  );
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  useEffect(() => {
    if (errorMessage)
      setTimeout(() => {
        setErrorMessage(undefined);
      }, 5000);
  }, [errorMessage]);

  if (routeView)
    return (
      <RouteView route={route} routeData={routeData} setScreen={setScreen} />
    );

  return (
    <div className="report-options">
      {errorMessage && <ShowError message={errorMessage} />}
      <h1 className="page-title">{routeData.routeName}</h1>
      <RouteOption
        text='המשך בדו"ח הקיים'
        disabled={existingReport === undefined}
        onClick={() => {
          if (typeof existingReport === "string") {
            routeData.loadReport(existingReport);
            setRouteView(true);
          }
        }}
      >
        {existingReportDetails}
      </RouteOption>
      <RouteOption
        text='יצירה דו"ח חדש'
        disabled={errorMessage ? true : false}
        onClick={() => createReport(routeData, setRouteView, setErrorMessage)}
      >
        <p>הדו"ח הקיים יסגר</p>
      </RouteOption>
    </div>
  );
};

async function createReport(
  routeData: Route,
  setRouteView: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>
) {
  routeData.newReport();
  try {
    const reportResponse = await fetch("/save-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: routeData.sendReportData(),
    });
    if (reportResponse.status === 200) {
      routeData.saveReportToLocal();
      setRouteView(true);
    } else {
      throw new Error("Failed to create new report");
    }
  } catch (e) {
    if (e instanceof Error) setErrorMessage(`Error: ${e.message}`);
  }
}
