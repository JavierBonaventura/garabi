import React, { useRef, useState } from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import logoNuestraHistoria from "../../../images/Desktop/logoNuestraHistoria.png";
import arbolesProyectos from "../../../images/Desktop/arboles-proyectos-cortada.png";

function SobreNosotrosNuestraHistoria() {
  return (
    <div className="w-full h-auto">
      <div
        className="relative z-10 flex flex-col h-full"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full  mt-2">
          {/* Gradiente superior */}
          <div
            className="absolute z-30 w-full h-[18%] top-[-16%] left-0 origin-top-left"
            style={{
              background:
                "linear-gradient(00deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
            }}
          />

          {/* Imagen */}
          <img
            className="z-10 w-full"
            src={arbolesProyectos}
            alt="Árboles Proyectos"
          />

          {/* Gradiente inferior */}
          <div
            className="absolute top-0 right-0 w-full h-[300px] origin-top-left"
            style={{
              background:
                "linear-gradient(00deg, rgba(237, 242, 232, 0.00) 0%, #dfe8e0 100%)",
            }}
          />

          {/* Contenido central */}
          <div className="relative flex flex-col justify-center items-center text-center">
            <div className="text-center text-[#00942C] font-fira-sans text-[40px] font-bold leading-[50px] max-w-[615px] mt-[-40%]">
              ¿Querés trabajar con nosotros?
              <br /> ¡Dejanos tu CV!
            </div>

            <a
              href="mailto:contacto@grupogarabi.com.ar"
              className="mt-12 flex justify-center items-center bg-white border border-[#00942C] rounded-[5px] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5 w-[245.25px] h-[50px]"
            >
              <span className="text-[#00942C] text-center font-fira-code text-[14px] font-normal uppercase tracking-[4px]">
                Enviar CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosNuestraHistoria;
