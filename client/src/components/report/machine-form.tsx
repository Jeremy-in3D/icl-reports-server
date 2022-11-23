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
  let outputAlert: "true" | "false" = "false";
  let stringParts: string[] = [];
  for (const [key, value] of Object.entries(formEntries)) {
    const uniqueIndex = parseInt(key.split("-")[0]);
    if (value === typeof "string") {
      //Checkbox names contain both text and alert string to represent an alert action to be done by the server on submit
      const [text, alert] = value.split("-");
      //Enter value under the key for offline form continuation
      formSubmission[key] = text;
      //Output Alert based on alert string
      if (outputAlert !== "true") outputAlert = alert ? "true" : "false";
      //String parts to be entered and later reduced into an output strings
      const string = stringParts[uniqueIndex];
      if (!string) stringParts[uniqueIndex] = text;
      else stringParts[uniqueIndex] = `${string}:${text}`;
    }
  }
  const outputString = stringParts.reduce((prevValue, currentValue) =>
    currentValue ? `${prevValue}--${currentValue}` : prevValue
  );

  //Add output string and alert to finalFormSubmission object
  formSubmission["excelOutput"] = outputString;
  formSubmission["alert"] = outputAlert;
  return formSubmission;
}
