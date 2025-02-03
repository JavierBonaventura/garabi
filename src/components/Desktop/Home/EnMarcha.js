import React from "react";
import imagenCurva from "../../../images/Desktop/imagenCurva.png"; // Importa la imagen curva
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function EnMarcha() {
  return (
    <div>
      <div className="w-full h-[65vw] relative">
        {/* Fondo de color */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        {/* Imagen curva con pointer-events desactivado */}
        <img
          src={imagenCurva}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-10"
          style={{ pointerEvents: "none" }}
        />

        {/* Contenedor con el fondo */}
        <div
          className="relative flex flex-col h-full px-4 z-0"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Título */}
          <div
            className="w-[631px] h-[196px] flex-shrink-0 mt-[4vw] z-20 text-black text-[60px] font-fira-sans font-extrabold leading-[60px] tracking-[-1px]"
            style={{
              marginLeft: "12%",
            }}
          >
            Querés poner en marcha tu proyecto? Escribinos!
          </div>

          {/* Botones */}
          <div
            className="flex mt-[40px] gap-4 z-20"
            style={{ marginLeft: `12%` }}
          >
            <a
              href="mailto:contacto@grupogarabi.com.ar"
              className="w-[350px] h-[50px] rounded-[5px] bg-[#00942C] flex justify-center items-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
            >
              <span className="text-white font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
                contacto@grupogarabi.com.ar
              </span>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=541130254376"
              target="_blank"
              className="w-[245.25px] h-[50px] rounded-[5px] border border-[#00942C] bg-[#FFF] flex justify-center items-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5"
            >
              <span className="text-[#00942C] font-fira-code text-[14px] font-normal tracking-[4px] uppercase">
                11-3025-4376
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnMarcha;
