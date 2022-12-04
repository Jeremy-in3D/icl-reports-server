export const michlolim: MichlolContents[] = [
  {
    michlolId: "R1-M1",
    michlolName: "משאבה",
    equipmentUnit: "משאבת סחרור משטף אבק, קו מייבש",
    machines: {
      "R-2010-050-454": ["Q01", "Q02", "Q03"],
      "R-2010-050-455": ["Q01", "Q02", "Q03"],
      "R-2010-050-458": ["Q01", "Q02", "Q03"],
      "R-2010-050-459": ["Q01", "Q02", "Q03"],
      "R-2010-050-461": ["Q01", "Q02", "Q03"],
      "R-2010-050-462": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R1-M2",
    michlolName: "משאבה",
    equipmentUnit: "משאבת סחרור משטף אבק, קו מקרר",
    machines: {
      "R-2010-050-464": ["Q01", "Q02", "Q03"],
      "R-2010-050-468": ["Q01", "Q02", "Q03"],
      "R-2010-050-469": ["Q01", "Q02", "Q03"],
      "R-2010-050-471": ["Q01", "Q02", "Q03"],
      "R-2010-050-472": ["Q01", "Q02", "Q03"],
      "R-2010-050-491": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R1-M3",
    michlolName: "משאבה",
    equipmentUnit: "משאבת מים לגרעון",
    machines: {
      "R-2010-050-479": ["Q01", "Q02", "Q03"],
      "R-2010-050-480": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R1-M4",
    michlolName: "משאבה",
    equipmentUnit: "משאבת שפכים",
    machines: {
      "R-2010-050-484": ["Q01", "Q02", "Q03"],
      "R-2010-050-485": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R1-M5",
    michlolName: "משאבה בור",
    equipmentUnit: "משאבת בור ניקוזים ספיגה",
    machines: {
      "R-2010-050-486": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R1-M6",
    michlolName: "מפוח",
    equipmentUnit: "מפוח מקרר",
    machines: {
      "R-2010-050-453": ["Q04", "Q05", "Q06"],
    },
  },
  {
    michlolId: "R1-M7",
    michlolName: "מפוח",
    equipmentUnit: "מפוח מייבש",
    machines: { "R-2010-050-452": ["Q04", "Q05", "Q06"] },
  },
  {
    michlolId: "R1-M8",
    michlolName: "מסוע משקולת",
    equipmentUnit: "מסוע תוצרת",
    machines: {
      "R-2010-050-052": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q13"],
      "R-2010-050-054": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q13"],
    },
  },
  {
    michlolId: "R1-M9",
    michlolName: "מסוע טריפר",
    equipmentUnit: "מסוע טריפר",
    machines: {
      "R-2010-050-057": [
        "Q07",
        "Q08",
        "Q09",
        "Q10",
        "Q11",
        "Q12",
        "Q13",
        "Q14",
      ],
    },
  },
  {
    michlolId: "R1-M10",
    michlolName: "מסוע משקולת",
    equipmentUnit: "מסוע מפזר",
    machines: {
      "R-2010-050-100": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q13"],
      "R-2010-050-400": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q13"],
    },
  },
  {
    michlolId: "R1-M11",
    michlolName: "חילזון",
    equipmentUnit: "חילזון מקרר",
    machines: {
      "R-2010-050-075": ["Q15", "Q16", "Q17", "Q18"],
    },
  },
  {
    michlolId: "R1-M12",
    michlolName: "חילזון",
    equipmentUnit: "חילזון מייבש",
    machines: {
      "R-2010-050-074": ["Q15", "Q16", "Q17", "Q18"],
    },
  },
];

export const routes: Routes = [
  {
    routeId: "R1",
    routeName: "מסלול מספר 1",
    michlolim: [
      "R1-M1",
      "R1-M2",
      "R1-M3",
      "R1-M4",
      "R1-M5",
      "R1-M6",
      "R1-M7",
      "R1-M8",
      "R1-M9",
      "R1-M10",
      "R1-M11",
      "R1-M12",
    ],
  },
  {
    routeId: "R2",
    routeName: "מסלול מספר 2",
    michlolim: ["R2-M1", "R2-M2", "R2-M3"],
  },
];
export type MichlolContents = {
  michlolId: string;
  michlolName: string;
  equipmentUnit: string;
  machines: { [id: string]: string[] };
};

export type Routes = {
  routeId: string;
  routeName: string;
  michlolim: string[];
}[];
