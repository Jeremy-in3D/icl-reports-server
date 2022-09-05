import React, { useRef } from "react";

export const ReportFirst: React.FC = () => {
  const imgView = useRef<HTMLImageElement>(null);
  const prevImg = useRef<HTMLImageElement>(null);

  return (
    <form
      className="report-form"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        //@ts-ignore
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);
        const form = JSON.stringify(obj);
        console.log(form);
        localStorage.setItem("form", form);
        console.log("Submitted");
      }}
    >
      <input name="Test" value={"Testing"} readOnly></input>
      <input
        name="imgCapture"
        type="file"
        accept="image/*"
        capture
        onChange={(e) => {
          const file = e.currentTarget.files![0];
          const url = window.URL.createObjectURL(file);
          imgView.current!.src = url;
        }}
      />
      <img className="image-preview" ref={imgView}></img>
      <img ref={prevImg}></img>
      <button>Submit</button>
    </form>
  );
};
