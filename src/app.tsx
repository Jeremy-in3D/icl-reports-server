import React from "react";
import { DropdownMenu } from "./dropdown-menu";
import { MainMenu } from "./main-menu";

export const App: React.FC = () => {
  return (
    <div className="app">
      <DropdownMenu />
      <MainMenu />
    </div>
  );
};
