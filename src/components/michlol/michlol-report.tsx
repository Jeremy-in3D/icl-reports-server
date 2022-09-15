import React, { useEffect, useState } from "react";
import { Michlol } from "../../data/reports-data";
import { CreateReport } from "../../classes/create-report";
import { MichlolQuestions } from "./michlol-questions";
import { MichlolStatus } from "./michlol-status";
import { MichlolText } from "./michlol-text";

export const MichlolReport: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance: surveyInstance, michlol }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    surveyInstance.completedMichlol[michlol.id] && setIsComplete(true);
  }, []);

  return (
    <div className="michlol">
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
              michlol.questions.length
            );
            if (michlolComplete) {
              localStorage.setItem(
                surveyInstance.id,
                JSON.stringify(surveyInstance.saveSurvey())
              );
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
