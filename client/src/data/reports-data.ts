export const questionBank: QuestionBank = [
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
        questions: ["question1", "question2", "question3"],
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
        questions: ["question1", "question2", "question3"],
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
        questions: ["question1", "question2", "question3"],
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
        questions: ["question1", "question2", "question3"],
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
        questions: ["question1", "question2", "question3"],
      },
    ],
  },
];
export type Michlol = {
  id: string;
  name: string;
  questions: string[];
};

type ValueType = {
  mc: string[];
  text: null;
  range: {
    start: number;
    end: number;
    step: number;
  };
};

export type QuestionBank = {
  [KEY in keyof ValueType]: {
    type: KEY;
    options: ValueType[KEY];
    id: string;
    question: string;
  };
}[keyof ValueType][];
