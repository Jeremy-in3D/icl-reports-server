import { mongo } from "../../server.js";

export async function getPublishedReport(req: any, res: any) {
  try {
    const resToSend: any = {};

    const { report, route } = req.body;

    if (!report || !route) return;

    const getRouteNameAndIdForReport = report.publishedReport.map(
      async (routeFromPublishedReport: any, index: Number) => {
        if (route == routeFromPublishedReport.routeName) {
          const reportFromReportHistory = await mongo.find(
            { reportId: routeFromPublishedReport.reportId },
            "reports_history"
          );
          const machinesForReport = await mongo.getDocs(
            routeFromPublishedReport.reportId,
            "machines"
          );

          resToSend.reportFromReportHistory = reportFromReportHistory[0];
          resToSend.machinesForReport = machinesForReport;
        }
      }
    );

    await Promise.all(getRouteNameAndIdForReport);

    res.status(200).send(resToSend);
  } catch {
    res.status(500).send();
  }
}
