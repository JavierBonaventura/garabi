import React from "react";
import Video from "../../../images/Desktop/hero-garabi-alta.mp4";
import { Link } from "react-router-dom";

function Lideres() {
  return (
    <div className="relative h-screen">
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
      <div className="absolute flex items-center justify-center h-[126px] left-[12%] top-[300px] hidden">
        <h1 className="text-white font-fira-sans text-[60px] font-black leading-[60px] tracking-[-1px] text-center uppercase">
          Generamos valor creando <br /> un mundo más verde
        </h1>
      </div>

      <div className="absolute inset-0 flex items-center justify-center flex-col gap-y-10">
        <h1 className="text-white font-fira-sans text-[70px] leading-none 2xl:text-[80px] font-black 2xl:leading-[85px] tracking-[-1px] text-center ">
          Generamos valor creando <br /> un mundo más verde
        </h1>
        <p className="text-white text-2xl text-center w-1/2 font-fira-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          quae. Totam, quibusdam quaerat.
        </p>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-10 2xl:bottom-24 left-1/2 -translate-x-1/2 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevrons-down animate-bounce"
        >
          <path d="m7 6 5 5 5-5" />
          <path d="m7 13 5 5 5-5" />
        </svg>
      </a>

      {/* Contenedor para el texto "Desde 1983..." */}
      <div className="absolute flex items-center justify-center w-[396px] h-[64px] left-[12%] top-[410px] hidden">
        <p className="text-white font-fira-sans text-[24px] font-normal leading-[32px] tracking-[-1px] text-left">
          Desde 1983 gestionado con éxito más de 18.000 hectáreas de bosques
        </p>
      </div>

      {/* Contenedor para los botones */}
      <div className="absolute flex gap-[10px] left-[12%] top-[480px] hidden">
        {/* Botón 1 */}
        <div className="w-[217px] h-[50px] bg-[#00942C] rounded-[5px] flex items-center justify-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5">
          <a href="/nosotros">
            <span className="text-white text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
              NOSOTROS
            </span>
          </a>
        </div>

        {/* Botón 2 */}
        <div className="w-[187.875px] h-[50px] bg-white border border-[#00942C] rounded-[5px] flex items-center justify-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5">
          <a href="/proyectos">
            <span className="text-[#00942C] text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
              PROYECTOS
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Lideres;
