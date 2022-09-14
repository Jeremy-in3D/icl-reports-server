import React, { useRef, useState } from "react";
import { Michlol } from "../../../data/surveys-data";
import { Survey } from "../survey";
import { QuestionsDisplay } from "./questions-display";

export const MichlolQuestions: React.FC<{
  surveyInstance: Survey;
  michlol: Michlol;
}> = ({ surveyInstance, michlol }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formObj = Object.fromEntries(formData as any);
        for (let [key, value] of Object.entries(formObj)) {
          const [michlolId, questionId] = key.split("-");
          surveyInstance.setAnswer(michlolId, questionId, value);
          setCurrentQuestion((prevState) => {
            if (prevState + 1 === michlol.mainReport!.length) return 0;
            else return ++prevState;
          });
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
