import { HTMLInputTypeAttribute } from "react";

export class Survey {
  [key: string]: any;
  id: number | null;
  items: Item[] | null;
  totalItems: number | null;
  answeredQuestions: boolean[] | null;
  currentQuestion: number;
  totalAnswered: number;
  answers: any[];

  constructor() {
    this.id = null;
    this.items = null;
    this.totalItems = null;
    this.answeredQuestions = null;
    this.currentQuestion = 0;
    this.totalAnswered = 0;
    this.answers = [];
  }

  createNewSurvey(items: Item[]) {
    this.id = Date.now();
    this.items = items;
    this.totalItems = items.length;
    this.answeredQuestions = items.map(() => false);
  }
  loadExistingSurvey(data: any) {
    const existingData = JSON.parse(data);
    for (let [key, value] of Object.entries(existingData)) {
      this[key] = value;
    }
  }
  submitAnswer(answer: any) {
    this.answeredQuestions![this.currentQuestion] = true;
    this.answers[this.currentQuestion] = answer;
    this.nextQuestion();
  }
  previousQuestion() {
    if (this.currentQuestion > 0) --this.currentQuestion;
    return this.currentQuestion;
  }
  nextQuestion() {
    if (this.currentQuestion < this.totalItems! - 1) ++this.currentQuestion;
    return this.currentQuestion;
  }
  saveForm() {}
  submitForm() {}
}

export type Item = {
  type: HTMLInputTypeAttribute;
  question: string;
  answerOptions: string[];
};
