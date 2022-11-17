import React, { useEffect, useRef, useState } from "react";
import { getDateString } from "../../helpers/dates";

const openIcon = new URL(
  "../../../assets/icons/report-icons/open-btn.png",
  import.meta.url
);

export const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any>(null);
  const currentDate = useRef(new Date(Date.now()));
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1 className="page-title">חיפוש דוחות</h1>
      <div className="search-inputs">
        <div className="search-date-wrapper">
          <h2 className="search-date">מתאריך</h2>
          <input
            ref={startDateRef}
            className="search-date-input"
            type={"date"}
            defaultValue={getDateString(currentDate.current)}
          ></input>
        </div>
        <div className="search-date-wrapper">
          <h2 className="search-date">לתאריך</h2>
          <input
            ref={endDateRef}
            className="search-date-input"
            type={"date"}
            defaultValue={getDateString(currentDate.current)}
          ></input>
        </div>
      </div>
      <button
        className="search-btn"
        onClick={async () => {
          const result = await fetch("/search-reports", {
            method: "POST",
            body: JSON.stringify({
              startDate: startDateRef.current!.valueAsNumber,
              endDate: endDateRef.current!.valueAsNumber + 86400000, //Add 1 day in ms to the endDate so it includes the full day
            }),
          });
          const data = await result.json();
          setSearchResults(data);
        }}
      >
        Search
      </button>
      <div className="search-results">
        <h1 className="search-title">תוצאות</h1>
        <div className="search-headers">
          <p className="search-header">שם</p>
          <p className="search-header">תאריך</p>
          <p className="search-header">פתיחה</p>
        </div>
        <div className="search-items">
          {searchResults &&
            searchResults.map((item: any, idx: number) => (
              <div className="search-item" key={idx}>
                <p className="search-item-name">{item.name}</p>
                <p className="search-item-date">
                  {new Date(item.dateUploaded).toDateString()}
                </p>
                <div>
                  <img
                    onClick={() => {
                      console.log(item);
                    }}
                    className="search-item-btn"
                    src={openIcon.href}
                  ></img>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};