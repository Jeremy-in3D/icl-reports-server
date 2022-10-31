import React from "react";
import { CreateReport } from "../../classes/create-report";
import { RadioQuestion } from "../misc/radio-question";

export const InputRadio: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questionId: string;
  options: string[];
}> = ({ reportInstance, michlolId, questionId, options }) => {
  const savedAnswer =
    reportInstance.michlolim[michlolId]?.answers?.[questionId];

  return (
    <div>
      {options.map((choice, idx) => {
        return (
          <RadioQuestion
            key={idx}
            text={choice}
            name={`${michlolId}-${questionId}`}
            id={`${michlolId}-${questionId}-${idx}`}
            value={choice}
            checked={savedAnswer === choice}
          />
        );
      })}
    </div>
  );
};
