import { ReportDetails } from "../components/report/machine";
import { Routes } from "../data/reports-data";
import { getDateString } from "../helpers/dates";

export class Route {
  routeId: string;
  routeName: string;
  machines: Machines;
  dateCreated: number | null;
  reportId: string | null;
  date?: string;

  constructor(report: Routes[number]) {
    this.routeId = report.routeId;
    this.routeName = report.routeName;
    this.machines = {};
    this.dateCreated = null;
    this.reportId = null;
  }

  newReport() {
    this.dateCreated = Date.now();
    this.date = getDateString(new Date(Date.now()));
    this.reportId = `${this.routeId}-${this.dateCreated}`;
  }

  loadReport(data: string) {
    const existingData: Route = JSON.parse(data);
    for (let [key, value] of Object.entries(existingData)) {
      //@ts-ignore
      this[key] = value;
    }
  }

  getReport() {
    return JSON.stringify(this);
  }

  saveReportToLocal() {
    localStorage.setItem(this.routeId, this.getReport());
  }

  setValue(reportDetails: ReportDetails, value: FormSubmission) {
    const { machineName, michlolName, michlolId, partName } = reportDetails;
    if (!this.machines[machineName])
      this.machines[machineName] = this.createMachine(
        michlolName,
        michlolId,
        machineName
      );
    this.machines[machineName].data[partName] = value;
    this.saveReportToLocal();
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
      routeName: this.routeName,
      routeId: this.routeId,
      reportId: this.reportId!,
      dateCreated: this.dateCreated,
      data: {},
    };
  }

  isPartComplete(machineName: string, partName: string) {
    const part = this.machines[machineName]?.data?.[partName];
    if (part) {
      if (part.excelOutput) return true;
    }
    return false;
  }

  isMachineComplete(machineName: string) {
    const machine = this.machines[machineName];
    if (machine) {
      return machine.completed ? "completed" : "partial";
    }
    return "incomplete";
  }

  markMachineComplete(machineName: string) {
    const machine = this.machines[machineName];
    if (machine) {
      machine.completed = true;
      this.saveReportToLocal();
    }
  }

  isQuestionAnswered(machineName: string, partName: string, index: string) {
    if (this.machines[machineName]?.data?.[partName]?.[index]) return true;
    return false;
  }

  sendMachineData(machineName: string) {
    const machine = this.machines[machineName];
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

export type Machines = {
  [machineName: string]: MachineData;
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
