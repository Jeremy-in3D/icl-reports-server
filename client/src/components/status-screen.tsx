import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AlertData } from "../classes/route";
import { checkmarkIcon, lookatAlert, minusIcon } from "../data/imports";
import { ReportData, Route } from "../classes/route";
import { User } from "../app";
import BasicModal from "../common/Modal";

export const StatusScreen: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  reportInstance: Route;
  user: User;
}> = ({ setScreen, reportInstance, user }) => {
  const [alerts, setAlerts] = useState<AlertData[]>();

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
                <div>Published by: {user.name}</div>
                <BasicModal alert={alert} />
                <div>
                  <img
                    className={"alert-item-view"}
                    src={lookatAlert.href}
                    onClick={() => {
                      handleViewReport(
                        setScreen,
                        reportInstance,
                        alert.reportId
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

const handleViewReport = async (
  setScreen: Dispatch<SetStateAction<string>>,
  reportInstance: Route,
  reportId: string
) => {
  const result = await fetch("/get-docs", {
    method: "POST",
    body: JSON.stringify({ reportId, isFromAlerts: true }),
  });

  const data = await result.json();
  reportInstance.instantiateReport(data.reportHistoryresults[0]);
  reportInstance.loadMachines(data.results);
  setScreen("report");
};
