import React from "react";

export const SurveyChoice: React.FC<{
  text: string;
  disabled: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}> = ({ text, disabled, onClick, children }) => {
  return (
    <div className="survey-choice">
      <button className="survey-btn" disabled={disabled} onClick={onClick}>
        {text}
      </button>
      {children}
    </div>
  );
};
