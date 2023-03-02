import { utils, WorkSheet, writeFile } from "xlsx";
import { ReportData } from "../classes/route";
import { arrayOfRouteNames } from "../components/report/common/reportTypes";

// const id = "R2-2023-02-23T14:58:44+02:00";
// const name = "משלוחים";
// const type = "survey";

export async function exportExcel(
  // reportId: string,
  // routeName: string,
  // type: ReportData["type"]
  report: any[] | undefined
) {
  try {
    const pullResult = await fetch("/download-report", {
      method: "POST",
      body: JSON.stringify(report),
    });

    if (pullResult.status === 200) {
      const response = await pullResult.json();
      console.log({ response });

      const responseArray = [];
      for (const [key, value] of Object.entries(response)) {
        responseArray.push({ [key]: value });
      }
      const workbook = utils.book_new();
      const worksheet = utils.json_to_sheet([]);

      arrayOfRouteNames.forEach((route, index) => {
        if (!response[route]) {
          index = index - 1;
          return;
        }
        console.log(response[route]);
        utils.sheet_add_json(worksheet, [{}], {
          header: ["שם מסלול:", route],
          origin: `A${index * 5 + 1}`,
        });
        utils.sheet_add_json(worksheet, [{}], {
          header: ["יחידת ציוד:", response[route]?.equipmentUnit],
          origin: `A${index * 8 + 2}`,
        });
        // const cellAddress = utils.encode_cell({ r: index * 8 + 2, c: 0 });
        // // Set the fill color of the cell
        // worksheet[cellAddress].s = {
        //   fill: {
        //     type: "pattern",
        //     patternType: "solid",
        //     fgColor: { rgb: "FFFF0000" },
        //   },
        // };
        utils.sheet_add_json(worksheet, [{}], {
          header: ["עריכה אחרונה על ידי:", response[route]?.lastEditBy],
          origin: `A${index * 8 + 3}`,
        });
        if (!response[route].data) {
          index = index - 1;
          return;
        }
        let count = 4;
        for (const [key, value] of Object.entries(response[route].data)) {
          const stringified = JSON.stringify(response[route].data);
          utils.sheet_add_json(worksheet, [{}], {
            header: [`${key}`, stringified],
            origin: `B${index * 8 + count}`,
          });
          count++;
        }
        // utils.sheet_add_json(worksheet, [{}], {
        //   header: ["data", response[route]?.JSON.stringify(data)],
        //   origin: `A${index * 10 + 3}`,
        // });
      });

      //Add titles to the Worksheet
      // utils.sheet_add_json(worksheet, [{}], {
      //   header: ['מספר דו"ח:', "hello"],
      //   origin: "A1",
      // });
      // utils.sheet_add_json(worksheet, [{}], {
      //   header: ["שם מסלול:", "world"],
      //   origin: "A2",
      // });

      // if (type === "survey") {
      //   handleSurveyExport(response, worksheet);
      // } else if (type === "engineering") {
      //   handleEngineeringExport(response, worksheet);
      // }

      utils.book_append_sheet(workbook, worksheet, "Data");
      writeFile(workbook, `${"icl_report"}.xlsx`, {
        compression: true,
      });
    }
  } catch (e) {
    console.error(e);
  }
}

function handleEngineeringExport(response: any, worksheet: WorkSheet) {
  console.log(response);
  response.forEach((machine: any, idx: number) => {
    const dataHeaders = ["מכונה"];
    const { machineName, data } = machine;
    const sorted = {
      מכונה: machineName,
    } as any;
    //Map the key,value pairs into the sorted array, but also add to headers
    for (let [key, value] of Object.entries(data)) {
      sorted[key] = value;
      dataHeaders.push(key);
    }
    //Add headers in output if it is the first row
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
}

function handleSurveyExport(response: any, worksheet: WorkSheet) {
  //Filter data into seperate michlolim
  const michlolim = [] as string[];
  response.forEach((machine: any) => {
    if (!michlolim.includes(machine.michlolName)) {
      michlolim.push(machine.michlolName);
    }
  });

  //Sort the machines into each of the michlolim
  const sortedMachines = michlolim.map((name) => {
    const machines = [] as any;
    response.forEach((machine: any) => {
      if (machine.michlolName === name) {
        machines.push(machine);
      }
    });
    return machines;
  });

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
        //@ts-ignore
        sorted[key] = value.excelOutput;
        dataHeaders.push(key);
        //@ts-ignore
        if (value["טקסט חופשי"]) {
          //@ts-ignore
          sorted[`${key}-טקסט`] = value["טקסט חופשי"];
          dataHeaders.push(`${key}-טקסט`);
        }
      }
      //Add headers in output if it is the first row
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
    //Skips line between each michlol
    utils.sheet_add_json(worksheet, [], {
      origin: -1,
    });
  });
}
