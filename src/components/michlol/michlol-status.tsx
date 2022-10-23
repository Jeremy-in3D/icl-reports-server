import React from "react";
import { RadioQuestion } from "../misc/radio-question";
import { CreateReport } from "../../classes/create-report";
import { Michlol } from "../../data/reports-data";

export const MichlolStatus: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol }) => {
  const michlolId = michlol.id;
  const michlolAnswer = reportInstance.michlolim[michlolId]?.["status"];

  return (
    <form
      className="michlol-content-wrapper"
      onChange={(e) => e.currentTarget.requestSubmit()}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formObj = Object.fromEntries(formData);
        const value = formObj[`${michlolId}-status`] as string;
        reportInstance.setValue(michlolId, "status", value);
      }}
    >
      <h2 className="michlol-subheading">מצב מיכלול:</h2>
      <RadioQuestion
        text={"קריטי"}
        name={`${michlolId}-status`}
        id={`${michlolId}-critical`}
        value={"critical"}
        checked={"critical" === michlolAnswer}
      />
      <RadioQuestion
        text={"גבוה"}
        name={`${michlolId}-status`}
        id={`${michlolId}-high`}
        value={"high"}
        checked={"high" === michlolAnswer}
      />
      <RadioQuestion
        text={"בינוני"}
        name={`${michlolId}-status`}
        id={`${michlolId}-medium`}
        value={"medium"}
        checked={"medium" === michlolAnswer}
      />
      <RadioQuestion
        text={"נורמלי"}
        name={`${michlolId}-status`}
        id={`${michlolId}-normal`}
        value={"normal"}
        checked={"normal" === michlolAnswer}
      />
    </form>
  );
};
