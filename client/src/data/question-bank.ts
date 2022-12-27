export const questionBank: QuestionBank = [
  //#region Question Bank
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
        options: true,
        alert: false,
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
        options: false,
        alert: true,
      },
      {
        text: "קיימים רעשים חריגים מהממסרה",
        options: false,
        alert: false,
      },
      {
        text: "קיימת נזילת שמן מהממסרה",
        options: false,
        alert: true,
      },
      {
        text: "גובה שמן הממסרה לא תקין או לא ניתן לראות",
        options: false,
        alert: false,
      },
      {
        text: "מיגון במערכת ההנעה לא תקין ",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים ממצד הקפיצי/מכסה הקפיץ פתוח",
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
  {
    questionId: "Q19",
    partName: "בית המפורר והרטוטר",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים  זרזוף מגוף המגרסה",
        options: false,
        alert: false,
      },
      {
        text: "קיים ברגים חסרים/משוחררים בבית המפורר או ברוטור",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים/רעידות חריגים מהרוטור",
        options: false,
        alert: false,
      },
      {
        text: "השיניים הסטטים במפורר רופפות/ שחוקות",
        options: false,
        alert: false,
      },
      {
        text: "יש צורך לניקיון בסביבת המפורר",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q20",
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
    ],
  },
  {
    questionId: "Q21",
    partName: "משפך קבלה/יציאה ומיגון לבטח",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים נזילות ממעטפת המשפך או מדלת המשפך",
        options: true,
        alert: false,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיימים רעשי חיכוך גוף התוף/ליפטרים",
        options: true,
        alert: true,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיימים רעידות מצנרת/תעלת התוף",
        options: true,
        alert: false,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיים נזילת שמן ממערכת סכין הגירוד",
        options: true,
        alert: true,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "סכין הגירוד תקוע למטה או בחצי מהלך שלה",
        options: true,
        alert: true,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
    ],
  },
  {
    questionId: "Q22",
    partName: "רוליקים וטיירים",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים חריגים מרוליק נושא/רוליק לחץ",
        options: true,
        alert: true,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "פני הרוליק הנושא אינם מגורזים",
        options: true,
        alert: true,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "פני הרוליק הנושא אינם מגורזים",
        options: true,
        alert: false,
        choices: ["צ.מזרח", "צ.מערב", "ד.מזרח", "ד.מערב"],
      },
      {
        text: "לא קיים חיבור גירוז לרוליק",
        options: true,
        alert: true,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "וקיימת שחיקה גבוה או פדחות על פני הרוליק",
        options: true,
        alert: false,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "יש צורך בניקיון יסודי של הרוליק מחומר",
        options: true,
        alert: false,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "קיימים רעידות חריגות באזור התוף סובב ומערכת ההנעה",
        options: false,
        alert: true,
      },
      {
        text: "התוף לוחץ על הרוליק לחץ בחוזקה ושוחק אותו",
        options: true,
        alert: true,
        choices: ["רוליק לחץ כניסת חומר", "רוליק לחץ יציאת חומר"],
      },
      {
        text: "יש צורך בניקיון יסודי של הרוליק מחומר",
        options: true,
        alert: true,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
    ],
  },
  {
    questionId: "Q23",
    partName: "משפך קבלה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים נזילות ממעטפת המשפך/מדלת המשפך/מפרט האטימה",
        options: true,
        alert: false,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיימים רעידות מצנרת/תעלת התוף",
        options: true,
        alert: true,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיימים רעשי חיכוך גוף התוף/ליפטרים",
        options: true,
        alert: false,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיימת נזילת שמן ממערכת סכין הגירוד",
        options: false,
        alert: true,
      },
      {
        text: "סכין הגירוד תקוע למטה או בחצי מהלך שלה",
        options: false,
        alert: true,
      },
    ],
  },
  {
    questionId: "Q24",
    partName: "משפך קבלה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים נזילות ממעטפת המשפך/מדלת המשפך/מפרט האטימה",
        options: true,
        alert: false,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיימים רעשי חיכוך גוף התוף/ליפטרים",
        options: true,
        alert: true,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיימים רעידות מצנרת/תעלת התוף",
        options: true,
        alert: false,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
    ],
  },
  {
    questionId: "Q25",
    partName: "מערכות נלוות למסוע",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "כבל/גלגלת/מבנה מערכת המתחיה פגום",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "מגנט המסוע עמוס בברזלים",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "מגרדות המסוע דורשות טיפול וקיים זרזוף בסרט החוזר",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קונסטרוקצית המסוע פגוע",
        options: true,
        alert: true,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
      {
        text: "יש צורך בניקיון בסביבת הסרט",
        options: true,
        alert: false,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
      {
        text: "גלגל משקלת במסוע משוחרר/עמדת המשקל עקומה ולא תקינה",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q26",
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
        alert: true,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
      {
        text: "יש צורך בניקיון בסביבת הסרט",
        options: true,
        alert: false,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
      {
        text: "מערכת המתיחה של הסרט לא מאפשר מתיחה והגוגונים לא תקינים",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q27",
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
        text: "קלפת וסות חומר לנפה תקוע באמצע",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q28",
    partName: "מנועי ורטטי הנפה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים חריגים ממנוע/רטטי הנפה/מצצמד קארדן",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים רעידות חריגות בנפה או באיזור הנפה",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים סדקים חדשים בגוף הנפה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים ברגים של הרטטים משוחריים",
        options: false,
        alert: false,
      },
      {
        text: "קיימים מיגונים מפורקים למנועי ורטטי הנפה",
        options: false,
        alert: true,
      },
      {
        text: "קיים חוסר שמן/נזילה שמן או מערכת גירוז לא מחוברת ברטטי הנפה",
        options: false,
        alert: true,
      },
    ],
  },
  {
    questionId: "Q29",
    partName: "גוף הנפה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רשתות קרועות בנפות או סרגלים משוחררים",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיים גומי קרוע  או סרגל אטימה משוחרר",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים זירזופים מגוף הנפה או ממשפך היציאה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "תושבות קפיצי גומי וקפיצי גומי קרועים/שבורים או עקומים",
        options: false,
        alert: true,
      },
      {
        text: "גוף הנפה רוטט גם בכיוון אנכי לנפה",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "מיגון במערכת ההנעה לא תקין",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q30",
    partName: "גוף הרדלר",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים נזילות ממעטפת הרדלר",
        options: false,
        alert: false,
      },
      {
        text: "קיימים מגוני/מכסים מפורקים לאורך הרדלר או בזנב",
        options: true,
        alert: false,
        choices: ["ראש", "זנב", "לאורך הרדלר"],
      },
      {
        text: "קיים נגיעות השרשרת בגוף הרדלר",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q31",
    partName: "תא שריפה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימת פליטות חום חריגות מאיזור תא השריפה או מחברי התעלה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימות תזוזות חריגות באזור המבער דופן התא שריפה או התעלה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים עיוותי פח התא שריפה או התעלה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים התפרקויות של בידוד במחברי התעלה ובתעלה",
        options: false,
        alert: false,
      },
      {
        text: "קימיים רעשים חריגים התא שריפה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "תמיכות התא שריפה או התעלה זזו ממקומם או התנתקו",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
    ],
  },
  {
    questionId: "Q32",
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
        alert: false,
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
        text: "קיימים התפרקויות של בידוד במחברי התעלה ובתעלה",
        options: false,
        alert: false,
      },
      {
        text: "מערכת המתיחה של הסרט לא מאפשר מתיחה והגוגונים לא תקינים",
        options: false,
        alert: true,
      },
      {
        text: "מגנט הסרט  מלא ברזלים/ לא נמצא במקום",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q33",
    partName: "שרשרת",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים חוליות תפוסות בשרשרת הרדלר",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים רעשים חריגים מהשרשרת לאורך הרדלר",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימות מסילות נושאות שחוקות ברדלר",
        options: true,
        alert: true,
        choices: ["ראש", "זנב", "לאורך הרדלר"],
      },
      {
        text: "קיימים כפיים עקומות או שבורות ברדלר",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "השרשרת רפויה וקופצת בתוף הראש",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q34",
    partName: "תוף זנב וראש",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיים רעש מי תוף הזנב או מי שילוב השרשרת עם התוף",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "מסבי התוף הזנב לא מפולסים",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "מערכת המתיחה של הרדלר לא מאפשר מתיחה והגוגונים לא תקינים",
        options: false,
        alert: true,
      },
      {
        text: "מסבי תוף הזנב מרעישים/חמים",
        options: true,
        alert: true,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "שינים של התוף רופפת או שבורות",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "ציר תוף הרדלר שקע במסבי התוף עקב כשל מיסב",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "יש צורך בניקיון בסביבת הסרט",
        options: true,
        alert: true,
        choices: ["ראש", "זנב", "לאורך הרדלר"],
      },
    ],
  },
  {
    questionId: "Q35",
    partName: "תוף זנב וראש",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיים רעש מי תוף הזנב או מי שילוב השרשרת עם התוף",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "מסבי התוף הזנב לא מפולסים",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "מערכת המתיחה של הרדלר לא מאפשר מתיחה והגוגונים לא תקינים",
        options: false,
        alert: true,
      },
      {
        text: "מסבי תוף הזנב מרעישים/חמים",
        options: true,
        alert: true,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "שינים של התוף רופפת או שבורות",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "ציר תוף הרדלר שקע במסבי התוף עקב כשל מיסב",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "יש צורך בניקיון בסביבת הרדלר",
        options: true,
        alert: false,
        choices: ["ראש", "זנב", "לאורך הרדלר"],
      },
    ],
  },
  {
    questionId: "Q36",
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
        options: false,
        alert: false,
      },
      {
        text: "תמיכות צנרת המשאבה או הפילטר לא תקינות",
        alert: false,
        options: false,
      },
      {
        text: "בוחש המיכל לא מסתובב/נפל למיכל/רועד",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q37",
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
        text: "חסרות פרמוט/שמן במשאבה או לא קיים",
        options: false,
        alert: false,
      },
      {
        text: "מיגון המשאבה או האטם לא תקין",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q38",
    partName: "מערכות נלוות למסוע",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "כבל או גלגלת מערכת המתחיה פגום",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "מגנט המסוע עמוס בברזלים",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "מגרדות המסוע דורשות טיפול וקיים זרזוף בסרט החוזר",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קונסטרוקצית המסוע פגוע",
        options: true,
        alert: true,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
      {
        text: "יש צורך בניקיון בסביבת הסרט",
        options: true,
        alert: false,
        choices: ["שוקת", "חוזרים", "נושאים", "כיוון חוזר", "נושא חוזר"],
      },
    ],
  },
  {
    questionId: "Q39",
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
        alert: false,
      },
      {
        text: "קיים חוסר שמן/פירמוט גירוז במסבי המפוח",
        options: false,
        alert: false,
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
        alert: false,
      },
      {
        text: "גשש הרעידות או הטמפ' אינם מחוברים או כבל פגוע",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q40",
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
        alert: true,
      },
      {
        text: "קיימים ברגים חסרים/משוחררים במפוח",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעידות חריגות במפוח ובסביבתו",
        options: false,
        alert: false,
      },
      {
        text: "קיימים סדקים או ברגים משוחררים בבסיס המפוח",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q41",
    partName: "גוף הנפה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רשתות קרועות בנפות או סרגלים משוחררים",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיים גומי קרוע  או סרגל אטימה משוחרר",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיימים זירזופים מגוף הנפה או ממשפך היציאה",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "תושבות קפיצי גומי וקפיצי גומי קרועים/שבורים או עקומים",
        options: false,
        alert: true,
      },
      {
        text: "גוף הנפה רוטט גם בכיוון אנכי לנפה",
        options: true,
        alert: false,
        choices: ["גבולי", "חריג", "קריטי"],
      },
    ],
  },
  {
    questionId: "Q42",
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
        alert: false,
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
        text: "מערכת המתיחה של הסרט לא מאפשר מתיחה והגוגונים לא תקינים",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q43",
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
        alert: false,
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
        text: "מערכת המתיחה של הסרט לא מאפשר מתיחה והגוגונים לא תקינים",
        options: false,
        alert: true,
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
    questionId: "Q44",
    partName: "משפך קבלה/יציאה ומיגון לבטח",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים נזילות ממעטפת המשפך או מדלת המשפך",
        options: true,
        alert: false,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיימים רעשי חיכוך גוף התוף/ליפטרים",
        options: true,
        alert: true,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
      {
        text: "קיימים רעידות מצנרת/תעלת התוף",
        options: true,
        alert: false,
        choices: ["משפך כניסה", "משפך יציאה"],
      },
    ],
  },
  {
    questionId: "Q45",
    partName: "פיניון וזר שיניים",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים חריגים משילוב הזר והפיניון",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיים חוסר גירוז בפיניון או בזר השיניים",
        options: false,
        alert: true,
      },
      {
        text: "מיסבי הפיניון מרעישים/חמים",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "פרט האטימה של מסבי הפיניון נפגע/נכנס חומר למיסב",
        options: false,
        alert: true,
      },
      {
        text: "קיימים סדקים/ברגים משוחררים בזר השיניים/בפיניון",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q46",
    partName: "רוליקים וטיירים",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים חריגים מרוליק נושא/רוליק לחץ",
        options: true,
        alert: true,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "פני הרוליק הנושא אינם מגורזים",
        options: true,
        alert: true,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "פני הרוליק הנושא אינם מגורזים",
        options: true,
        alert: false,
        choices: ["צ.מזרח", "צ.מערב", "ד.מזרח", "ד.מערב"],
      },
      {
        text: "לא קיים חיבור גירוז לרוליק",
        options: true,
        alert: true,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "וקיימת שחיקה גבוה או פדחות על פני הרוליק",
        options: true,
        alert: false,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "יש צורך בניקיון יסודי של הרוליק מחומר",
        options: true,
        alert: false,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
      {
        text: "קיימים רעידות חריגות באזור התוף סובב ומערכת ההנעה",
        options: false,
        alert: true,
      },
      {
        text: "התוף לוחץ על הרוליק לחץ בחוזקה ושוחק אותו",
        options: true,
        alert: false,
        choices: ["רוליק לחץ כניסת חומר", "רוליק לחץ יציאת חומר"],
      },
      {
        text: "יש צורך בניקיון יסודי של הרוליק מחומר",
        options: true,
        alert: true,
        choices: [
          "צ.מזרח",
          "צ.מערב",
          "ד.מזרח",
          "ד.מערב",
          "לחץ יציאה",
          "לחץ כניסה",
        ],
      },
    ],
  },
  {
    questionId: "Q47",
    partName: "מערכת פטישים",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים חריגים ממערכת ההנעה של הפטישים",
        options: false,
        alert: true,
      },
      {
        text: "קיימת אומגה קרוע/יבשה",
        options: false,
        alert: true,
      },
      {
        text: "קיימים רעשים חריגים מהמנוע",
        options: true,
        alert: true,
        choices: ["גבולי", "חריג", "קריטי"],
      },
      {
        text: "קיים צורך בהחלפת ברונזה בפטישים/ברגים חסרים או משוחררים",
        options: false,
        alert: true,
      },
      {
        text: "קיים כשל במיסב הפטישים",
        options: false,
        alert: true,
      },
      {
        text: "קיימים קפיצות במערכת הפטישים או בעיה בבאק סטופ",
        options: false,
        alert: true,
      },
      {
        text: "קיימים סדקים/חורים בגוף המייבש",
        options: false,
        alert: true,
      },
    ],
  },
  {
    questionId: "Q48",
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
        choices: ["הנעה", "ראש", "הידוק"],
      },
      {
        text: "קיים חוסר במערכת גירוז למסבי התוף",
        options: true,
        alert: false,
        choices: ["הנעה", "ראש", "הידוק"],
      },
      {
        text: "קיימים רעשים חריגים מהתוף או ממסבב",
        options: true,
        alert: true,
        choices: ["הנעה", "ראש", "הידוק"],
      },
      {
        text: "קיימת תזוזה של התוף בבתי המיסב",
        options: true,
        alert: true,
        choices: ["הנעה", "ראש", "הידוק"],
      },
    ],
  },
  {
    questionId: "Q49",
    partName: "משפך קבלה וגוף המזין",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימים נזילות/בריחת ואקום ממעטפת המזין או המשפך",
        options: false,
        alert: false,
      },
      {
        text: "קיימים מגוני RD מפורק או לא יושב טוב",
        options: false,
        alert: false,
      },
      {
        text: "קיימים רעשים חריגים מכיוון המזין",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q50",
    partName: "ממסרה",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "ממסרה של המזין חמה",
        options: true,
        alert: true,
        choices: ["הנעה", "ראש", "הידוק"],
      },
      {
        text: "קיימים רעשים חריגים מהממסרה",
        options: true,
        alert: false,
        choices: ["הנעה", "ראש", "הידוק"],
      },
      {
        text: "קיימת נזילת שמן מהממסרה",
        options: true,
        alert: true,
        choices: ["הנעה", "ראש", "הידוק"],
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
        text: "מצמד המקשר בין ההנעה למזין מרעיש/לא תקין",
        options: true,
        alert: true,
        choices: ["הנעה", "ראש", "הידוק"],
      },
    ],
  },
  {
    questionId: "Q51",
    partName: "מזין כוכבי",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיים מיסב חם/מרעיש במזין",
        options: false,
        alert: true,
      },
      {
        text: "לא קיים גירוז במיסב המזין",
        options: false,
        alert: true,
      },
      {
        text: "קיימת נזילה מאטם המזין",
        options: false,
        alert: true,
      },
      {
        text: "קיימים רעידות בגוף המזין או ברגים משוחריים במסבים",
        options: false,
        alert: true,
      },
    ],
  },
  {
    questionId: "Q53",
    partName: "תוף זנב וראש",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיים רעש מי תוף הזנב או מי שילוב השרשרת עם התוף",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "מסבי התוף הזנב לא מפולסים",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "מערכת המתיחה של הרדלר לא מאפשר מתיחה והגוגונים לא תקינים",
        options: false,
        alert: true,
      },
      {
        text: "מסבי תוף הזנב מרעישים/חמים",
        options: true,
        alert: true,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "שינים של התוף רופפת או שבורות",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "ציר תוף הרדלר שקע במסבי התוף עקב כשל מיסב",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
    ],
  },
  {
    questionId: "Q54",
    partName: "מזין כוכבי",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיים מיסב חם/מרעיש במזין",
        options: false,
        alert: true,
      },
      {
        text: "לא קיים גירוז במיסב המזין",
        options: false,
        alert: true,
      },
      {
        text: "קיימת נזילה מאטם המזין",
        options: false,
        alert: true,
      },
      {
        text: "קיימים רעידות בגוף המזין או ברגים משוחריים במסבים",
        options: false,
        alert: true,
      },
    ],
  },
  {
    questionId: "Q55",
    partName: "תוף זנב וראש",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיים רעש מי תוף הזנב או מי שילוב השרשרת עם התוף",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "מסבי התוף הזנב לא מפולסים",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "מערכת המתיחה של הרדלר לא מאפשר מתיחה והגוגונים לא תקינים",
        options: false,
        alert: true,
      },
      {
        text: "מסבי תוף הזנב מרעישים/חמים",
        options: true,
        alert: true,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "שינים של התוף רופפת או שבורות",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "ציר תוף הרדלר שקע במסבי התוף עקב כשל מיסב",
        options: true,
        alert: false,
        choices: ["תוף ראש", "תוף זנב"],
      },
      {
        text: "יש צורך בניקיון בסביבת הסרט",
        options: true,
        alert: false,
        choices: ["ראש", "זנב", "לאורך הרדלר"],
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
    questionId: "Q56",
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
        text: "מיגון המשאבה או האטם לא תקין",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q57",
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
        options: false,
        alert: false,
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
    ],
  },
  {
    questionId: "Q58",
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
        text: "חסרות פרמוט/שמן במשאבה או לא קיים",
        options: false,
        alert: false,
      },
      {
        text: "מיגון המשאבה או האטם לא תקין",
        options: false,
        alert: false,
      },
    ],
  },
  {
    questionId: "Q59",
    partName: "בית הפגמיל והרטוטר",
    type: "checkboxes",
    input: [
      {
        text: "כלל הערות למטה תקינות",
        options: false,
        alert: false,
      },
      {
        text: "קיימות נזילות מי גוף הפגמיל או מהצנרת הנכנסת אליו",
        options: false,
        alert: true,
      },
      {
        text: "קיים ברגים חסרים/משוחררים בבית הפגמיל או ברוטור",
        options: false,
        alert: true,
      },
      {
        text: "קיימים רעשים/רעידות חריגים מהרוטור או מהמיסבים",
        options: false,
        alert: true,
      },
      {
        text: "מערכת הגירוז לא מחוברת למסבי ציר הפגמיל",
        options: false,
        alert: true,
      },
      {
        text: "קימיים רעידות חריגות מגוף הפגמיל",
        options: false,
        alert: true,
      },
      {
        text: "יש צורך לניקיון בסביבת המפורר",
        options: false,
        alert: true,
      },
    ],
  },
  //#endregion
];

export type CheckBox =
  | { text: string; alert: boolean; options: true; choices: string[] }
  | { text: string; alert: boolean; options: false };

export type QuestionBank = {
  questionId: string;
  partName: string;
  type: "checkboxes" | "multiple-choice" | "range";
  input: CheckBox[];
}[];

//Try and refactor MachineParts to new type to this old ones structure below, note, instead of the key being a string.. check if theres a way to do with a boolean
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
