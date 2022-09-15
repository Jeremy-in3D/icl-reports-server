import React from "react";

export const ReportOption: React.FC<{
  text: string;
  disabled: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}> = ({ text, disabled, onClick, children }) => {
  return (
    <div className="report-option">
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
      {children}
    </div>
  );
};
