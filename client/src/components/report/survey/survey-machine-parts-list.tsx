import React from "react";
import { QuestionBank } from "../../../data/question-bank";

export const SurveyMachinePartsList: React.FC<{
  view: number;
  setView: React.Dispatch<React.SetStateAction<number>>;
  questions: QuestionBank;
  partsComplete: boolean[] | undefined;
}> = ({ view, setView, questions, partsComplete }) => {
  return (
    <div className="michlol-questions-array">
      {questions.map((part, idx) => {
        let answered;
        if (partsComplete) answered = partsComplete[idx];
        return (
          <div
            key={`${idx}`}
            className={`m-question-marker ${idx === view ? "current" : ""} ${
              answered ? "green" : "red"
            }`}
            onClick={() => setView(idx)}
          >
            {part?.partName}
          </div>
        );
      })}
    </div>
  );
};
