import React, { useRef } from "react";
import { FormSubmission, Route } from "../../../classes/route";
import { FormInput } from "../inputs/form-input";
import { ReportDetails } from "../survey/survey-machine";
import { MachineFilter } from "../route-view";

export const EngineeringMachineForm: React.FC<{
  reportInstance: Route;
  reportDetails: ReportDetails;
  setMachineComplete: React.Dispatch<React.SetStateAction<MachineFilter>>;
}> = ({ reportInstance, reportDetails, setMachineComplete }) => {
  //Look into why it re-renders 3 times
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textAreastring =
    reportInstance.data[reportDetails.machineName]?.data?.[
      reportDetails.partName
    ]?.text || "";

  return (
    <>
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
          const formSub = {
            ...formSubmission,
            text: textAreaRef.current?.value || "",
          };
          reportInstance.setValue(reportDetails, formSub);
          setMachineComplete(
            reportInstance.getMachineComplete(reportDetails.machineName)
          );
        }}
      >
        {/* <FormInput
          formRef={formRef}
          reportInstance={reportInstance}
          currentQuestion={currentQuestion}
          machineName={reportDetails.machineName}
        /> */}
        <textarea
          ref={textAreaRef}
          maxLength={100}
          rows={4}
          className="text-area"
          defaultValue={textAreastring}
        ></textarea>
      </form>
    </>
  );
};

function handleCheckboxInputSubmit(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  const formSubmission: FormSubmission = {
    excelOutput: "",
    alert: " ",
    text: "",
  };
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
