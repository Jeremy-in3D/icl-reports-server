import React, { useEffect } from "react";
import { read, utils, writeFile } from "xlsx";

export const Export: React.FC = () => {
  useEffect(() => {
    (async () => {
      const response = await fetch("export-report");
      const data = await response.json();
      const rows = data.map((row: any) => ({
        name: row.name.first + " " + row.name.last,
        birthday: row.bio.birthday,
      }));
      const worksheet = utils.json_to_sheet(rows);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, "Dates");
      writeFile(workbook, "Presidents.xlsx", { compression: true });
    })();
  }, []);
  return <div></div>;
};
