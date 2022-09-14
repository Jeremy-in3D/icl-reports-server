import React, { useRef, useState } from "react";
import { useExistingSurvey } from "../../helpers/use-existing-survey";
import { Survey } from "../../classes/survey";
import { SurveyChoice } from "./survey-choice";
import { SurveyDisplay } from "./survey-display";

export const SurveyView: React.FC<{
  surveyId: string;
}> = ({ surveyId }) => {
  const [viewSurvey, setViewSurvey] = useState(false);
  const surveyInstance = useRef(new Survey(surveyId)).current;
  const [existingSurvey, existingDetails] = useExistingSurvey(surveyId);

  return (
    <div className="survey-view">
      {viewSurvey ? (
        <SurveyDisplay surveyInstance={surveyInstance} />
      ) : (
        <>
          <p>{`Survey: ${surveyId}`}</p>
          <SurveyChoice
            text="Continue existing survey"
            disabled={existingSurvey === undefined}
            onClick={() => {
              surveyInstance.loadExistingSurvey(existingSurvey);
              setViewSurvey(true);
            }}
          >
            {existingDetails}
          </SurveyChoice>
          <SurveyChoice
            text="Create new survey"
            disabled={false}
            onClick={() => {
              surveyInstance.createNewSurvey();
              setViewSurvey(true);
            }}
          >
            <p>This will delete any existing report for this Survey</p>
          </SurveyChoice>
        </>
      )}
    </div>
  );
};
