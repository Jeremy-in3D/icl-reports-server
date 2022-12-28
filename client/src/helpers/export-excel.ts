import { utils, WorkSheet, writeFile } from "xlsx";
import { ReportData } from "../classes/route";

export async function exportExcel(
  reportId: string,
  routeName: string,
  type: ReportData["type"]
) {
  const pullResult = await fetch("/get-docs", {
    method: "POST",
    body: reportId,
  });
  if (pullResult.status === 200) {
    const response = await pullResult.json();
    const workbook = utils.book_new();
    const worksheet = utils.json_to_sheet([]);

    //Add titles to the Worksheet
    utils.sheet_add_json(worksheet, [{}], {
      header: ['מספר דו"ח:', reportId],
      origin: "A1",
    });
    utils.sheet_add_json(worksheet, [{}], {
      header: ["שם מסלול:", routeName],
      origin: "A2",
    });

    if (type === "survey") {
      handleSurveyExport(response, worksheet);
    } else if (type === "engineering") {
      handleEngineeringExport(response, worksheet);
    }

    utils.book_append_sheet(workbook, worksheet, "Data");
    writeFile(workbook, `${reportId}.xlsx`, {
      compression: true,
    });
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
