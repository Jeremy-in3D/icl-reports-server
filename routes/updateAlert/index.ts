import { mongo } from "../../server.js";

export async function updateAlert(req: any, res: any) {
  const data = req.body;

  try {
    const machineData = await mongo.find({ reportId: data }, "machines");
    if (machineData[0]) {
      const machine = { ...machineData[0] };
      machine.completed = true;
      for (const [key, value] of Object.entries(machine.data)) {
        if (typeof value === "string") {
          machine.data.alert = false;
          continue;
        }
        for (const [dataKey, dataValue] of Object.entries(
          value as { [s: string]: unknown }
        )) {
          if (key == "alert") {
            machine.data[dataKey].alert = "false";
          }
        }
      }
    }
    await mongo.removeDoc(data, "alerts");
    res.status(200).send();
  } catch (e) {
    res.status(500).send(`Error + ${e}`);
  }
}
