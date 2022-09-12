import React, { useRef, useState } from "react";
import { useExistingSurvey } from "../../helpers/use-existing-survey";
import { Survey } from "./survey";
import { SurveyChoice } from "./survey-choice";
import { SurveyDisplay } from "./survey-display";

export const SurveyView: React.FC<{
  id: string;
}> = ({ id }) => {
  const [viewSurvey, setViewSurvey] = useState(false);
  const surveyInstance = useRef(new Survey(id)).current;
  const [existingSurvey, existingDetails] = useExistingSurvey(id);

  return (
    <div className="survey-view">
      {viewSurvey ? (
        <SurveyDisplay surveyInstance={surveyInstance} />
      ) : (
        <>
          <p>{`Survey: ${id}`}</p>
          <SurveyChoice
            text="Continue existing survey"
            disabled={existingSurvey === null}
            onClick={() => {
              surveyInstance.loadExistingSurvey(localStorage.getItem(id));
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
