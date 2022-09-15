import React, { useState } from "react";
import { ReportSelect } from "./report-select";
import { ReportsAvailable } from "./reports-available";
import { reportsData } from "../../data/reports-data";

export const Report: React.FC<{
  type: string;
}> = ({ type }) => {
  const [report, setReport] = useState<string | undefined>();

  if (report)
    return (
      <div className="report">
        <ReportSelect reportId={report} />
      </div>
    );

  return (
    <div className="report">
      {type === "Survey" &&
        reportsData.surveys.map((survey, idx) => (
          <ReportsAvailable
            key={idx}
            text={survey.name}
            click={() => setReport(survey.id)}
          />
        ))}
    </div>
  );
};
