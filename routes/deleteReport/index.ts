import { mongo } from "../../server.js";

export async function deleteReport(req: any, res: any) {
  const id = req.body;
  try {
    const deleted = await mongo.removeDoc(
      id,
      "published_reports_directory",
      true
    );
    // if (deleted) {
    //   await mongo.removeDocs(id, "machines");
    //   await mongo.removeDocs(id, "alerts");
    // }
    res.status(200).send("Report deleted Successfully");
  } catch {
    res.status(500).send("Report Deletion Failed");
  }
}
