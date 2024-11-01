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
          height: "1px", // Altura de la línea
          zIndex: 1, // Asegúrate de que esté por encima de la imagen
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
          position: "relative", // Asegura que la imagen esté posicionada correctamente
          zIndex: 0, // Para que la imagen esté detrás de la línea
        }}
      />
    </div>
  );
}

export default VideoMobile;
