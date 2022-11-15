export const questionBank: QuestionBank = [
  {
    id: "question1",
    type: "mc",
    question: "מה המספר האוהב שלך?",
    options: ["אחד", "שתים", "שלוש", "ארבע"],
  },
  {
    id: "question2",
    type: "range",
    question: "מאחד את עשר כמה אוהב חיות?",
    options: { start: 0, end: 10, step: 1 },
  },
  {
    id: "question3",
    type: "text",
    question: "מה על הראש שלך?",
    options: null,
  },
];

type QuestionTypes = {
  mc: string[];
  text: null;
  range: {
    start: number;
    end: number;
    step: number;
  };
};

export type QuestionBank = {
  [KEY in keyof QuestionTypes]: {
    type: KEY;
    options: QuestionTypes[KEY];
    id: string;
    question: string;
  };
}[keyof QuestionTypes][];
