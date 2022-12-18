import React from "react";
import { AlertScreen } from "./components/alert-screen";
import { HomeSelection } from "./components/home-selection";
import { createIcon, searchIcon, uploadIcon } from "./data/imports";

export const Home: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setRoutes: React.Dispatch<React.SetStateAction<any>>;
}> = ({ setScreen, setRoutes }) => {
  const buttons = [
    {
      text: 'יצור דו"ח',
      imgPath: createIcon.href,
      onClick: async () => {
        const response = await fetch("/get-routes");
        const data = await response.json();
        setRoutes(data);
        setScreen("report");
      },
    },
    {
      text: "חיפוש דוחות",
      imgPath: searchIcon.href,
      onClick: async () => {
        setScreen("search");
      },
    },
    {
      text: "היסטוריית הגשה",
      imgPath: uploadIcon.href,
      onClick: async () => {
        setScreen("submission");
      },
    },
  ];
  return (
    <div className="home-screen">
      {buttons.map((item, idx) => (
        <HomeSelection
          text={item.text}
          imgPath={item.imgPath}
          key={idx}
          onClick={item.onClick}
        />
      ))}
      <AlertScreen />
    </div>
  );
};
