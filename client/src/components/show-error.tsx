import React from "react";

export const ShowError: React.FC<{
  message: string;
}> = ({ message }) => {
  return (
    <div className="error-wrapper">
      <p className="error">{message}</p>
    </div>
  );
};
