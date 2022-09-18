import React, { useState } from "react";
import { Michlol } from "../../data/reports-data";
import { CreateReport } from "../../classes/create-report";
import { RadioQuestion } from "../misc/radio-question";

export const MichlolQuestions: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { id, question, answerOptions } = michlol.questions![currentQuestion];
  const name = `${michlol.id}-${id}`;
  const savedAnswer = reportInstance.michlolim[michlol.id]?.answers?.[id];

  return (
    <form
      onChange={(e) => {
        e.currentTarget.requestSubmit();
      }}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formObj = Object.fromEntries(formData as any);
        const { id: questionId } = michlol.questions![currentQuestion];
        const value = formObj[questionId];
        reportInstance.setValue(michlol.id, questionId, value, true);
      }}
    >
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
          onClick={() => setCurrentQuestion((prevState) => --prevState)}
        >
          Previous
        </button>
        <button
          className="survey-page-btn"
          type={"button"}
          onClick={() => {
            setCurrentQuestion((prevState) => {
              if (reportInstance.michlolim[michlol.id]?.answers?.[id]) {
                if (prevState + 1 === michlol.questions!.length) return 0;
                else return ++prevState;
              } else return prevState;
            });
          }}
        >
          Next
        </button>
      </div>
    </form>
  );
};
