import React, { useState } from "react";
import { PageNotFound } from "./components/misc/page-not-found";
import { Report } from "./components/report/report";
import { Spacer } from "./components/misc/spacer";
import { DropdownMenu } from "./components/dropdown-menu";
import { Home } from "./home";

export const App: React.FC = () => {
  const [showScreen, setShowScreen] = useState("Home");
  let display;
  switch (showScreen) {
    case "Home":
      display = <Home setScreen={setShowScreen} />;
      break;
    case "Survey":
    case "Oil":
    case "Quake":
      display = <Report type={showScreen} />;
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
