export class Survey {
  [key: string]: any;
  id: string;
  answers: SurveyAnswers;
  completed: { [id: string]: boolean };

  constructor(id: string) {
    this.id = id;
    this.answers = {};
    this.completed = {};
  }

  createNewSurvey() {
    this.dateCreated = Date.now();
  }

  setAnswer(michlol: string, questionId: string, answer: string) {
    if (!this.answers[michlol]) this.answers[michlol] = {};
    this.answers[michlol][questionId] = answer;
  }

  setComplete(michlol: string) {
    this.completed[michlol] = true;
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
