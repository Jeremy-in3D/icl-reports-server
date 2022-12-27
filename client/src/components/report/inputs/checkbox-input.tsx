import React, { useEffect, useState } from "react";
import { CheckBox } from "../../../data/question-bank";

export const CheckboxInput: React.FC<{
  checkbox: CheckBox;
  index: number;
  checkDisabled: () => boolean;
  checkDefault: (idx: string) => boolean;
  setDisableInputs: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ checkbox, index, checkDisabled, checkDefault, setDisableInputs }) => {
  const [showSecondary, setShowSecondary] = useState(false);
  const { text, options, alert } = checkbox;

  useEffect(() => {
    if (checkDefault(`${index}`)) {
      if (index === 0) setDisableInputs((prevState) => !prevState);
      setShowSecondary(true);
    }
  }, []);

  return (
    <div className="form-checkbox">
      <input
        className="checkbox"
        type={"checkbox"}
        name={`${index}`}
        value={`${text}-${alert}`}
        onChange={(e) => {
          if (index === 0) setDisableInputs((prevState) => !prevState);
          setShowSecondary((prevState) => !prevState);
        }}
        defaultChecked={checkDefault(`${index}`)}
        disabled={checkDisabled()}
      />
      <label>{text}</label>
      {options && (
        <div className={`form-secondary ${!showSecondary ? "hide" : ""}`}>
          {checkbox.choices?.map((choice, i) => (
            <div key={`${i}`} className="form-secondary-checkbox">
              <input
                className="checkbox"
                type={"checkbox"}
                name={`${index}-${i}`}
                value={choice}
                defaultChecked={checkDefault(`${index}-${i}`)}
                disabled={checkDisabled()}
              ></input>
              <label>{choice}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
