export const michlolim: MichlolContents[] = [
  {
    michlolId: "R1-M1",
    michlolName: "מסוע משקולת",
    machines: {
      "R-2010-050-209": ["1", "2", "3", "4", "5"],
      "R-2010-050-207": ["1", "2"],
    },
  },
  {
    michlolId: "R1-M2",
    michlolName: "מגרסה",
    machines: { "R-2010-050-205": ["1"] },
  },
  {
    michlolId: "R1-M3",
    michlolName: "משאבה",
    machines: { "R-2010-050-454": ["1"] },
  },
];

export const routes: Routes = [
  {
    routeId: "R1",
    routeName: "מסלול מספר 1",
    michlolim: ["R1-M1", "R1-M2", "R1-M3"],
  },
];
export type MichlolContents = {
  michlolId: string;
  michlolName: string;
  machines: { [id: string]: string[] };
};

export type Routes = {
  routeId: string;
  routeName: string;
  michlolim: string[];
}[];
