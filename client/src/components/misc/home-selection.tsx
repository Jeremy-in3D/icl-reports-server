import React from "react";

export const HomeSelection: React.FC<{
  text: string;
  imgPath: string;
  onClick?: (() => Promise<void>) | undefined;
  pathTo: string;
}> = ({ text, imgPath, onClick, pathTo }) => {
  return (
    <div className="block-item" onClick={onClick}>
      <img className="block-item-icon" src={imgPath}></img>
      <p>{text}</p>
    </div>
  );
};
