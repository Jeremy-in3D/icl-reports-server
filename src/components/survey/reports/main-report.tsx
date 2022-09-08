import React, { useState } from "react";
import { Michlol } from "../../../data/surveys-data";
import { Survey } from "../survey";

export const MainReport: React.FC<{
  michlol: Michlol;
  surveyInstance: Survey;
}> = ({ michlol, surveyInstance }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const id = michlol.mainReport![currentQuestion].id;
  const question = michlol.mainReport![currentQuestion].question;
  const answerOptions = michlol.mainReport![currentQuestion].answerOptions;

  return (
    <div className="main-report">
      <p className="survey-placement">
        {` ${currentQuestion + 1}  מי  ${michlol.mainReport!.length}`}
      </p>
      <p className="survey-title">{question}</p>
      {answerOptions.map((item, idx) => {
        const id = Math.random();
        return (
          <div className="survey-question" key={idx}>
            <input
              type="radio"
              id={`${michlol.name}-${id}`}
              name={`id`}
              value={item}
              className="check-with-label"
              //   defaultChecked={answer ? answer[question] === item : false}
            />
            <label
              className="label-for-check"
              htmlFor={`${michlol.name}-${id}`}
            >
              {item}
            </label>
          </div>
        );
      })}
      <button
        className="survey-page-btn"
        disabled={currentQuestion === 0}
        type={"button"}
        onClick={() => setCurrentQuestion((prevState: number) => --prevState)}
      >
        Previous
      </button>
      <button
        className="survey-page-btn"
        type={"button"}
        disabled={
          surveyInstance.currentQuestion + 1 === michlol.mainReport!.length
        }
        onClick={() => setCurrentQuestion((prevState: number) => ++prevState)}
      >
        Next
      </button>
    </div>
  );
};
