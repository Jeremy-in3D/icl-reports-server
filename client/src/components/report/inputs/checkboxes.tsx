import React, { useEffect, useState } from "react";
import { Route } from "../../../classes/route";
import { QuestionBank } from "../../../data/question-bank";
import { CheckboxInput } from "./checkbox-input";

export const Checkboxes: React.FC<{
  formRef: React.RefObject<HTMLFormElement>;
  reportInstance: Route;
  currentQuestion: QuestionBank[number];
  machineName: string;
}> = ({ reportInstance, currentQuestion, machineName, formRef }) => {
  //Disables all inputs apart from first choice
  const [disableInputs, setDisableInputs] = useState(false);

  function isDisabled(index: number) {
    if (index !== 0 && disableInputs) return true;
    return false;
  }
  function isDefault(index: string) {
    return reportInstance.isQuestionAnswered(
      machineName,
      currentQuestion.partName,
      index
    );
  }

  useEffect(() => {
    formRef.current?.requestSubmit();
  }, [disableInputs]);

  return (
    <>
      {currentQuestion.input.map((checkbox, idx) => {
        return (
          <CheckboxInput
            key={`${currentQuestion.questionId}-${idx}`}
            index={idx}
            checkbox={checkbox}
            checkDisabled={() => isDisabled(idx)}
            checkDefault={isDefault}
            setDisableInputs={setDisableInputs}
          />
        );
      })}
    </>
  );
};
