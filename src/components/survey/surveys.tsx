import React, { useState } from "react";
import { SurveySelection } from "./survey-selection";
import { SurveyView } from "./survey-view";

const selections = [
  { id: "S1", text: "סיור ראשון - א" },
  { id: "S2", text: "סיור שני - ב" },
  { id: "S3", text: "סיור שלישי - ג" },
  { id: "S4", text: "סיור רביעי - ד" },
  { id: "S5", text: "סיור חמישי - ה" },
];

export const Surveys: React.FC = () => {
  const [surveyId, setSurveyId] = useState<string | undefined>();

  if (surveyId) return <SurveyView surveyId={surveyId} />;

  return (
    <div className="surveys-selections">
      <p className="title">סיורי תצפית</p>
      {selections.map((item, idx) => (
        <SurveySelection
          key={idx}
          text={item.text}
          click={() => setSurveyId(item.id)}
        />
      ))}
    </div>
  );
};
