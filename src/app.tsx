import React from "react";

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
          <div className="block-item">דו"ח מכלולים</div>
          <div className="block-item">דו"ח שמנים</div>
          <div className="block-item">דו"ח רעידות</div>
          <div className="block-item">מסך התראות</div>
          <div className="block-item">ייצוא</div>
          <div className="block-item">סטטיסטיקה</div>
        </div>
      </div>
    </div>
  );
};
