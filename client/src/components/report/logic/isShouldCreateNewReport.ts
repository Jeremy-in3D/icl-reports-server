import { Route } from "../../../classes/route";

export function isShouldCreateNewReport(
  currentReports: Route[],
  currentRoute: string
) {
  const numberOfMaxReports = 7;
  let isShouldCreateNewReport = true;

  if (currentReports.length >= numberOfMaxReports) {
    isShouldCreateNewReport = false;
  }

  const doesReportAlreadyExist = currentReports.map((report) => {
    if (report.routeName == currentRoute) {
      isShouldCreateNewReport = false;
    }
  });

  return isShouldCreateNewReport;
}
