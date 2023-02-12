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
