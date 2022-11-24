import React, { useRef } from "react";
import { FormSubmission, Route } from "../../classes/route";
import { FormInput } from "./form-input";
import { MachineParts } from "../../data/machine-parts";
import { ReportDetails } from "./machine";

export const MachineForm: React.FC<{
  routeData: Route;
  part: MachineParts[number];
  reportDetails: ReportDetails;
  setUpdateMachine: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ routeData, part, reportDetails, setUpdateMachine }) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <p className="machine-area">{part.name}</p>
      <form
        ref={formRef}
        className="machine-form"
        onChange={(e) => {
          formRef.current?.requestSubmit();
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const formSubmission = handleCheckboxInputSubmit(formData);
          routeData.setValue(reportDetails, formSubmission);
          localStorage.setItem(routeData.routeId, routeData.saveReport());
          setUpdateMachine((prevState) => !prevState);
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

function handleCheckboxInputSubmit(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  const formSubmission: FormSubmission = { excelOutput: "", alert: " " };
  let outputAlert: Alert = "false";
  let stringParts: string[] = [];
  for (const [key, value] of Object.entries(formEntries)) {
    const uniqueIndex = parseInt(key.split("-")[0]);
    if (typeof value === "string") {
      //Checkbox names contain both text and alert string to represent an alert action to be done by the server on submit
      const [text, alert] = value.split("-");
      //Enter value under the key for offline form continuation
      formSubmission[key] = text;
      //Output Alert based on alert string
      if (outputAlert !== "true")
        outputAlert = alert === "true" ? "true" : "false";
      //String parts to be entered and later reduced into an output strings
      const string = stringParts[uniqueIndex];
      if (!string) stringParts[uniqueIndex] = text;
      else stringParts[uniqueIndex] = `${string}:${text}`;
    }
  }

  let outputString = "";
  if (stringParts.length) {
    outputString = stringParts.reduce((prevValue, currentValue) =>
      currentValue ? `${prevValue}/${currentValue}` : prevValue
    );
  }

  //Add output string and alert to finalFormSubmission object
  formSubmission["excelOutput"] = outputString;
  formSubmission["alert"] = outputAlert;
  return formSubmission;
}

type Alert = "true" | "false";
