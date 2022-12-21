import React, { useState } from "react";
import { PageNotFound } from "./components/misc/page-not-found";
import { Report } from "./components/report/report";
import { Search } from "./components/search/search";
import { TopBar } from "./components/misc/top-bar";
import { Routes } from "./data/reports-data";
import { Home } from "./home";

export const App: React.FC = () => {
  const [showScreen, setShowScreen] = useState("home");
  const [routes, setRoutes] = useState<Routes | undefined>();
  let display;
  switch (showScreen) {
    case "home":
      display = <Home setScreen={setShowScreen} setRoutes={setRoutes} />;
      break;
    case "report":
      display = <Report setScreen={setShowScreen} routes={routes} />;
      break;
    case "search":
      display = <Search />;
      break;
    default:
      display = <PageNotFound />;
  }
  return (
    <div className="app ">
      <TopBar setScreen={setShowScreen} />
      {display}
    </div>
  );
};
