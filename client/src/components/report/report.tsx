import React, { useState } from "react";
import { ReportSelect } from "./report-select";
import { reportsData } from "../../data/reports-data";

export const Report: React.FC<{}> = () => {
  const [report, setReport] = useState<{ id: string; name: string } | null>(
    null
  );

  if (report)
    return (
      <div className="report">
        <ReportSelect report={report} />
      </div>
    );

  const options = Object.values(reportsData);
  return (
    <div className="reports">
      <p className="page-title">יצור דו"ח</p>
      <div className="reports-selections">
        {options.map((option, idx) => (
          <button
            className="reports-selections-btn"
            onClick={() => setReport(option)}
            key={idx}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};
