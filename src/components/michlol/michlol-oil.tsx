import React, { useEffect, useRef } from "react";
import { CreateReport } from "../../classes/create-report";
import { Michlol } from "../../data/reports-data";
import { RadioQuestion } from "../misc/radio-question";

const possibleAnswers = ["critical", "high", "medium", "normal"];

export const MichlolOil: React.FC<{
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
          const formObj = Object.fromEntries(formData);
          for (const [key, value] of Object.entries(formObj)) {
            const criteria = key.split("-")[1];
            reportInstance.setValue(michlolId, criteria, value as string);
          }
        }}
      >
        <h2>Oil Reports</h2>
        <h3>Date:</h3>
        <h1>{dateRef.current?.value}</h1>
        <input ref={dateRef} type={"date"} hidden={true} readOnly></input>
        <h3>Machine #:</h3>
        <h1>{michlol.oil?.machine}</h1>
        <input
          name={`${michlolId}-machine`}
          type={"text"}
          value={michlol.oil?.machine}
          readOnly
          hidden={true}
        ></input>

        <h3>Machine Status:</h3>
        {possibleAnswers.map((answer, idx) => (
          <RadioQuestion
            text={answer}
            name={`${michlolId}-status`}
            id={`${michlolId}-status-${answer}`}
            value={answer}
            checked={answer === michlolStatusAnswer}
            key={idx}
          />
        ))}
        <h3>Wear and Tear</h3>
        {possibleAnswers.map((answer, idx) => (
          <RadioQuestion
            text={answer}
            name={`${michlolId}-wear`}
            id={`${michlolId}-wear-${answer}`}
            value={answer}
            checked={answer === michlolWearAnswer}
            key={idx}
          />
        ))}
      </form>
    </div>
  );
};
