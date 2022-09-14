import React from "react";
import { surveysData } from "../../data/surveys-data";
import { MichlolReport } from "./reports/michlol-report";
import { Survey } from "../../classes/survey";

export const SurveyDisplay: React.FC<{
  surveyInstance: Survey;
}> = ({ surveyInstance }) => {
  const { name: surveyName, michlolim } = surveysData[surveyInstance.id];

  return (
    <div className="survey">
      <h1 className="name">{surveyName}</h1>
      {michlolim.map((michlol, idx) => (
        <MichlolReport
          surveyInstance={surveyInstance}
          michlol={michlol}
          key={idx}
        />
      ))}
    </div>
  );
};
