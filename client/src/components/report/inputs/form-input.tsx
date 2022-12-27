import React from "react";
import { Route } from "../../../classes/route";
import { QuestionBank } from "../../../data/question-bank";
import { Checkboxes } from "./checkboxes";

export const FormInput: React.FC<{
  formRef: React.RefObject<HTMLFormElement>;
  reportInstance: Route;
  currentQuestion: QuestionBank[number];
  machineName: string;
}> = ({ reportInstance, currentQuestion, machineName, formRef }) => {
  let input;

  switch (currentQuestion.type) {
    case "checkboxes":
      input = (
        <Checkboxes
          formRef={formRef}
          reportInstance={reportInstance}
          currentQuestion={currentQuestion}
          machineName={machineName}
        />
      );
      break;
    default:
      input = "No Input Entered";
  }
  return <div>{input}</div>;
};
