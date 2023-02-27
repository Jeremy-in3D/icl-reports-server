import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useContext,
} from "react";
import { AlertData } from "../classes/route";
import { checkmarkIcon, lookatAlert, minusIcon } from "../data/imports";
import { Route } from "../classes/route";
import { User } from "../app";
import BasicModal from "../common/Modal";
import AppContext, { Context } from "../context/context";
import { Routes } from "../data/reports-data";
import { getRoutes } from "../routes/routes";
import dayjs from "dayjs";

export const StatusScreen: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  routes: any;
  setRoutes: React.Dispatch<React.SetStateAction<any>>;
  reportInstance: Route;
  user: User;
}> = ({ setScreen, reportInstance, user, routes, setRoutes }) => {
  const [alerts, setAlerts] = useState<AlertData[]>();
  const appContext = useContext<Context>(AppContext);

  async function getAlerts() {
    const alertsResponse = await fetch("/get-alerts");
    const data = await alertsResponse.json();
    setAlerts(data);
  }

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <div className="alerts-screen">
      <h2 className="alerts-title">התראות</h2>
      <div className="alerts">
        {alerts?.length ? (
          alerts.map((alert, i) =>
            alert.completed ? null : (
              <div className="alert-item" key={alert.uniqueId + i}>
                <div>{alert.routeName}</div>
                <div>
                  {dayjs(alert.createdAt).format("MM/DD/YYYY HH:mm:ss")}
                </div>
                <div
                  onClick={() => {
                    handleViewAlert(
                      setScreen,
                      reportInstance,
                      alert.reportId,
                      true,
                      appContext.reports,
                      alert.routeName,
                      routes,
                      setRoutes,
                      appContext,
                      alert.machineName
                    );
                  }}
                >
                  Full Report
                </div>
                <BasicModal alert={alert} />
                <div>
                  <img
                    className={"alert-item-view"}
                    src={lookatAlert.href}
                    onClick={() => {
                      handleViewAlert(
                        setScreen,
                        reportInstance,
                        alert.reportId,
                        false,
                        appContext.reports,
                        alert.routeName,
                        routes,
                        setRoutes,
                        appContext,
                        alert.machineName
                      );
                    }}
                  ></img>
                  <img
                    className={`alert-item-btn ${
                      alert.completed ? "completed" : ""
                    }`}
                    src={alert.completed ? checkmarkIcon.href : minusIcon.href}
                    onClick={async () => {
                      const answer = confirm(
                        `Would you like to mark alert as ${
                          alert.completed ? "incomplete" : "complete"
                        }?`
                      );
                      if (answer) {
                        const payload = {
                          uniqueId: alert.uniqueId,
                          completed: !alert.completed,
                        };
                        const updateResponse = await fetch("/update-alert", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload),
                        });
                        if (updateResponse.status === 200) {
                          getAlerts();
                        }
                      }
                    }}
                  ></img>
                </div>
              </div>
            )
          )
        ) : (
          <div className="alert-item-default">
            <p>אין התראות</p>
          </div>
        )}
      </div>
    </div>
  );
};

const handleViewAlert = async (
  setScreen: Dispatch<SetStateAction<string>>,
  reportInstance: Route,
  reportId: string,
  isShowFullReport: boolean,
  currentReports: any[],
  routeName: string,
  routes: Routes,
  setRoutes: Dispatch<SetStateAction<any>>,
  appContext: any,
  machineName: string
) => {
  if (!routes) {
    const routesToSet = await getRoutes();
    setRoutes(routesToSet);
  }
  let isAlertFromCurrentReport;
  const checkIsAlertFromCurrentReport = currentReports.map((report) => {
    if (report.reportId == reportId) isAlertFromCurrentReport = true;
  });

  const result = await fetch("/get-docs", {
    method: "POST",
    body: JSON.stringify({
      reportId,
      isFromAlerts: true,
      isAlertFromCurrentReport,
      isShowFullReport,
    }),
  });

  const data = await result.json();

  const { reportHistoryResults, results } = data || {};

  if (isShowFullReport) {
    const extra = { ...appContext.extra };
    appContext.setExtra({ ...extra, selectedAlert: "" });
    appContext.extra?.selectedAlert !== machineName;
    appContext.setSelectedReport(reportHistoryResults[0]);
  } else {
    const extra = { ...appContext.extra };
    appContext.setExtra({
      ...extra,
      isFromAlertAndMachine: true,
      selectedAlert: machineName,
    });

    reportInstance.instantiateReport(reportHistoryResults);
    reportInstance.loadMachines(results);
  }

  setScreen("report");
};
