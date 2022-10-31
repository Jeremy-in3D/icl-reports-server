import React from "react";
import { CreateReport } from "../../classes/create-report";
import { Question } from "../../data/reports-data";

export const QuestionsList: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questions: Question[];
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  questions,
  setCurrentQuestion,
  reportInstance,
  michlolId,
  currentQuestion,
}) => (
  <>
    {questions.map((question, idx) => {
      const isAnswered =
        reportInstance.michlolim[michlolId]?.answers?.[question.id];
      let style;
      if (idx === currentQuestion) style = "current";
      if (isAnswered) style = "green";
      style = "red";

      return (
        <div
          className={`m-question-marker ${style}`}
          key={idx}
          onClick={() => setCurrentQuestion(idx)}
        >
          {idx + 1}
        </div>
      );
    })}
  </>
);
