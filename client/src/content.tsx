import React, { useRef, useState, useContext, useEffect } from "react";
import { PageNotFound } from "./components/misc/page-not-found";
import { Report } from "./components/report/report";
import { Search } from "./components/search/search";
import { TopBar } from "./components/misc/top-bar";
import { Routes } from "./data/reports-data";
import { Home } from "./home";
import { Route } from "./classes/route";
import { StatusScreen } from "./components/status-screen";
import AppContext from "./context/context";

export const Content: React.FC = () => {
  const [showScreen, setShowScreen] = useState("home");
  const [routes, setRoutes] = useState<Routes | undefined>();
  const reportInstance = useRef(new Route());
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (!appContext.reports.length) {
      fetch("get-current-reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => {
          const reportsContextCopy = [...appContext.reports, ...data];
          appContext.setReports(reportsContextCopy);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  }, [appContext.user]);

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
          setRoutes={setRoutes}
          setScreen={setShowScreen}
        />
      );
      break;
    case "status":
      display = (
        <StatusScreen
          setScreen={setShowScreen}
          reportInstance={reportInstance.current}
          user={appContext.user}
        />
      );
      break;
    default:
      display = <PageNotFound />;
  }
  return (
    <div className="app ">
      {/* Top Bar to always show, and then display component follows */}
      <TopBar setScreen={setShowScreen} user={appContext.user} />
      {display}
    </div>
  );
};
