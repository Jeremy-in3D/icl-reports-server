import dayjs from "dayjs";

export function ColourExplanation(appContext: any) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginTop: 50 }}>
        <div className="color-explanation-wrapper">
          <div className="color-explanation-part">
            שלם{" "}
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
            Partial{" "}
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
            Incomplete{" "}
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
        Last Edited: {dayjs().format("MM/DD/YYYY HH:mm:ss")} by{" "}
        {appContext?.user?.name}
      </div>
    </div>
  );
}
