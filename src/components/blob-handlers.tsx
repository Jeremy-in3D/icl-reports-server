import React, { useRef } from "react";

export const TakePicture: React.FC = () => {
  const imgView = useRef<HTMLImageElement>(null);

  return (
    <>
      {/* Upload Image */}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const response = await fetch("/upload-image", {
            method: "POST",
            //should be a function that accepts a filename pulled from the report you are viewing, which would call the function and begin the fetch
            body: formData,
          });
        }}
      >
        <input name="imgFile" type="file" accept="image/*" capture />
        <input type="submit" value="Submit" />
      </form>
      {/* Get Image */}
      <button
        onClick={async () => {
          const response = await fetch("/get-image", {
            method: "POST",
            //should be a function that accepts a filename pulled from the report you are viewing, which would call the function and begin the fetch
            body: "newblob1667823843989",
          });
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          imgView.current!.src = url;
        }}
      >
        Get Image
      </button>
      <img className="image-preview" ref={imgView}></img>
    </>
  );
};
