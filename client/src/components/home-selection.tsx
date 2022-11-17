import React from "react";

export const HomeSelection: React.FC<{
  text: string;
  imgPath: string;
  onClick: () => void;
}> = ({ text, imgPath, onClick }) => {
  return (
    <div className="block-item" onClick={onClick}>
      <img className="block-item-icon" src={imgPath}></img>
      <p>{text}</p>
    </div>
  );
};