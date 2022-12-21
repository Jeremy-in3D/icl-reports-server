import React from "react";
import { logo } from "../../data/imports";

export const TopBar: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setScreen }) => {
  return (
    <div className="top-bar">
      <img
        className="icon logo"
        src={logo.href}
        onClick={() => {
          setScreen("home");
        }}
      ></img>
    </div>
  );
};
