import React from "react";

//Refactor to send different search based on the different search "options" entered as props

export const SearchBtn: React.FC<{
  startDate: React.RefObject<HTMLInputElement>;
  endDate: React.RefObject<HTMLInputElement>;
  setResults: React.Dispatch<React.SetStateAction<any>>;
}> = ({ startDate, endDate, setResults }) => {
  return (
    <button
      className="search-btn"
      onClick={async () => {
        const result = await fetch("/search-reports", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            startDate: startDate.current?.valueAsNumber,
            endDate: endDate.current?.valueAsNumber
              ? endDate.current?.valueAsNumber + 86400000
              : undefined, //Add 1 day in ms to the endDate so it includes the full day
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
