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
      {michlolim.map((item, idx) => {
        const [openTab, setOpenTab] = useState(false);
        const openClass = openTab ? "opened" : "closed";

        return (
          <div
            className="michlol"
            onClick={() => setOpenTab((prevState) => !prevState)}
            key={idx}
          >
            <div className="title">{`This is ${item.name}`}</div>
            <div className={`reports ${openClass}`}>
              <form>
              {item.reports.includes("main") && <MainReport />}
              {item.reports.includes("oil") && <OilReport />}
              {item.reports.includes("quakes") && <QuakeReport />}
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};
