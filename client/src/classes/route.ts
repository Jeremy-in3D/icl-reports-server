import { getDateString } from "../helpers/dates";

export class Route {
  [key: string]: any;
  id: string;
  name: string;
  michlolim: michlolAnswers;
  dateUploaded: number | null;

  constructor(report: { id: string; name: string }) {
    this.id = report.id;
    this.name = report.name;
    this.michlolim = {};
    this.michlolCompleted = {};
    this.dateUploaded = null;
  }
  createNewSurvey() {
    this.dateCreated = Date.now();
  }

  setValue(
    michlolId: string,
    michlolName: string,
    machineId: string,
    value: { [id: string]: FormDataEntryValue }
  ) {
    if (!this.michlolim[michlolId]) this.michlolim[michlolId] = {};
    if (!this.michlolim[michlolId][machineId])
      this.michlolim[michlolId][machineId] = {};
    this.michlolim[michlolId][machineId][michlolName] = value;
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

  isMachineComplete(machineId: string) {
    return false;
  }
}

interface michlolAnswers {
  [michlolId: string]: { [machineId: string]: any };
}
