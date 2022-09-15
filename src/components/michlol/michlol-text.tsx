import React from "react";
import { Michlol } from "../../data/reports-data";
import { CreateReport } from "../../classes/create-report";

export const MichlolText: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol }) => {
  return (
    <div>
      <p>Michlol Notes:</p>
      <textarea
        maxLength={50}
        rows={4}
        cols={25}
        defaultValue={reportInstance.answers[michlol.id]?.text ?? ""}
        onChange={(e) => {
          reportInstance.setFreeText(michlol.id, e.target.value ?? "");
        }}
      ></textarea>
    </div>
  );
};
