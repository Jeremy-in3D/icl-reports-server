import React, { useState } from "react";
import { DropdownMenu } from "./components/dropdown-menu";
import { PageNotFound } from "./components/misc/page-not-found";
import { Spacer } from "./components/misc/spacer";
import { Report } from "./components/report/report";
import { Search } from "./components/search/search";
import { Home } from "./home";

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
    default:
      display = <PageNotFound />;
  }
  return (
    <div className="app ">
      <DropdownMenu setScreen={setShowScreen} />
      {/* Keep spacer for the dropdown menu's height since it is position fixed */}
      <Spacer />
      {display}
    </div>
  );
};
