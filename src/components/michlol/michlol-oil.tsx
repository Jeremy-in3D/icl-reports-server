import React, { useEffect, useRef } from "react";
import { CreateReport } from "../../classes/create-report";
import { Michlol } from "../../data/reports-data";
import { RadioQuestion } from "../misc/radio-question";

const possibleAnswers = ["קריטי", "גבוה", "בינוני", "נורמלי"];

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
    <form
      className="michlol-content-wrapper"
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
      <h2 className="michlol-subheading">מכונה #:</h2>
      <h2>{michlol.oil?.machine}</h2>
      <h3>תאריך:</h3>
      <h1>{dateRef.current?.value}</h1>
      <input ref={dateRef} type={"date"} hidden={true} readOnly></input>
      <input
        name={`${michlolId}-machine`}
        type={"text"}
        value={michlol.oil?.machine}
        readOnly
        hidden={true}
      ></input>
      <h3>בלאי:</h3>
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
  );
};
