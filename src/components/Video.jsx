import React from "react";
import VideoText from "../components/VideoText";
const Video = () => {
  return (
    <div>
      <div
        className="object-fit-cover position-relative"
        style={{ height: "550px", width: "100vw" }}
      >
        <video
          className="object-fit-cover"
          style={{ height: "550px", width: "100vw", filter:"brightness(0.6)" }}
          autoPlay
          loop
          muted
          src="https://www.pexels.com/download/video/3205624/"
        ></video>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
        <VideoText/>
      </div>
    </div>
  );
};

export default Video;
