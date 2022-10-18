import React, { useState } from "react";
import { ReportSelect } from "./report-select";
import { ReportsAvailable } from "./reports-available";
import { reportsData } from "../../data/reports-data";

const titles = ['דו"ח סיור', 'דו"ח שמנים', 'דו"ח רעידות'];

export const Report: React.FC<{}> = () => {
  const [report, setReport] = useState("");

  if (report)
    return (
      <div className="report">
        <ReportSelect reportId={report} />
      </div>
    );

  const display = [];
  for (const [key, value] of Object.entries(reportsData)) {
    display.push(
      value.map((report, idx) => (
        <ReportsAvailable
          key={idx}
          text={report.name}
          click={() => setReport(report.id)}
        />
      ))
    );
  }

  return (
    <div className="reports">
      <p className="page-title">דוחות</p>
      {display.map((item, idx) => (
        <div key={idx}>
          <h1>{titles[idx]}</h1>
          {item}
        </div>
      ))}
    </div>
  );
};
