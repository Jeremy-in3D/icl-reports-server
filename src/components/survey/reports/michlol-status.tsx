import React from "react";
import { RadioQuestion } from "../inputs/radio-question";
import { Survey } from "../../../classes/survey";

export const MichlolStatus: React.FC<{
  surveyInstance: Survey;
  michlolId: string;
}> = ({ surveyInstance, michlolId }) => {
  const michlolAnswer = surveyInstance.answers[michlolId]?.["status"];

  return (
    <form
      onChange={(e) => e.currentTarget.requestSubmit()}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formObj = Object.fromEntries(formData as any);
        for (let [key, value] of Object.entries(formObj)) {
          surveyInstance.setMichlolStatus(michlolId, value);
        }
      }}
    >
      <h2>Michlol Status:</h2>
      <RadioQuestion
        text={"Critical"}
        name={`${michlolId}-status`}
        id={`${michlolId}-critical`}
        value={"critical"}
        checked={"critical" === michlolAnswer}
      />
      <RadioQuestion
        text={"High"}
        name={`${michlolId}-status`}
        id={`${michlolId}-high`}
        value={"high"}
        checked={"high" === michlolAnswer}
      />
      <RadioQuestion
        text={"Medium"}
        name={`${michlolId}-status`}
        id={`${michlolId}-medium`}
        value={"medium"}
        checked={"medium" === michlolAnswer}
      />
      <RadioQuestion
        text={"Normal"}
        name={`${michlolId}-status`}
        id={`${michlolId}-normal`}
        value={"normal"}
        checked={"normal" === michlolAnswer}
      />
    </form>
  );
};
