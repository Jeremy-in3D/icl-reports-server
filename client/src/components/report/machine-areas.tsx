import React from "react";
import { questionBank } from "../../data/question-bank";

export const MachineAreas: React.FC<{
  questions: string[];
  setView: React.Dispatch<React.SetStateAction<number>>;
}> = ({ questions, setView }) => {
  const areas = questions.map((question) =>
    questionBank.find((q) => q.id === question)
  );

  return (
    <div className="michlol-questions-array">
      {areas.map((area, idx) => {
        return (
          <div
            key={idx}
            className={`m-question-marker`}
            onClick={() => setView(idx)}
          >
            {area?.name}
          </div>
        );
      })}
    </div>
  );
};
