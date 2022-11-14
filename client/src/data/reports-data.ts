//@ts-nocheck

export const questionBank = [
  {
    id: "question 1",
    type: "mc",
    question: "מה המספר האוהב שלך?",
    options: ["אחד", "שתים", "שלוש", "ארבע"],
  },
  {
    id: "question 2",
    type: "range",
    question: "מאחד את עשר כמה אוהב חיות?",
    options: { start: 0, end: 10, step: 1 },
  },
  {
    id: "question 3",
    type: "text",
    question: "מה על הראש שלך?",
    options: null,
  },
];

export const reportsData = [
  {
    id: "S1",
    name: "מפעל למלה",
    michlolim: [
      {
        id: "S1-M1",
        name: "מיכלול 1",
        questions: ["question1", "question2", "question3"] as any,
      },
    ],
  },
  {
    id: "S2",
    name: "מפעל למטה",
    michlolim: [
      {
        id: "S2-M1",
        name: "מיכלול 1",
        questions: [questionBank.Q01, questionBank.Q02, questionBank.Q03],
      },
    ],
  },
  {
    id: "S3",
    name: "חדר מנוע",
    michlolim: [
      {
        id: "S3-M1",
        name: "מיכלול 1",
        questions: [questionBank.Q01, questionBank.Q02, questionBank.Q03],
      },
    ],
  },
  {
    id: "S4",
    name: "גינה בחוץ",
    michlolim: [
      {
        id: "S4-M1",
        name: "מיכלול 1",
        questions: [questionBank.Q01, questionBank.Q02, questionBank.Q03],
      },
    ],
  },
  {
    id: "S5",
    name: "מרתף",
    michlolim: [
      {
        id: "S5-M1",
        name: "מיכלול 1",
        questions: [questionBank.Q01, questionBank.Q02, questionBank.Q03],
      },
    ],
  },
];

export type QuestionTypes = "mc" | "range" | "text";
type Options = {
  mc: string[];
  range: { start: number; end: number; step: number };
  text: null;
};
export type OptionsTypes = Options[QuestionTypes];
export type Question = {
  id: string;
  type: QuestionTypes;
  question: string;
  options: OptionsTypes;
};

export type Michlol = {
  id: string;
  name: string;
  questions: Question[];
};

//Incorporate below solution into project
type ValueType = {
  text: string;
  numeric: number;
};

type Question1 = {
  [KEY in keyof ValueType]: { type: KEY; value: ValueType[KEY][] };
}[keyof ValueType];
type Question2 =
  | { type: "text"; value: string[] }
  | { type: "numberic"; value: number[] };

const myQuestion: Record<string, Question1> = {
  first: { type: "text", value: ["a"] },
};

for (const q of Object.values(myQuestion)) {
  if (q.type === "text") {
    //
  }
}
