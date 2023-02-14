import dayjs from "dayjs";
import React from "react";

//Refactor to send different search based on the different search "options" entered as props

export const SearchBtn: React.FC<{
  startDate: React.RefObject<HTMLInputElement>;
  endDate: React.RefObject<HTMLInputElement>;
  setResults: React.Dispatch<React.SetStateAction<any>>;
}> = ({ startDate, endDate, setResults }) => {
  const fromDate = dayjs(startDate.current?.valueAsNumber)
    .startOf("day")
    .format();
  const toDate = dayjs(endDate.current?.valueAsNumber).endOf("day").format();

  return (
    <button
      className="search-btn"
      onClick={async () => {
        const result = await fetch("/search-reports", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            startDate: fromDate,
            endDate: toDate,
          }),
        });
        const data = await result.json();
        setResults(data);
      }}
    >
      חפש
    </button>
  );
};
