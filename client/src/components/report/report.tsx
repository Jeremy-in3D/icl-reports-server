import React, { useState } from "react";
import { ReportSelect } from "./report-select";
import { ReportsAvailable } from "./reports-available";
import { reportsData } from "../../data/reports-data";

const titles = ["מכלולים", "מהנדס"];

export const Report: React.FC<{}> = () => {
  const [reportId, setReportId] = useState("");
  const [reportName, setReportName] = useState("");

  if (reportId)
    return (
      <div className="report">
        <ReportSelect id={reportId} name={reportName} />
      </div>
    );

  const display = [];
  for (const [key, value] of Object.entries(reportsData)) {
    display.push(
      value.map((report, idx) => (
        <ReportsAvailable
          key={idx}
          text={report.name}
          click={() => {
            setReportId(report.id);
            setReportName(report.name);
          }}
        />
      ))
    );
  }

  return (
    <div className="reports">
      <p className="page-title">יצור דו"ח</p>
      {display.map((item, idx) => (
        <div className="reports-section" key={idx}>
          <h1 className="reports-section-title">{titles[idx]}</h1>
          {item}
        </div>
      ))}
    </div>
  );
};
