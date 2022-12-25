import React from "react";
import { Route } from "./classes/route";
import { AlertScreen } from "./components/misc/alert-screen";
import { HomeSelection } from "./components/misc/home-selection";
import { createIcon, searchIcon, uploadIcon } from "./data/imports";

export const Home: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setRoutes: React.Dispatch<React.SetStateAction<any>>;
  reportInstanceRef: React.MutableRefObject<Route>;
}> = ({ setScreen, setRoutes, reportInstanceRef }) => {
  //What the different buttons in home are, their image, and onClick event
  const buttons = [
    {
      text: 'יצור דו"ח',
      imgPath: createIcon.href,
      onClick: async () => {
        reportInstanceRef.current = new Route();
        //On click, fetches the routes, once fetched, sets routes data, and screen to report
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
      {/* Maps the buttons */}
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
