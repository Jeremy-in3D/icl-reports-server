import { getDateString } from "../helpers/dates";

export class CreateReport {
  [key: string]: any;
  id: string;
  name: string;
  michlolim: michlolAnswers;
  michlolCompleted: { [id: string]: boolean };
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

  setValue(michlol: string, questionId: string, value: string) {
    const michlolim = this.michlolim;
    if (!michlolim[michlol]) michlolim[michlol] = { answers: {} };
    const answers = michlolim[michlol].answers;
    answers[questionId] = value;
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
}

interface michlolAnswers {
  [id: string]: {
    answers: { [id: string]: string };
  };
}
