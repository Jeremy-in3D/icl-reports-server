import React from "react";

export async function deleteReport(
  reportId: string,
  results: any,
  idx: number,
  setResults: React.Dispatch<React.SetStateAction<any>>
) {
  const answer = confirm(
    "אתה רוצה למחוק את הדוח?\n This will permanently delete the report"
  );
  if (answer) {
    const deleteResult = await fetch("/delete-report", {
      method: "POST",
      body: reportId,
    });
    if (deleteResult.status === 200) {
      const newSearchResults = results.filter(
        (result: any, i: number) => i !== idx
      );
      setResults(newSearchResults);
    }
  }
}
