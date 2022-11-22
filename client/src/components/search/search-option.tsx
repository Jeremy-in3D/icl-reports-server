import React from "react";

export const SearchOption: React.FC<{
  text: string;
  onClick: () => void;
  href: string;
}> = ({ text, onClick, href }) => {
  return (
    <div className="search-option">
      <p>{text}</p>
      <img onClick={onClick} className="search-item-btn" src={href}></img>
    </div>
  );
};
