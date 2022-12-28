import React, { useRef } from "react";
import { Route } from "../../../classes/route";
import { MachineFilter } from "../route-view";
import { RadioQuestion } from "../inputs/radio-input";

export const EngineeringQuakeForm: React.FC<{
  reportInstance: Route;
  machineName: string;
  setMachineComplete: React.Dispatch<React.SetStateAction<MachineFilter>>;
}> = ({ reportInstance, machineName, setMachineComplete }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textAreaAnswer = (reportInstance.data[machineName]?.data?.[
    "טקסט חופשי"
  ] || "") as string;
  const statusAnswer = (reportInstance.data[machineName]?.data?.["סטטוס"] ||
    "") as string;
  const MHIAnswer = (reportInstance.data[machineName]?.data?.MHI ||
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
        <h3 className="radio-question-title">סטטוס:</h3>
        <RadioQuestion
          text={"Acceptable"}
          name={"סטטוס"}
          id={"status-acceptable"}
          value={"acceptable"}
          checked={"acceptable" === statusAnswer}
        />
        <RadioQuestion
          text={"Monitor"}
          name={"סטטוס"}
          id={"status-monitor"}
          value={"monitor"}
          checked={"monitor" === statusAnswer}
        />
        <RadioQuestion
          text={"Alarm"}
          name={"סטטוס"}
          id={"status-alarm"}
          value={"alarm"}
          checked={"alarm" === statusAnswer}
        />
        <RadioQuestion
          text={"Danger"}
          name={"סטטוס"}
          id={"status-danger"}
          value={"danger"}
          checked={"danger" === statusAnswer}
        />
        <h3 className="radio-question-title">MHI:</h3>
        <input
          type="number"
          name="MHI"
          defaultValue={MHIAnswer}
          className="number-input"
        ></input>
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
