import React, { useEffect, useRef } from "react";
import { CreateReport } from "../../classes/create-report";
import { Michlol } from "../../data/reports-data";
import { RadioQuestion } from "../misc/radio-question";

export const OilMichlol: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol }) => {
  const michlolId = michlol.id;
  const dateRef = useRef<HTMLInputElement>(null);
  const michlolStatusAnswer = reportInstance.michlolim[michlolId]?.["status"];
  const michlolWearAnswer = reportInstance.michlolim[michlolId]?.["wear"];

  useEffect(() => {
    const now = new Date();
    dateRef.current!.value =
      now.getUTCFullYear() +
      "-" +
      ("0" + now.getMonth()).slice(-2) +
      "-" +
      ("0" + now.getDate()).slice(-2);
  }, []);

  return (
    <div>
      <form
        onChange={(e) => {
          e.currentTarget.requestSubmit();
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const formObj = Object.fromEntries(formData as any);
          for (const [key, value] of Object.entries(formObj)) {
            const criteria = key.split("-")[1];
            reportInstance.setValue(michlolId, criteria, value);
          }
        }}
      >
        <h2>Oil Reports</h2>
        <h3>Date:</h3>
        <h1>{dateRef.current?.value}</h1>
        <input ref={dateRef} type={"date"} hidden={true} readOnly></input>
        <h3>Machine #:</h3>
        <h1>{michlol.oil?.machineNumber}</h1>
        <input
          name={`${michlolId}-machine`}
          type={"text"}
          value={michlol.oil?.machineNumber}
          readOnly
          hidden={true}
        ></input>

        <h3>Machine Status:</h3>
        <RadioQuestion
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
        />
      </form>
    </div>
  );
};
