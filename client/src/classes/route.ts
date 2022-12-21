import { ReportDetails } from "../components/report/machine";
import { MachineFilter } from "../components/report/route-view";
import { Routes } from "../data/reports-data";
import { getDateString } from "../helpers/dates";

export class Route {
  reportId?: string | null;
  routeId?: string;
  routeName?: string;
  dateCreated?: number | null;
  date?: string;
  michlolim?: Routes[number]["michlolim"];
  data: {
    [machineName: string]: MachineData;
  };

  constructor() {
    this.data = {};
  }

  newReport(report: Routes[number]): ReportData {
    const timestamp = Date.now();
    return {
      dateCreated: timestamp,
      date: getDateString(new Date(Date.now())),
      reportId: `${report.routeId}-${timestamp}`,
      routeId: report.routeId,
      routeName: report.routeName,
      michlolim: report.michlolim,
      data: {},
    };
  }

  instantiateReport(report: ReportData) {
    this.reportId = report.reportId;
    this.routeId = report.routeId;
    this.routeName = report.routeName;
    this.dateCreated = report.dateCreated;
    this.date = report.date;
    this.michlolim = report.michlolim;
  }

  getMachineComplete(machineName: string): MachineFilter {
    const machine = this.data?.[machineName];
    if (machine) {
      return machine.completed ? "הושלם" : "חלקי";
    }
    return "לא הושלם";
  }

  setValue(reportDetails: ReportDetails, value: FormSubmission) {
    const { machineName, michlolName, michlolId, partName } = reportDetails;
    if (!this.data[machineName])
      this.data[machineName] = this.createMachine(
        michlolName,
        michlolId,
        machineName
      );
    this.data[machineName].data[partName] = value;
  }

  createMachine(
    michlolName: string,
    michlolId: string,
    machineName: string
  ): MachineData {
    return {
      completed: false,
      uniqueId: `${this.reportId}: ${machineName}`,
      michlolName,
      michlolId,
      machineName,
      routeName: this.routeName!,
      routeId: this.routeId!,
      reportId: this.reportId!,
      dateCreated: this.dateCreated!,
      data: {},
    };
  }

  isPartComplete(machineName: string, partName: string) {
    const part = this.data?.[machineName]?.data?.[partName];
    if (part) {
      if (part.excelOutput) return true;
    }
    return false;
  }

  setMachineComplete(machineName: string) {
    const machine = this.data?.[machineName];
    if (machine) {
      machine.completed = true;
    }
  }

  isQuestionAnswered(machineName: string, partName: string, index: string) {
    if (this.data?.[machineName]?.data?.[partName]?.[index]) return true;
    return false;
  }

  sendMachineData(machineName: string) {
    const machine = this.data?.[machineName];
    if (machine) {
      const { completed, ...data } = machine;
      return JSON.stringify(data);
    }
  }

  sendReportData() {
    const data = {
      dateCreated: this.dateCreated,
      routeId: this.routeId,
      routeName: this.routeName,
      reportId: this.reportId,
    };
    return JSON.stringify(data);
  }
}

type ReportData = {
  reportId: string;
  routeId: string;
  routeName: string;
  dateCreated: number;
  date: string;
  michlolim: Routes[number]["michlolim"];
  data: {
    [machineName: string]: MachineData;
  };
};

export type FormSubmission = {
  [id: string]: FormDataEntryValue;
  excelOutput: string;
  alert: string;
};

export type MachineData = {
  completed: boolean;
  uniqueId: string;
  reportId: string;
  routeName: string;
  routeId: string;
  michlolName: string | undefined;
  michlolId: string | undefined;
  machineName: string;
  dateCreated: number | null;
  data: {
    [partName: string]: FormSubmission;
  };
};

export type AlertData = {
  uniqueId: string | null;
  completed: boolean;
  michlolName: string | undefined;
  michlolId: string | undefined;
  machineName: string;
  routeName: string;
  routeId: string;
  reportId: string;
  dateCreated: number | null;
  data: {
    [partName: string]: FormSubmission;
  };
};
