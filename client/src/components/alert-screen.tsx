import React, { useEffect, useState } from "react";

export const AlertScreen: React.FC = () => {
  const [alerts, setAlerts] = useState<any>(null);

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
        {alerts ? (
          alerts.map((alert: any) => <div key={alert._id}>{alert._id}</div>)
        ) : (
          <p>אין התראות</p>
        )}
      </div>
    </div>
  );
};
