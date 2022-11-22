import React, { useRef, useState } from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { RouteView } from "./route-view";
import { isExistingReport } from "../../helpers/is-existing-report";
import { RouteOption } from "./route-option";

export const RouteReport: React.FC<{
  route: Routes[number];
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ route, setScreen }) => {
  const [routeView, setRouteView] = useState(false);
  const routeData = useRef(new Route(route)).current;
  const [existingReport, existingReportDetails] = isExistingReport(
    route.routeId
  );

  if (routeView)
    return (
      <RouteView route={route} routeData={routeData} setScreen={setScreen} />
    );

  return (
    <div className="report-options">
      <h1 className="page-title">{route.routeName}</h1>
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
        disabled={false}
        onClick={() => {
          routeData.newReport();
          setRouteView(true);
        }}
      >
        <p>הדו"ח הקיים יסגר</p>
      </RouteOption>
    </div>
  );
};
