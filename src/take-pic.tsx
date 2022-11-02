import React, { useRef } from "react";

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
          const buffer = await file.arrayBuffer();
          console.log(buffer.byteLength);
          //   const text = await file.text();
          //   console.log(text);
          //   const stream = file.stream();
          //   console.log(stream);
          //   const url = window.URL.createObjectURL(file);
          //   imgView.current!.src = url;
          fetch("/upload-blob", { method: "POST", body: buffer });
        }}
      />
      <img className="image-preview" ref={imgView}></img>
      <button
        onClick={async () => {
          const response = await fetch("/get-blob", {
            method: "POST",
            body: "newblob1667398044372",
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
