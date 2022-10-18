import { CreateReport } from "../classes/create-report";

export const isExistingReport = (id: string) => {
  const existingSurvey = localStorage.getItem(id);
  if (existingSurvey) {
    const parsedReport = JSON.parse(existingSurvey) as CreateReport;
    const existingDate = new Date(parsedReport.dateCreated);
    const existingDetails = (
      <div>
        תאריך יצירה:{" "}
        <p style={{ direction: "ltr" }}>{existingDate.toLocaleString()}</p>
      </div>
    );
    return [existingSurvey, existingDetails];
  }
  return [undefined, undefined];
};
