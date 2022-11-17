import React, { useState } from "react";
import { Routes, routes } from "../../data/reports-data";
import { RouteSelect } from "./route-select";

export const Report: React.FC = () => {
  const [route, setRoute] = useState<Routes[number] | null>(null);

  if (route)
    return (
      <div className="report">
        <RouteSelect route={route} />
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
            {route.name}
          </button>
        ))}
      </div>
    </div>
  );
};