import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";
import { AlertData } from "../classes/route";
import { checkmarkIcon, lookatAlert, minusIcon } from "../data/imports";
import { Route } from "../classes/route";
import BasicModal from "../common/Modal";
import AppContext, { Context } from "../context/context";
import { Routes } from "../data/reports-data";
import { getRoutes } from "../routes/routes";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export const StatusScreen: React.FC<{}> = () => {
  const [alerts, setAlerts] = useState<AlertData[]>();
  const appContext = useContext<Context>(AppContext);
  const navigate = useNavigate();

  const routes = appContext.routes;
  console.log(appContext.reportInstance?.current);
  const reportInstance = appContext.reportInstance?.current
    ? appContext.reportInstance?.current
    : useRef(new Route()).current;
  console.count("alerts screen");

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
                <div style={{ flex: 1 }}>{alert.routeName}</div>
                <div style={{ flex: 1 }}>
                  {dayjs(alert.createdAt).format("MM/DD/YYYY HH:mm:ss")}
                </div>
                <div
                  style={{ flex: 1 }}
                  onClick={() => {
                    handleViewAlert(
                      reportInstance,
                      alert.reportId,
                      true,
                      appContext.reports,
                      routes,
                      appContext.setRoutes,
                      appContext,
                      alert.machineName,
                      navigate
                    );
                  }}
                >
                  צפייה בדו"ח
                </div>
                <BasicModal alert={alert} />
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className={"alert-item-view"}
                    src={lookatAlert.href}
                    onClick={() => {
                      handleViewAlert(
                        reportInstance,
                        alert.reportId,
                        false,
                        appContext.reports,
                        routes,
                        appContext.setRoutes,
                        appContext,
                        alert.machineName,
                        navigate
                      );
                    }}
                  ></img>
                </div>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
  reportInstance: Route,
  reportId: string,
  isShowFullReport: boolean,
  currentReports: any[],
  routes: Routes | undefined,
  setRoutes: Dispatch<SetStateAction<any>>,
  appContext: any,
  machineName: string,
  navigate: any
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

  navigate("/reports");
};
