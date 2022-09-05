import { HTMLInputTypeAttribute } from "react";

export class ReportForm {
  items: Item[];
  totalItems: number;
  currentQuestion: number;
  totalAnswered: number;
  answeredQuestions: boolean[];

  constructor(items: Item[]) {
    this.items = items;
    this.totalItems = items.length;
    this.currentQuestion = 0;
    this.totalAnswered = 0;
    this.answeredQuestions = items.map(() => false);
  }

  markAnsweredQuestion() {}
  isFormComplete() {}
  previousQuestion() {}
  nextQuestion() {}
  saveForm() {}
  submitForm() {}
}

type Item = {
  type: HTMLInputTypeAttribute;
  question: string;
  answerOptions: string[];
};
