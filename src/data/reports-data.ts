const a = [
  {
    id: "Q01",
    question: "פה השאלה לענות תהיה 1",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q02",
    question: "פה השאלה לענות תהיה 2",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q03",
    question: "פה השאלה לענות תהיה 3",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q04",
    question: "פה השאלה לענות תהיה 4",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q05",
    question: "פה השאלה לענות תהיה 5",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q06",
    question: "פה השאלה לענות תהיה 6",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q07",
    question: "פה השאלה לענות תהיה 7",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
];
const b = [
  {
    id: "Q01",
    question: "פה השאלה לענות תהיה 1",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q02",
    question: "פה השאלה לענות תהיה 2",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q03",
    question: "פה השאלה לענות תהיה 3",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q04",
    question: "פה השאלה לענות תהיה 4",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q05",
    question: "פה השאלה לענות תהיה 5",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q06",
    question: "פה השאלה לענות תהיה 6",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
  {
    id: "Q07",
    question: "פה השאלה לענות תהיה 7",
    answerOptions: ["אחד", "שתיים", "שלוש", "ארבע"],
  },
];

export const reportsData: ReportsData = {
  survey: [
    {
      id: "S1",
      name: "מפעל למלה",
      michlolim: [
        {
          id: "M1",
          name: "מיכלול 1",
          contents: ["status", "textarea"],
          questions: a,
        },
        {
          id: "M2",
          name: "מיכלול 2",
          contents: ["status", "questions", "textarea"],
          questions: b,
        },
      ],
    },
    {
      id: "S2",
      name: "מפעל למטה",
      michlolim: [
        {
          id: "M1",
          name: "מיכלול 1",
          contents: ["status", "textarea"],
          questions: a,
        },
        {
          id: "M2",
          name: "מיכלול 2",
          contents: ["status", "questions", "textarea"],
          questions: b,
        },
      ],
    },
    {
      id: "S3",
      name: "מפעל למטה",
      michlolim: [
        {
          id: "M1",
          name: "מיכלול 1",
          contents: ["status", "textarea"],
          questions: a,
        },
        {
          id: "M2",
          name: "מיכלול 2",
          contents: ["status", "questions", "textarea"],
          questions: b,
        },
      ],
    },
    {
      id: "S4",
      name: "מפעל למטה",
      michlolim: [
        {
          id: "M1",
          name: "מיכלול 1",
          contents: ["status", "textarea"],
          questions: a,
        },
        {
          id: "M2",
          name: "מיכלול 2",
          contents: ["status", "questions", "textarea"],
          questions: b,
        },
      ],
    },
    {
      id: "S5",
      name: "מפעל למטה",
      michlolim: [
        {
          id: "M1",
          name: "מיכלול 1",
          contents: ["status", "textarea"],
          questions: a,
        },
        {
          id: "M2",
          name: "מיכלול 2",
          contents: ["status", "questions", "textarea"],
          questions: b,
        },
      ],
    },
  ],
  oil: [
    {
      id: "O",
      name: 'דו"ח שמנים',
      michlolim: [
        {
          id: "M1",
          name: "מיכלול 1",
          contents: ["oil", "textarea"],
          oil: { machine: "456" },
        },
        {
          id: "M2",
          name: "מיכלול 2",
          contents: ["oil", "textarea"],
          oil: { machine: "123" },
        },
      ],
    },
  ],
  quake: [
    {
      id: "Q",
      name: 'דו"ח רעידות',
      michlolim: [
        {
          id: "M1",
          name: "מיכלול 1",
          contents: ["quake", "textarea"],
          quake: { machine: "1234" },
        },
        {
          id: "M2",
          name: "מיכלול 2",
          contents: ["quake", "textarea"],
          quake: { machine: "5678" },
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
  oil?: { machine: string };
  quake?: { machine: string };
  questions?: MichlolQuestion[];
};

export type MichlolQuestion = {
  id: string;
  question: string;
  answerOptions: string[];
};

export type Inputs = "textarea" | "questions" | "status" | "oil" | "quake";
