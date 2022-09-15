import React, { useState } from "react";
import { PageNotFound } from "./components/misc/page-not-found";
import { Surveys } from "./components/survey/surveys";
import { Spacer } from "./components/misc/spacer";
import { DropdownMenu } from "./components/dropdown-menu";
import { Home } from "./home";
import { Engineer } from "./components/engineer/engineer";

export const App: React.FC = () => {
  const [showScreen, setShowScreen] = useState("Home");
  let display;
  switch (showScreen) {
    case "Home":
      display = <Home setScreen={setShowScreen} />;
      break;
    case "Survey":
      //Change to a report Component that gets different props based on the case
      display = <Surveys />;
      break;
    case "Oil":
      //Change to a report Component that gets different props based on the case
      display = <Engineer />;
      break;
    case "Quake":
      //Change to a report Component that gets different props based on the case
      display = <Engineer />;
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
