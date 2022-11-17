export const routes: Routes = [
  {
    id: "R1",
    name: "מסלול מספר 1",
    michlolim: [
      {
        id: "R1-M1",
        name: "מסוע משקולת",
        machines: {
          "R-2010-050-209": ["1", "2", "3", "4", "5"],
          "R-2010-050-207": ["1", "2"],
        },
      },
      {
        id: "R1-M2",
        name: "מגרסה",
        machines: { "R-2010-050-205": ["1"] },
      },
    ],
  },
];
export type MichlolContents = {
  id: string;
  name: string;
  machines: { [id: string]: string[] };
};

export type Routes = {
  id: string;
  name: string;
  michlolim: MichlolContents[];
}[];