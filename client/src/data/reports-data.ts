export const routes: Routes = [
  {
    id: "S1",
    name: "מסלול מספר 1",
    michlolim: [
      {
        id: "S1-M1",
        name: "מסוע משקולת",
        machines: ["R-2010-050-209"],
      },
    ],
  },
];
export type Michlol = {
  id: string;
  name: string;
  machines: string[];
};

export type Routes = {
  id: string;
  name: string;
  michlolim: Michlol[];
}[];
