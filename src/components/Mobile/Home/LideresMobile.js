import React from "react";
import fondoLideres from "../../../images/Mobile/fondoLideres.png";

function LideresMobile() {
  return (
    <div
      className="w-full h-[402px] flex flex-col items-start justify-start"
      style={{
        backgroundImage: `url(${fondoLideres})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Primer div para "Líderes en forestación" */}
      <div className="ml-8 mt-12 w-[274px] h-[88px] text-white font-fira-sans text-[41px] font-extrabold leading-[39px] flex items-center justify-center">
        Líderes en forestación
      </div>

      {/* Segundo div para el texto adicional */}
      <div className="ml-8 mt-4 w-[264px] h-[52px] text-white font-fira-sans text-[20px] font-normal leading-[24px] tracking-[-1px] text-left">
        Desde 1983 gestionando con éxito más de 18.000 hectáreas de bosques
      </div>

      {/* Div para los dos botones */}
      <div
        className="ml-8 mt-24 flex"
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
  );
}

export default LideresMobile;
