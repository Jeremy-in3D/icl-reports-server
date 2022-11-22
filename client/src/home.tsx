import React from "react";
import { HomeSelection } from "./components/home-selection";
import { createIcon, searchIcon } from "./data/imports";

const buttons = [
  { text: 'יצור דו"ח', imgPath: createIcon.href, screen: "report" },
  { text: "חיפוש דוחות", imgPath: searchIcon.href, screen: "search" },
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
    </div>
  );
};
