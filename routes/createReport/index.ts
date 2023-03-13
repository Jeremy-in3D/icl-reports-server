import { mongo } from "../../server.js";
import { ReportData } from "../../server.js";

export async function createReport(req: any, res: any) {
  const data: ReportData = req.body;
  try {
    const inserted = await mongo.insertDoc(data, "reports");
    res.status(200).send(inserted.insertedId.toString());
  } catch (e) {
    res.status(500).send("Error" + e);
  }
}
