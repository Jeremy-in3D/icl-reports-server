import React, { useEffect, useRef, useState } from "react";
import { surveysData } from "../../data/surveys-data";
import { MainReport } from "./reports/main-report";
import { OilReport } from "./reports/oil-report";
import { QuakeReport } from "./reports/quake-report";
import { Survey } from "./survey";
const save = new URL("../../../assets/icons/save.png", import.meta.url);

export const SurveyDisplay: React.FC<{
  surveyInstance: Survey;
}> = ({ surveyInstance }) => {
  const id = surveyInstance.id as keyof typeof surveysData;
  const { name: surveyName, michlolim } = surveysData[id];

  return (
    <div className="survey">
      {/* Survey Name */}
      <h1 className="name">{surveyName}</h1>
      {/* Map each Michlol */}
      {michlolim.map((michlol, idx) => {
        const formRef = useRef<HTMLFormElement>(null);
        const [isOpen, setIsOpen] = useState(false);
        const [isComplete, setIsComplete] = useState(false);

        useEffect(() => {
          surveyInstance.completedMichlol[michlol.id] && setIsComplete(true);
        }, []);

        return (
          <div key={idx}>
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
            <div className="michlol">
              <div
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={`title ${isComplete ? "complete" : "incomplete"}`}
              >
                {/* Michlol Title */}
                {michlol.name}
              </div>
              <div className={`reports ${isOpen ? "opened" : "closed"}`}>
                <form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const formObj = Object.fromEntries(formData as any);
                    for (let [key, value] of Object.entries(formObj)) {
                      const [michlolId, questionId] = key.split("-");
                      surveyInstance.setAnswer(michlolId, questionId, value);
                    }
                  }}
                >
                  {michlol.reports.includes("main") && (
                    <MainReport
                      michlol={michlol}
                      surveyInstance={surveyInstance}
                      submit={() => {
                        formRef.current?.requestSubmit();
                      }}
                      close={() => {
                        surveyInstance.setCompletedMichlol(michlol.id);
                        setIsComplete(true);
                        setIsOpen(false);
                      }}
                    />
                  )}
                  {michlol.reports.includes("oil") && <OilReport />}
                  {michlol.reports.includes("quakes") && <QuakeReport />}
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
