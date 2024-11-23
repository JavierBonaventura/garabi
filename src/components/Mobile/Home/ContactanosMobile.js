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
          <div className="flex-shrink-0 ml-8 w-[318px] h-[88px] text-black font-fira-sans text-[41px] font-extrabold leading-[39px]">
            Contactanos ahora para darle forma a tu futuro verde
          </div>
        </div>

        {/* Imagen curva debajo del texto */}
        <img
          src={imagenCurvaContactanos}
          alt="Curva decorativa de Contactanos"
          className="mt-12 w-full"
          style={{ maxHeight: "200px" }}
        />

        {/* Contenedor de botones sobre la imagen */}
        <div className="absolute mt-8 left-10 top-[65%] flex space-x-4">
          {/* Primer botón - Email */}
          <button className="w-[99px] h-[26.322px] rounded-[5px] bg-[#00942C] flex items-center justify-center">
            <span className="text-white font-fira-sans text-[12px] font-normal text-center tracking-[4px] uppercase">
              Email
            </span>
          </button>

          {/* Segundo botón - WSP */}
          <button className="w-[99px] h-[26.322px] rounded-[5px] bg-white border-[1px] border-[#00942C] flex items-center justify-center">
            <span className="text-[#00942C] font-fira-sans text-[12px] font-normal text-center tracking-[4px] uppercase">
              WSP
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactanosMobile;
