import { mongo } from "../../server.js";

export async function getDocs(req: any, res: any) {
  let value = req.body;
  if (typeof value == "string") {
    value = JSON.parse(value);
  }

  const { reportId, isFromAlerts, isAlertFromCurrentReport, isShowFullReport } =
    value || {};
  const reponseToSendForAlerts: any = {};

  if (!reportId) {
    throw new Error("reportId is required");
  }

  try {
    const results = await mongo.getDocs(reportId, "machines");

    if (isFromAlerts) {
      if (isAlertFromCurrentReport && isShowFullReport) {
        const routesToReturn = await mongo.getDocs("", "reports");
        reponseToSendForAlerts.reportHistoryResults = routesToReturn;
      }

      if (isAlertFromCurrentReport && !isShowFullReport) {
        const relevantReport = await mongo.findGeneric({ reportId }, "reports");
        reponseToSendForAlerts.reportHistoryResults = relevantReport[0];
      }

      if (!isAlertFromCurrentReport && isShowFullReport) {
        const publishedReportFromAlert = await mongo.findGeneric(
          {
            publishedReport: {
              $elemMatch: { reportId },
            },
          },
          "published_reports_directory"
        );
        reponseToSendForAlerts.reportHistoryResults = publishedReportFromAlert;
      }

      if (!isAlertFromCurrentReport && !isShowFullReport) {
        const relevantReport = await mongo.findGeneric(
          { reportId },
          "reports_history"
        );
        reponseToSendForAlerts.reportHistoryResults = relevantReport[0];
      }

      reponseToSendForAlerts.results = results;
    }

    const resultsToSend = isFromAlerts ? reponseToSendForAlerts : results;
    console.log(`Report queried successfully with id ${reportId}`);
    res.status(200).json(resultsToSend);
  } catch (e) {
    res.status(500).send(e);
  }
}
