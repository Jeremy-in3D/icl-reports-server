import React from "react";
import { Michlol } from "../../data/reports-data";
import { CreateReport } from "../../classes/create-report";

export const MichlolText: React.FC<{
  surveyInstance: CreateReport;
  michlol: Michlol;
}> = ({ surveyInstance, michlol }) => {
  return (
    <div>
      <p>Michlol Notes:</p>
      <textarea
        maxLength={50}
        rows={4}
        cols={25}
        defaultValue={surveyInstance.answers[michlol.id]?.text ?? ""}
        onChange={(e) => {
          surveyInstance.setFreeText(michlol.id, e.target.value ?? "");
        }}
      ></textarea>
    </div>
  );
};
