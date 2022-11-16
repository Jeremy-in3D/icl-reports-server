import React, { useState } from "react";
import { QuestionBank, QuestionTypes } from "../../data/question-bank";

export const CheckboxInput: React.FC<{
  option: QuestionTypes;
  area: QuestionBank[number];
}> = ({ option, area }) => {
  const [checked, setChecked] = useState(false);
  const { text, options } = option;
  let secondary;
  if (checked) {
    if (options) {
      secondary = option.choices;
    }
  }
  return (
    <div>
      <input
        type={"checkbox"}
        name={`${area.id}-${area.name}-${text}`}
        value={text}
        onChange={(e) => {
          setChecked(true);
        }}
      />
      <label>{text}</label>
      {secondary && secondary.map((choice, idx) => <p key={idx}>{choice}</p>)}
    </div>
  );
};
