export class Survey {
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
    if (!this.answers[michlol]) this.answers[michlol] = {};
    this.answers[michlol][questionId] = answer;
  }
  setCompletedMichlol(michlol: string) {
    this.completedMichlol[michlol] = true;
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
  [michlol: string]: { [questionId: string]: string };
}