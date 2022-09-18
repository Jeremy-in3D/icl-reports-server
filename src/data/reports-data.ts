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

export const reportsData: ReportsData = {
  survey: [
    {
      id: "S1",
      name: "סיור ראשון - א",
      michlolim: [
        {
          id: "M1",
          name: "Michlol - 1",
          contents: ["status", "textarea"],
          questions: a,
        },
        {
          id: "M2",
          name: "Michlol - 2",
          contents: ["status", "questions", "textarea"],
          questions: b,
        },
      ],
    },
    {
      id: "S2",
      name: "סיור שני - ב",
      michlolim: [
        {
          id: "M1",
          name: "Michlol - 1",
          contents: ["status", "textarea"],
          questions: a,
        },
      ],
    },
    {
      id: "S3",
      name: "סיור שלישי - ג",
      michlolim: [
        {
          id: "M1",
          name: "Michlol - 1",
          contents: ["status", "textarea"],
          questions: a,
        },
      ],
    },
    {
      id: "S4",
      name: "סיור רביעי - ד",
      michlolim: [
        {
          id: "M1",
          name: "Michlol - 1",
          contents: ["status", "textarea"],
          questions: a,
        },
      ],
    },
    {
      id: "S5",
      name: "סיור חמישי - ה",
      michlolim: [
        {
          id: "M1",
          name: "Michlol - 1",
          contents: ["status", "textarea"],
          questions: a,
        },
      ],
    },
  ],
  oil: [
    {
      id: "O",
      name: "סיור ראשון - א",
      michlolim: [
        {
          id: "M1",
          name: "Michlol - 1",
          contents: ["status", "textarea"],
          questions: a,
        },
        {
          id: "M2",
          name: "Michlol - 2",
          contents: ["status", "textarea"],
          questions: b,
        },
      ],
    },
  ],
  quake: [
    {
      id: "Q",
      name: "סיור ראשון - א",
      michlolim: [
        {
          id: "M1",
          name: "Michlol - 1",
          contents: ["status", "textarea"],
          questions: a,
        },
        {
          id: "M2",
          name: "Michlol - 2",
          contents: ["status", "textarea"],
          questions: b,
        },
      ],
    },
  ],
};

interface ReportsData {
  [id: string]: Survey[];
  survey: Survey[];
  oil: Survey[];
  quake: Survey[];
}

interface Survey {
  id: string;
  name: string;
  michlolim: Michlol[];
}

export type Michlol = {
  id: string;
  name: string;
  contents: Inputs[];
  questions?: MichlolQuestion[];
};

export type MichlolQuestion = {
  id: string;
  question: string;
  answerOptions: string[];
};

export type Inputs = "textarea" | "questions" | "status";
