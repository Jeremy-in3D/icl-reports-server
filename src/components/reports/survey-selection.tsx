import React, { useRef, useState } from "react";
import { surveyItems } from "../../data/survey-first-items";
import { Survey } from "./survey";
import { SurveyDisplay } from "./survey-display";

export const SurveySelection: React.FC = () => {
  const [viewSurvey, setViewSurvey] = useState(false);
  const surveyInstance = useRef(new Survey());
  //Check for existing report in local storage, disable button accordingly
  const existingReport = localStorage.getItem("survey");

  return (
    <div className="survey">
      {viewSurvey ? (
        <SurveyDisplay instance={surveyInstance.current} />
      ) : (
        <>
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
          <button
            className="survey-btn"
            onClick={() => {
              surveyInstance.current.createNewSurvey(surveyItems);
              setViewSurvey(true);
            }}
          >
            Create New Report
          </button>
          <p></p>
        </>
      )}
    </div>
  );
};

// const setForm = localStorage.setItem(
//   "survey",
//   JSON.stringify({ text: "This is text" })
// );
