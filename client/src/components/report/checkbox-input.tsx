import React, { useState } from "react";
import { QuestionBank, QuestionTypes } from "../../data/question-bank";

export const CheckboxInput: React.FC<{
  option: QuestionTypes;
  area: QuestionBank[number];
  idx: number;
  check: () => boolean;
  setFirstChecked: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ option, area, idx, check, setFirstChecked }) => {
  const [checked, setChecked] = useState(false);
  const { text, options } = option;
  let secondary = null;
  if (checked) {
    if (options) {
      secondary = option.choices;
    }
  } else secondary = null;

  return (
    <div>
      <input
        type={"checkbox"}
        name={`${area.id}-${area.name}-${text}`}
        value={text}
        onChange={(e) => {
          if (idx === 0) setFirstChecked((prevState) => !prevState);
          setChecked((prevState) => !prevState);
        }}
        disabled={check()}
      />
      <label>{text}</label>
      {secondary &&
        secondary.map((choice, i) => (
          <div key={`${area.id}-${area.name}-${text}-${choice}-${i}`}>
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
  );
};
