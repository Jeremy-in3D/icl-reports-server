import React, { useState } from "react";
import { Michlol } from "../../../data/surveys-data";
import { Survey } from "../../../classes/survey";
import { QuestionsDisplay } from "./questions-display";

export const MichlolQuestions: React.FC<{
  surveyInstance: Survey;
  michlol: Michlol;
}> = ({ surveyInstance, michlol }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <form
      onChange={(e) => {
        e.currentTarget.requestSubmit();
      }}
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
      <QuestionsDisplay
        michlol={michlol}
        surveyInstance={surveyInstance}
        currentQuestion={currentQuestion}
        setQuestion={setCurrentQuestion}
      />
    </form>
  );
};
