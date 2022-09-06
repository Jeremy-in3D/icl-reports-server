import React, { useEffect, useState } from "react";
import { Survey } from "./survey";

export const SurveyDisplay: React.FC<{
  instance: Survey;
}> = ({ instance }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    instance.currentQuestion
  );

  const type = instance.items![currentQuestion].type;
  const question = instance.items![currentQuestion].question;
  const answerOptions = instance.items![currentQuestion].answerOptions;

  return (
    <>
      <p className="survey-placement">
        {` ${currentQuestion + 1}  מי  ${instance.totalItems}`}
      </p>
      <p className="survey-title">{question}</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   const formData = new FormData(e.target as HTMLFormElement);
        //   //@ts-ignore
        //   const answeredQuestion = Object.fromEntries(formData);
        //   instance.submitAnswer(answeredQuestion);
        // }}
      >
        {answerOptions.map((item, idx) => (
          <div className="survey-question" key={idx}>
            <input
              id={`${"test" + idx}`}
              name={question}
              type={type}
              value={item}
              className="check-with-label"
            />
            <label className="label-for-check" htmlFor={`${"test" + idx}`}>
              {item}
            </label>
          </div>
        ))}
        <button
          className="survey-page-btn"
          onClick={() => setCurrentQuestion(instance.previousQuestion())}
          disabled={instance.currentQuestion === 0}
        >
          Previous
        </button>
        <button
          className="survey-page-btn"
          onClick={() => setCurrentQuestion(instance.nextQuestion())}
          disabled={instance.currentQuestion + 1 === instance.totalItems}
        >
          Next
        </button>
        {/* <button>Submit</button> */}
      </form>
      <button
        onClick={() => {
          localStorage.setItem("survey", JSON.stringify(instance));
        }}
      >
        Save Survey
      </button>
    </>
  );
};
