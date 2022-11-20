import React, { useState } from "react";
import { Route } from "../../classes/route";
import { MachineParts } from "../../data/machine-parts";
import { CheckboxInput } from "./checkbox-input";

export const MachineForm: React.FC<{
  routeData: Route;
  part: MachineParts[number];
  machineName: string;
  michlolName: string;
  updateView: () => void;
}> = ({ routeData, part, machineName, michlolName, updateView }) => {
  const [isValid, setIsValid] = useState(false);

  function isDisabled(index: number) {
    if (index !== 0 && isValid) return true;
    return false;
  }

  function isDefault(index: string) {
    return routeData.isQuestionAnswered(machineName, part.name, index);
  }

  return (
    <>
      <p className="machine-area">{part.name}</p>
      <form
        className="machine-form"
        // onChange={(e) => e.currentTarget.requestSubmit()}
        onSubmit={(e) => {
          handleFormSubmit(e, routeData, michlolName, part.name, machineName);
          updateView();
        }}
      >
        {part.checkboxes.map((checkbox, idx) => {
          return (
            <CheckboxInput
              key={`${part.id}-${idx}`}
              index={idx}
              checkbox={checkbox}
              checkDisabled={() => isDisabled(idx)}
              checkDefault={isDefault}
              setValid={setIsValid}
            />
          );
        })}
        <button className="machine-submit-btn" type={"submit"}>
          שמור מכונה
        </button>
      </form>
    </>
  );
};

function handleFormSubmit(
  e: React.FormEvent<HTMLFormElement>,
  routeData: Route,
  michlolName: string,
  areaName: string,
  machineName: string
) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const formObj = Object.fromEntries(formData);
  const sorted: { [id: string]: FormDataEntryValue } = {};
  for (const [key, value] of Object.entries(formObj)) {
    sorted[key] = value;
  }
  if (Object.keys(sorted).length)
    routeData.setValue(michlolName, machineName, areaName, sorted);
  localStorage.setItem(routeData.id, routeData.saveSurvey());
}
