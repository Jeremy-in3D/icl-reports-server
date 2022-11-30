import React, { useEffect, useState } from "react";
import { AlertData } from "../classes/route";
import { checkmarkIcon, minusIcon } from "../data/imports";

export const AlertScreen: React.FC = () => {
  const [alerts, setAlerts] = useState<AlertData[]>();

  useEffect(() => {
    async function getAlerts() {
      const alertsResponse = await fetch("/get-alerts");
      const data = await alertsResponse.json();
      setAlerts(data);
    }
    getAlerts();
  }, []);

  return (
    <div className="alerts-screen">
      <h2 className="alerts-title">התראות</h2>
      <div className="alerts">
        {alerts?.length ? (
          alerts.map((alert) => (
            <div className="alert-item" key={alert._id}>
              <div>{alert.routeName}</div>
              <div>{alert.machineName}</div>
              <img
                className={`alert-item-btn ${
                  alert.completed ? "completed" : ""
                }`}
                src={alert.completed ? checkmarkIcon.href : minusIcon.href}
                onClick={() => {
                  const answer = confirm(
                    `Would you like to mark alert as ${
                      alert.completed ? "incomplete" : "complete"
                    }?`
                  );
                  if (answer) {
                  }
                }}
              ></img>
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
