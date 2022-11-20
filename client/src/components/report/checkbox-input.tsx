import React, { useEffect, useRef, useState } from "react";
import { CheckBox } from "../../data/machine-parts";

export const CheckboxInput: React.FC<{
  checkbox: CheckBox;
  index: number;
  check: () => boolean;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
  checked2: (idx: string) => boolean;
}> = ({ checkbox, index, check, setValid, checked2 }) => {
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { text, options } = checkbox;
  let secondary = null;
  if (checked) {
    if (options) {
      secondary = checkbox.choices;
    }
  } else secondary = null;

  useEffect(() => {
    if (checked2(`${index}`)) {
      if (index === 0) setValid((prevState) => !prevState);
      setChecked(true);
      inputRef.current!.checked = true;
    }
  }, []);

  return (
    <div className="form-checkbox">
      <input
        ref={inputRef}
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
                defaultChecked={checked2(`${index}-${i}`)}
              ></input>
              <label>{choice}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
