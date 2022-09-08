export class Survey {
  [key: string]: any;
  id: string;
  data: any;

  constructor(id: string) {
    this.id = id;
  }

  createNewSurvey() {
    this.dateCreated = Date.now();
  }
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
