export class Survey {
  [key: string]: any;
  id: string;
  answers: SurveyAnswers;

  constructor(id: string) {
    this.id = id;
    this.answers = {};
  }

  createNewSurvey() {
    this.dateCreated = Date.now();
  }

  setAnswer(michlol: string, questionId: string, answer: string) {
    if (!this.answers[michlol]) this.answers[michlol] = {};
    this.answers[michlol][questionId] = answer;
  }
}

interface SurveyAnswers {
  [michlol: string]: { [questionId: string]: string };
}
// loadExistingSurvey(data: any) {
//   const existingData = JSON.parse(data);
//   for (let [key, value] of Object.entries(existingData)) {
//     this[key] = value;
//   }
//   //Currently only one survey, change to pull the correct survey based on constructor input
//   this.items = surveyItems;
// }
// submitAnswer(answer: any) {
//   if (Object.values(answer).length) {
//     this.answeredQuestions![this.currentQuestion] = true;
//     this.answers[this.currentQuestion] = answer;
//     return true;
//   } else return false;
// }

// saveSurvey() {
//   return {
//     dateCreated: this.dateCreated,
//     answeredQuestions: this.answeredQuestions,
//     answers: this.answers,
//     currentQuestion: this.currentQuestion,
//     totalItems: this.totalItems,
//   };
// }
