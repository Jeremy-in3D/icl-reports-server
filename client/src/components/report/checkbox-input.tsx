import React, { useEffect, useState } from "react";
import { CheckBox } from "../../data/machine-parts";

export const CheckboxInput: React.FC<{
  checkbox: CheckBox;
  index: number;
  checkDisabled: () => boolean;
  checkDefault: (idx: string) => boolean;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ checkbox, index, checkDisabled, checkDefault, setValid }) => {
  const [showSecondary, setShowSecondary] = useState(false);
  const { text, options } = checkbox;

  useEffect(() => {
    if (checkDefault(`${index}`)) {
      if (index === 0) setValid((prevState) => !prevState);
      setShowSecondary(true);
    }
  }, []);

  return (
    <div className="form-checkbox">
      <input
        className="checkbox"
        type={"checkbox"}
        name={`${index}`}
        value={text}
        onChange={(e) => {
          if (index === 0) setValid((prevState) => !prevState);
          setShowSecondary((prevState) => !prevState);
        }}
        defaultChecked={checkDefault(`${index}`)}
        disabled={checkDisabled()}
      />
      <label>{text}</label>
      {showSecondary && options && (
        <div className="form-secondary">
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
