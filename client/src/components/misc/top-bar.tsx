import React, { useContext } from "react";
import { User } from "../../app";
import AppContext, { Context } from "../../context/context";
import { logo } from "../../data/imports";
import { Link } from "react-router-dom";
import { Route } from "../../classes/route";

export const TopBar: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  user: User | null;
  displayedScreen: string;
}> = ({ setScreen, user, displayedScreen }) => {
  const appContext = useContext<Context>(AppContext);

  const screenToDisplay: DisplayedScreen = {
    report: "דוחות",
    search: "חיפוש",
    status: "מסך סטטוס",
  };

  return (
    <div className="top-bar">
      <Link to="/">
        <img
          className="icon logo"
          src={logo.href}
          onClick={() => {
            appContext.setSelectedReport(null);
            appContext.setExtra({ isFromAlertAndMachine: false });
            if (appContext.reportInstance?.current) {
              appContext.reportInstance.current = new Route();
            }
            setScreen("home");
          }}
        ></img>
      </Link>
      <div className="top-bar-links">
        <h2>{user?.name}</h2>
        <div
          onClick={() => {
            appContext.setSelectedReport(null);
            const extra = { ...appContext.extra };
            appContext.setExtra({
              ...extra,
              isFromAlertAndMachine: false,
            });
            setScreen("home");
          }}
        >
          <h3 style={displayedScreen == "home" ? { opacity: 0 } : {}}>
            {"Home"}
          </h3>
        </div>
        <div
          onClick={() => {
            appContext.setSelectedReport(null);
            const extra = { ...appContext.extra };
            appContext.setExtra({
              ...extra,
              isFromAlertAndMachine: false,
            });
            setScreen(appContext.extra?.screen);
          }}
        >
          <h3
            style={{
              borderBottom: "2px solid black",
              opacity: displayedScreen == "home" ? 0 : 1,
            }}
          >
            {displayedScreen == "home"
              ? "tohome"
              : screenToDisplay[appContext.extra?.screen]}
          </h3>
        </div>
      </div>
    </div>
  );
};

interface DisplayedScreen {
  [key: string]: string;
}
