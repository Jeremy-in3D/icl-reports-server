import React, { useState } from "react";

export const DropdownMenu: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={`dropdown-menu ${isOpened && "opened"}`}>
      {isOpened ? (
        <div>
          <p className="title">מארכת דוחות</p>
          <div className="item">כפתור</div>
          <div className="item">כפתור</div>
          <div className="item">כפתור</div>
          <div className="user item">אליה והל</div>
          <div className="toggle-dropdown" onClick={() => setIsOpened(false)}>
            ▲
          </div>
        </div>
      ) : (
        <div onClick={() => setIsOpened(true)} className="dropdown-menu">
          ▼
        </div>
      )}
    </div>
  );
};
