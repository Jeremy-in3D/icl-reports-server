import { Inputs } from "../data/reports-data";

export class CreateReport {
  [key: string]: any;
  id: string;
  michlolim: michlolAnswers;
  michlolCompleted: { [id: string]: boolean };

  constructor(id: string) {
    this.id = id;
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
  isMichlolComplete(
    michlol: string,
    content: Inputs[],
    reportLength: number | undefined
  ) {
    const complete = content.map((content) => {
      const michlolim = this.michlolim;
      if (content === "status") {
        if (michlolim[michlol]?.[content] !== undefined) return true;
      } else if (content === "questions") {
        const answers = Object.entries(michlolim[michlol]?.answers ?? {});
        if (answers.length === reportLength) return true;
      } else if (content === "textarea") {
        return true;
      }
    });
    const areAnyIncomplete = complete.filter((item) => item !== true);
    //Set Michlol completed if true
    if (!areAnyIncomplete.length) this.michlolCompleted[michlol] = true;
    return areAnyIncomplete.length ? false : true;
  }
  saveSurvey() {
    return this;
  }
  loadExistingSurvey(data: any) {
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
    answers: {
      [id: string]: string;
    };
  };
}
