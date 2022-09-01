import React from "react";

const notificationReportIcon = new URL(
  "../assets/icons/report-notification.svg",
  import.meta.url
);
const searchReportIcon = new URL(
  "../assets/icons/report-search.svg",
  import.meta.url
);
const addReportIcon = new URL(
  "../assets/icons/report-add.svg",
  import.meta.url
);
const shareReportIcon = new URL(
  "../assets/icons/report-share.svg",
  import.meta.url
);
const settingsReportIcon = new URL(
  "../assets/icons/report-settings.svg",
  import.meta.url
);
const statisticsReportIcon = new URL(
  "../assets/icons/report-statistics.svg",
  import.meta.url
);

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="menu-flex">
        <div className="side-menu">
          <p className="title">מארכת דוחות</p>
          <div className="item">כפתור</div>
          <div className="item">כפתור</div>
          <div className="item">כפתור</div>
          <div className="user item">אליה והל</div>
        </div>
        <div className="main-menu">
          <div className="block-item">
            <img className="main-menu-icon" src={addReportIcon.href}></img>
            <p>דו"ח מכלולים</p>
          </div>
          <div className="block-item">
            <img className="main-menu-icon" src={searchReportIcon.href}></img>
            <p>חיפוש דוחות</p>
          </div>
          <div className="block-item">
            <img
              className="main-menu-icon"
              src={notificationReportIcon.href}
            ></img>
            <p>מסך התראות</p>
          </div>
          <div className="block-item">
            <img className="main-menu-icon" src={shareReportIcon.href}></img>
            <p>ייצוא</p>
          </div>
          <div className="block-item">
            <img
              className="main-menu-icon"
              src={statisticsReportIcon.href}
            ></img>
            <p>סטטיסטיקה</p>
          </div>
          <div className="block-item">
            <img className="main-menu-icon" src={settingsReportIcon.href}></img>
            <p>הגדרת דוחות</p>
          </div>
        </div>
      </div>
    </div>
  );
};
