import React, { useState } from "react";
import { Michlol } from "../../data/reports-data";
import { CreateReport } from "../../classes/create-report";
import { QuestionsDisplay } from "./questions-display";

export const MichlolQuestions: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol }) => {
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
        const { id: questionId } = michlol.questions![currentQuestion];
        const value = formObj[questionId];
        reportInstance.setValue(michlol.id, questionId, value, true);
      }}
    >
      <QuestionsDisplay
        michlol={michlol}
        reportInstance={reportInstance}
        currentQuestion={currentQuestion}
        setQuestion={setCurrentQuestion}
      />
    </form>
  );
};
