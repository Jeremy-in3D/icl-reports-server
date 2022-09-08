import React, { useRef, useState } from "react";
import { Survey } from "./survey";
import { SurveyDisplay } from "./survey-display";

export const SurveyView: React.FC<{
  id: string;
}> = ({ id }) => {
  const [viewSurvey, setViewSurvey] = useState(false);
  const surveyInstance = useRef(new Survey(id)).current;

  //Check for existing report in local storage, disable button accordingly
  const existingSurvey = localStorage.getItem(id);
  const parsedReport = JSON.parse(existingSurvey!) as Survey;
  const existingDetails = {
    dateCreated: new Date(parsedReport?.dateCreated ?? 0),
  };

  return (
    <div className="survey-view">
      {viewSurvey ? (
        <SurveyDisplay surveyInstance={surveyInstance} />
      ) : (
        <>
          <p>{`Survey: ${id}`}</p>
          <div className="survey-choice">
            <button
              className="survey-btn"
              disabled={existingSurvey === null}
              onClick={() => {}}
            >
              Continue Existing Survey
            </button>
            {existingSurvey && (
              <div>
                Date Created: {existingDetails.dateCreated.toLocaleString()}
              </div>
            )}
          </div>
          <div className="survey-choice">
            <button
              className="survey-btn"
              onClick={() => {
                surveyInstance.createNewSurvey();
                setViewSurvey(true);
              }}
            >
              Create New Survey
            </button>
            <p>This will delete any existing report for this Survey</p>
          </div>
        </>
      )}
    </div>
  );
};
