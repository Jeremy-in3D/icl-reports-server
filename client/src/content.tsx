import React, { useRef, useState } from "react";
import { PageNotFound } from "./components/misc/page-not-found";
import { Report } from "./components/report/report";
import { Search } from "./components/search/search";
import { TopBar } from "./components/misc/top-bar";
import { Routes } from "./data/reports-data";
import { Home } from "./home";
import { Route } from "./classes/route";

export const Content: React.FC = () => {
  const [showScreen, setShowScreen] = useState("home");
  const [routes, setRoutes] = useState<Routes | undefined>();
  const reportInstance = useRef(new Route());

  //Display screen based on showScreen state
  let display;
  switch (showScreen) {
    case "home":
      display = (
        <Home
          setScreen={setShowScreen}
          setRoutes={setRoutes}
          reportInstanceRef={reportInstance}
        />
      );
      break;
    case "report":
      display = (
        <Report
          setScreen={setShowScreen}
          routes={routes}
          reportInstance={reportInstance.current}
        />
      );
      break;
    case "search":
      display = (
        <Search
          reportInstance={reportInstance.current}
          setScreen={setShowScreen}
        />
      );
      break;
    default:
      display = <PageNotFound />;
  }
  return (
    <div className="app ">
      {/* Top Bar to always show, and then display component follows */}
      <TopBar setScreen={setShowScreen} />
      {display}
    </div>
  );
};