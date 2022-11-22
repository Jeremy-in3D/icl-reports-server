import React, { useRef, useState } from "react";
import { getDateString } from "../../helpers/dates";
import { exportExcel } from "../../helpers/export-excel";
import { SearchBtn } from "./search-btn";
import { SearchDate } from "./search-date";

const openIcon = new URL(
  "../../../assets/icons/bar-icons/open-btn.png",
  import.meta.url
);
const exportIcon = new URL(
  "../../../assets/icons/bar-icons/export-btn.png",
  import.meta.url
);
const deleteIcon = new URL(
  "../../../assets/icons/bar-icons/delete-btn.png",
  import.meta.url
);

export const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  return (
    <div className="search">
      <h1 className="page-title">חיפוש דוחות</h1>
      <div className="search-inputs">
        <SearchDate text={"מתאריך"} dateRef={startDateRef} />
        <SearchDate text={"לתאריך"} dateRef={endDateRef} />
      </div>
      <SearchBtn
        startDate={startDateRef}
        endDate={endDateRef}
        setResults={setSearchResults}
      />
      <div className="search-results">
        <h1 className="search-title">תוצאות</h1>
        <div className="search-items">
          {searchResults &&
            searchResults.map((item: any, idx: number) => (
              <div className="search-item">
                <h2>{item.reportId}</h2>
                <p>{item.routeName}</p>
                <p>{new Date(item.dateCreated).toDateString()}</p>
                <div className="search-item-options">
                  <div className="search-option">
                    <p>פתיחה</p>
                    <img
                      onClick={async () => {
                        console.log("open doc");
                      }}
                      className="search-item-btn"
                      src={openIcon.href}
                    ></img>
                  </div>
                  <div className="search-option">
                    <p>ייצוא</p>
                    <img
                      className="search-item-btn"
                      onClick={async () => await exportExcel(item.reportId)}
                      src={exportIcon.href}
                    ></img>
                  </div>
                  <div className="search-option">
                    <p>מחיקה</p>
                    <img
                      onClick={async () => {
                        const answer = confirm("אתה רוצה למחוק את הדוח?");
                        if (answer) {
                          const deleteResult = await fetch("/delete-report", {
                            method: "POST",
                            body: item.reportId,
                          });
                          if (deleteResult.status === 200) {
                            const newSearchResults = searchResults.filter(
                              (result: any, i: number) => i !== idx
                            );

                            setSearchResults(newSearchResults);
                          }
                        }
                      }}
                      className="search-item-btn"
                      src={deleteIcon.href}
                    ></img>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
