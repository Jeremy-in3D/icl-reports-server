import React, { useEffect, useRef, useState } from "react";
import { Survey } from "./survey";

export const SurveyDisplay: React.FC<{
  instance: Survey;
}> = ({ instance }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    instance.currentQuestion
  );
  const formRef = useRef<HTMLFormElement>(null);
  const type = instance.items![currentQuestion].type;
  const question = instance.items![currentQuestion].question;
  const answerOptions = instance.items![currentQuestion].answerOptions;
  const answer = instance.answers[currentQuestion];

  return (
    <>
      <p className="survey-placement">
        {` ${currentQuestion + 1}  מי  ${instance.totalItems}`}
      </p>
      <p className="survey-title">{question}</p>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          //@ts-ignore
          const answeredQuestion = Object.fromEntries(formData);
          const result = instance.submitAnswer(answeredQuestion);
          result && instance.nextQuestion();
          setCurrentQuestion(instance.currentQuestion);
        }}
      >
        {answerOptions.map((item, idx) => {
          const id = Math.random();
          return (
            <div className="survey-question" key={id}>
              <input
                id={`${idx}`}
                name={question}
                type={type}
                value={item}
                className="check-with-label"
                defaultChecked={answer ? answer[question] === item : false}
              />
              <label className="label-for-check" htmlFor={`${idx}`}>
                {item}
              </label>
            </div>
          );
        })}
        <button
          className="survey-page-btn"
          disabled={instance.currentQuestion === 0}
          type={"button"}
          onClick={() => setCurrentQuestion(instance.previousQuestion())}
        >
          Previous
        </button>
        <button
          className="survey-page-btn"
          disabled={instance.currentQuestion + 1 === instance.totalItems}
        >
          Next
        </button>
      </form>
      <button
        onClick={() => {
          formRef.current?.requestSubmit();
          localStorage.setItem("survey", JSON.stringify(instance.saveSurvey()));
        }}
      >
        Save Survey
      </button>
    </>
  );
};
