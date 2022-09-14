import React from "react";
import { Michlol } from "../../../data/surveys-data";
import { RadioQuestion } from "../inputs/radio-question";
import { Survey } from "../survey";

export const QuestionsDisplay: React.FC<{
  michlol: Michlol;
  surveyInstance: Survey;
  currentQuestion: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
}> = ({ michlol, surveyInstance, currentQuestion, setQuestion }) => {
  const { id, question, answerOptions } = michlol.mainReport![currentQuestion];
  const name = `${michlol.id}-${id}`;
  const savedAnswer = surveyInstance.answers[michlol.id]?.answers?.[id];

  return (
    <div className="main-report">
      <p className="survey-placement">
        {` ${currentQuestion + 1}  מי  ${michlol.mainReport!.length}`}
      </p>
      <p className="survey-title">{question}</p>
      {answerOptions.map((item, idx) => {
        return (
          <RadioQuestion
            key={idx}
            text={item}
            name={name}
            id={`${name}-${idx}`}
            value={item}
            checked={savedAnswer === item}
          />
        );
      })}
      <button
        className="survey-page-btn"
        disabled={currentQuestion === 0}
        type={"button"}
        onClick={() => setQuestion((prevState) => --prevState)}
      >
        Previous
      </button>
      <button className="survey-page-btn">Next</button>
    </div>
  );
};
