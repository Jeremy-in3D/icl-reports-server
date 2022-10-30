import React, { useState } from "react";
import { CreateReport } from "../../classes/create-report";
import { Michlol } from "../../data/reports-data";

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
        className={`bar ${isComplete ? "complete" : "incomplete"} ${
          isOpen ? "opened" : "closed"
        }`}
      >
        {michlol.name}
      </div>
      <div
        className={`michlol-report ${isComplete ? "complete" : "incomplete"} ${
          isOpen ? "opened" : "closed"
        }`}
      >
        {michlol.questions.map((question, idx) => {
          switch (question.type) {
            case "mc":
              return <p>mc</p>;
            case "range":
              return <p>range</p>;
            case "text":
              return <p>text</p>;
          }
        })}
        <button
          className="michlol-complete-btn"
          onClick={() => {
            reportInstance.michlolCompleted[michlol.id] = true;
            localStorage.setItem(
              reportInstance.id,
              JSON.stringify(reportInstance.saveSurvey())
            );
            setIsOpen(false);
          }}
        >
          סיים מיכלול
        </button>
      </div>
    </div>
  );
};
