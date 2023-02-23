import { User } from "../classes/route";

export const michlolim: MichlolContents[] = [
  //#region Route 1
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
      "R-2010-050-486": ["Q36", "Q02", "Q37"],
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
      "R-2010-050-075": ["Q15", "Q08", "Q17", "Q18"],
    },
  },
  {
    michlolId: "R1-M12",
    michlolName: "חילזון",
    equipmentUnit: "חילזון מייבש",
    machines: {
      "R-2010-050-074": ["Q15", "Q08", "Q17", "Q18"],
    },
  },
  //#endregion
  //#region Route 2
  {
    michlolId: "R2-M1",
    michlolName: "מסוע משקולת",
    equipmentUnit: "מסוע סרט ממחסן תוצרת",
    machines: {
      "R-2010-050-170": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q25"],
    },
  },
  {
    michlolId: "R2-M2",
    michlolName: "מסוע מותחנים",
    equipmentUnit: "מסוע הזנה לנפות משלוחים",
    machines: {
      "R-2010-050-406": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q26"],
    },
  },
  {
    michlolId: "R2-M3",
    michlolName: "נפה רוטט",
    equipmentUnit: "נפה משלוחים ישנה",
    machines: {
      "R-2010-050-402A": ["Q27", "Q28", "Q29"],
    },
  },
  {
    michlolId: "R2-M4",
    michlolName: "נפה רוטט",
    equipmentUnit: "נפה משלוחים חדשה",
    machines: {
      "R-2010-050-402B": ["Q27", "Q28", "Q29"],
    },
  },
  {
    michlolId: "R2-M5",
    michlolName: "רדלר",
    equipmentUnit: "רדלר שפיכה לסרט 004",
    machines: {
      "R-2010-050-3502": ["Q30", "Q08", "Q09", "Q33", "Q34"],
    },
  },
  {
    michlolId: "R2-M6",
    michlolName: "רדלר",
    equipmentUnit: "רדלר קבלה מנפות משלוחים",
    machines: {
      "R-2010-050-3501": ["Q30", "Q08", "Q09", "Q33", "Q35"],
    },
  },
  {
    michlolId: "R2-M7",
    michlolName: "חילזון",
    equipmentUnit: "חילזון הזנה לרדלר 3501",
    machines: {
      "R-2010-050-3504": ["Q15", "Q08", "Q09", "Q18"],
    },
  },
  {
    michlolId: "R2-M8",
    michlolName: "חילזון",
    equipmentUnit: "חילזון קבלה מבית שקים",
    machines: {
      "R-2010-050-3505": ["Q15", "Q08", "Q09", "Q18"],
    },
  },
  {
    michlolId: "R2-M9",
    michlolName: "מפוח",
    equipmentUnit: "מפוח בית שקים",
    machines: {
      "R-2010-050-3514": ["Q08", "Q39", "Q40"],
    },
  },
  {
    michlolId: "R2-M10",
    michlolName: "מסוע מותחנים",
    equipmentUnit: "מסוע כניסה לתוף שימון",
    machines: {
      "R-2010-050-413": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q43"],
    },
  },
  {
    michlolId: "R2-M11",
    michlolName: "תוף סובב",
    equipmentUnit: "תוף שימון",
    machines: {
      "R-2010-050-414": ["Q44", "Q08", "Q09", "Q45", "Q46", "Q47"],
    },
  },
  {
    michlolId: "R2-M12",
    michlolName: "מסוע מותחנים",
    equipmentUnit: "מסוע יציאה מנפות",
    machines: {
      "R-2010-050-165": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q43"],
      "R-2010-050-407": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q43"],
      "R-2010-050-415": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q43"],
    },
  },
  {
    michlolId: "R2-M13",
    michlolName: "מסוע משקולת",
    equipmentUnit: "מסוע תוצרת משומנת",
    machines: {
      "R-2010-050-174": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q25"],
      "R-2010-050-178": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q25"],
    },
  },
  {
    michlolId: "R2-M14",
    michlolName: "מזין כוכבי",
    equipmentUnit: "מזין כוכבי ציקלון",
    machines: {
      "R-2010-040-290": ["Q49", "Q08", "Q50", "Q51"],
      "R-2010-040-291": ["Q49", "Q08", "Q50", "Q51"],
    },
  },
  {
    michlolId: "R2-M15",
    michlolName: "מסוע משקולת",
    equipmentUnit: "מסוע הזנת ציקלון",
    machines: {
      "R-2010-040-049": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q25"],
      "R-2010-040-050": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q25"],
    },
  },
  //#endregion
  //#region Route 3
  {
    michlolId: "R3-M1",
    michlolName: "מסוע משקולת",
    equipmentUnit: "מסוע סרט הזנה עקיפה",
    machines: {
      "R-2010-050-004": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q13"],
      "R-2010-050-012": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q20"],
      "R-2010-050-209": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q25"],
    },
  },
  {
    michlolId: "R3-M2",
    michlolName: "מגרסה",
    equipmentUnit: "מפורר",
    machines: {
      "R-2010-050-205": ["Q08", "Q16", "Q19"],
    },
  },
  {
    michlolId: "R3-M3",
    michlolName: "תוף סובב",
    equipmentUnit: "מגרען",
    machines: {
      "R-2010-050-018": ["Q21", "Q08", "Q09", "Q45", "Q22", "Q47"],
    },
  },
  {
    michlolId: "R3-M4",
    michlolName: "תוף סובב",
    equipmentUnit: "מייבש",
    machines: {
      "R-2010-050-022": ["Q23", "Q08", "Q09", "Q45", "Q22", "Q47"],
    },
  },
  {
    michlolId: "R3-M5",
    michlolName: "תוף סובב",
    equipmentUnit: "מקרר",
    machines: {
      "R-2010-050-030": ["Q24", "Q08", "Q09", "Q45", "Q22"],
    },
  },
  {
    michlolId: "R3-M6",
    michlolName: "מפוח",
    equipmentUnit: "מפוח מבער",
    machines: {
      "R-2010-050-494": ["Q04", "Q06"],
    },
  },
  {
    michlolId: "R3-M7",
    michlolName: "מפוח",
    equipmentUnit: "מפוח דילול אויר לתא שריפה",
    machines: {
      "R-2010-050-428": ["Q04", "Q05", "Q06"],
    },
  },
  {
    michlolId: "R3-M8",
    michlolName: "תא שריפה",
    equipmentUnit: "תא שאיפה ותעלת תא שריפה",
    machines: {
      "R-2010-050-433": ["Q31"],
    },
  },
  {
    michlolId: "R3-M9",
    michlolName: "מסוע מותחנים",
    equipmentUnit: "מסוע כניסה לדליין",
    machines: {
      "R-2010-050-033": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q32"],
    },
  },
  //#endregion
  //#region Route 4
  {
    michlolId: "R4-M1",
    michlolName: "דליין",
    equipmentUnit: "דליין קר",
    machines: {
      "R-2010-050-035": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q38"],
    },
  },
  {
    michlolId: "R4-M2",
    michlolName: "מזין רוטט",
    equipmentUnit: "מזין צפוני",
    machines: {
      "R-2010-050-011": ["Q27", "Q28", "Q41"],
    },
  },
  {
    michlolId: "R4-M3",
    michlolName: "מזין רוטט",
    equipmentUnit: "מזין דרומי",
    machines: {
      "R-2010-050-036": ["Q27", "Q28", "Q41"],
    },
  },
  {
    michlolId: "R4-M4",
    michlolName: "נפה",
    equipmentUnit: "נפת גסים ליין ישן",
    machines: {
      "R-2010-050-008": ["Q27", "Q28", "Q41"],
    },
  },
  {
    michlolId: "R4-M5",
    michlolName: "נפה",
    equipmentUnit: "נפת גסים ליין חדש צפוני",
    machines: {
      "R-2010-050-037": ["Q27", "Q28", "Q41"],
    },
  },
  {
    michlolId: "R4-M6",
    michlolName: "נפה",
    equipmentUnit: "נפת תוצרת ליין ישן דרומי",
    machines: {
      "R-2010-050-010": ["Q27", "Q28", "Q41"],
    },
  },
  {
    michlolId: "R4-M7",
    michlolName: "נפה",
    equipmentUnit: "נפת תוצרת ליין חדש צפוני",
    machines: {
      "R-2010-050-038": ["Q27", "Q28", "Q41"],
    },
  },
  {
    michlolId: "R4-M8",
    michlolName: "נפה רוטט",
    equipmentUnit: "נפה משנית",
    machines: {
      "R-2010-050-254": ["Q27", "Q28", "Q41"],
    },
  },
  {
    michlolId: "R4-M9",
    michlolName: "נפה רוטט",
    equipmentUnit: "נפה משנית למגרסות",
    machines: {
      "R-2010-050-255": ["Q27", "Q28", "Q41"],
    },
  },
  {
    michlolId: "R4-M10",
    michlolName: "מסוע מותחנים",
    equipmentUnit: "מסוע הזנה לנפות משלוחים",
    machines: {
      "R-2010-050-1304": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q42"],
    },
  },
  {
    michlolId: "R4-M11",
    michlolName: "מגרסה",
    equipmentUnit: "מגרסת פטישים",
    machines: {
      "R-2010-050-206": ["Q08", "Q19"],
    },
  },
  {
    michlolId: "R4-M12",
    michlolName: "מגרסה",
    equipmentUnit: "מגרסה עליונה",
    machines: {
      "R-2010-050-042": ["Q08", "Q19"],
    },
  },
  {
    michlolId: "R4-M13",
    michlolName: "רדלר",
    equipmentUnit: "רדלר קבלה  מציקלונים",
    machines: {
      "R-2010-050-048": ["Q30", "Q08", "Q09", "Q33", "Q53"],
    },
  },
  {
    michlolId: "R4-M14",
    michlolName: "דליין",
    equipmentUnit: "דליין חם",
    machines: {
      "R-2010-050-028": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q38"],
    },
  },
  //#endregion
  //#region Route 6
  {
    michlolId: "R6-M1",
    michlolName: "מפוח",
    equipmentUnit: "מפוח קטן בית שקים",
    machines: {
      "R-2010-050-233": ["Q04", "Q39", "Q06"],
    },
  },
  {
    michlolId: "R6-M2",
    michlolName: "רדלר",
    equipmentUnit: "רדלר תוצרת טחנה",
    machines: {
      "R-2010-040-235": ["Q30", "Q08", "Q09", "Q33", "Q34"],
    },
  },
  {
    michlolId: "R6-M3",
    michlolName: "מזין כוכבי",
    equipmentUnit: "מזין כוכבי בית שקים",
    machines: {
      "R-2010-040-231": ["Q49", "Q08", "Q17", "Q54"],
    },
  },
  {
    michlolId: "R6-M4",
    michlolName: "חילזון",
    equipmentUnit: "חילזון בית שקים",
    machines: {
      "R-2010-040-230": ["Q15", "Q08", "Q17", "Q18"],
    },
  },
  {
    michlolId: "R6-M5",
    michlolName: "מזין כוכבי",
    equipmentUnit: "מזין כוכבי ציקלון",
    machines: {
      "R-2010-040-225": ["Q49", "Q08", "Q50", "Q54"],
    },
  },
  {
    michlolId: "R6-M5",
    michlolName: "רדלר",
    equipmentUnit: "רדלר עודפי תוצרת",
    machines: {
      "R-2010-040-239": ["Q30", "Q08", "Q09", "Q33", "Q34"],
    },
  },
  {
    michlolId: "R6-M6",
    michlolName: "רדלר",
    equipmentUnit: "רדלר הזנה להחמצה",
    machines: {
      "R-2010-040-237": ["Q30", "Q08", "Q09", "Q33", "Q55"],
    },
  },
  {
    michlolId: "R6-M7",
    michlolName: "משאבה",
    equipmentUnit: "משאבת חמוצה מדוללת מיכל 060",
    machines: {
      "R-2010-040-132": ["Q56", "Q02", "Q56"],
    },
  },
  {
    michlolId: "R6-M8",
    michlolName: "משאבה",
    equipmentUnit: "משאבת חומצה מדוללת מיכל 061",
    machines: {
      "R-2010-040-1238/112": ["Q01", "Q02", "Q56"],
    },
  },
  {
    michlolId: "R6-M9",
    michlolName: "משאבה",
    equipmentUnit: "משאבת חומצה זרחתית מיכל 035",
    machines: {
      "R-2010-050-036": ["Q01", "Q02", "Q56"],
    },
  },
  {
    michlolId: "R6-M10",
    michlolName: "משאבה",
    equipmentUnit: "משאבת חומצה זרחתית מיכל 040",
    machines: {
      "R-2010-040-037": ["Q01", "Q02", "Q56"],
    },
  },
  {
    michlolId: "R6-M11",
    michlolName: "משאבה",
    equipmentUnit: "משאבת סחרור לחומצה גופרתית 98%",
    machines: {
      "R-2010-040-031": ["Q01", "Q02", "Q03"],
      "R-2010-050-032": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R6-M12",
    michlolName: "משאבה",
    equipmentUnit: "משאבת פריקת מיכלית",
    machines: {
      "R-2010-040-861": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R6-M13",
    michlolName: "משאבה",
    equipmentUnit: "משאבת פריקת חומצה גופרתית למיכל 030",
    machines: {
      "R-2010-040-038": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R6-M14",
    michlolName: "מפוח",
    equipmentUnit: "מפוח ספיגה 40",
    machines: {
      "R-2010-040-027": ["Q04", "Q05", "Q06"],
    },
  },
  {
    michlolId: "R6-M15",
    michlolName: "משאבה בור",
    equipmentUnit: "משאבת בור ניקוזים ספיגה",
    machines: {
      "R-2010-040-053": ["Q57", "Q02", "Q58"],
    },
  },
  {
    michlolId: "R6-M16",
    michlolName: "משאבה",
    equipmentUnit: "משאבת ניקוז מערכת ספיגה",
    machines: {
      "R-2010-040-021": ["Q01", "Q02", "Q03"],
      "R-2010-040-022": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R6-M17",
    michlolName: "משאבה",
    equipmentUnit: "משאבת סחרור מערכת ספיגה",
    machines: {
      "R-2010-040-025": ["Q01", "Q02", "Q03"],
      "R-2010-040-026": ["Q01", "Q02", "Q03"],
      "R-2010-040-074": ["Q01", "Q02", "Q03"],
      "R-2010-040-076": ["Q01", "Q02", "Q03"],
      "R-2010-040-077": ["Q01", "Q02", "Q03"],
      "R-2010-040-079": ["Q01", "Q02", "Q03"],
    },
  },
  {
    michlolId: "R6-M18",
    michlolName: "חילזון",
    equipmentUnit: "חילזון הזנת ציקלון להחמצה",
    machines: {
      "R-2010-040-005": ["Q15", "Q08", "Q17", "Q18"],
    },
  },
  {
    michlolId: "R6-M19",
    michlolName: "מסוע מותחנים",
    equipmentUnit: "מסוע כניסה לתוף שימון",
    machines: {
      "R-2010-050-413": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q43"],
    },
  },
  {
    michlolId: "R6-M20",
    michlolName: "פגמיל",
    equipmentUnit: "פגמיל",
    machines: {
      "R-2010-040-276": ["Q08", "Q16", "Q59"],
    },
  },
  {
    michlolId: "R6-M21",
    michlolName: "מסוע מותחנים",
    equipmentUnit: "מסוע הבשלה",
    machines: {
      "R-2010-040-012": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q43"],
    },
  },
  {
    michlolId: "R6-M22",
    michlolName: "מסוע משקולת",
    equipmentUnit: "מסוע דו כיווני החמצה",
    machines: {
      "R-2010-040-016": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q25"],
    },
  },
  {
    michlolId: "R6-M23",
    michlolName: "מסוע משקולת",
    equipmentUnit: "מסוע תוצרת החמצה",
    machines: {
      "R-2010-050-017": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q25"],
    },
  },
  //#endregion
];

//These routes are the ones that exist within the mongoDB routes collection
export const routes: Routes = [
  //#region Survey Route 1
  {
    type: "survey",
    routeId: "R1",
    routeName: "ספיגה 50",
    michlolim: [
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
          "R-2010-050-486": ["Q36", "Q02", "Q37"],
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
          "R-2010-050-075": ["Q15", "Q08", "Q17", "Q18"],
        },
      },
      {
        michlolId: "R1-M12",
        michlolName: "חילזון",
        equipmentUnit: "חילזון מייבש",
        machines: {
          "R-2010-050-074": ["Q15", "Q08", "Q17", "Q18"],
        },
      },
    ],
  },
  //#endregion
  //#region Survey Route 2
  {
    type: "survey",
    routeId: "R2",
    routeName: "משלוחים",
    michlolim: [
      {
        michlolId: "R2-M1",
        michlolName: "מסוע משקולת",
        equipmentUnit: "מסוע סרט ממחסן תוצרת",
        machines: {
          "R-2010-050-170": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q25"],
        },
      },
      {
        michlolId: "R2-M2",
        michlolName: "מסוע מותחנים",
        equipmentUnit: "מסוע הזנה לנפות משלוחים",
        machines: {
          "R-2010-050-406": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q26"],
        },
      },
      {
        michlolId: "R2-M3",
        michlolName: "נפה רוטט",
        equipmentUnit: "נפה משלוחים ישנה",
        machines: {
          "R-2010-050-402A": ["Q27", "Q28", "Q29"],
        },
      },
      {
        michlolId: "R2-M4",
        michlolName: "נפה רוטט",
        equipmentUnit: "נפה משלוחים חדשה",
        machines: {
          "R-2010-050-402B": ["Q27", "Q28", "Q29"],
        },
      },
      {
        michlolId: "R2-M5",
        michlolName: "רדלר",
        equipmentUnit: "רדלר שפיכה לסרט 004",
        machines: {
          "R-2010-050-3502": ["Q30", "Q08", "Q09", "Q33", "Q34"],
        },
      },
      {
        michlolId: "R2-M6",
        michlolName: "רדלר",
        equipmentUnit: "רדלר קבלה מנפות משלוחים",
        machines: {
          "R-2010-050-3501": ["Q30", "Q08", "Q09", "Q33", "Q35"],
        },
      },
      {
        michlolId: "R2-M7",
        michlolName: "חילזון",
        equipmentUnit: "חילזון הזנה לרדלר 3501",
        machines: {
          "R-2010-050-3504": ["Q15", "Q08", "Q09", "Q18"],
        },
      },
      {
        michlolId: "R2-M8",
        michlolName: "חילזון",
        equipmentUnit: "חילזון קבלה מבית שקים",
        machines: {
          "R-2010-050-3505": ["Q15", "Q08", "Q09", "Q18"],
        },
      },
      {
        michlolId: "R2-M9",
        michlolName: "מפוח",
        equipmentUnit: "מפוח בית שקים",
        machines: {
          "R-2010-050-3514": ["Q08", "Q39", "Q40"],
        },
      },
      {
        michlolId: "R2-M10",
        michlolName: "מסוע מותחנים",
        equipmentUnit: "מסוע כניסה לתוף שימון",
        machines: {
          "R-2010-050-413": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q43"],
        },
      },
      {
        michlolId: "R2-M11",
        michlolName: "תוף סובב",
        equipmentUnit: "תוף שימון",
        machines: {
          "R-2010-050-414": ["Q44", "Q08", "Q09", "Q45", "Q46", "Q47"],
        },
      },
      {
        michlolId: "R2-M12",
        michlolName: "מסוע מותחנים",
        equipmentUnit: "מסוע יציאה מנפות",
        machines: {
          "R-2010-050-165": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q43"],
          "R-2010-050-407": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q43"],
          "R-2010-050-415": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q43"],
        },
      },
      {
        michlolId: "R2-M13",
        michlolName: "מסוע משקולת",
        equipmentUnit: "מסוע תוצרת משומנת",
        machines: {
          "R-2010-050-174": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q25"],
          "R-2010-050-178": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q25"],
        },
      },
      {
        michlolId: "R2-M14",
        michlolName: "מזין כוכבי",
        equipmentUnit: "מזין כוכבי ציקלון",
        machines: {
          "R-2010-040-290": ["Q49", "Q08", "Q50", "Q51"],
          "R-2010-040-291": ["Q49", "Q08", "Q50", "Q51"],
        },
      },
      {
        michlolId: "R2-M15",
        michlolName: "מסוע משקולת",
        equipmentUnit: "מסוע הזנת ציקלון",
        machines: {
          "R-2010-040-049": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q25"],
          "R-2010-040-050": ["Q07", "Q08", "Q09", "Q10", "Q48", "Q12", "Q25"],
        },
      },
    ],
  },
  //#endregion
  //#region Survey Route 3
  {
    type: "survey",
    routeId: "R3",
    routeName: "תופים סובבים",
    michlolim: [
      {
        michlolId: "R3-M1",
        michlolName: "מסוע משקולת",
        equipmentUnit: "מסוע סרט הזנה עקיפה",
        machines: {
          "R-2010-050-004": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q13"],
          "R-2010-050-012": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q20"],
          "R-2010-050-209": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q25"],
        },
      },
      {
        michlolId: "R3-M2",
        michlolName: "מגרסה",
        equipmentUnit: "מפורר",
        machines: {
          "R-2010-050-205": ["Q08", "Q16", "Q19"],
        },
      },
      {
        michlolId: "R3-M3",
        michlolName: "תוף סובב",
        equipmentUnit: "מגרען",
        machines: {
          "R-2010-050-018": ["Q21", "Q08", "Q09", "Q45", "Q22", "Q47"],
        },
      },
      {
        michlolId: "R3-M4",
        michlolName: "תוף סובב",
        equipmentUnit: "מייבש",
        machines: {
          "R-2010-050-022": ["Q23", "Q08", "Q09", "Q45", "Q22", "Q47"],
        },
      },
      {
        michlolId: "R3-M5",
        michlolName: "תוף סובב",
        equipmentUnit: "מקרר",
        machines: {
          "R-2010-050-030": ["Q24", "Q08", "Q09", "Q45", "Q22"],
        },
      },
      {
        michlolId: "R3-M6",
        michlolName: "מפוח",
        equipmentUnit: "מפוח מבער",
        machines: {
          "R-2010-050-494": ["Q04", "Q06"],
        },
      },
      {
        michlolId: "R3-M7",
        michlolName: "מפוח",
        equipmentUnit: "מפוח דילול אויר לתא שריפה",
        machines: {
          "R-2010-050-428": ["Q04", "Q05", "Q06"],
        },
      },
      {
        michlolId: "R3-M8",
        michlolName: "תא שריפה",
        equipmentUnit: "תא שאיפה ותעלת תא שריפה",
        machines: {
          "R-2010-050-433": ["Q31"],
        },
      },
      {
        michlolId: "R3-M9",
        michlolName: "מסוע מותחנים",
        equipmentUnit: "מסוע כניסה לדליין",
        machines: {
          "R-2010-050-033": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q32"],
        },
      },
    ],
  },
  //#endregion
  //#region Survey Route 4
  {
    type: "survey",
    routeId: "R4",
    routeName: "מגדל ניפוי",
    michlolim: [
      {
        michlolId: "R4-M1",
        michlolName: "דליין",
        equipmentUnit: "דליין קר",
        machines: {
          "R-2010-050-035": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q38"],
        },
      },
      {
        michlolId: "R4-M2",
        michlolName: "מזין רוטט",
        equipmentUnit: "מזין צפוני",
        machines: {
          "R-2010-050-011": ["Q27", "Q28", "Q41"],
        },
      },
      {
        michlolId: "R4-M3",
        michlolName: "מזין רוטט",
        equipmentUnit: "מזין דרומי",
        machines: {
          "R-2010-050-036": ["Q27", "Q28", "Q41"],
        },
      },
      {
        michlolId: "R4-M4",
        michlolName: "נפה",
        equipmentUnit: "נפת גסים ליין ישן",
        machines: {
          "R-2010-050-008": ["Q27", "Q28", "Q41"],
        },
      },
      {
        michlolId: "R4-M5",
        michlolName: "נפה",
        equipmentUnit: "נפת גסים ליין חדש צפוני",
        machines: {
          "R-2010-050-037": ["Q27", "Q28", "Q41"],
        },
      },
      {
        michlolId: "R4-M6",
        michlolName: "נפה",
        equipmentUnit: "נפת תוצרת ליין ישן דרומי",
        machines: {
          "R-2010-050-010": ["Q27", "Q28", "Q41"],
        },
      },
      {
        michlolId: "R4-M7",
        michlolName: "נפה",
        equipmentUnit: "נפת תוצרת ליין חדש צפוני",
        machines: {
          "R-2010-050-038": ["Q27", "Q28", "Q41"],
        },
      },
      {
        michlolId: "R4-M8",
        michlolName: "נפה רוטט",
        equipmentUnit: "נפה משנית",
        machines: {
          "R-2010-050-254": ["Q27", "Q28", "Q41"],
        },
      },
      {
        michlolId: "R4-M9",
        michlolName: "נפה רוטט",
        equipmentUnit: "נפה משנית למגרסות",
        machines: {
          "R-2010-050-255": ["Q27", "Q28", "Q41"],
        },
      },
      {
        michlolId: "R4-M10",
        michlolName: "מסוע מותחנים",
        equipmentUnit: "מסוע הזנה לנפות משלוחים",
        machines: {
          "R-2010-050-1304": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q42"],
        },
      },
      {
        michlolId: "R4-M11",
        michlolName: "מגרסה",
        equipmentUnit: "מגרסת פטישים",
        machines: {
          "R-2010-050-206": ["Q08", "Q19"],
        },
      },
      {
        michlolId: "R4-M12",
        michlolName: "מגרסה",
        equipmentUnit: "מגרסה עליונה",
        machines: {
          "R-2010-050-042": ["Q08", "Q19"],
        },
      },
      {
        michlolId: "R4-M13",
        michlolName: "רדלר",
        equipmentUnit: "רדלר קבלה  מציקלונים",
        machines: {
          "R-2010-050-048": ["Q30", "Q08", "Q09", "Q33", "Q53"],
        },
      },
      {
        michlolId: "R4-M14",
        michlolName: "דליין",
        equipmentUnit: "דליין חם",
        machines: {
          "R-2010-050-028": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q38"],
        },
      },
    ],
  },
  //#endregion
  //#region Survey Route 6
  {
    type: "survey",
    routeId: "R6",
    routeName: "מתקן 40",
    michlolim: [
      {
        michlolId: "R6-M1",
        michlolName: "מפוח",
        equipmentUnit: "מפוח קטן בית שקים",
        machines: {
          "R-2010-050-233": ["Q04", "Q39", "Q06"],
        },
      },
      {
        michlolId: "R6-M2",
        michlolName: "רדלר",
        equipmentUnit: "רדלר תוצרת טחנה",
        machines: {
          "R-2010-040-235": ["Q30", "Q08", "Q09", "Q33", "Q34"],
        },
      },
      {
        michlolId: "R6-M3",
        michlolName: "מזין כוכבי",
        equipmentUnit: "מזין כוכבי בית שקים",
        machines: {
          "R-2010-040-231": ["Q49", "Q08", "Q17", "Q54"],
        },
      },
      {
        michlolId: "R6-M4",
        michlolName: "חילזון",
        equipmentUnit: "חילזון בית שקים",
        machines: {
          "R-2010-040-230": ["Q15", "Q08", "Q17", "Q18"],
        },
      },
      {
        michlolId: "R6-M5",
        michlolName: "מזין כוכבי",
        equipmentUnit: "מזין כוכבי ציקלון",
        machines: {
          "R-2010-040-225": ["Q49", "Q08", "Q50", "Q54"],
        },
      },
      {
        michlolId: "R6-M5",
        michlolName: "רדלר",
        equipmentUnit: "רדלר עודפי תוצרת",
        machines: {
          "R-2010-040-239": ["Q30", "Q08", "Q09", "Q33", "Q34"],
        },
      },
      {
        michlolId: "R6-M6",
        michlolName: "רדלר",
        equipmentUnit: "רדלר הזנה להחמצה",
        machines: {
          "R-2010-040-237": ["Q30", "Q08", "Q09", "Q33", "Q55"],
        },
      },
      {
        michlolId: "R6-M7",
        michlolName: "משאבה",
        equipmentUnit: "משאבת חמוצה מדוללת מיכל 060",
        machines: {
          "R-2010-040-132": ["Q56", "Q02", "Q56"],
        },
      },
      {
        michlolId: "R6-M8",
        michlolName: "משאבה",
        equipmentUnit: "משאבת חומצה מדוללת מיכל 061",
        machines: {
          "R-2010-040-1238/112": ["Q01", "Q02", "Q56"],
        },
      },
      {
        michlolId: "R6-M9",
        michlolName: "משאבה",
        equipmentUnit: "משאבת חומצה זרחתית מיכל 035",
        machines: {
          "R-2010-050-036": ["Q01", "Q02", "Q56"],
        },
      },
      {
        michlolId: "R6-M10",
        michlolName: "משאבה",
        equipmentUnit: "משאבת חומצה זרחתית מיכל 040",
        machines: {
          "R-2010-040-037": ["Q01", "Q02", "Q56"],
        },
      },
      {
        michlolId: "R6-M11",
        michlolName: "משאבה",
        equipmentUnit: "משאבת סחרור לחומצה גופרתית 98%",
        machines: {
          "R-2010-040-031": ["Q01", "Q02", "Q03"],
          "R-2010-050-032": ["Q01", "Q02", "Q03"],
        },
      },
      {
        michlolId: "R6-M12",
        michlolName: "משאבה",
        equipmentUnit: "משאבת פריקת מיכלית",
        machines: {
          "R-2010-040-861": ["Q01", "Q02", "Q03"],
        },
      },
      {
        michlolId: "R6-M13",
        michlolName: "משאבה",
        equipmentUnit: "משאבת פריקת חומצה גופרתית למיכל 030",
        machines: {
          "R-2010-040-038": ["Q01", "Q02", "Q03"],
        },
      },
      {
        michlolId: "R6-M14",
        michlolName: "מפוח",
        equipmentUnit: "מפוח ספיגה 40",
        machines: {
          "R-2010-040-027": ["Q04", "Q05", "Q06"],
        },
      },
      {
        michlolId: "R6-M15",
        michlolName: "משאבה בור",
        equipmentUnit: "משאבת בור ניקוזים ספיגה",
        machines: {
          "R-2010-040-053": ["Q57", "Q02", "Q58"],
        },
      },
      {
        michlolId: "R6-M16",
        michlolName: "משאבה",
        equipmentUnit: "משאבת ניקוז מערכת ספיגה",
        machines: {
          "R-2010-040-021": ["Q01", "Q02", "Q03"],
          "R-2010-040-022": ["Q01", "Q02", "Q03"],
        },
      },
      {
        michlolId: "R6-M17",
        michlolName: "משאבה",
        equipmentUnit: "משאבת סחרור מערכת ספיגה",
        machines: {
          "R-2010-040-025": ["Q01", "Q02", "Q03"],
          "R-2010-040-026": ["Q01", "Q02", "Q03"],
          "R-2010-040-074": ["Q01", "Q02", "Q03"],
          "R-2010-040-076": ["Q01", "Q02", "Q03"],
          "R-2010-040-077": ["Q01", "Q02", "Q03"],
          "R-2010-040-079": ["Q01", "Q02", "Q03"],
        },
      },
      {
        michlolId: "R6-M18",
        michlolName: "חילזון",
        equipmentUnit: "חילזון הזנת ציקלון להחמצה",
        machines: {
          "R-2010-040-005": ["Q15", "Q08", "Q17", "Q18"],
        },
      },
      {
        michlolId: "R6-M19",
        michlolName: "מסוע מותחנים",
        equipmentUnit: "מסוע כניסה לתוף שימון",
        machines: {
          "R-2010-050-413": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q43"],
        },
      },
      {
        michlolId: "R6-M20",
        michlolName: "פגמיל",
        equipmentUnit: "פגמיל",
        machines: {
          "R-2010-040-276": ["Q08", "Q16", "Q59"],
        },
      },
      {
        michlolId: "R6-M21",
        michlolName: "מסוע מותחנים",
        equipmentUnit: "מסוע הבשלה",
        machines: {
          "R-2010-040-012": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q43"],
        },
      },
      {
        michlolId: "R6-M22",
        michlolName: "מסוע משקולת",
        equipmentUnit: "מסוע דו כיווני החמצה",
        machines: {
          "R-2010-040-016": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q25"],
        },
      },
      {
        michlolId: "R6-M23",
        michlolName: "מסוע משקולת",
        equipmentUnit: "מסוע תוצרת החמצה",
        machines: {
          "R-2010-050-017": ["Q07", "Q08", "Q09", "Q10", "Q11", "Q12", "Q25"],
        },
      },
    ],
  },
  //#endregion
];

export const engineering: Engineering = [
  //#region Engineering Report Quakes
  {
    type: "engineering",
    routeId: "E1",
    routeName: 'דו"ח מערכת שמן',
    machines: [
      "50-017 C1 מזין סרט (מסוע סרט)",
      "50-018 V1 מגרען",
      "50-022 H5 מייבש סובב ראשוני",
      "50-028 C2 מעלית כפות (דליין חם)",
      "50-030 H2 מקרר סובב",
      "50-035 C2 מעלית כפות (דליין קר)",
      "50-452 P2 מיכל - מפוח ספיגה",
      "50-453 P2 מיכל - מפוח ספיגה",
      "50-012 C1 מסוע סרט",
      "50-004 C4 מסוע סרט",
      "50-1304 C1 מסוע סרט",
      "50-057 C1 מזין סרט (מסוע)",
      "50-033 C1 מזין סרט",
      "50-048 C1 רדלר שינוע ציקלון",
      "50-052 C1 מזין סרט",
      "50-054 C3 מזין סרט",
      "50-074 C1 חלזון שינוע ציקלון",
      "מפוח 50-452 - צד מנוע (מיסב אחורי)",
      "מפוח 50-452 - צד מאיץ (מיסב קדמי)",
      "מפוח 50-453 - צד מנוע (מיסב אחורי)",
      "מפוח 50-453 - צד מאיץ (מיסב קדמי)",
      "40-276 C0 פגמיל גדול",
      "40-016 C1 מסוע סרט 36",
      "C1 40-012B מסוע סרט הבשלה (גדול)",
      "C1 40-012 גיר קטן",
      "40-239 C1 מסוע שרשרת (רדלר)",
      "40-237 C3 מסוע שרשרת",
      "40-235 C3 מסוע שרשרת",
      "40-006 C3 מסוע שקול",
      "40-266 C3 מזין חלזוני",
      "טחנה C4 40-217B צלב אגן",
      "40-005 C3 מזין חלזוני",
      "טחנה C4 40-217A ממסרה",
      "40-049 C3 מסוע סרט",
      "40-043 P8 בוחש ניקוזים",
      "40-040 P8 בוחש מיכל",
      "40-262 C3 מסוע סרט",
      "40-206 C3 מסוע סרט",
      "40-050 C3 מסוע סרט",
      "50-209 C4 מפורר גושים",
      "50-205 C3 מזין סרט שוקל",
      "50-165 C1 מסוע סרט",
      "50-178C1 מסוע סרט",
      "50-406 C1 מסוע סרט",
    ],
  },
  {
    type: "engineering",
    routeId: "E2",
    routeName: 'דו"ח רעידות',
    machines: [
      "040-005 screw",
      "040-006 Conv",
      "040-012 Conv",
      "040-014 Crumbler",
      "040-016 Conv",
      "040-027 Absobition Fan",
      "040-036 pump acid",
      "040-037 pump acid",
      "040-043 mixer",
      "040-053 pump",
      "040-071 pump acid",
      "040-217 Inducted Mill",
      "040-221 Dynamic Seperator",
      "040-227 Mill Fan",
      "040-233 Mill Fan",
      "040-235 Redler Chain Conv",
      "040-237 Redler Chain Conv",
      "040-266 screw",
      "040-276 Pagmill",
      "050-012 Conv",
      `050-017 Conv 60",",1"`,
      "050-018 Nuclearizer",
      "050-022 Dryer",
      "050-028 Hot Elevator",
      "050-030 Cooler",
      "050-033 Conv",
      "050-035 Cold Elevator",
      "050-042 hammer crusher",
      "050-048 Redler Dust Scoop",
      "050-052 Product Conv",
      "050-054 Product Conv",
      "050-057 Tripper Conv",
      "050-074 screw",
      "050-075 screw",
      "050-1304 Conv",
      "050-254 Secondary Sifter",
      "050-260 hammer crusher",
      "050-414 Oil Drum",
      "050-428 Furnace Fan",
      "050-452 Dryer Suct Fan",
      "050-453 Cooler Suct Fan",
      "050-484 Pump",
      "050-485 Pump",
      "050-494 Gas air Fan",
      "50-1180- compressor",
      "50-1182- compressor",
      "50-3513 Fan",
      "050-402A",
      "050-402B",
      "040-022 pump scrubber",
      "040-021 pump",
      "040-074 pump",
      "040-079 pump",
      "040-025 pump",
      "040-026 pump",
      "050-491 Cooler Circ Pump",
      "050-472 Cooler Circ Pump",
      "050-471 Cooler Circ Pump",
      "050-469 Cooler Circ Pump",
      "050-468 Cooler Circ Pump",
      "050-464 Cooler Circ Pump",
      "050-462 Dryer Circ Pump",
      "050-461 Dryer Circ Pump",
      "050-459 Dryer Circ Pump",
      "050-458 Dryer Circ Pump",
      "050-455 Dryer Circ Pump",
      "050-454 Dryer Circ Pump",
      "050-3514 FAN",
    ],
  },
];

//#endregion];
export type MichlolContents = {
  michlolId: string;
  michlolName: string;
  equipmentUnit: string;
  machines: { [id: string]: string[] };
};

export type Routes = {
  type: "survey";
  routeId: string;
  routeName: string;
  michlolim: MichlolContents[];
  user?: User;
  completedMachines?: number;
}[];

export type Engineering = {
  type: "engineering";
  routeId: string;
  routeName: string;
  machines: string[];
  user?: User;
  completedMachines?: number;
}[];
