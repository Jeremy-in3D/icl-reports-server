import React, { useState } from "react";
import { CheckBox } from "../../data/machine-areas";

export const CheckboxInput: React.FC<{
  checkbox: CheckBox;
  index: number;
  check: () => boolean;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ checkbox, index, check, setValid }) => {
  const [checked, setChecked] = useState(false);
  const { text, options } = checkbox;
  let secondary = null;
  if (checked) {
    if (options) {
      secondary = checkbox.choices;
    }
  } else secondary = null;

  return (
    <div className="form-checkbox">
      <input
        className="checkbox"
        type={"checkbox"}
        name={`${index}`}
        value={text}
        onChange={(e) => {
          if (index === 0) setValid((prevState) => !prevState);
          setChecked((prevState) => !prevState);
        }}
        disabled={check()}
      />
      <label>{text}</label>
      {secondary && (
        <div className="form-secondary">
          {secondary.map((choice, i) => (
            <div key={`${i}`} className="form-secondary-checkbox">
              <input
                className="checkbox"
                type={"checkbox"}
                name={`${index}-${i}`}
                value={choice}
                disabled={check()}
              ></input>
              <label>{choice}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
