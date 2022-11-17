import React, { useState } from "react";
import { Route } from "../../classes/route";
import { MachineAreas } from "../../data/machine-areas";
import { CheckboxInput } from "./checkbox-input";

export const MachineForm: React.FC<{
  routeData: Route;
  area: MachineAreas[number];
  machineName: string;
  michlolId: string;
  updateView: () => void;
}> = ({ routeData, area, machineName, michlolId, updateView }) => {
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
        onSubmit={(e) => {
          handleFormSubmit(e, routeData, michlolId, area.name, machineName);
          updateView();
        }}
      >
        {area.checkboxes.map((checkbox, idx) => {
          return (
            <CheckboxInput
              key={`${area.id}-${idx}`}
              index={idx}
              checkbox={checkbox}
              check={() => checkIfValid(idx)}
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
  const sorted: any = {};
  for (const [key, value] of Object.entries(formObj)) {
    sorted[key] = value;
  }
  routeData.setValue(michlolName, machineName, areaName, sorted);
}
