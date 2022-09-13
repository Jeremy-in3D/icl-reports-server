import React from "react";
import { Michlol } from "../../../data/surveys-data";
import { Survey } from "../survey";
import { ReportDisplay } from "./report-display";

export const MichlolReport: React.FC<{
  surveyInstance: Survey;
  formRef: React.RefObject<HTMLFormElement>;
  michlol: Michlol;
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ surveyInstance, formRef, michlol, setIsComplete, setIsOpen }) => {
  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formObj = Object.fromEntries(formData as any);
        for (let [key, value] of Object.entries(formObj)) {
          const [michlolId, questionId] = key.split("-");
          surveyInstance.setAnswer(michlolId, questionId, value);
        }
      }}
    >
      <ReportDisplay
        michlol={michlol}
        surveyInstance={surveyInstance}
        submit={() => {
          formRef.current?.requestSubmit();
        }}
        close={() => {
          if (surveyInstance.isMichlolComplete(michlol.id)) {
            surveyInstance.setCompletedMichlol(michlol.id);
            setIsComplete(true);
            setIsOpen(false);
          }
        }}
      />
    </form>
  );
};
