import React, { useState } from "react";

export const DropdownMenu: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={`dropdown-menu ${isOpened ? "opened" : "closed"}`}>
      {isOpened ? (
        <div>
          <p className="title">מארכת דוחות</p>
          <div className="item">מסך בית</div>
          <div className="item">התחברות \ החלף משתמש</div>
          <div className="item">הגדרות</div>
          <div className="user">אליה והל</div>
          <div className="toggle-dropdown" onClick={() => setIsOpened(false)}>
            ▲
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsOpened(true)}
          className="toggle-dropdown closed"
        >
          ▼
        </div>
      )}
    </div>
  );
};
