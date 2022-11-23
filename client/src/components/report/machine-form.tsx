import React, { useEffect, useRef, useState } from "react";
import { Route } from "../../classes/route";
import { MachineParts } from "../../data/machine-parts";
import { CheckboxInput } from "./checkbox-input";

//Refactor basically everything after it works

export const MachineForm: React.FC<{
  routeData: Route;
  part: MachineParts[number];
  machineName: string;
  michlolName: string;
}> = ({ routeData, part, machineName, michlolName }) => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function isDisabled(index: number) {
    if (index !== 0 && isValid) return true;
    return false;
  }
  function isDefault(index: string) {
    return routeData.isQuestionAnswered(machineName, part.name, index);
  }

  useEffect(() => {
    formRef.current?.requestSubmit();
  }, [formSubmit]);

  return (
    <>
      <p className="machine-area">{part.name}</p>
      <form
        ref={formRef}
        className="machine-form"
        onChange={(e) => {
          setFormSubmit((prevState) => !prevState);
        }}
        onSubmit={(e) => {
          handleFormSubmit(e, routeData, part.name, machineName, michlolName);
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
      </form>
    </>
  );
};

function handleFormSubmit(
  e: React.FormEvent<HTMLFormElement>,
  routeData: Route,
  partName: string,
  machineName: string,
  michlolName: string
) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const formObj = Object.fromEntries(formData);
  const sorted: { [id: string]: FormDataEntryValue } = {};
  const strings = ["", "", "", "", "", "", "", ""];
  let alert;
  for (const [key, value] of Object.entries(formObj)) {
    const stringValue = value as string;
    const splitValue = stringValue.split("-");
    sorted[key] = splitValue[0];
    const index = parseInt(key.split("-")[0]);
    const string = strings[index];
    if (!string) {
      strings[index] += splitValue[0];
    } else {
      strings[index] = string + ":" + splitValue[0];
    }
    if (!alert) splitValue[1] === "true" ? (alert = splitValue[1]) : undefined;
  }
  if (!alert) alert = "false";
  const finalString = strings.reduce((prev, cur) => {
    if (cur) return prev + "---" + cur;
    return prev;
  });
  if (finalString) {
    sorted["output"] = finalString;
    sorted["alert"] = alert;
  }
  routeData.setValue(machineName, partName, michlolName, sorted);
  localStorage.setItem(routeData.id, routeData.saveReport());
}
