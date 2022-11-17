import React, { useState } from "react";
import { MachineAreas, CheckBox } from "../../data/machine-areas";

export const CheckboxInput: React.FC<{
  checkbox: CheckBox;
  info: { index: number; area: MachineAreas[number] };
  check: () => boolean;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ checkbox, info: { index, area }, check, setValid }) => {
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
        type={"checkbox"}
        name={`${area.id}-${area.name}-${text}`}
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
            <div
              key={`${area.id}-${area.name}-${text}-${choice}-${i}`}
              className="form-secondary-checkbox"
            >
              <input
                type={"checkbox"}
                name={`${area.id}-${area.name}-${text}-${choice}`}
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
