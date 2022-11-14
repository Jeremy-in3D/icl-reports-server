import React, { useRef, useState } from "react";
import { CreateReport } from "../../classes/create-report";
import { isExistingReport } from "../../helpers/is-existing-report";
import { ReportOption } from "./report-option";
import { ReportView } from "./report-view";

export const ReportSelect: React.FC<{
  report: { id: string; name: string };
}> = ({ report }) => {
  const [reportView, setReportView] = useState(false);
  const reportInstance = useRef(new CreateReport(report)).current;
  const [existingReport, existingReportDetails] = isExistingReport(report.id);

  if (reportView) return <ReportView reportInstance={reportInstance} />;

  return (
    <div className="report-options">
      <h1 className="page-title">{report.name}</h1>
      <ReportOption
        text='המשיך בדו"ח הקיים'
        disabled={existingReport === undefined}
        onClick={() => {
          if (typeof existingReport === "string") {
            reportInstance.loadExistingSurvey(existingReport);
            setReportView(true);
          }
        }}
      >
        {existingReportDetails}
      </ReportOption>
      <ReportOption
        text='ליצור דו"ח חדש'
        disabled={false}
        onClick={() => {
          reportInstance.createNewSurvey();
          setReportView(true);
        }}
      >
        <p>בשמירה הראשונה ימחק הדוח הקיים</p>
      </ReportOption>
    </div>
  );
};
