import React, { useEffect, useState } from "react";

export const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any>(null);

  // useEffect(() => {
  //   (async () => {
  //     const result = await fetch("/find-reports");
  //     const data = await result.json();
  //     setSearchResults(data);
  //   })();
  // }, []);

  var curr = new Date(); // get current date
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  var last = first + 6; // last day is the first day + 6

  var firstday = new Date(curr.setDate(first)).toDateString();
  var lastday = new Date(curr.setDate(last)).toUTCString();
  console.log(firstday);
  console.log(lastday);

  // To make it work when you have different months - var lastday = new Date(curr.setDate(first.getDate()+6)).toUTCString();

  return (
    <div>
      <h1 className="page-title">חיפוש דוחות</h1>
      <div className="search-input">
        <h2></h2>
      </div>
      <div className="search-results">
        <h1 className="search-title">תוצאות</h1>
        <div className="search-headers">
          <p className="search-header">שם</p>
          <p className="search-header">תאריך</p>
        </div>
        <div className="search-items">
          {searchResults &&
            searchResults.map((item: any, idx: number) => (
              <div className="search-item" key={idx}>
                <p className="search-item-name">{item.name}</p>
                <p className="search-item-date">
                  {new Date(item.dateUploaded).toDateString()}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
