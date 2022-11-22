import React, { useRef, useState } from "react";
import { deleteReport } from "../../helpers/delete-report";
import { exportExcel } from "../../helpers/export-excel";
import { SearchBtn } from "./search-btn";
import { SearchDate } from "./search-date";
import { SearchOption } from "./search-option";

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
                  <SearchOption
                    text={"פתיחה"}
                    href={openIcon.href}
                    onClick={() => {}}
                  />
                  <SearchOption
                    text={"ייצוא"}
                    href={exportIcon.href}
                    onClick={() => exportExcel(item.reportId)}
                  />
                  <SearchOption
                    text={"מחיקה"}
                    href={deleteIcon.href}
                    onClick={() =>
                      deleteReport(
                        item.reportId,
                        searchResults,
                        idx,
                        setSearchResults
                      )
                    }
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
