import React, { useEffect } from "react";
import { utils, writeFile } from "xlsx";

//Use header option to decide the order of the data
//Skip header skips writing the headers in its own row
//Origin enables you to pick the starting point of the JSON addition
//Data will be added from the json objects based on the header and placed accordingly

//Check if extra keys that dont have a header are added automatically,
// if so, then create an array of exportable data and filter by it

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
