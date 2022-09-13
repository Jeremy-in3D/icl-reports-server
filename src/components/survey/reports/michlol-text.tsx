import React from "react";
import { Michlol } from "../../../data/surveys-data";
import { Survey } from "../survey";

export const MichlolText: React.FC<{
  surveyInstance: Survey;
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
