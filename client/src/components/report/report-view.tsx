import React from "react";
import { CreateReport } from "../../classes/create-report";
import { reports } from "../../data/reports-data";
import { MichlolReport } from "./michlol-report";

export const ReportView: React.FC<{
  reportInstance: CreateReport;
}> = ({ reportInstance }) => {
  return (
    <>
      <h1 className="page-title">{reportInstance.name}</h1>
      {reports
        .find((report) => report.id === reportInstance.id)
        ?.michlolim.map((michlol, idx) => (
          <MichlolReport
            key={idx}
            reportInstance={reportInstance}
            michlol={michlol}
          />
        ))}
      <button
        onClick={() => {
          const answer = confirm("אתה רוצה לסיים את הדוח ולשלוח לשרת?");
          if (answer)
            fetch("/save-report", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(reportInstance.saveSurvey()),
            });
        }}
      >
        שלח תשובות וסיים דוח
      </button>
    </>
  );
};
