import React from "react";
import { getDateString } from "../../helpers/dates";

export const SearchDate: React.FC<{
  text: string;
  dateRef: React.RefObject<HTMLInputElement>;
}> = ({ text, dateRef }) => {
  const defaultDate = getDateString(new Date(Date.now()));

  return (
    <div className="search-date-wrapper">
      <h2 className="search-date">{text}</h2>
      <input
        ref={dateRef}
        className="search-date-input"
        type={"date"}
        defaultValue={defaultDate}
      ></input>
    </div>
  );
};
