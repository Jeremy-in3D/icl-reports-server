import { utils, writeFile } from "xlsx";

export async function exportExcel(reportId: string) {
  const pullResult = await fetch("/get-docs", {
    method: "POST",
    body: reportId,
  });
  if (pullResult.status === 200) {
    const response = await pullResult.json();
    const workbook = utils.book_new();
    const worksheet = utils.json_to_sheet([]);

    //Adds title to worksheet
    utils.sheet_add_json(worksheet, [{}], {
      header: ['מספר דו"ח:', reportId],
    });

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
          let i = 0;
          for (let [key2, value2] of Object.entries(value as any)) {
            const string = `${key}-${i}`;
            sorted[string] = value2;
            dataHeaders.push(string);
            ++i;
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

    utils.book_append_sheet(workbook, worksheet, "Data");
    writeFile(workbook, `${reportId}.xlsx`, {
      compression: true,
    });
  }
}
