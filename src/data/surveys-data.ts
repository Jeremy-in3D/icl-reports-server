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
        name: "Michlol - 1",
        reports: ["main", "oil", "quakes"],
        mainReport: a,
      },
      {
        name: "Michlol - 2",
        reports: ["main", "oil"],
        mainReport: b,
      },
    ],
  },
  S2: {
    id: "S2",
    name: "Second Survey",
    michlolim: [
      {
        name: "Michlol - 1",
        reports: ["main", "oil", "quakes"],
        mainReport: a,
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
  name: string;
  reports: ("main" | "oil" | "quakes")[];
  mainReport?: MichlolQuestion[];
  oilReport?: any;
  quakeReport?: any;
};

export type MichlolQuestion = {
  id: string;
  question: string;
  answerOptions: string[];
};
