import React, { useState } from "react";

export const DropdownMenu: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setScreen }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={`dropdown-menu ${isOpened ? "opened" : "closed"}`}>
      {isOpened ? (
        <div>
          <p className="title">מערכת דוחות</p>
          <div
            className="dropdown-items"
            onClick={() => setIsOpened((prevState) => !prevState)}
          >
            <div className="item" onClick={() => setScreen("home")}>
              מסך בית
            </div>
            <div className="item">התחברות \ החלף משתמש</div>
            <div className="item">הגדרות</div>
          </div>
          <div className="user">אליה והל</div>
          <div
            className="toggle-dropdown"
            onClick={() => setIsOpened((prevState) => !prevState)}
          >
            ▲
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsOpened((prevState) => !prevState)}
          className="toggle-dropdown closed"
        >
          ▼
        </div>
      )}
    </div>
  );
};
