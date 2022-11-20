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

  constructor(report: Routes[number]) {
    this.id = report.routeId;
    this.name = report.routeName;
    this.machines = {};
    this.dateCreated = null;
    this.reportId = null;
  }

  newReport() {
    this.dateCreated = Date.now();
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
    machineName: string,
    partName: string,
    michlolName: string,
    value: { [id: string]: FormDataEntryValue }
  ) {
    if (!this.machines[machineName])
      this.machines[machineName] = {
        completed: false,
        michlolName,
        machineName,
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

  isPartComplete(machineName: string, partName: string) {
    if (this.machines[machineName]?.data?.[partName]) return true;
    return false;
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
      return data;
    }
  }
}

interface Machines {
  [machineName: string]: {
    completed: boolean;
    michlolName: string;
    machineName: string;
    data: { [partName: string]: any };
  };
}

// this.dateUploaded = Date.now();
// this.date = getDateString(new Date(Date.now()));
