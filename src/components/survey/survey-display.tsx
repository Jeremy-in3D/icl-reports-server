import React, { useEffect, useRef, useState } from "react";
import { surveysData } from "../../data/surveys-data";
import { MichlolReport } from "./reports/michlol-report";
import { MichlolStatus } from "./reports/michlol-status";
import { Survey } from "./survey";
import { MichlolText } from "./reports/michlol-text";
const save = new URL("../../../assets/icons/save.png", import.meta.url);

export const SurveyDisplay: React.FC<{
  surveyInstance: Survey;
}> = ({ surveyInstance }) => {
  const id = surveyInstance.id as keyof typeof surveysData;
  const { name: surveyName, michlolim } = surveysData[id];

  return (
    <div className="survey">
      <h1 className="name">{surveyName}</h1>
      {michlolim.map((michlol, idx) => {
        const formRef = useRef<HTMLFormElement>(null);
        const [isOpen, setIsOpen] = useState(false);
        const [isComplete, setIsComplete] = useState(false);

        useEffect(() => {
          surveyInstance.completedMichlol[michlol.id] && setIsComplete(true);
        }, []);

        return (
          <div className="michlol" key={idx}>
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
              {/* Michlol Title */}
              {michlol.name}
            </div>
            <div className={`reports ${isOpen ? "opened" : "closed"}`}>
              <MichlolStatus
                michlolId={michlol.id}
                surveyInstance={surveyInstance}
              />
              <MichlolReport
                surveyInstance={surveyInstance}
                formRef={formRef}
                michlol={michlol}
                setIsComplete={setIsComplete}
                setIsOpen={setIsOpen}
              />
              <MichlolText surveyInstance={surveyInstance} michlol={michlol} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
