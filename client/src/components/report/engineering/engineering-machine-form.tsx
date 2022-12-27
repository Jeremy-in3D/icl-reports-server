import React, { useRef } from "react";
import { Route } from "../../../classes/route";
import { MachineFilter } from "../route-view";
import { RadioQuestion } from "../inputs/radio-input";

export const EngineeringMachineForm: React.FC<{
  reportInstance: Route;
  machineName: string;
  setMachineComplete: React.Dispatch<React.SetStateAction<MachineFilter>>;
}> = ({ reportInstance, machineName, setMachineComplete }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textAreaAnswer = (reportInstance.data[machineName]?.data?.text ||
    "") as string;
  const michlolOilAnswer = (reportInstance.data[machineName]?.data?.oil ||
    "") as string;
  const michlolWearAnswer = (reportInstance.data[machineName]?.data?.wear ||
    "") as string;

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
          const formSubmission = handleEngineeringSubmit(formData);
          reportInstance.setEngineeringValue(machineName, formSubmission);
          setMachineComplete(reportInstance.getMachineComplete(machineName));
        }}
      >
        <h3 className="radio-question-title">שמן:</h3>
        <RadioQuestion
          text={"נורמלי"}
          name={"oil"}
          id={"oil-normal"}
          value={"נורמלי"}
          checked={"נורמלי" === michlolOilAnswer}
        />
        <RadioQuestion
          text={"גבולי"}
          name={"oil"}
          id={"oil-medium"}
          value={"גבולי"}
          checked={"גבולי" === michlolOilAnswer}
        />
        <RadioQuestion
          text={"גבוה"}
          name={"oil"}
          id={"oil-high"}
          value={"גבוה"}
          checked={"גבוה" === michlolOilAnswer}
        />
        <RadioQuestion
          text={"קריטי"}
          name={"oil"}
          id={"oil-critical"}
          value={"קריטי"}
          checked={"קריטי" === michlolOilAnswer}
        />
        <h3 className="radio-question-title">בלאי:</h3>
        <RadioQuestion
          text={"נורמלי"}
          name={"wear"}
          id={"wear-normal"}
          value={"נורמלי"}
          checked={"נורמלי" === michlolWearAnswer}
        />
        <RadioQuestion
          text={"גבולי"}
          name={"wear"}
          id={"wear-medium"}
          value={"גבולי"}
          checked={"גבולי" === michlolWearAnswer}
        />
        <RadioQuestion
          text={"גבוה"}
          name={"wear"}
          id={"wear-high"}
          value={"גבוה"}
          checked={"גבוה" === michlolWearAnswer}
        />
        <RadioQuestion
          text={"קריטי"}
          name={"wear"}
          id={"wear-critical"}
          value={"קריטי"}
          checked={"קריטי" === michlolWearAnswer}
        />
        <textarea
          name="text"
          ref={textAreaRef}
          maxLength={100}
          rows={4}
          className="text-area"
          defaultValue={textAreaAnswer}
        ></textarea>
      </form>
    </>
  );
};

function handleEngineeringSubmit(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  const formSubmission: any = {};
  for (const [key, value] of Object.entries(formEntries)) {
    formSubmission[key] = value;
  }
  return formSubmission;
}
