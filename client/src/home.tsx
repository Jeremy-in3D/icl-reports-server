import React from "react";
import { AlertScreen } from "./components/alert-screen";
import { HomeSelection } from "./components/home-selection";
import { createIcon, searchIcon, uploadIcon } from "./data/imports";

const buttons = [
  { text: 'יצור דו"ח', imgPath: createIcon.href, screen: "report" },
  { text: "חיפוש דוחות", imgPath: searchIcon.href, screen: "search" },
  { text: "היסטוריית הגשה", imgPath: uploadIcon.href, screen: "submission" },
];

export const Home: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setScreen }) => {
  return (
    <div className="home-screen">
      {buttons.map((item, idx) => (
        <HomeSelection
          text={item.text}
          imgPath={item.imgPath}
          key={idx}
          onClick={() => setScreen(item.screen)}
        />
      ))}
      <AlertScreen />
    </div>
  );
};
