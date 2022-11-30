import React, { useEffect, useRef } from "react";
import { FormSubmission, Route } from "../../classes/route";
import { FormInput } from "./form-input";
import { MachineParts } from "../../data/machine-parts";
import { ReportDetails } from "./machine";

export const MachineForm: React.FC<{
  routeData: Route;
  currentPart: MachineParts[number];
  parts: MachineParts;
  reportDetails: ReportDetails;
  setMachineComplete: React.Dispatch<React.SetStateAction<string>>;
  setPartsComplete: React.Dispatch<React.SetStateAction<boolean[] | undefined>>;
}> = ({
  routeData,
  currentPart,
  parts,
  reportDetails,
  setMachineComplete,
  setPartsComplete,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(
    () =>
      setPartsComplete(() =>
        parts.map((part) =>
          routeData.isPartComplete(reportDetails.machineName, part.name)
        )
      ),
    []
  );

  return (
    <>
      <p className="machine-area">{currentPart.name}</p>
      <form
        ref={formRef}
        className="machine-form"
        onChange={() => {
          formRef.current?.requestSubmit();
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const formSubmission = handleCheckboxInputSubmit(formData);
          routeData.setValue(reportDetails, formSubmission);
          setMachineComplete(
            routeData.isMachineComplete(reportDetails.machineName)
          );
          setPartsComplete(() =>
            parts.map((part) =>
              routeData.isPartComplete(reportDetails.machineName, part.name)
            )
          );
        }}
      >
        <FormInput
          routeData={routeData}
          machinePart={currentPart}
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
