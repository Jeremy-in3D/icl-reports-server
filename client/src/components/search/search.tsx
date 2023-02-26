import React, { useRef, useState, useContext } from "react";
import { deleteReport } from "../../helpers/delete-report";
import { exportExcel } from "../../helpers/export-excel";
import { SearchBtn } from "./search-btn";
import { SearchDate } from "./search-date";
import { SearchOption } from "./search-option";
import { downloadIcon, viewIcon, deleteIcon } from "../../data/imports";
import { ReportData, Route } from "../../classes/route";
import dayjs from "dayjs";
import AppContext, { Context } from "../../context/context";

export const Search: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setRoutes: React.Dispatch<React.SetStateAction<any>>;
  reportInstance: Route;
}> = ({ setScreen, reportInstance, setRoutes }) => {
  const [searchResults, setSearchResults] = useState<any>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const appContext = useContext<Context>(AppContext);

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
              <div className="search-item" key={item._id}>
                <h2>{item.reportId}</h2>
                <p>Published by: {appContext.user.username}</p>
                <p>
                  Published:{" "}
                  {dayjs(item.publishedAt).format("MM/DD/YYYY HH:mm:ss")}
                </p>
                <div className="search-item-options">
                  <SearchOption
                    text={"פתיחה"}
                    href={viewIcon.href}
                    onClick={async () => {
                      appContext.setSelectedReport(item);
                      reportInstance = new Route();
                      //On click, fetches the routes, once fetched, sets routes data, and screen to report
                      const response = await fetch("/get-routes");
                      const data = await response.json();
                      setRoutes(data);
                      setScreen("report");
                    }}
                  />
                  <SearchOption
                    text={"הורדה"}
                    href={downloadIcon.href}
                    onClick={() => {
                      const id = "R2-2023-02-23T14:58:44+02:00";
                      const name = "משלוחים";
                      const type = "survey";
                      exportExcel(id, name, type);
                      // exportExcel(item.reportId, item.routeName, item.type);
                    }}
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
