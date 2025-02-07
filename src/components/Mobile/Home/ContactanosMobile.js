import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import imagenCurvaContactanos from "../../../images/Mobile/imagenCurvaContactanos.png";

function ContactanosMobile() {
  return (
    <div className="w-full h-[280px] relative">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full px-0"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        {/* Contenedor de texto alineado en la parte superior */}
        <div className="-mt-2 w-full">
          <h1 className="flex-shrink-0 mx-8 w-[318px] h-[88px] text-black font-fira-sans text-3xl font-extrabold leading-[39px]">
            ¿Querés poner en marcha tu proyecto? ¡Escribinos!
          </h1>
        </div>

        {/* Imagen curva debajo del texto */}
        <img
          src={imagenCurvaContactanos}
          alt="Curva decorativa de Contactanos"
          className="mt-12 w-full"
          style={{ maxHeight: "200px" }}
        />

        {/* Contenedor de botones sobre la imagen */}
        <div className="absolute mt-8 left-5 top-[58%] flex flex-col space-y-4">
          {/* Primer botón - Email */}
          <a
            href="mailto:contacto@grupogarabi.com.ar"
            className="w-[350px] h-[26.322px] rounded-[5px] bg-[#00942C] flex items-center justify-center"
          >
            <span className="text-white font-fira-sans text-[12px] font-normal text-center tracking-[4px] uppercase">
              contacto@grupogarabi.com.ar
            </span>
          </a>

          {/* Segundo botón - WSP */}
          <a
            href="https://api.whatsapp.com/send?phone=541130254376"
            target="_blank"
            className="w-[150px] h-[26.322px] rounded-[5px] bg-white border-[1px] border-[#00942C] flex items-center justify-center"
          >
            <span className="text-[#00942C] font-fira-sans text-[12px] font-normal text-center tracking-[4px] uppercase">
              11-3025-4376
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactanosMobile;
