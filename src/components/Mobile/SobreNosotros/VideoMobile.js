import React from "react";
import video from "../../../images/Mobile/video.png";

function VideoMobile() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Línea superior */}
      <div className="bg-black"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px", 
          zIndex: 1, 
        }}
      />
      {/* Imagen */}
      <img
        src={video}
        alt="Video"
        style={{
          width: "100%",  
          height: "227px",
          flexShrink: 0,
          position: "relative", 
          zIndex: 0, 
        }}
      />
    </div>
  );
}

export default VideoMobile;
