export class Oil {
  [key: string]: any;
  id: string;
  answers: SurveyAnswers;

  constructor(id: string) {
    this.id = id;
    this.answers = {};
    this.completedMichlol = {};
  }
  createNewSurvey() {
    this.dateCreated = Date.now();
  }
  loadExistingSurvey(data: any) {
    const existingData = JSON.parse(data);
    for (let [key, value] of Object.entries(existingData)) {
      this[key] = value;
    }
  }
  saveSurvey() {
    return this;
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
