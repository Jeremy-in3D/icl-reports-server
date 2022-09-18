import React, { useEffect, useState } from "react";
import { Michlol } from "../../data/reports-data";
import { CreateReport } from "../../classes/create-report";
import { MichlolQuestions } from "./michlol-questions";
import { MichlolStatus } from "./michlol-status";
import { MichlolText } from "./michlol-text";

export const MichlolReport: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isComplete = reportInstance.michlolCompleted[michlol.id];

  return (
    <div className="michlol">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`title ${isComplete ? "complete" : "incomplete"}`}
      >
        {michlol.name}
      </div>
      <div className={`michlol-report ${isOpen ? "opened" : "closed"}`}>
        {michlol.contents.includes("status") && (
          <MichlolStatus
            michlolId={michlol.id}
            reportInstance={reportInstance}
          />
        )}
        {michlol.contents.includes("questions") && (
          <MichlolQuestions reportInstance={reportInstance} michlol={michlol} />
        )}
        {michlol.contents.includes("textarea") && (
          <MichlolText reportInstance={reportInstance} michlol={michlol} />
        )}
        <button
          className="survey-page-btn"
          onClick={() => {
            const michlolComplete = reportInstance.isMichlolComplete(
              michlol.id,
              michlol.contents,
              michlol.questions?.length
            );
            if (michlolComplete) {
              localStorage.setItem(
                reportInstance.id,
                JSON.stringify(reportInstance.saveSurvey())
              );
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
