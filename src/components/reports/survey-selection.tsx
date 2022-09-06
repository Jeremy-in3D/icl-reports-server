import React, { useRef, useState } from "react";
import { surveyItems } from "../../data/survey-first-items";
import { Survey } from "./survey";
import { SurveyDisplay } from "./survey-display";

export const SurveySelection: React.FC = () => {
  const [viewSurvey, setViewSurvey] = useState(false);
  const surveyInstance = useRef(new Survey());

  //Check for existing report in local storage, disable button accordingly
  const existingReport = localStorage.getItem("survey");
  const parsedReport = JSON.parse(existingReport!) as Survey;
  const existingDetails = {
    dateCreated: new Date(parsedReport?.dateCreated ?? 0),
  };

  return (
    <div className="survey">
      {viewSurvey ? (
        <SurveyDisplay instance={surveyInstance.current} />
      ) : (
        <>
          <div className="survey-choice">
            <button
              className="survey-btn"
              disabled={existingReport === null}
              onClick={() => {
                surveyInstance.current.loadExistingSurvey(existingReport);
                setViewSurvey(true);
              }}
            >
              Continue Existing Report
            </button>
            {existingReport && (
              <div>
                Date Created: {existingDetails.dateCreated.toLocaleString()}
              </div>
            )}
          </div>
          <div className="survey-choice">
            <button
              className="survey-btn"
              onClick={() => {
                surveyInstance.current.createNewSurvey(surveyItems);
                setViewSurvey(true);
              }}
            >
              Create New Report
            </button>
            <p>This will delete any existing report for this Sior</p>
          </div>
        </>
      )}
    </div>
  );
};
