import React, { useEffect, useState } from "react";
import { Michlol } from "../../../data/surveys-data";
import { Survey } from "../survey";
import { MichlolQuestions } from "./michlol-questions";
import { MichlolStatus } from "./michlol-status";
import { MichlolText } from "./michlol-text";
const save = new URL("../../../../assets/icons/save.png", import.meta.url);

export const MichlolReport: React.FC<{
  surveyInstance: Survey;
  michlol: Michlol;
}> = ({ surveyInstance, michlol }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    surveyInstance.completedMichlol[michlol.id] && setIsComplete(true);
  }, []);

  return (
    <div className="michlol">
      <img
        onClick={() => {
          localStorage.setItem(
            surveyInstance.id,
            JSON.stringify(surveyInstance.saveSurvey())
          );
        }}
        className="save"
        src={save.href}
      />
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`title ${isComplete ? "complete" : "incomplete"}`}
      >
        {michlol.name}
      </div>
      <div className={`reports ${isOpen ? "opened" : "closed"}`}>
        <MichlolStatus michlolId={michlol.id} surveyInstance={surveyInstance} />
        <MichlolQuestions surveyInstance={surveyInstance} michlol={michlol} />
        <MichlolText surveyInstance={surveyInstance} michlol={michlol} />
        <button
          className="survey-page-btn"
          onClick={() => {
            const michlolComplete = surveyInstance.isMichlolComplete(
              michlol.id,
              michlol.mainReport.length
            );
            if (michlolComplete) {
              setIsComplete(true);
              setIsOpen(false);
            }
          }}
        >
          Complete
        </button>
      </div>
    </div>
  );
};
