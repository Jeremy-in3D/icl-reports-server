export const reports: Reports = [
  {
    id: "S1",
    name: "מפעל למלה",
    michlolim: [
      {
        id: "S1-M1",
        name: "מיכלול 1",
        questions: ["question1", "question2", "question3"],
      },
      {
        id: "S1-M2",
        name: "מיכלול 2",
        questions: ["question1", "question2"],
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

type Reports = {
  id: string;
  name: string;
  michlolim: Michlol[];
}[];
