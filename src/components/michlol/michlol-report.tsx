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
        className={`title ${isComplete ? "complete" : "incomplete"}`}
      >
        {michlol.name}
      </div>
      <div className={`michlol-report ${isOpen ? "opened" : "closed"}`}>
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
              fetch("/save-report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reportInstance.saveSurvey()),
              });
            }
          }}
        >
          Complete
        </button>
      </div>
    </div>
  );
};
