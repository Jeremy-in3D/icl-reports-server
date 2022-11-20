import { Routes } from "../data/reports-data";
import { getDateString } from "../helpers/dates";

export class Route {
  [key: string]: any;
  id: string;
  name: string;
  michlolim: michlolAnswers;
  dateUploaded: number | null;

  constructor(report: Routes[number]) {
    this.id = report.routeId;
    this.name = report.routeName;
    this.michlolim = {};
    this.michlolCompleted = {};
    this.dateUploaded = null;
  }
  createNewSurvey() {
    this.dateCreated = Date.now();
  }

  setValue(
    michlolName: string,
    machineName: string,
    areaName: string,
    value: { [id: string]: FormDataEntryValue }
  ) {
    if (!this.michlolim[michlolName]) this.michlolim[michlolName] = {};
    if (!this.michlolim[michlolName][machineName])
      this.michlolim[michlolName][machineName] = {};
    this.michlolim[michlolName][machineName][areaName] = value;
  }

  saveSurvey() {
    this.dateUploaded = Date.now();
    this.date = getDateString(new Date(Date.now()));
    return JSON.stringify(this);
  }

  loadExistingSurvey(data: string) {
    const existingData = JSON.parse(data);
    for (let [key, value] of Object.entries(existingData)) {
      this[key] = value;
    }
  }

  isMachineAnswered(michlolName: string, machineName: string) {
    if (this.michlolim[michlolName]?.[machineName]) return true;
    return false;
  }

  isMachineAreaAnswered(
    michlolName: string,
    machineName: string,
    areaName: string
  ) {
    if (this.michlolim[michlolName]?.[machineName]?.[areaName]) return true;
    return false;
  }
}

interface michlolAnswers {
  [michlolId: string]: { [machineId: string]: any };
}
