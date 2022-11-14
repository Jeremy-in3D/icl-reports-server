import React from "react";
import { HomeSelection } from "./components/home-selection";
import {
  addReportIcon,
  notificationReportIcon,
  searchReportIcon,
  settingsReportIcon,
  shareReportIcon,
  statisticsReportIcon,
} from "./data/imports";

const buttons = [
  { text: 'יצור דו"ח', imgPath: addReportIcon.href, screen: "report" },
  { text: "חיפוש דוחות", imgPath: searchReportIcon.href, screen: "search" },
  {
    text: "מסך התראות",
    imgPath: notificationReportIcon.href,
    screen: "notifications",
  },
  { text: "ייצוא", imgPath: shareReportIcon.href, screen: "export" },
  {
    text: "סטטיסטיקה",
    imgPath: statisticsReportIcon.href,
    screen: "Statistics",
  },
  { text: "הגדרת דוחות", imgPath: settingsReportIcon.href, screen: "options" },
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
