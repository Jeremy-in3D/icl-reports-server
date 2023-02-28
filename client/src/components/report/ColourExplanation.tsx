import dayjs from "dayjs";

export function ColourExplanation(appContext: any) {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        bottom: "0px",
        right: "0px",
        padding: "5px",
      }}
    >
      <div>
        <div className="color-explanation-wrapper">
          <div className="color-explanation-part">
            הושלם{" "}
            <div
              style={{
                width: 20,
                height: 20,
                background:
                  "linear-gradient(rgba(31, 139, 58, 0.6), rgba(70, 129, 95, 0.6))",
              }}
            ></div>
          </div>

          <div className="color-explanation-part">
            הושלם חלקית{" "}
            <div
              style={{
                width: 20,
                height: 20,
                background:
                  "linear-gradient(rgba(219, 165, 18, 0.6), rgba(221, 192, 61, 0.6))",
              }}
            ></div>
          </div>

          <div className="color-explanation-part">
            לא שלם{" "}
            <div
              style={{
                width: 20,
                height: 20,
                background:
                  "linear-gradient(rgba(219, 18, 18, 0.603),rgba(221, 80, 61, 0.671))",
              }}
            ></div>
          </div>
        </div>
        נערך ב-: {dayjs().format("MM/DD/YYYY HH:mm:ss")}
        {/* by{" "}
        {appContext?.user?.name} */}
      </div>
    </div>
  );
}
