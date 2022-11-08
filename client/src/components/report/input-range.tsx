import React, { useState } from "react";
import { CreateReport } from "../../classes/create-report";

export const InputRange: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questionId: string;
  options: InputRange;
}> = ({ reportInstance, michlolId, questionId, options }) => {
  const savedAnswer =
    reportInstance.michlolim[michlolId]?.answers?.[questionId];
  const [level, setLevel] = useState(savedAnswer ?? "0");

  return (
    <div>
      <input
        name={`${michlolId}-${questionId}`}
        type={"range"}
        min={options.start}
        max={options.end}
        step={options.step}
        defaultValue={savedAnswer ? Number.parseInt(savedAnswer) : 0}
        onChange={(e) => setLevel(e.target.value)}
      ></input>
      <div>{level}</div>
    </div>
  );
};

export type InputRange = {
  start: number;
  end: number;
  step: number;
};
