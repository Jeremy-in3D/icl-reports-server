import { mongo } from "../../server.js";

export async function getCurrentReport(req: any, res: any) {
  try {
    const currentReports = await mongo.getDocs("", "reports");
    res.status(200).send(currentReports);
  } catch (err) {
    res.status(500).send();
  }
}
