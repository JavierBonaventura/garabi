import React from "react";
import videoSobreNosotros from "../../../images/Desktop/videoSobreNosotros.png"; // Si lo necesitas más adelante
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg"

function SobreNosotrosVideo() {
  return (
    <div className="flex justify-center items-center h-[842px] w-full">
      <img 
        src={videoSobreNosotros} 
        alt="Sobre Nosotros" 
        className="object-cover w-full h-full " 
        style={{
       zIndex: "10"
        }}
      />
    </div>
  );
}

export default SobreNosotrosVideo;
