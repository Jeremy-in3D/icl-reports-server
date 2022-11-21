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
        id: null,
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

  markMachineComplete(machineName: string, id: string) {
    const machine = this.machines[machineName];
    if (machine) {
      machine.completed = true;
      machine.id = id;
    }
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
      const finalData = { ...data, reportId: this.reportId };
      return JSON.stringify(finalData);
    }
  }
}

interface Machines {
  [machineName: string]: {
    completed: boolean;
    id: string | null;
    michlolName: string;
    machineName: string;
    data: { [partName: string]: any };
  };
}

// this.dateUploaded = Date.now();
// this.date = getDateString(new Date(Date.now()));
