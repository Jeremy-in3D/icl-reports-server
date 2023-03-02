import React, { useRef, useState, useEffect, useContext } from "react";
import AppContext, { Context } from "../../context/context";

export const TakePicture: React.FC<{ reportId: string | undefined | null }> = ({
  reportId,
}) => {
  const [image, setImage] = useState<any>();
  const [helper, setHelper] = useState(false);
  const imgView = useRef<HTMLImageElement>(null);
  const appContext = useContext<Context>(AppContext);

  return (
    <>
      {/* Upload Image */}
      <form
        onSubmit={async (e) => {
          if (!reportId) {
            alert("Error uploading your image");
          }
          e.preventDefault();
          const answer = confirm(
            "Are you sure you would like to upload this photo?"
          );
          if (!answer) return;

          try {
            const formData = new FormData();
            formData.append("imgFile", image[0]);
            formData.append(
              "reportId",
              typeof reportId == "string" ? reportId : ""
            );
            const response = await fetch("/upload-image", {
              method: "POST",
              body: formData,
            });
          } catch (e) {
            console.log(e);
          }
        }}
      >
        {/* upload image */}
        <input
          name="imgFile"
          type="file"
          accept="image/*"
          capture
          onChange={(e) => {
            setImage(e.target.files);
          }}
        />
        <input type="submit" value="שלח תמונה" />
      </form>
      <button
        onClick={async () => {
          setHelper(!helper);
          // imgView.current!.src = appContext.tempPhoto;
          const response = await fetch("/get-image", {
            method: "POST",
            //should be a function that accepts a filename pulled from the report you are viewing, which would call the function and begin the fetch
            body: reportId,
          });
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          console.log("we in here again", url);
          imgView.current!.src = url;
          setHelper(true);
        }}
        style={{ marginTop: 50 }}
      >
        תמונת מכונה{"(show picture)"}
      </button>
      {/* Get Image
      <button
        onClick={async () => {
          const response = await fetch("/get-image", {
            method: "POST",
            //should be a function that accepts a filename pulled from the report you are viewing, which would call the function and begin the fetch
            body: "newblob1667823843989",
          });
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          console.log("we in here again", url);
          imgView.current!.src = url;
        }}
      >
        Get Image
      </button> */}

      {helper && (
        <img
          style={{
            marginTop: 10,
            marginRight: 20,
            height: helper ? "200px" : undefined,
          }}
          className="image-preview"
          ref={imgView}
        ></img>
      )}
    </>
  );
};
