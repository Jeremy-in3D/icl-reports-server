import { Inputs } from "../data/reports-data";

//Refactor to have all types of reports multiple choice questions to work off the questions property
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
    //  Refactor both the way each type of report renders its content to be more dynamic, then refactor the way I check for completion
    const complete = content.map((content) => {
      const michlolim = this.michlolim;
      if (content === "status") {
        if (michlolim[michlol]?.[content] !== undefined) return true;
      } else if (content === "questions") {
        const answers = Object.entries(michlolim[michlol]?.answers ?? {});
        if (answers.length === reportLength) return true;
      } else if (content === "oil") {
        if (
          michlolim[michlol]?.["status"] !== undefined &&
          michlolim[michlol]?.["wear"] !== undefined &&
          michlolim[michlol]?.["machine"] !== undefined
        )
          return true;
      } else if (content === "quake") {
        if (
          michlolim[michlol]?.["status"] !== undefined &&
          michlolim[michlol]?.["MHI"] !== "0" &&
          michlolim[michlol]?.["machine"] !== undefined
        )
          return true;
      } else if (content === "textarea") {
        return true;
      }
    });
    const areAnyIncomplete = complete.filter((item) => item !== true);
    //Set Michlol completed if true
    if (!areAnyIncomplete.length) {
      this.michlolCompleted[michlol] = true;
      this.michlolim[michlol].dateCompleted = Date.now();
    }
    return areAnyIncomplete.length ? false : true;
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
