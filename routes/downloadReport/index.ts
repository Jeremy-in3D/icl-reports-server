import { mongo } from "../../server.js";

export async function downloadReport(req: any, res: any) {
  let publishedReport;
  const reportIds: any[] = [];
  const resToSend: any = {};
  try {
    if (typeof req.body === "string") {
      publishedReport = JSON.parse(req.body);
    } else {
      publishedReport = req.body;
    }
    if (!publishedReport || !publishedReport.length) {
      return;
    }
    publishedReport.forEach((report: any) => reportIds.push(report.reportId));
    // const reportFromReportHistory = await mongo.SearchForMultipleDocs(
    //   reportIds,
    //   "reports_history"
    // );
    const machinesForReport = await mongo.SearchForMultipleDocs(
      reportIds,
      "machines"
    );

    machinesForReport.forEach((machine) => {
      const engineeringReport = ['דו"ח רעידות', 'דו"ח מערכת שמן'];
      const machineToSend = {
        routeName: machine.routeName,
        lastEditBy: machine.lastEditBy?.name,
        equipmentUnit: machine.equipmentUnit,
        data: machine.data,
        michlolName: machine.machlolName,
        completed: machine.completed,
        surveyType: engineeringReport.includes(machine.routeName)
          ? "engineering"
          : "survey",
      };
      resToSend[machine.routeName] = machineToSend;
    });

    res.status(200).send(resToSend);
  } catch {}
  // const currentReports = await mongo.getDocs("", "reports");
  // res.status(200).send(resToSend);
}
