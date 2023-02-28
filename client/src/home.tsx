import React from "react";
import { Route } from "./classes/route";
import { HomeSelection } from "./components/misc/home-selection";
import { Context } from "./context/context";
import { createIcon, searchIcon, viewIcon } from "./data/imports";
import { useNavigate } from "react-router-dom";

export const Home: React.FC<{
  reportInstanceRef: React.MutableRefObject<Route>;
  appContext: Context;
}> = ({ reportInstanceRef, appContext }) => {
  const navigate = useNavigate();

  //What the different buttons in home are, their image, and onClick event
  const buttons = [
    {
      text: 'יצור דו"ח',
      imgPath: createIcon.href,
      onClick: async () => {
        reportInstanceRef.current = new Route();
        const extra = { ...appContext.extra };
        appContext.setExtra({ ...extra, screen: "report" });
        navigate("/reports");
      },
      pathTo: "reports",
    },
    {
      text: "חיפוש דוחות",
      imgPath: searchIcon.href,
      onClick: async () => {
        const extra = { ...appContext.extra };
        appContext.setExtra({ ...extra, screen: "search" });
        navigate("/search-reports");
      },

      pathTo: "search-reports",
    },
    {
      text: "מסך סטטוס",
      imgPath: viewIcon.href,
      onClick: async () => {
        const extra = { ...appContext.extra };
        appContext.setExtra({ ...extra, screen: "status" });
        navigate("/alerts");
      },
      pathTo: "alerts",
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
          pathTo={item.pathTo}
        />
      ))}
    </div>
  );
};
