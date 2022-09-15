import React, { useState } from "react";
import { ReportSelect } from "./report-select";
import { ReportsAvailable } from "./reports-available";
import { reportsData } from "../../data/reports-data";

export const Report: React.FC<{}> = () => {
  const [report, setReport] = useState("");

  if (report)
    return (
      <div className="report">
        <ReportSelect reportId={report} />
      </div>
    );

  return (
    <div className="reports">
      <h2>דו"ח סיור</h2>
      {reportsData.survey.map((report, idx) => (
        <ReportsAvailable
          key={idx}
          text={report.name}
          click={() => setReport(report.id)}
        />
      ))}
      <h2>דו"ח מהנדס</h2>
      <h3>Oil</h3>
      {reportsData.oil.map((report, idx) => (
        <ReportsAvailable
          key={idx}
          text={report.name}
          click={() => setReport(report.id)}
        />
      ))}
      <h3>Quake</h3>
      {reportsData.quake.map((report, idx) => (
        <ReportsAvailable
          key={idx}
          text={report.name}
          click={() => setReport(report.id)}
        />
      ))}
    </div>
  );
};
