import React from "react";

export const ReportsAvailable: React.FC<{
  text: string;
  click: () => void;
}> = ({ text, click }) => (
  <button className="report-button" onClick={click}>
    {text}
  </button>
);
