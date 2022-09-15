import React, { useState } from "react";
import { PageNotFound } from "./components/misc/page-not-found";
import { Report } from "./components/report/report";
import { Spacer } from "./components/misc/spacer";
import { DropdownMenu } from "./components/dropdown-menu";
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
    default:
      display = <PageNotFound />;
  }
  return (
    <div className="app">
      <DropdownMenu setScreen={setShowScreen} />
      {/* Keep spacer for the dropdown menu's height since it is position fixed */}
      <Spacer />
      {display}
    </div>
  );
};
