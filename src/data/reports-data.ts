const questionBank: {
  [id: string]: Question;
} = {
  Q01: {
    id: "question 1",
    type: "mc",
    question: "פה השאלה לענות תהיה 1",
    options: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  Q02: {
    id: "question 2",
    type: "range",
    question: "פה השאלה לענות תהיה 2",
    options: { start: 0, end: 10, step: 1 },
  },
  Q03: {
    id: "question 3",
    type: "text",
    question: "פה השאלה לענות תהיה 3",
    options: 123,
  },
};

export const reportsData = {
  survey: [
    {
      id: "S1",
      name: "מפעל למלה",
      michlolim: [
        {
          id: "S1-M1",
          name: "מיכלול 1",
          questions: [questionBank.Q01, questionBank.Q02, questionBank.Q03],
        },
      ],
    },
  ],
  oil: [],
  quake: [],
};

type QuestionTypes = "mc" | "range" | "text";
type Options = {
  mc: string[];
  range: { start: number; end: number; step: number };
  text: number;
};
type Question = {
  id: string;
  type: QuestionTypes;
  question: string;
  options: Options[QuestionTypes];
};

export type Michlol = {
  id: string;
  name: string;
  questions: Question[];
};
