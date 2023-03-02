import React, { useEffect, useRef, useState } from "react";
import { FormSubmission, Route } from "../../../classes/route";
import { FormInput } from "../inputs/form-input";
import { QuestionBank } from "../../../data/question-bank";
import { ReportDetails } from "./survey-machine";
import { MachineFilter } from "../route-view";
import { TakePicture } from "../../misc/blob-handlers";

export const SurveyMachineForm: React.FC<{
  reportInstance: Route;
  currentQuestion: QuestionBank[number];
  machineQuestions: QuestionBank;
  reportDetails: ReportDetails;
  setMachineComplete: React.Dispatch<React.SetStateAction<MachineFilter>>;
  setPartsComplete: React.Dispatch<React.SetStateAction<boolean[] | undefined>>;
}> = ({
  reportInstance,
  currentQuestion,
  machineQuestions,
  reportDetails,
  setMachineComplete,
  setPartsComplete,
}) => {
  //Look into why it re-renders 3 times
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textAreastring =
    reportInstance.data[reportDetails.machineName]?.data?.[
      reportDetails.partName
      //@ts-ignore
    ]?.text || "";

  useEffect(
    () =>
      setPartsComplete(() =>
        machineQuestions.map((question) =>
          reportInstance.isPartComplete(
            reportDetails.machineName,
            question.partName
          )
        )
      ),
    []
  );

  return (
    <>
      <p className="machine-area">{currentQuestion.partName}</p>
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
          setPartsComplete(() =>
            machineQuestions.map((question) =>
              reportInstance.isPartComplete(
                reportDetails.machineName,
                question.partName
              )
            )
          );
        }}
      >
        <FormInput
          formRef={formRef}
          reportInstance={reportInstance}
          currentQuestion={currentQuestion}
          machineName={reportDetails.machineName}
        />
        <h3 className="radio-question-title">טקסט חופשי:</h3>
        <textarea
          name="טקסט חופשי"
          ref={textAreaRef}
          maxLength={100}
          rows={4}
          className="text-area"
          defaultValue={textAreastring}
        ></textarea>
      </form>
      <TakePicture reportId={reportInstance?.reportId} />
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
