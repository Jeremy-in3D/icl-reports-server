import React from "react";

export const ReportSelection: React.FC<{
  text: string;
  click: () => void;
}> = ({ text, click }) => (
  <button className="report-selection" onClick={click}>
    {text}
  </button>
);
