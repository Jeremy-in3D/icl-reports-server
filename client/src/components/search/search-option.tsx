import React from "react";

export const SearchOption: React.FC<{
  text: string;
  onClick: () => void;
  href: string;
}> = ({ text, onClick, href }) => {
  return (
    <div className="search-option">
      <img onClick={onClick} className="search-item-btn" src={href}></img>
      <p>{text}</p>
    </div>
  );
};
