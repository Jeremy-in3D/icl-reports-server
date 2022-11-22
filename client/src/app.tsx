import React, { useState } from "react";
import { PageNotFound } from "./components/page-not-found";
import { Report } from "./components/report/report";
import { Search } from "./components/search/search";
import { TopBar } from "./components/top-bar";
import { Home } from "./home";

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
      <TopBar setScreen={setShowScreen} />
      {display}
    </div>
  );
};
