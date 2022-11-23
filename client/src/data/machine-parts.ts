export const machineParts: MachineParts = [
  {
    id: "1",
    name: "משפך קבלה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      { text: "קיימים נזילות ממעטפת המשפך", options: false, alert: false },
      {
        text: "קיימים מגוני צד מפורקים לאורך הסרט",
        alert: false,
        options: true,
        choices: ["הנעה", "ראש", "משקולת", "הידוק", "הטייה"],
      },
      { text: "קיימים מרעדים לא תקינים", options: false, alert: false },
      { text: " מצב הסקרטינג נדרשת הנמכה/החלפה", options: false, alert: false },
    ],
  },
  {
    id: "2",
    name: "מנוע",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "מנוע המסוע חם",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "מכסה המאוור או מאוורר המנוע שבורים",
        alert: false,
        options: false,
      },
      {
        text: "קיימים רעשים חריגים מהמנוע",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים ברגים משוחררים בבסיס המנוע או הממסרה",
        options: false,
        alert: true,
      },
    ],
  },
  {
    id: "3",
    name: "ממסרה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      { text: "קיימים נזילות ממעטפת המשפך ", options: false, alert: false },
      {
        text: "קיימים מגוני צד מפורקים לאורך הסרט",
        alert: false,
        options: true,
        choices: ["הנעה", "ראש", "משקולת", "הידוק", "הטייה"],
      },
      { text: "קיימים מרעדים לא תקינים", options: false, alert: false },
      { text: " מצב הסקרטינג נדרשת הנמכה/החלפה", options: false, alert: false },
    ],
  },
  {
    id: "4",
    name: "סרט",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      { text: "קיימים נזילות ממעטפת המשפך ", options: false, alert: false },
      {
        text: "קיימים מגוני צד מפורקים לאורך הסרט",
        alert: false,
        options: true,
        choices: ["הנעה", "ראש", "משקולת", "הידוק", "הטייה"],
      },
      { text: "קיימים מרעדים לא תקינים", options: false, alert: false },
      { text: " מצב הסקרטינג נדרשת הנמכה/החלפה", options: false, alert: false },
    ],
  },
  {
    id: "5",
    name: "תופים",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      { text: "קיימים נזילות ממעטפת המשפך ", options: false, alert: false },
      {
        text: "קיימים מגוני צד מפורקים לאורך הסרט",
        alert: false,
        options: true,
        choices: ["הנעה", "ראש", "משקולת", "הידוק", "הטייה"],
      },
      { text: "קיימים מרעדים לא תקינים", options: false, alert: false },
      { text: " מצב הסקרטינג נדרשת הנמכה/החלפה", options: false, alert: false },
    ],
  },

  // {
  //   id: "question2",
  //   type: "range",
  //   question: "מאחד את עשר כמה אוהב חיות?",
  //   options: { start: 0, end: 10, step: 1 },
  // },
  // {
  //   id: "question3",
  //   type: "text",
  //   question: "מה על הראש שלך?",
  //   options: null,
  // },
];

export type CheckBox =
  | { text: string; alert: boolean; options: true; choices: string[] }
  | { text: string; alert: boolean; options: false };

export type MachineParts = {
  id: string;
  name: string;
  type: "checkboxes" | "multiple-choice" | "range";
  input: CheckBox[];
}[];

//Try and refactor new type to this old ones structure below, note, instead of the key being a string.. check if theres a way to do with a boolean
// type QuestionTypes = {
//   mc: string[];
//   text: null;
//   range: {
//     start: number;
//     end: number;
//     step: number;
//   };
// };

// export type QuestionBank = {
//   [KEY in keyof QuestionTypes]: {
//     type: KEY;
//     options: QuestionTypes[KEY];
//     id: string;
//     question: string;
//   };
// }[keyof QuestionTypes][];
