import React from "react";

export async function deleteReport(
  reportId: string,
  routeId: string,
  results: any,
  idx: number,
  setResults: React.Dispatch<React.SetStateAction<any>>
) {
  const answer = confirm("אתה רוצה למחוק את הדוח?");
  if (answer) {
    const deleteResult = await fetch("/delete-report", {
      method: "POST",
      body: reportId,
    });
    if (deleteResult.status === 200) {
      const newSearchResults = results.filter(
        (result: any, i: number) => i !== idx
      );
      const localitem = localStorage.getItem(routeId);
      if (localitem) {
        const report = JSON.parse(localitem);
        if (report.reportId === reportId) {
          localStorage.removeItem(routeId);
        }
      }
      setResults(newSearchResults);
    }
  }
}
