import React, { useRef } from "react";
import { Route } from "../../../classes/route";
import { MachineFilter } from "../route-view";
import { RadioQuestion } from "../inputs/radio-input";

export const EngineeringOilForm: React.FC<{
  reportInstance: Route;
  machineName: string;
  setMachineComplete: React.Dispatch<React.SetStateAction<MachineFilter>>;
}> = ({ reportInstance, machineName, setMachineComplete }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textAreaAnswer = (reportInstance.data[machineName]?.data?.[
    "טקסט חופשי"
  ] || "") as string;
  const oilAnswer = (reportInstance.data[machineName]?.data?.["שמן"] ||
    "") as string;
  const wearAnswer = (reportInstance.data[machineName]?.data?.["בלאי"] ||
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
          name={"שמן"}
          id={"oil-normal"}
          value={"נורמלי"}
          checked={"נורמלי" === oilAnswer}
        />
        <RadioQuestion
          text={"גבולי"}
          name={"שמן"}
          id={"oil-medium"}
          value={"גבולי"}
          checked={"גבולי" === oilAnswer}
        />
        <RadioQuestion
          text={"גבוה"}
          name={"שמן"}
          id={"oil-high"}
          value={"גבוה"}
          checked={"גבוה" === oilAnswer}
        />
        <RadioQuestion
          text={"קריטי"}
          name={"שמן"}
          id={"oil-critical"}
          value={"קריטי"}
          checked={"קריטי" === oilAnswer}
        />
        <h3 className="radio-question-title">בלאי:</h3>
        <RadioQuestion
          text={"נורמלי"}
          name={"בלאי"}
          id={"wear-normal"}
          value={"נורמלי"}
          checked={"נורמלי" === wearAnswer}
        />
        <RadioQuestion
          text={"גבולי"}
          name={"בלאי"}
          id={"wear-medium"}
          value={"גבולי"}
          checked={"גבולי" === wearAnswer}
        />
        <RadioQuestion
          text={"גבוה"}
          name={"בלאי"}
          id={"wear-high"}
          value={"גבוה"}
          checked={"גבוה" === wearAnswer}
        />
        <RadioQuestion
          text={"קריטי"}
          name={"בלאי"}
          id={"wear-critical"}
          value={"קריטי"}
          checked={"קריטי" === wearAnswer}
        />
        <h3 className="radio-question-title">טקסט חופשי:</h3>
        <textarea
          name="טקסט חופשי"
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
