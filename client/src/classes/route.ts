import { ReportDetails } from "../components/report/machine";
import { Routes } from "../data/reports-data";
import { getDateString } from "../helpers/dates";

//Refactor to KEY in of
export class Route {
  [key: string]: any;
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
    const existingData = JSON.parse(data);
    for (let [key, value] of Object.entries(existingData)) {
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
      this.machines[machineName] = {
        completed: false,
        id: null,
        michlolName,
        michlolId,
        machineName,
        routeName: this.routeName,
        routeId: this.routeId,
        reportId: this.reportId!,
        dateCreated: this.dateCreated,
        data: {},
      };
    this.machines[machineName].data[partName] = value;
    this.saveReportToLocal();
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

  markMachineComplete(machineName: string, id: string) {
    const machine = this.machines[machineName];
    if (machine) {
      machine.completed = true;
      machine.id = id;
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
      machine.completed = true;
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

  reportIsSubmitted() {
    return this.reportSubmitted;
  }
}

export type Machines = {
  [machineName: string]: {
    completed: boolean;
    id: string | null;
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
};

export type FormSubmission = {
  [id: string]: FormDataEntryValue;
  excelOutput: string;
  alert: string;
};

export type MachineData = {
  _id: string;
  id: string | null;
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

export type AlertData = {
  _id: string;
  id: string | null;
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
