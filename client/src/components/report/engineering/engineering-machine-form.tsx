import React, { useRef } from "react";
import { Route } from "../../../classes/route";
import { ReportDetails } from "../survey/survey-machine";
import { MachineFilter } from "../route-view";

export const EngineeringMachineForm: React.FC<{
  reportInstance: Route;
  reportDetails: ReportDetails;
  setMachineComplete: React.Dispatch<React.SetStateAction<MachineFilter>>;
}> = ({ reportInstance, reportDetails, setMachineComplete }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textAreaAnswer = (reportInstance.data[reportDetails.machineName]?.data
    ?.text || "") as string;
  const michlolStatusAnswer = (reportInstance.data[reportDetails.machineName]
    ?.data?.status || "") as string;
  const michlolWearAnswer = (reportInstance.data[reportDetails.machineName]
    ?.data?.wear || "") as string;
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
          reportInstance.setEngineeringValue(
            reportDetails.machineName,
            formSubmission
          );
          setMachineComplete(
            reportInstance.getMachineComplete(reportDetails.machineName)
          );
        }}
      >
        <h3>Machine Status:</h3>
        {/* <RadioQuestion
          text={"Critical"}
          name={`${michlolId}-status`}
          id={`${michlolId}-status-critical`}
          value={"critical"}
          checked={"critical" === michlolStatusAnswer}
        />
        <RadioQuestion
          text={"High"}
          name={`${michlolId}-status`}
          id={`${michlolId}-status-high`}
          value={"high"}
          checked={"high" === michlolStatusAnswer}
        />
        <RadioQuestion
          text={"Medium"}
          name={`${michlolId}-status`}
          id={`${michlolId}-status-medium`}
          value={"medium"}
          checked={"medium" === michlolStatusAnswer}
        />
        <RadioQuestion
          text={"Normal"}
          name={`${michlolId}-status`}
          id={`${michlolId}-status-normal`}
          value={"normal"}
          checked={"normal" === michlolStatusAnswer}
        />
        <h3>Wear and Tear</h3>
        <RadioQuestion
          text={"Critical"}
          name={`${michlolId}-wear`}
          id={`${michlolId}-wear-critical`}
          value={"critical"}
          checked={"critical" === michlolWearAnswer}
        />
        <RadioQuestion
          text={"High"}
          name={`${michlolId}-wear`}
          id={`${michlolId}-wear-high`}
          value={"high"}
          checked={"high" === michlolWearAnswer}
        />
        <RadioQuestion
          text={"Medium"}
          name={`${michlolId}-wear`}
          id={`${michlolId}-wear-medium`}
          value={"medium"}
          checked={"medium" === michlolWearAnswer}
        />
        <RadioQuestion
          text={"Normal"}
          name={`${michlolId}-wear`}
          id={`${michlolId}-wear-normal`}
          value={"normal"}
          checked={"normal" === michlolWearAnswer}
        /> */}
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
