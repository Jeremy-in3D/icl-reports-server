import { Survey } from "../classes/survey";

export const useExistingSurvey = (id: string) => {
  const existingSurvey = localStorage.getItem(id);
  if (existingSurvey) {
    const parsedReport = JSON.parse(existingSurvey) as Survey;
    const existingDate = new Date(parsedReport.dateCreated);
    const existingDetails = (
      <div>Date Created: {existingDate.toLocaleString()}</div>
    );
    return [existingSurvey, existingDetails];
  }
  return [undefined, undefined];
};
