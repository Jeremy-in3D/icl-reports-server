import { Route } from "../classes/route";
import { Context } from "../context/context";

export const createNewReport = async (
  reportInstance: Route,
  newReport: any,
  appContext: Context
) => {
  const reportResponse = await fetch("/create-report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newReport),
  });
  if (reportResponse.status === 200) {
    reportInstance.instantiateReport(newReport);
    const existingReports = [...appContext.reports, newReport];
    appContext.setReports(existingReports);
  } else {
    throw new Error("Failed to create new report");
  }
};

export const getMachines = async (
  reportId: string | undefined,
  reportInstance: Route
) => {
  const reportResponse = await fetch("/get-docs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reportId }),
  });
  if (reportResponse.status === 200) {
    const responseBody = await reportResponse.json();
    reportInstance.loadMachines(responseBody);
  } else {
    throw new Error("Failed to create new report");
  }
};

export const publishReport = async (
  reports: [],
  setReports: React.Dispatch<React.SetStateAction<[]>>,
  setScreen: React.Dispatch<React.SetStateAction<string>>
) => {
  confirm("Are you sure you want to publish the report?");

  if (!reports.length) {
    console.log("No reports to publish");
    return;
  }

  try {
    const response = await fetch("/publish-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reports),
    });

    if (response.status === 200) {
      setReports([]);
      setScreen("home");
    }
  } catch (err) {
    console.log("error publishing report", err);
  }
};
