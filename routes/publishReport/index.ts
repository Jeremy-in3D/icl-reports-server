import dayjs from "dayjs";
import { mongo } from "../../server.js";

export async function publishReport(req: any, res: any) {
  const { reports, user } = req.body || {};

  if (!reports || !reports.length) {
    console.log("never made it out of the return");
    return;
  }

  const publishedAt = dayjs().format();

  const publishedReportReference = reports?.map((report: any) => {
    return {
      type: report.type,
      date: report.date,
      createdAt: report.createdAt,
      reportId: report.reportId,
      routeName: report.routeName,
      routeId: report.routeId,
      completedMachines: report.completedMachines,
    };
  });

  reports?.forEach((report: any) => {
    delete report._id;
    report.publishedAt = publishedAt;
    report.publishedBy = user.username;
  });
  try {
    const publishReports = await mongo.insertMany(reports, "reports_history");

    if (publishReports.acknowledged === true) {
      await mongo.insertDoc(
        {
          publishedBy: user.username,
          publishedAt,
          publishedReport: publishedReportReference,
        },
        "published_reports_directory"
      );

      await mongo.clearCollection("reports");
    }
    res.status(200).send(publishReports);
  } catch (e) {
    res.status(500).send(e);
  }
}
