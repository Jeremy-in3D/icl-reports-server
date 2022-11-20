import React, { useState } from "react";
import { Routes, routes } from "../../data/reports-data";
import { RouteReport } from "./route-report";

export const Report: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setScreen }) => {
  const [route, setRoute] = useState<Routes[number] | null>(null);

  if (route)
    return (
      <div className="report">
        <RouteReport route={route} setScreen={setScreen} />
      </div>
    );

  const possibleRoutes = Object.values(routes);
  return (
    <div className="reports">
      <p className="page-title">יצור דו"ח</p>
      <div className="routes-selections">
        {possibleRoutes.map((route, idx) => (
          <button
            className="routes-selection-btn"
            onClick={() => setRoute(route)}
            key={idx}
          >
            {route.routeName}
          </button>
        ))}
      </div>
    </div>
  );
};
