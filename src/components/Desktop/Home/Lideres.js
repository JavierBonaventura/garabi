import React from "react";
import Video from "../../../images/Desktop/hero-garabi-alta.mp4";

function Lideres() {
  return (
    <div className="relative h-[666px]">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay oscuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25"></div>

      {/* Contenedor para el texto "Líderes en forestación" */}
      <div className="absolute flex items-center justify-center h-[126px] left-[12%] top-[168px]">
        <h1 className="text-white font-fira-sans text-[60px] font-black leading-[60px] tracking-[-1px] text-left">
          Generamos valor creando <br /> un mundo más verde
        </h1>
      </div>

      {/* Contenedor para el texto "Desde 1983..." */}
      <div className="absolute flex items-center justify-center w-[396px] h-[64px] left-[12%] top-[320px]">
        <p className="text-white font-fira-sans text-[24px] font-normal leading-[32px] tracking-[-1px] text-left">
          Desde 1983 gestionado con éxito más de 18.000 hectáreas de bosques
        </p>
      </div>

      {/* Contenedor para los botones */}
      <div className="absolute flex gap-[10px] left-[12%] top-[431px]">
        {/* Botón 1 */}
        <div className="w-[217px] h-[50px] bg-[#00942C] rounded-[5px] flex items-center justify-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5">
          <span className="text-white text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
            SOBRE NOSOTROS
          </span>
        </div>

        {/* Botón 2 */}
        <div className="w-[187.875px] h-[50px] bg-white border border-[#00942C] rounded-[5px] flex items-center justify-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5">
          <span className="text-[#00942C] text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
            PROYECTOS
          </span>
        </div>
      </div>
    </div>
  );
}

export default Lideres;
