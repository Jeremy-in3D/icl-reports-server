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
      <div className="name">{surveyName}</div>
      {/* Map each Michlol */}
      {michlolim.map((michlol, idx) => {
        const formRef = useRef<HTMLFormElement>(null);
        const [openTab, setOpenTab] = useState(false);
        const [markComplete, setMarkComplete] = useState(false);

        useEffect(() => {
          surveyInstance.completedMichlol[michlol.id] && setMarkComplete(true);
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
                onClick={() => setOpenTab((prevState) => !prevState)}
                className={`title ${markComplete ? "complete" : "incomplete"}`}
              >
                {/* Michlol Title */}
                {michlol.name}
              </div>
              <div className={`reports ${openTab ? "opened" : "closed"}`}>
                <form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    //@ts-ignore
                    const obj = Object.fromEntries(formData);
                    const entries = Object.entries(obj);
                    if (entries.length) {
                      const [key, value] = entries[0];
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
                        setMarkComplete(true);
                        setOpenTab(false);
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
