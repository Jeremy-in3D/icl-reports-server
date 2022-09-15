import React, { useRef, useState } from "react";
import { CreateReport } from "../../classes/create-report";
import { isExistingReport } from "../../helpers/is-existing-report";
import { ReportOption } from "./report-option";
import { ReportView } from "./report-view";

export const ReportSelect: React.FC<{
  reportId: string;
}> = ({ reportId }) => {
  const [reportView, setReportView] = useState(false);
  const reportInstance = useRef(new CreateReport(reportId)).current;
  const [existingReport, existingReportDetails] = isExistingReport(reportId);

  if (reportView) return <ReportView reportInstance={reportInstance} />;

  return (
    <div className="report-options">
      <p>{`Report: ${reportId}`}</p>
      <ReportOption
        text="Continue existing"
        disabled={existingReport === undefined}
        onClick={() => {
          reportInstance.loadExistingSurvey(existingReport);
          setReportView(true);
        }}
      >
        {existingReportDetails}
      </ReportOption>
      <ReportOption
        text="Create new"
        disabled={false}
        onClick={() => {
          reportInstance.createNewSurvey();
          setReportView(true);
        }}
      >
        <p>This will delete any existing report for this --------</p>
      </ReportOption>
    </div>
  );
};
