import React from "react";

export const QuestionsList: React.FC<{
  questions: string[];
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  checkAnswer: (question: string) => boolean;
}> = ({ questions, questionNumber, setQuestionNumber, checkAnswer }) => (
  <div className="michlol-questions-array">
    {questions.map((question, idx) => {
      let style;
      const isAnswered = checkAnswer(question);
      if (idx === questionNumber) style = "current";
      else if (isAnswered) style = "green";
      else style = "red";

      return (
        <div
          key={idx}
          className={`m-question-marker ${style}`}
          onClick={() => setQuestionNumber(idx)}
        >
          {idx + 1}
        </div>
      );
    })}
  </div>
);
