import React, { useState } from "react";
import { Michlol } from "../../../data/surveys-data";
import { RadioQuestion } from "../inputs/radio-question";
import { Survey } from "../survey";

export const MainReport: React.FC<{
  michlol: Michlol;
  surveyInstance: Survey;
  submit: () => void;
  close: () => void;
}> = ({ michlol, surveyInstance, submit, close }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionId = michlol.mainReport![currentQuestion].id;
  const question = michlol.mainReport![currentQuestion].question;
  const answerOptions = michlol.mainReport![currentQuestion].answerOptions;

  return (
    <div className="main-report">
      <p className="survey-placement">
        {` ${currentQuestion + 1}  מי  ${michlol.mainReport!.length}`}
      </p>
      <p className="survey-title">{question}</p>
      {answerOptions.map((item, idx) => {
        const name = `${michlol.id}-${questionId}`;
        const identifier = `${michlol.id}-${questionId}-${idx}`;
        const michlolAnswers = surveyInstance.answers[michlol.id]?.["main"];
        const savedAnswer = michlolAnswers?.[questionId];
        return (
          <RadioQuestion
            key={idx}
            text={item}
            name={name}
            id={identifier}
            value={item}
            checked={savedAnswer === item}
          />
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
        disabled={
          surveyInstance.currentQuestion + 1 === michlol.mainReport!.length
        }
        type={"button"}
        onClick={() => {
          submit();
          if (surveyInstance.answers[michlol.id]?.["main"]?.[questionId]) {
            if (currentQuestion + 1 !== michlol.mainReport!.length) {
              setCurrentQuestion((prevState: number) => ++prevState);
            } else close();
          }
        }}
      >
        {currentQuestion + 1 !== michlol.mainReport!.length
          ? "Next"
          : "Complete"}
      </button>
    </div>
  );
};
