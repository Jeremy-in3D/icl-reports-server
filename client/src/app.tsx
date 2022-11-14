import React, { useState } from "react";
import { Export } from "./components/export/export";
import { PageNotFound } from "./components/page-not-found";
import { Report } from "./components/report/report";
import { Search } from "./components/search/search";
import { Home } from "./home";

const logo = new URL("../assets/logo.webp", import.meta.url);
const home = new URL(
  "../assets/icons/bar-icons/home-icon.png",
  import.meta.url
);

export const App: React.FC = () => {
  const [showScreen, setShowScreen] = useState("home");
  let display;
  switch (showScreen) {
    case "home":
      display = <Home setScreen={setShowScreen} />;
      break;
    case "report":
      display = <Report />;
      break;
    case "search":
      display = <Search />;
      break;
    case "export":
      display = <Export />;
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
