import React, { useState } from "react";
import { AlertData } from "../../classes/route";
import { arrayOfRouteNames } from "../report/common/reportTypes";

const Button: React.FC<{
  text: string;
  onClick: () => void;
  current: boolean;
  index: number;
}> = ({ text, onClick, current, index }) => {
  return (
    <button
      onClick={onClick}
      className={current ? "filter-item current" : "filter-item"}
    >
      {text}
    </button>
  );
};

export const Filter: React.FC<{
  setAlerts: React.Dispatch<React.SetStateAction<AlertData[] | undefined>>;
  alerts: AlertData[] | undefined;
  setFilterOption: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ setAlerts, alerts, setFilterOption }) => {
  const [selectedFilterOption, setSelectedFilterOption] = useState<
    number | undefined
  >(0);
  const filterItems = ["כלל התראות", "מכלולים", "שמנים", "רעידות"];

  const alertFilterTypes: { [key: number]: string[] } = {
    0: arrayOfRouteNames,
    1: ["משלוחים", "תופים סובבים", "מגדל ניפוי", "מתקן 40", "ספיגה 50"],
    2: ['דו"ח מערכת שמן'],
    3: ['דו"ח רעידות'],
  };

  return (
    <div className="filter">
      {filterItems.map((item, idx) => (
        <Button
          key={idx}
          index={idx}
          text={item}
          current={idx == selectedFilterOption ? true : false}
          onClick={() => {
            console.log(alerts);
            setSelectedFilterOption(idx);
            setFilterOption(alertFilterTypes[idx]);
          }}
        />
      ))}
    </div>
  );
};

interface setFilter<T> {
  setFilter: React.Dispatch<React.SetStateAction<T>>;
  filterItems: T[];
  currentFilter: T;
}
