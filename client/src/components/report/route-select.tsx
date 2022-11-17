import React, { useRef, useState } from "react";
import { Route } from "../../classes/route";
import { Routes } from "../../data/reports-data";
import { RouteView } from "./route-view";
import { isExistingReport } from "../../helpers/is-existing-report";
import { RouteOption } from "./route-option";

export const RouteSelect: React.FC<{
  route: Routes[number];
}> = ({ route }) => {
  const [routeView, setRouteView] = useState(false);
  const routeData = useRef(new Route(route)).current;
  const [existingReport, existingReportDetails] = isExistingReport(route.id);
  if (routeView) return <RouteView routeData={routeData} />;

  return (
    <div className="report-options">
      <h1 className="page-title">{route.name}</h1>
      <RouteOption
        text='המשך בדו"ח הקיים'
        disabled={existingReport === undefined}
        onClick={() => {
          if (typeof existingReport === "string") {
            routeData.loadExistingSurvey(existingReport);
            setRouteView(true);
          }
        }}
      >
        {existingReportDetails}
      </RouteOption>
      <RouteOption
        text='צור דו"ח חדש'
        disabled={false}
        onClick={() => {
          routeData.createNewSurvey();
          localStorage.setItem(routeData.id, routeData.saveSurvey());
          setRouteView(true);
        }}
      >
        <p>בשמירה הראשונה ימחק הדוח הקיים</p>
      </RouteOption>
    </div>
  );
};
