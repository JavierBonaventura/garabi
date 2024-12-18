import React from "react";
import Video from "../../../images/Desktop/hero-garabi-alta.mp4";

function LideresMobile() {
  return (
    <div className="relative w-full h-[402px] flex flex-col items-start justify-start">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
      ></video>

      {/* Contenido superpuesto al video */}
      <div className="relative z-10">
        {/* Primer div para "Líderes en forestación" */}
        <div className="ml-8 mt-12 w-[274px] h-[88px] text-white font-fira-sans text-[41px] font-extrabold leading-[39px] flex items-center justify-center">
        Generamos valor creando <br /> un mundo más verde
        </div>

        {/* Segundo div para el texto adicional */}
        <div className="ml-8 mt-12 w-[264px] h-[52px] text-white font-fira-sans text-[20px] font-normal leading-[24px] tracking-[-1px] text-left">
          Desde 1983 gestionando con éxito más de 18.000 hectáreas de bosques
        </div>

        {/* Div para los dos botones */}
        <div
          className="ml-8 mt-16 flex"
          style={{
            gap: "30px", // Espacio entre botones
          }}
        >
          {/* Primer botón */}
          <button className="w-[104.608px] h-[36.322px] flex justify-center items-center rounded-[5px] bg-[#00942C] text-white font-fira-sans text-[12px] font-normal tracking-[4px] uppercase">
            Nosotros
          </button>

          {/* Segundo botón */}
          <button className="w-[112.608px] h-[36.322px] flex justify-center items-center rounded-[5px] bg-white text-[#00942C] font-fira-sans text-[12px] font-normal tracking-[4px] uppercase">
            Proyectos
          </button>
        </div>
      </div>
    </div>
  );
}

export default LideresMobile;
