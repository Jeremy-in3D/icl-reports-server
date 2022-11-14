import React from "react";
import { CreateReport } from "../../classes/create-report";

export const InputRadio: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questionId: string;
  options: string[];
}> = ({ reportInstance, michlolId, questionId, options }) => {
  const savedAnswer =
    reportInstance.michlolim[michlolId]?.answers?.[questionId];

  return (
    <div className="radio-wrapper">
      {options.map((choice, idx) => {
        return (
          <div className="radio-question" key={idx}>
            <input
              type="radio"
              name={`${michlolId}-${questionId}`}
              id={`${michlolId}-${questionId}-${idx}`}
              value={choice}
              defaultChecked={savedAnswer === choice}
              className="radio-for-label"
            />
            <label
              className="label-for-radio"
              htmlFor={`${michlolId}-${questionId}-${idx}`}
            >
              {choice}
            </label>
          </div>
        );
      })}
    </div>
  );
};
