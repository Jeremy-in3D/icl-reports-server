import React, { useRef } from "react";
import { BlobServiceClient } from "@azure/storage-blob";

export const TakePicture: React.FC = () => {
  const imgView = useRef<HTMLImageElement>(null);

  return (
    <>
      <input
        name="imgCapture"
        type="file"
        accept="image/*"
        capture
        onChange={async (e) => {
          const file = e.currentTarget.files![0];
          const arrayBuffer = await file.arrayBuffer();
          // arrayBuffer.console.log(buffer);
          // const text = await file.text();
          // const stream = file.stream();
          // console.log(buffer);
          // console.log(text);
          // console.log(stream);
          //   const url = window.URL.createObjectURL(file);
          //   imgView.current!.src = url;
          fetch("/upload-blob", {
            method: "POST",
            body: arrayBuffer,
            // headers: { "Content-Type": "multipart/form-data" },
          });
        }}
      />
      <img className="image-preview" ref={imgView}></img>
      <button
        onClick={async () => {
          const response = await fetch("/get-blob", {
            method: "POST",
            //should be a function that accepts a filename pulled from the report you are viewing, which would call the function and begin the fetch
            body: "newblob1667496113420",
          });
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          imgView.current!.src = url;
        }}
      >
        Get Image
      </button>
    </>
  );
};

// newblob1667398044372
