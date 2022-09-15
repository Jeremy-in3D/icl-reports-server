export class CreateReport {
  [key: string]: any;
  id: string;
  answers: SurveyAnswers;
  completedMichlol: { [id: string]: boolean };

  constructor(id: string) {
    this.id = id;
    this.answers = {};
    this.completedMichlol = {};
  }
  createNewSurvey() {
    this.dateCreated = Date.now();
  }
  setAnswer(michlol: string, questionId: string, answer: string) {
    if (!this.answers[michlol])
      this.answers[michlol] = { status: "", answers: {} };
    this.answers[michlol]["answers"][questionId] = answer;
  }
  setMichlolStatus(michlol: string, answer: string) {
    if (!this.answers[michlol])
      this.answers[michlol] = { status: "", answers: {} };
    this.answers[michlol]["status"] = answer;
  }
  setFreeText(michlol: string, answer: string) {
    if (!this.answers[michlol])
      this.answers[michlol] = { status: "", answers: {} };
    this.answers[michlol]["text"] = answer;
  }
  isMichlolComplete(michlol: string, reportLength: number) {
    const answers = Object.entries(
      this.answers[michlol]?.answers ?? { status: "", answers: {} }
    );
    console.log(answers);
    console.log(answers.length);
    if (answers.length === reportLength && status.length) {
      this.completedMichlol[michlol] = true;
      return true;
    }
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

interface SurveyAnswers {
  [michlol: string]: {
    text?: string;
    status: string;
    answers: {
      [questionId: string]: string;
    };
  };
}
