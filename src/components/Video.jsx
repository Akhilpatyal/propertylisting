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
          style={{ height: "550px", width: "100vw" }}
          autoPlay
          loop
          muted
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1759135800~exp=1759139400~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=81e662a60f5dc0a07f0b6bcce786ba8f6d2cdd06ff524c984e7886f63a71f7ba&r=dXMtZWFzdDE%3D"
        ></video>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
        <VideoText/>
      </div>
    </div>
  );
};

export default Video;
