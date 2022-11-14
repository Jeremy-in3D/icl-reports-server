import React, { useEffect, useRef, useState } from "react";
import { CreateReport } from "../../classes/create-report";

export const InputTextArea: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questionId: string;
}> = ({ reportInstance, michlolId, questionId }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [charactersLeft, setCharactersLeft] = useState<number>(100);
  const [string, setString] = useState(
    reportInstance.michlolim[michlolId]?.answers?.[questionId] ?? ""
  );

  useEffect(() => {
    setCharactersLeft(100 - string.length);
  }, [string]);

  return (
    <div className="free-text">
      <textarea
        maxLength={100}
        rows={4}
        className="text-area"
        onChange={(e) => {
          inputRef.current!.value = e.currentTarget.value;
          setString(e.currentTarget.value);
        }}
        defaultValue={string}
      ></textarea>
      <p className="text-area-note">{`נותרו ${charactersLeft} תווים`}</p>
      <input
        ref={inputRef}
        className="text-input"
        name={`${michlolId}-${questionId}`}
        type={"text"}
        maxLength={100}
        autoComplete={"off"}
        defaultValue={string}
      ></input>
    </div>
  );
};
