import { HTMLInputTypeAttribute } from "react";
import { surveyItems } from "../../data/survey-first-items";

export class Survey {
  [key: string]: any;
  dateCreated: number | null;
  items: Item[] | null;
  totalItems: number | null;
  answeredQuestions: boolean[] | null;
  currentQuestion: number;
  answers: any[];

  constructor() {
    this.dateCreated = null;
    this.items = null;
    this.totalItems = null;
    this.answeredQuestions = null;
    this.currentQuestion = 0;
    this.answers = [];
  }

  createNewSurvey(items: Item[]) {
    this.dateCreated = Date.now();
    this.items = items;
    this.totalItems = items.length;
    this.answeredQuestions = items.map(() => false);
  }
  loadExistingSurvey(data: any) {
    const existingData = JSON.parse(data);
    for (let [key, value] of Object.entries(existingData)) {
      this[key] = value;
    }
    //Currently only one survey, change to pull the correct survey based on constructor input
    this.items = surveyItems;
  }
  submitAnswer(answer: any) {
    if (Object.values(answer).length) {
      this.answeredQuestions![this.currentQuestion] = true;
      this.answers[this.currentQuestion] = answer;
      return true;
    } else return false;
  }
  previousQuestion() {
    if (this.currentQuestion > 0) --this.currentQuestion;
    return this.currentQuestion;
  }
  nextQuestion() {
    if (this.currentQuestion < this.totalItems! - 1) ++this.currentQuestion;
    return this.currentQuestion;
  }
  saveSurvey() {
    return {
      dateCreated: this.dateCreated,
      answeredQuestions: this.answeredQuestions,
      answers: this.answers,
      currentQuestion: this.currentQuestion,
      totalItems: this.totalItems,
    };
  }
}

export type Item = {
  type: HTMLInputTypeAttribute;
  question: string;
  answerOptions: string[];
};
