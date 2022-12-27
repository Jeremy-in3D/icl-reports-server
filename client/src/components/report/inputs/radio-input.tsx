import React from "react";

export const RadioQuestion: React.FC<{
  text: string;
  name: string;
  id: string;
  value: string;
  checked?: boolean;
}> = ({ text, name, id, value, checked }) => {
  return (
    <div className="radio-question" key={id}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        defaultChecked={checked}
        className="check-with-label"
      />
      <label className="label-for-check" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};
