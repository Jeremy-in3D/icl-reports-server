import { mongo } from "../../server.js";

export async function searchReports(req: any, res: any) {
  const data = req.body;
  try {
    const reportHistoryresults = await mongo.searchDocs(
      data,
      "published_reports_directory"
    );
    // const machineHistoryResults = await mongo.searchDocs(data, "machines");

    res.status(200).json(reportHistoryresults);
  } catch (e) {
    res.status(500).send(e);
  }
}
