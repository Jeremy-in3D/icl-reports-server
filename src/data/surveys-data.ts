const a = [
  {
    id: "Q01",
    question: "This is a first form question",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q02",
    question: "This is a second form question",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q03",
    question: "This is a third form question",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q04",
    question: "This is a four form question",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q05",
    question: "This is a five form question",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q06",
    question: "This is a six form question",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q07",
    question: "This is a seven form question",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
];
const b = [
  {
    id: "Q01",
    question: "This is a first form question 2",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q02",
    question: "This is a second form question 2",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q03",
    question: "This is a third form question 2",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q04",
    question: "This is a four form question 2",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q05",
    question: "This is a five form question 2",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q06",
    question: "This is a six form question 2",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
  {
    id: "Q07",
    question: "This is a seven form question 2",
    answerOptions: ["One", "Two", "Three", "Four"],
  },
];

export const surveysData: SurveysData = {
  S1: {
    id: "S1",
    name: "First Survey",
    michlolim: [
      {
        id: "M1",
        name: "Michlol - 1",
        questions: a,
      },
      {
        id: "M2",
        name: "Michlol - 2",
        questions: b,
      },
    ],
  },
  S2: {
    id: "S2",
    name: "Second Survey",
    michlolim: [
      {
        id: "M1",
        name: "Michlol - 1",
        questions: a,
      },
    ],
  },
  S3: {
    id: "S3",
    name: "Third Survey",
    michlolim: [
      {
        id: "M1",
        name: "Michlol - 1",
        questions: a,
      },
    ],
  },
  S4: {
    id: "S4",
    name: "Fourth Survey",
    michlolim: [
      {
        id: "M1",
        name: "Michlol - 1",
        questions: a,
      },
    ],
  },
  S5: {
    id: "S5",
    name: "Fifth Survey",
    michlolim: [
      {
        id: "M1",
        name: "Michlol - 1",
        questions: a,
      },
    ],
  },
};

interface SurveysData {
  [id: string]: SurveyMichlolim;
}

interface SurveyMichlolim {
  id: string;
  name: string;
  michlolim: Michlol[];
}

export type Michlol = {
  id: string;
  name: string;
  questions: MichlolQuestion[];
};

export type MichlolQuestion = {
  id: string;
  question: string;
  answerOptions: string[];
};
