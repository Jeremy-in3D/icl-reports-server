import React, { useRef, useContext, useEffect } from "react";
import { Home } from "./home";
import { Route } from "./classes/route";
import AppContext from "./context/context";

export const Content: React.FC = () => {
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
      appContext.setReportInstance(reportInstance);
    }
  }, [appContext.user]);

  return (
    <div className="app ">
      <Home reportInstanceRef={reportInstance} appContext={appContext} />
    </div>
  );
};
