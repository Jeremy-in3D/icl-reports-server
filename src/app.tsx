import React, { useState } from "react";
import { PageNotFound } from "./components/misc/page-not-found";
import { Surveys } from "./components/survey/surveys";
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
    case "Surveys":
      display = <Surveys />;
      break;
    // case "Search":
    //   display = <Reports />;
    //   break;
    // case "Notifications":
    //   display = <Reports />;
    //   break;
    // case "Export":
    //   display = <Reports />;
    //   break;
    // case "Statistics":
    //   display = <Reports />;
    //   break;
    // case "Options":
    //   display = <Reports />;
    //   break;
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
