export const reportTypes: ReportTypes = {
  0: "ספיגה 50",
  1: "משלוחים",
  2: "תופים סובבים",
  3: "מגדל ניפוי",
  4: "מתקן 40",
  5: 'דו"ח מערכת שמן',
  6: 'דו"ח רעידות',
};

export interface ReportTypes {
  [key: number | string]: string;
}

export const numberOfMachinesByRoute: numberOfMachinesByRouteInterface = {
  "ספיגה 50": 26,
  משלוחים: 20,
  "תופים סובבים": 11,
  "מגדל ניפוי": 14,
  "מתקן 40": 31,
  'דו"ח מערכת שמן': 44,
  'דו"ח רעידות': 68,
};

interface numberOfMachinesByRouteInterface {
  [key: string]: number;
}

export const arrayOfRouteNames: string[] = [
  "ספיגה 50",
  "משלוחים",
  "תופים סובבים",
  "מגדל ניפוי",
  "מתקן 40",
  'דו"ח מערכת שמן',
  'דו"ח רעידות',
];
