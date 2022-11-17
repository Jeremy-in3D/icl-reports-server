import React, { useState } from "react";
import { Route } from "../../classes/route";
import { MachineAreas } from "../../data/machine-areas";
import { CheckboxInput } from "./checkbox-input";

export const MachineForm: React.FC<{
  routeData: Route;
  area: MachineAreas[number];
  machineName: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ routeData, setIsOpen, area, machineName }) => {
  const [isValid, setIsValid] = useState(false);

  function checkIfValid(idx: number) {
    if (idx !== 0 && isValid) return true;
    return false;
  }
  return (
    <>
      <p className="machine-area">{area.name}</p>
      <form
        className="machine-form"
        // onChange={(e) => e.currentTarget.requestSubmit()}
        onSubmit={(e) => handleFormSubmit(e, machineName)}
      >
        {area.checkboxes.map((checkbox, idx) => {
          const info = {
            index: idx,
            area: area,
          };

          return (
            <CheckboxInput
              key={`${area.id}-${idx}`}
              info={info}
              checkbox={checkbox}
              check={() => checkIfValid(idx)}
              setValid={setIsValid}
            />
          );
        })}
        <button
          className="machine-submit-btn"
          type={"submit"}
          onClick={() => {
            // reportInstance.michlolCompleted[michlolId] = true;
            // localStorage.setItem(reportInstance.id, reportInstance.saveSurvey());
            // setIsOpen(false);
          }}
        >
          שמור מכונה
        </button>
      </form>
    </>
  );
};

function handleFormSubmit(
  e: React.FormEvent<HTMLFormElement>,
  machineName: string
) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const formObj = Object.fromEntries(formData);
  console.log(formObj);
  console.log(machineName);
  // const value = formObj[`${michlolId}-${questionId}`] as string;
  // reportInstance.setValue(michlolId, questionId, value);
}
