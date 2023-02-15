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
    async function exportExcel() {
      // const pullResult = await fetch("/get-docs", {
      //   method: "POST",
      //   body: JSON.stringify({reportId}),
      // });
      // if (pullResult.status === 200) {
      // const response = await pullResult.json();
      // console.log(response);
      const response = [
        {
          _id: "637b852e56bb3d3a621bba01",
          michlolName: "R1-M1",
          machineName: "R-2010-050-209",
          reportId: "R1-1669039325822",
          data: {
            "משפך קבלה": { "0": "כלל הערות למטה תקינות" },
            מנוע: { "1": "מנוע המסוע חם", "1-0": "גבולי" },
          },
        },
        {
          _id: "637b853f572e9571d4e99229",
          michlolName: "R1-M1",
          machineName: "R-2010-050-207",
          reportId: "R1-1669039325822",
          data: {
            משפךקבלה: { "0": "כלל הערות למטה תקינות" },
            מבחן: { "1": "מנוע המסוע חם", "1-0": "גבולי" },
          },
        },
        {
          _id: "637b854b572e9571d4e9922a",
          michlolName: "R1-M2",
          machineName: "R-2010-050-205",
          reportId: "R1-1669039325822",
          data: {
            משפךלה: { "0": "כלל הערות למטה תקינות" },
            מבחכעגן: { "1": "מנוע המסוע חם", "2-0": "קריטי" },
          },
        },
        {
          _id: "637b8550572e9571d4e9922b",
          michlolName: "R1-M3",
          machineName: "R-2010-050-454",
          reportId: "R1-1669039325822",
          data: { "משפך קבלה": { "3": "קיימים מרעדים לא תקינים" } },
        },
      ];
      const workbook = utils.book_new();
      const worksheet = utils.json_to_sheet([]);
      //Filter data into seperate michlolim
      const michlolim = [] as string[];
      response.forEach((machine) => {
        if (!michlolim.includes(machine.michlolName)) {
          michlolim.push(machine.michlolName);
        }
      });
      //Sort the machines into each of the michlolim
      const sortedMachines = michlolim.map((name) => {
        const machines = [] as any;
        response.forEach((machine) => {
          if (machine.michlolName === name) {
            machines.push(machine);
          }
        });
        return machines;
      });

      console.log(sortedMachines);
      //For each michlol, output the data
      sortedMachines.forEach((michlolMachines) => {
        michlolMachines.forEach((machine: any, idx: number) => {
          const { michlolName, machineName, data } = machine;
          const dataHeaders = ["מיכלול", "מכונה"];
          const sorted = {
            מיכלול: michlolName,
            מכונה: machineName,
          } as any;
          for (let [key, value] of Object.entries(data)) {
            let i = 0;
            for (let [key2, value2] of Object.entries(value as any)) {
              const string = `${key}-${i}`;
              sorted[string] = value2;
              dataHeaders.push(string);
              ++i;
            }
          }
          if (idx === 0) {
            utils.sheet_add_json(worksheet, [sorted], {
              origin: -1,
              header: dataHeaders,
            });
          } else {
            utils.sheet_add_json(worksheet, [sorted], {
              origin: -1,
              skipHeader: true,
            });
          }
        });
        utils.sheet_add_json(worksheet, [], {
          origin: -1,
        });
      });

      utils.book_append_sheet(workbook, worksheet, "Data");
      writeFile(workbook, `${123}.xlsx`, {
        compression: true,
      });
      // }
    }

    exportExcel();
  }, []);
  return <div></div>;
};
