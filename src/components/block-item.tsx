import React from "react";

export const BlockItem: React.FC<{
  text: string;
  imgPath: string;
  onClick: () => void;
}> = ({ text, imgPath, onClick }) => {
  return (
    <div className="block-item" onClick={onClick}>
      <img className="main-menu-icon" src={imgPath}></img>
      <p>{text}</p>
    </div>
  );
};
