import React, { useState } from "react";
import { surveysData } from "../../data/surveys-data";
import { MainReport } from "./reports/main-report";
import { OilReport } from "./reports/oil-report";
import { QuakeReport } from "./reports/quake-report";
import { Survey } from "./survey";

export const SurveyDisplay: React.FC<{
  surveyInstance: Survey;
}> = ({ surveyInstance }) => {
  const id = surveyInstance.id as keyof typeof surveysData;
  const { name: surveyName, michlolim } = surveysData[id];

  return (
    <div className="survey">
      <div className="name">{surveyName}</div>
      {michlolim.map((michlol, idx) => {
        const [openTab, setOpenTab] = useState(false);
        const openClass = openTab ? "opened" : "closed";

        return (
          <div className="michlol" key={idx}>
            <div
              onClick={() => setOpenTab((prevState) => !prevState)}
              className="title"
            >{`This is ${michlol.name}`}</div>
            <div className={`reports ${openClass}`}>
              <form>
                {michlol.reports.includes("main") && (
                  <MainReport
                    michlol={michlol}
                    surveyInstance={surveyInstance}
                  />
                )}
                {michlol.reports.includes("oil") && <OilReport />}
                {michlol.reports.includes("quakes") && <QuakeReport />}
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// onSubmit={(e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);
//     //@ts-ignore
//     const answeredQuestion = Object.fromEntries(formData);
//     const result = instance.submitAnswer(answeredQuestion);
//     result && instance.nextQuestion();
//     setCurrentQuestion(instance.currentQuestion);
//   }}

{
  /* <div className="survey-bar">
<button
  className=""
  onClick={() => {
    formRef.current?.requestSubmit();
    localStorage.setItem(
      "survey",
      JSON.stringify(instance.saveSurvey())
    );
  }}
>
  Save Survey
</button>
</div> */
}
