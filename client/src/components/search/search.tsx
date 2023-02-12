import React, { useRef, useState } from "react";
import { deleteReport } from "../../helpers/delete-report";
import { exportExcel } from "../../helpers/export-excel";
import { SearchBtn } from "./search-btn";
import { SearchDate } from "./search-date";
import { SearchOption } from "./search-option";
import { downloadIcon, viewIcon, deleteIcon } from "../../data/imports";
import { ReportData, Route } from "../../classes/route";

export const Search: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  reportInstance: Route;
}> = ({ setScreen, reportInstance }) => {
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
            searchResults.map((item: ReportData, idx: number) => (
              <div className="search-item" key={item.reportId}>
                <h2>{item.reportId}</h2>
                <p>{item.routeName}</p>
                <p>{new Date(item.createdAt).toDateString()}</p>
                <div className="search-item-options">
                  <SearchOption
                    text={"פתיחה"}
                    href={viewIcon.href}
                    onClick={async () => {
                      reportInstance.instantiateReport(item);
                      const result = await fetch("/get-docs", {
                        method: "POST",
                        body: item.reportId,
                      });
                      const data = await result.json();
                      reportInstance.loadMachines(data);
                      setScreen("report");
                    }}
                  />
                  <SearchOption
                    text={"הורדה"}
                    href={downloadIcon.href}
                    onClick={() =>
                      exportExcel(item.reportId, item.routeName, item.type)
                    }
                  />
                  <SearchOption
                    text={"מחיקה"}
                    href={deleteIcon.href}
                    onClick={() => {
                      deleteReport(
                        item.reportId,
                        searchResults,
                        idx,
                        setSearchResults
                      );
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
