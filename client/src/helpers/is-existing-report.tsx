import { Route } from "../classes/route";

export const isExistingReport = (id: string) => {
  const existingSurvey = localStorage.getItem(id);
  if (existingSurvey) {
    const parsedReport = JSON.parse(existingSurvey) as Route;
    const existingDate = new Date(parsedReport.dateCreated!);
    const existingDetails = (
      <div className="existing-report-details">
        <p>{parsedReport.reportId}</p>
        <p className="details-date">{existingDate.toLocaleString()}</p>
      </div>
    );
    return [existingSurvey, existingDetails];
  }
  return [undefined, undefined];
};
