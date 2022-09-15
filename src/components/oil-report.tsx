import React, { useEffect, useRef } from "react";
import { RadioQuestion } from "./misc/radio-question";

export const OilReport: React.FC = () => {
  const dateRef = useRef<HTMLInputElement>(null);

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
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Oil Reports</h2>
        <h3>Date:</h3>
        <input ref={dateRef} type={"date"} readOnly></input>
        <h3>Machine #:</h3>
        <input type={"number"}></input>

        <h3>Machine Status:</h3>
        <RadioQuestion
          text={"Critical"}
          name="machine-status"
          id={`machine-status-critical`}
          value={"critical"}
        />
        <RadioQuestion
          text={"High"}
          name="machine-status"
          id={`machine-status-high`}
          value={"high"}
        />
        <RadioQuestion
          text={"Medium"}
          name="machine-status"
          id={`machine-status-medium`}
          value={"medium"}
        />
        <RadioQuestion
          text={"Normal"}
          name="machine-status"
          id={`machine-status-normal`}
          value={"normal"}
        />
        <h3>Wear and Tear</h3>
        <RadioQuestion
          text={"Critical"}
          name="machine-wear"
          id={`machine-wear-critical`}
          value={"critical"}
        />
        <RadioQuestion
          text={"High"}
          name="machine-wear"
          id={`machine-wear-high`}
          value={"high"}
        />
        <RadioQuestion
          text={"Medium"}
          name="machine-wear"
          id={`machine-wear-medium`}
          value={"medium"}
        />
        <RadioQuestion
          text={"Normal"}
          name="machine-wear"
          id={`machine-wear-normal`}
          value={"normal"}
        />
        <h3>Notes:</h3>
        <textarea maxLength={50} rows={4} cols={25}></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};
