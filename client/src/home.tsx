import React from "react";
import { Route } from "./classes/route";
import { HomeSelection } from "./components/misc/home-selection";
import { Context } from "./context/context";
import { createIcon, searchIcon, viewIcon } from "./data/imports";

export const Home: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setRoutes: React.Dispatch<React.SetStateAction<any>>;
  reportInstanceRef: React.MutableRefObject<Route>;
  appContext: Context;
}> = ({ setScreen, setRoutes, reportInstanceRef, appContext }) => {
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
        const extra = { ...appContext.extra };
        appContext.setExtra({ ...extra, screen: "report" });
        setScreen("report");
      },
    },
    {
      text: "חיפוש דוחות",
      imgPath: searchIcon.href,
      onClick: async () => {
        const extra = { ...appContext.extra };
        appContext.setExtra({ ...extra, screen: "search" });
        setScreen("search");
      },
    },
    {
      text: "מסך סטטוס",
      imgPath: viewIcon.href,
      onClick: async () => {
        const extra = { ...appContext.extra };
        appContext.setExtra({ ...extra, screen: "status" });
        setScreen("status");
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
    </div>
  );
};
