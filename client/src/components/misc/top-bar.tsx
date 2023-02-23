import React, { useContext } from "react";
import { User } from "../../app";
import AppContext, { Context } from "../../context/context";
import { logo } from "../../data/imports";

export const TopBar: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  user: User;
}> = ({ setScreen, user }) => {
  const appContext = useContext<Context>(AppContext);

  return (
    <div className="top-bar">
      <img
        className="icon logo"
        src={logo.href}
        onClick={() => {
          appContext.setSelectedReport(null);
          setScreen("home");
        }}
      ></img>
      <span>ברוכים הבאים {user.name}</span>
    </div>
  );
};
