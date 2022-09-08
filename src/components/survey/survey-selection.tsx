import React from "react";

export const SurveySelection: React.FC<{
  text: string;
  click: () => void;
}> = ({ text, click }) => (
  <button className="survey-selection" onClick={click}>
    {text}
  </button>
);
