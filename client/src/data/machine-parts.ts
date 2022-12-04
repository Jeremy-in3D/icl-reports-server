export const machineParts: MachineParts = [
  {
    questionId: "Q01",
    partName: "צנרת וברזים",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "מחבר גמיש של המשאבה יבש או קרוע",
        options: true,
        alert: false,
        choices: ["יניקה", "סניקה"],
      },
      {
        text: "פילטר המשאבה נוזל",
        alert: false,
        options: false,
      },
      {
        text: "מחבר גמיש של המשאבה יבש או קרוע",
        options: true,
        alert: false,
        choices: ["יניקה", "סניקה"],
      },
      {
        text: "תמיכות צנרת המשאבה או הפילטר לא תקינות",
        options: false,
        alert: false,
      },
      {
        text: "בוחש המיכל לא מסתובב/נפל למיכל/רועד",
        options: false,
        alert: true,
      },
      {
        text: "קיימת נזילה/הזעה מהמכילת ומהאוגנים שלו",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
    ],
  },
  {
    questionId: "Q02",
    partName: "מנוע",
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
        text: "קיים חוסר של פירמוט או פירמוט ריקות במנוע",
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
        text: "יש צורך בניקיון צלעות מנוע ",
        options: false,
        alert: false,
      },
      {
        text: "אומגה של המשאבה סדוקה או יבשה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים ברגים משוחררים בבסיס המנוע או במשאבה",
        options: false,
        alert: true,
      },
    ],
  },
  {
    questionId: "Q03",
    partName: "משאבה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "מסבי המשאבה חמים",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים רעשים/רעידות חריגים במשאבה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימת נזילת מים מאטם המשאבה/גוף המשאבה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "חסרות פרמוט/שמן במשאבה או לא קיים",
        options: false,
        alert: false,
      },
      {
        text: "מיגון המשאבה או האטם  לא תקין",
        options: false,
        alert: false,
      },
      {
        text: "צנרת מי האטימה לא מחובר לא פתוח",
        options: false,
        alert: true,
      },
    ],
  },
  {
    questionId: "Q04",
    partName: "מנוע",
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
        text: "יש צורך בניקיון צלעות מנוע ",
        options: false,
        alert: false,
      },
      {
        text: "קימיים רעשים חריגים מהמצמד המקשר",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "פירמוט הגירוז במנוע חוסרות/ריקות",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q05",
    partName: "ציר ומסבי המפוח",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים חריגים ממסבי המפוח",
        options: false,
        alert: true,
      },
      {
        text: "קיים חוסר שמן/פירמוט גירוז במסבי המפוח",
        alert: true,
        options: false,
      },
      {
        text: "קיימים רעידות חריגות במפוח ובסביבתו",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "מיגון לבטח רוקד או אינו מוחבר",
        options: false,
        alert: true,
      },
      {
        text: "גשש הרעידות או הטמפ' אינם מחוברים או כבל פגוע",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q06",
    partName: "בית המפוח",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיים חורים/נזילות בבית המפוח או במחברי המפוח",
        options: false,
        alert: false,
      },
      {
        text: "קיימים ברגים חסרים/משוחררים במפוח",
        alert: false,
        options: false,
      },
      {
        text: "קיימים רעידות חריגות במפוח ובסביבתו",
        options: false,
        alert: true,
      },
      {
        text: "קיימים סדקים או ברגים משוחררים בבסיס המפוח",
        options: false,
        alert: true,
      },
    ],
  },
  {
    questionId: "Q07",
    partName: "משפך קבלה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים נזילות ממעטפת המשפך",
        options: false,
        alert: false,
      },
      {
        text: "קיימים מגוני צד מפורקים לאורך הסרט",
        alert: false,
        options: true,
        choices: ["הנעה", "ראש", "משקולת", "הידוק", "הטייה"],
      },
      {
        text: "קיימים מרעדים לא תקינים",
        options: false,
        alert: false,
      },
      {
        text: " מצב הסקרטינג נדרשת הנמכה/החלפה",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q08",
    partName: "מנוע",
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
        text: "יש צורך בניקיון צלעות מנוע",
        options: false,
        alert: false,
      },
      {
        text: "קימיים רעשים חריגים מהמצמד המקשר לממסרה",
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
    questionId: "Q09",
    partName: "ממסרה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "ממסרה של המסוע חמה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים רעשים חריגים מהממסרה",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימת נזילת שמן מהממסרה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "גובה שמן הממסרה לא תקין או לא ניתן לראות",
        options: false,
        alert: true,
      },
      {
        text: "מיגון במערכת ההנעה לא תקין",
        options: false,
        alert: false,
      },
      {
        text: "מצמד המקשר לתוף הנעה מרעיש",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
    ],
  },
  {
    questionId: "Q10",
    partName: "סרט",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "חיבורי המסוע קלמרות/הדבקה נפתחו",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "המסוע סוטה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "המסוע שחוק",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "המסוע קרוע או קיימים חתכים לאורכו",
        options: false,
        alert: true,
      },
      {
        text: "המסוע רפוי/מתוח מידיי",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q11",
    partName: "תופים",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "ציפוי הגומי בתופי המסוע לא תקינה",
        options: true,
        alert: false,
        choices: ["הנעה", "ראש", "משקולת", "הידוק", "הטייה"],
      },
      {
        text: "קיים חוסר במערכת גירוז למסבי התוף",
        options: true,
        alert: false,
        choices: ["הנעה", "ראש", "משקולת", "הידוק", "הטייה"],
      },
      {
        text: "קיימים רעשים חריגים מהתוף או ממסבב",
        options: true,
        alert: true,
        choices: ["הנעה", "ראש", "משקולת", "הידוק", "הטייה"],
      },
      {
        text: "קיימת תזוזה של התוף בבתי המיסב",
        options: true,
        alert: true,
        choices: ["הנעה", "ראש", "משקולת", "הידוק", "הטייה"],
      },
    ],
  },
  {
    questionId: "Q12",
    partName: "גלילים",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים גלילים לא תקינים במסוע",
        options: true,
        alert: false,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
      {
        text: "קימיים גלילים בנויים בחומר לאורך המנוע",
        options: true,
        alert: false,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
      {
        text: "קיים גליל מרעיש לאורך הסרט",
        options: true,
        alert: true,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
    ],
  },
  {
    questionId: "Q13",
    partName: "מערכות נלוות למסוע",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "מגרדות המסוע דורשות טיפול וקיים זרזוף בסרט החוזר",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קונסטרוקצית המסוע פגוע",
        options: true,
        alert: false,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
      {
        text: "יש צורך בניקיון בסביבת הסרט",
        options: true,
        alert: false,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
      {
        text: "כבל/גלגלת/מבנה מערכת המתחיה פגום",
        options: false,
        alert: true,
      },
      {
        text: "גלגל משקלת במסוע משוחרר/עמדת המשקל עקומה ולא תקינה",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q14",
    partName: "טריפר",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "מערכת הטריפר בהטייה",
        options: false,
        alert: false,
      },
      {
        text: "קיימת בניה במשפך הטריפר והסרט נוסע על חומר",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q15",
    partName: "משפך קבלה וגוף החילזון",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים נזילות/בריחת ואקום ממעטפת החילזון או המשפך",
        options: false,
        alert: false,
      },
      {
        text: "קיימים מגוני RD מפורק או לא יושב טוב",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים חריגים מכיוון החלזון",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q16",
    partName: "מנוע",
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
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים חריגים מהמנוע",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "יש צורך בניקיון צלעות מנוע",
        options: false,
        alert: false,
      },
      {
        text: "קימיים רעשים חריגים מהמצמד המקשר לממסרה",
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
    questionId: "Q17",
    partName: "ממסרה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "ממסרה של החילזון חמה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים רעשים חריגים מהממסרה",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימת נזילת שמן מהממסרה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "גובה שמן הממסרה לא תקין או לא ניתן לראות",
        options: false,
        alert: true,
      },
      {
        text: "מיגון במערכת ההנעה לא תקין",
        options: false,
        alert: false,
      },
      {
        text: "מצמד המקשר בין ההנעה לחילזון מרעיש/לא תקין",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
    ],
  },
  {
    questionId: "Q18",
    partName: "חילזון",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיים מיסב חם/מרעיש בחילזון",
        options: true,
        alert: true,
        choices: ["הנעה", "זנב"],
      },
      {
        text: "לא קיים גירוז במיסב החילזון",
        options: true,
        alert: true,
        choices: ["הנעה", "זנב"],
      },
      {
        text: "קיימת נזילה מאטם החילזון",
        options: true,
        alert: true,
        choices: ["הנעה", "זנב"],
      },
      {
        text: "קיימים רעידות בגוף החילזון אוברגים משוחריים במסבים",
        options: false,
        alert: true,
      },
    ],
  },
];

export type CheckBox =
  | { text: string; alert: boolean; options: true; choices: string[] }
  | { text: string; alert: boolean; options: false };

export type MachineParts = {
  questionId: string;
  partName: string;
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
