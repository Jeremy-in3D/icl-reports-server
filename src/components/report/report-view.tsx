import React from "react";
import { MichlolReport } from "../michlol/michlol-report";
import { CreateReport } from "../../classes/create-report";
import { reportsData } from "../../data/reports-data";

export const ReportView: React.FC<{
  reportInstance: CreateReport;
}> = ({ reportInstance }) => {
  const { name, michlolim } = reportsData.surveys.find(
    (survey) => survey.id === reportInstance.id
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
