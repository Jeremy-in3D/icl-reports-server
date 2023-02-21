import React, { useContext } from "react";
import AppContext, { Context } from "../../context/context";
import { logo } from "../../data/imports";

export const TopBar: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setScreen }) => {
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
    </div>
  );
};
