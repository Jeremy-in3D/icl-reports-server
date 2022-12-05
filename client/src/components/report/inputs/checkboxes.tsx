import React, { useEffect, useState } from "react";
import { Route } from "../../../classes/route";
import { MachineParts } from "../../../data/machine-parts";
import { CheckboxInput } from "./checkbox-input";

export const Checkboxes: React.FC<{
  formRef: React.RefObject<HTMLFormElement>;
  routeData: Route;
  machinePart: MachineParts[number];
  machineName: string;
}> = ({ routeData, machinePart, machineName, formRef }) => {
  //Disables all inputs apart from first choice
  const [disableInputs, setDisableInputs] = useState(false);

  function isDisabled(index: number) {
    if (index !== 0 && disableInputs) return true;
    return false;
  }
  function isDefault(index: string) {
    return routeData.isQuestionAnswered(
      machineName,
      machinePart.partName,
      index
    );
  }

  useEffect(() => {
    formRef.current?.requestSubmit();
  }, [disableInputs]);

  return (
    <>
      {machinePart.input.map((checkbox, idx) => {
        return (
          <CheckboxInput
            key={`${machinePart.questionId}-${idx}`}
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
