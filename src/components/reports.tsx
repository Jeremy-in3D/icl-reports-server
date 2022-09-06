import React, { useState } from "react";
import { ReportSelection } from "./report-selection";
import { SurveySelection } from "./reports/survey-selection";

const selections = [
  { text: "סיור ראשון - א" },
  { text: "סיור שני - ב" },
  { text: "סיור שלישי - ג" },
  { text: "סיור רביעי - ד" },
  { text: "סיור חמישי - ה" },
];

export const Reports: React.FC = () => {
  const [report, setReport] = useState<number | undefined>();

  if (report === 0) return <SurveySelection />;

  return (
    <div className="reports">
      <p className="title">סיורי תצפית</p>
      {selections.map((item, idx) => (
        <ReportSelection
          text={item.text}
          key={idx}
          click={() => setReport(idx)}
        />
      ))}
    </div>
  );
};
