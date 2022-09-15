import React, { useRef, useState } from "react";
import { Survey } from "../../classes/survey";
import { useExistingSurvey } from "../../helpers/use-existing-survey";
import { SurveyChoice } from "../survey/survey-choice";
import { OilReport } from "./oil-report";

export const OilReports: React.FC = () => {
  const [viewSurvey, setViewSurvey] = useState(false);
  const surveyInstance = useRef(new Survey("O"));
  const [existingSurvey, existingDetails] = useExistingSurvey(
    surveyInstance.current.id
  );

  return (
    <div className="survey-view">
      {viewSurvey ? (
        <OilReport />
      ) : (
        <>
          <p>Oil Report</p>
          <SurveyChoice
            text="Continue existing oil report"
            disabled={existingSurvey === undefined}
            onClick={() => {
              setViewSurvey(true);
            }}
          >
            {existingDetails}
          </SurveyChoice>
          <SurveyChoice
            text="Create new oil report"
            disabled={false}
            onClick={() => {
              setViewSurvey(true);
            }}
          >
            <p>This will delete any existing oil report</p>
          </SurveyChoice>
        </>
      )}
    </div>
  );
};
