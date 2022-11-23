import { ReportDetails } from "../components/report/machine";
import { Routes } from "../data/reports-data";
import { getDateString } from "../helpers/dates";

//Refactor to KEY in of
export class Route {
  [key: string]: any;
  id: string;
  name: string;
  machines: Machines;
  dateCreated: number | null;
  reportId: string | null;
  reportSubmitted: boolean;

  constructor(report: Routes[number]) {
    this.id = report.routeId;
    this.name = report.routeName;
    this.machines = {};
    this.dateCreated = null;
    this.reportId = null;
    this.reportSubmitted = false;
  }

  newReport() {
    this.dateCreated = Date.now();
    this.date = getDateString(new Date(Date.now()));
    this.reportId = `${this.id}-${this.dateCreated}`;
    localStorage.setItem(this.id, this.saveReport());
  }

  loadReport(data: string) {
    const existingData = JSON.parse(data);
    for (let [key, value] of Object.entries(existingData)) {
      this[key] = value;
    }
  }

  saveReport() {
    return JSON.stringify(this);
  }

  setValue(
    reportDetails: ReportDetails,
    value: { [id: string]: FormDataEntryValue }
  ) {
    const { machineName, michlolName, michlolId, partName } = reportDetails;
    if (!this.machines[machineName])
      this.machines[machineName] = {
        completed: false,
        id: null,
        michlolName,
        michlolId,
        machineName,
        reportId: this.reportId!,
        data: {},
      };
    this.machines[machineName].data[partName] = value;
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
    }
  }

  isPartComplete(machineName: string, partName: string) {
    const part = this.machines[machineName]?.data?.[partName];
    if (part) {
      if (Object.entries(part).length) return true;
    }
    return false;
  }

  isQuestionAnswered(machineName: string, partName: string, index: string) {
    if (this.machines[machineName]?.data?.[partName]?.[index]) return true;
    return false;
  }

  sendMachineData(machineName: string) {
    const machine = this.machines[machineName];
    if (machine) {
      const { completed, id, ...data } = machine;
      machine.completed = true;
      return JSON.stringify(data);
    }
  }

  sendReportData() {
    const data = {
      dateCreated: this.dateCreated,
      routeId: this.id,
      routeName: this.name,
      reportId: this.reportId,
    };
    return JSON.stringify(data);
  }
  reportIsSubmitted() {
    return this.reportSubmitted;
  }

  markReportSubmitted() {
    this.reportSubmitted = true;
  }
}

interface Machines {
  [machineName: string]: {
    completed: boolean;
    id: string | null;
    michlolName: string | undefined;
    michlolId: string | undefined;
    machineName: string;
    reportId: string;
    data: { [partName: string]: any };
  };
}
