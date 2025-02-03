import React from "react";
import Video from "../../../images/Desktop/hero-garabi-alta.mp4";

function LideresMobile() {
  return (
    <div className="relative w-full h-[402px] flex flex-col items-start justify-center">
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
        <div className=" text-white font-fira-sans text-center px-10 flex items-center justify-center w-full h-full flex-col gap-y-5">
          <h1 className=" text-[36px] font-extrabold leading-[39px]">
            Generamos valor creando un mundo más verde
          </h1>{" "}
          <p className="text-white text-base text-center font-fira-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            quae. Totam, quibusdam quaerat.
          </p>
        </div>
        <a
          href="#serviciosMob"
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 "
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

        <div className="ml-8 mt-12 w-[274px] h-[88px] text-white font-fira-sans text-[41px] font-extrabold leading-[39px] flex items-center justify-center hidden">
          Generamos valor creando <br /> un mundo más verde
        </div>

        {/* Segundo div para el texto adicional */}
        <div className="ml-8 mt-12 w-[264px] h-[52px] hidden text-white font-fira-sans text-[20px] font-normal leading-[24px] tracking-[-1px] text-left">
          Desde 1983 gestionando con éxito más de 18.000 hectáreas de bosques
        </div>

        {/* Div para los dos botones */}
        <div
          className="ml-8 mt-16 flex hidden"
          style={{
            gap: "30px", // Espacio entre botones
          }}
        >
          {/* Primer botón */}
          <a
            href="/nosotros"
            className="w-[104.608px] pl-1 text-center h-[36.322px] flex justify-center items-center rounded-[5px] bg-[#00942C] text-white font-fira-sans text-[12px] font-normal tracking-[4px] uppercase"
          >
            Nosotros
          </a>

          {/* Segundo botón */}
          <a
            href="proyectos"
            className="w-[112.608px] pl-1 h-[36.322px] flex justify-center items-center rounded-[5px] bg-white text-[#00942C] font-fira-sans text-[12px] font-normal tracking-[4px] uppercase"
          >
            Proyectos
          </a>
        </div>
      </div>
    </div>
  );
}

export default LideresMobile;
