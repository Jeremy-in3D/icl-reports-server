export class CreateReport {
  [key: string]: any;
  id: string;
  name: string;
  michlolim: michlolAnswers;
  michlolCompleted: { [id: string]: boolean };

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.michlolim = {};
    this.michlolCompleted = {};
  }
  createNewSurvey() {
    this.dateCreated = Date.now();
  }
  setValue(
    michlol: string,
    identifier: string,
    value: string,
    answer?: boolean
  ) {
    const michlolim = this.michlolim;
    if (!michlolim[michlol]) michlolim[michlol] = { answers: {} };
    if (!answer) {
      michlolim[michlol][identifier] = value;
    } else {
      michlolim[michlol]["answers"][identifier] = value;
    }
  }
  saveSurvey() {
    return this;
  }
  loadExistingSurvey(data: string) {
    const existingData = JSON.parse(data);
    for (let [key, value] of Object.entries(existingData)) {
      this[key] = value;
    }
  }
}

interface michlolAnswers {
  [michlol: string]: {
    [id: string]: string | {} | undefined;
    status?: string;
    text?: string;
    machine?: string;
    wear?: string;
    mhi?: string;
    answers: {
      [id: string]: string;
    };
  };
}
