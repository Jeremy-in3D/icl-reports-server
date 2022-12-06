import React from "react";
import { MachineFilter } from "./route-view";

const Button: React.FC<{
  text: string;
  onClick: () => void;
}> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export const Filter: React.FC<setFilter<MachineFilter>> = ({
  setFilter,
  filterItems,
}) => {
  return (
    <div>
      {filterItems.map((item) => (
        <Button text={item} onClick={() => setFilter(item)} />
      ))}
    </div>
  );
};

interface setFilter<T> {
  setFilter: React.Dispatch<React.SetStateAction<T>>;
  filterItems: T[];
}
