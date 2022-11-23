import React, { useEffect, useRef, useState } from "react";
import { Route } from "../../classes/route";
import { FormInput } from "./form-input";
import { MachineParts } from "../../data/machine-parts";
import { ReportDetails } from "./machine";

export const MachineForm: React.FC<{
  routeData: Route;
  part: MachineParts[number];
  reportDetails: ReportDetails;
}> = ({ routeData, part, reportDetails }) => {
  const [formSubmit, setFormSubmit] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  //Check for another way to submit form after state update has finished and rendered, for disabled buttons
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
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const formSubmission = handleCheckboxSubmit(formData);

          routeData.setValue(reportDetails, formSubmission);
          localStorage.setItem(routeData.id, routeData.saveReport());
        }}
      >
        <FormInput
          routeData={routeData}
          machinePart={part}
          machineName={reportDetails.machineName}
        />
      </form>
    </>
  );
};

function handleCheckboxSubmit(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  const formSubmission: { [id: string]: FormDataEntryValue } = {};
  const strings = ["", "", "", "", "", "", "", ""];
  let alert;
  for (const [key, value] of Object.entries(formEntries)) {
    const stringValue = value as string;
    const splitValue = stringValue.split("-");
    formSubmission[key] = splitValue[0];
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
    formSubmission["output"] = finalString;
    formSubmission["alert"] = alert;
  }

  return formSubmission;
}
