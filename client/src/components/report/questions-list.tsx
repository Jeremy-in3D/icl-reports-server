import React from "react";
import { CreateReport } from "../../classes/create-report";
import { QuestionBank } from "../../data/question-bank";

export const QuestionsList: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questions: string[];
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  questions,
  questionNumber,
  setQuestionNumber,
  reportInstance,
  michlolId,
}) => {
  return (
    <>
      {questions.map((question, idx) => {
        let style;
        const isAnswered =
          reportInstance.michlolim[michlolId]?.answers?.[question];
        if (idx === questionNumber) style = "current";
        else if (isAnswered) style = "green";
        else style = "red";

        return (
          <div
            className={`m-question-marker ${style}`}
            key={idx}
            onClick={() => setQuestionNumber(idx)}
          >
            {idx + 1}
          </div>
        );
      })}
    </>
  );
};
