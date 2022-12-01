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
  const [isValid, setIsValid] = useState(false);

  function isDisabled(index: number) {
    if (index !== 0 && isValid) return true;
    return false;
  }
  function isDefault(index: string) {
    return routeData.isQuestionAnswered(machineName, machinePart.name, index);
  }

  useEffect(() => {
    formRef.current?.requestSubmit();
  }, [isValid]);

  return (
    <>
      {machinePart.input.map((checkbox, idx) => {
        return (
          <CheckboxInput
            key={`${machinePart.id}-${idx}`}
            index={idx}
            checkbox={checkbox}
            checkDisabled={() => isDisabled(idx)}
            checkDefault={isDefault}
            setValid={setIsValid}
          />
        );
      })}
    </>
  );
};
