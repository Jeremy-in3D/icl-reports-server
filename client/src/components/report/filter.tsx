import React from "react";
import { MachineFilter } from "./route-view";

const Button: React.FC<{
  text: string;
  onClick: () => void;
  current: boolean;
}> = ({ text, onClick, current }) => {
  return (
    <button
      onClick={onClick}
      className={current ? "filter-item current" : "filter-item"}
    >
      {text}
    </button>
  );
};

export const Filter: React.FC<setFilter<MachineFilter>> = ({
  setFilter,
  filterItems,
  currentFilter,
}) => {
  return (
    <div className="filter">
      {filterItems.map((item, idx) => (
        <Button
          key={idx}
          text={item}
          current={currentFilter === item}
          onClick={() => setFilter(item)}
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
