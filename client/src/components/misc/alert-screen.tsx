import React, { useEffect, useState } from "react";
import { AlertData } from "../../classes/route";
import { checkmarkIcon, lookatAlert, minusIcon } from "../../data/imports";

export const AlertScreen: React.FC = () => {
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
          alerts.map((alert) => (
            <div className="alert-item" key={alert.uniqueId}>
              <div>{alert.routeName}</div>
              <div>{alert.machineName}</div>
              <div>
                <img
                  className={"alert-item-view"}
                  src={lookatAlert.href}
                  onClick={() => {}}
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
          ))
        ) : (
          <div className="alert-item-default">
            <p>אין התראות</p>
          </div>
        )}
      </div>
    </div>
  );
};
