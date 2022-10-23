import React, { useState } from "react";
import { Michlol } from "../../data/reports-data";
import { CreateReport } from "../../classes/create-report";
import { MichlolQuestions } from "./michlol-questions";
import { MichlolStatus } from "./michlol-status";
import { MichlolText } from "./michlol-text";
import { MichlolOil } from "./michlol-oil";
import { MichlolQuake } from "./michlol-quake";

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
        {michlol.contents.map((item, idx) => {
          switch (item) {
            case "questions":
              return (
                <MichlolQuestions
                  reportInstance={reportInstance}
                  michlol={michlol}
                  key={idx}
                />
              );
            case "status":
              return (
                <MichlolStatus
                  michlol={michlol}
                  reportInstance={reportInstance}
                  key={idx}
                />
              );
            case "textarea":
              return (
                <MichlolText
                  reportInstance={reportInstance}
                  michlol={michlol}
                  key={idx}
                />
              );
            case "oil":
              return (
                <MichlolOil
                  reportInstance={reportInstance}
                  michlol={michlol}
                  key={idx}
                />
              );
            case "quake":
              return (
                <MichlolQuake
                  reportInstance={reportInstance}
                  michlol={michlol}
                  key={idx}
                />
              );
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
