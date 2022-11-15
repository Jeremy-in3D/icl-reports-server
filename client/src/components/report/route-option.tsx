import React from "react";

export const RouteOption: React.FC<{
  text: string;
  disabled: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}> = ({ text, disabled, onClick, children }) => {
  return (
    <div className="report-option">
      <button
        className="report-option-button"
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
      {children}
    </div>
  );
};
