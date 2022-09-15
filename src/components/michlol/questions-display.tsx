import React from "react";
import { Michlol } from "../../data/reports-data";
import { RadioQuestion } from "../misc/radio-question";
import { CreateReport } from "../../classes/create-report";

export const QuestionsDisplay: React.FC<{
  michlol: Michlol;
  surveyInstance: CreateReport;
  currentQuestion: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
}> = ({ michlol, surveyInstance, currentQuestion, setQuestion }) => {
  const { id, question, answerOptions } = michlol.questions![currentQuestion];
  const name = `${michlol.id}-${id}`;
  const savedAnswer = surveyInstance.answers[michlol.id]?.answers?.[id];

  return (
    <div className="main-report">
      <p className="survey-placement">
        {` ${currentQuestion + 1}  מי  ${michlol.questions!.length}`}
      </p>
      <p className="survey-title">{question}</p>
      {answerOptions.map((item, idx) => {
        return (
          <RadioQuestion
            key={idx}
            text={item}
            name={id}
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
      <button
        className="survey-page-btn"
        type={"button"}
        onClick={() => {
          setQuestion((prevState) => {
            if (surveyInstance.answers[michlol.id]?.answers?.[id]) {
              if (prevState + 1 === michlol.questions!.length) return 0;
              else return ++prevState;
            } else return prevState;
          });
        }}
      >
        Next
      </button>
    </div>
  );
};
