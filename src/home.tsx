import React from "react";
import { BlockItem } from "./components/misc/block-item";
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
  { text: "חיפוש דוחות", imgPath: searchReportIcon.href, screen: "Search" },
  {
    text: "מסך התראות",
    imgPath: notificationReportIcon.href,
    screen: "Notifications",
  },
  { text: "ייצוא", imgPath: shareReportIcon.href, screen: "Export" },
  {
    text: "סטטיסטיקה",
    imgPath: statisticsReportIcon.href,
    screen: "Statistics",
  },
  { text: "הגדרת דוחות", imgPath: settingsReportIcon.href, screen: "Options" },
];

export const Home: React.FC<{
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setScreen }) => {
  return (
    <div className="main-menu">
      {buttons.map((item, idx) => (
        <BlockItem
          text={item.text}
          imgPath={item.imgPath}
          key={idx}
          onClick={() => setScreen(item.screen)}
        />
      ))}
    </div>
  );
};
