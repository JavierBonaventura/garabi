import React from "react";
import Video from "../../../images/Desktop/hero-garabi-alta.mp4";
import BgImage from "../../../images/Mobile/mainhero-mobile.jpeg";

function LideresMobile() {
  return (
    <div className="relative w-full h-[402px] flex flex-col items-start justify-center">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hidden"
        src={Video}
        autoPlay
        loop
        muted
      ></video>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>

      {/* Capa de opacidad */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenido superpuesto al video */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-white text-center px-10 gap-y-5">
        <h1 className="text-[30px] font-black font-fira-sans leading-[35px]">
          Generamos valor creando un mundo más verde
        </h1>
        <p className="text-white text-base font-fira-sans">
          Somos especialistas en Forestación. Administramos y asesoramos
          proyectos agroforestales.
        </p>
      </div>

      {/* Flecha de navegación */}
      <a
        href="#serviciosMob"
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-10"
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
    </div>
  );
}

export default LideresMobile;
