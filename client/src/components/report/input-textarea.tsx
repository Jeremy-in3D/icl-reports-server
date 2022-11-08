import React from "react";
import { CreateReport } from "../../classes/create-report";

export const InputTextArea: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questionId: string;
}> = ({ reportInstance, michlolId, questionId }) => {
  return (
    <div>
      <input
        name={`${michlolId}-${questionId}`}
        type={"text"}
        maxLength={50}
        autoComplete={"off"}
        defaultValue={
          reportInstance.michlolim[michlolId]?.answers?.[questionId] ?? ""
        }
      ></input>
    </div>
  );
};
