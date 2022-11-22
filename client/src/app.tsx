import React, { useState } from "react";
import { PageNotFound } from "./components/page-not-found";
import { Report } from "./components/report/report";
import { Search } from "./components/search/search";
import { Home } from "./home";
import { logo } from "./data/imports";

export const App: React.FC = () => {
  const [showScreen, setShowScreen] = useState("home");
  let display;
  switch (showScreen) {
    case "home":
      display = <Home setScreen={setShowScreen} />;
      break;
    case "report":
      display = <Report setScreen={setShowScreen} />;
      break;
    case "search":
      display = <Search />;
      break;
    default:
      display = <PageNotFound />;
  }
  return (
    <div className="app ">
      <div className="top-bar">
        <img
          className="icon logo"
          src={logo.href}
          onClick={() => {
            setShowScreen("home");
          }}
        ></img>
      </div>
      {display}
    </div>
  );
};
