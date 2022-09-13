//@ts-nocheck
import React, { useEffect } from "react";

// Take a picture and save/view to localstorage
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

//Take picture using the device capture directly
export const TakePicture: React.FC = () => {
  const imgView = useRef<HTMLImageElement>(null);

  return (
    <form className="report-form">
      <input
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
    </form>
  );
};

//Alternative way using getUserMedia
export const TakePicture: React.FC = () => {
  const width = 320; // We will scale the photo width to this
  let height = 0; // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  let streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  let video: HTMLVideoElement | null = null;
  let canvas: HTMLCanvasElement | null = null;
  let photo: HTMLImageElement | null = null;
  let startbutton = null;

  function showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, it
      // won't be able to request permission for camera access.
      document.querySelector(".contentarea")!.remove();
      const button = document.createElement("button");
      button.textContent = "View live result of the example code above";
      document.body.append(button);
      button.addEventListener("click", () => window.open(location.href));
      return true;
    }
    return false;
  }

  function startup() {
    if (showViewLiveResultButton()) {
      return;
    }
    video = document.getElementById("video") as HTMLVideoElement;
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    photo = document.getElementById("photo") as HTMLImageElement;
    startbutton = document.getElementById("startbutton");

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" }, audio: false })
      .then((stream) => {
        video!.srcObject = stream;
        video!.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

    video.addEventListener(
      "canplay",
      (ev) => {
        if (!streaming) {
          height = video!.videoHeight / (video!.videoWidth / width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video!.setAttribute("width", `${width}`);
          video!.setAttribute("height", `${height}`);
          canvas!.setAttribute("width", `${width}`);
          canvas!.setAttribute("height", `${height}`);
          streaming = true;
        }
      },
      false
    );

    startbutton!.addEventListener(
      "click",
      (ev) => {
        takepicture();
        ev.preventDefault();
      },
      false
    );

    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    const context = canvas!.getContext("2d");
    context!.fillStyle = "#AAA";
    context!.fillRect(0, 0, canvas!.width, canvas!.height);

    const data = canvas!.toDataURL("image/png");
    photo!.setAttribute("src", data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    const context = canvas!.getContext("2d");
    if (width && height) {
      canvas!.width = width;
      canvas!.height = height;
      context!.drawImage(video!, 0, 0, width, height);

      const data = canvas!.toDataURL("image/png");
      photo!.setAttribute("src", data);
    } else {
      clearphoto();
    }
  }

  useEffect(() => {
    startup();
  }, []);

  return (
    <div className="contentarea">
      <div className="camera">
        <video id="video">Video stream not available.</video>
        <button id="startbutton">Take photo</button>
      </div>
      <canvas id="canvas"></canvas>
      <div className="output">
        <img id="photo" alt="The screen capture will appear in this box." />
      </div>
    </div>
  );
};

// Save BLOB to localstorage and viceversa
import React, { useEffect, useRef } from "react";

export const ReportFirst: React.FC = () => {
  const imgView = useRef<HTMLImageElement>(null);
  const prevImg = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const formData = localStorage.getItem("imgCapture");
    console.log(formData);
    const blob = dataURItoBlob(formData);
    const obj = window.URL.createObjectURL(blob);
    prevImg.current!.src = obj;
  }, []);

  return (
    <form
      className="report-form"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        //@ts-ignore
        // const obj = Object.fromEntries(formData.entries());
        // console.log(obj);
        // const form = JSON.stringify(obj);
        // console.log(form);
        // localStorage.setItem("form", form);
        const img = formData.get("imgCapture");
        console.log(img);
        const reader = new FileReader();
        reader.onload = (event) => {
          localStorage.setItem("imgCapture", event.target?.result as string);
        };
        reader.readAsDataURL(img as Blob);
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

function dataURItoBlob(dataURI: any) {
  // convert base64 to raw binary data held in a string
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var arrayBuffer = new ArrayBuffer(byteString.length);
  var _ia = new Uint8Array(arrayBuffer);
  for (var i = 0; i < byteString.length; i++) {
    _ia[i] = byteString.charCodeAt(i);
  }

  var dataView = new DataView(arrayBuffer);
  var blob = new Blob([dataView], { type: mimeString });
  return blob;
}
