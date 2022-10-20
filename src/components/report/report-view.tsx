import React from "react";
import { MichlolReport } from "../michlol/michlol-report";
import { CreateReport } from "../../classes/create-report";
import { reportsData } from "../../data/reports-data";

export const ReportView: React.FC<{
  reportInstance: CreateReport;
}> = ({ reportInstance }) => {
  const type = getReportType(reportInstance.id);
  const { name, michlolim } = reportsData[type].find(
    (report) => report.id === reportInstance.id
  )!;

  return (
    <div>
      <h1>{name}</h1>
      {michlolim.map((michlol, idx) => (
        <MichlolReport
          reportInstance={reportInstance}
          michlol={michlol}
          key={idx}
        />
      ))}
    </div>
  );
};

function getReportType(id: string) {
  if (id.includes("S")) return "survey";
  if (id.includes("O")) return "oil";
  else return "quake";
}