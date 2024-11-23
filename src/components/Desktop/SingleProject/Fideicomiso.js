import React from "react";
import fideicomiso from "../../../images/Desktop/fideicomiso.png";
import iconofiguras from "../../../images/Desktop/iconofiguras.png";
import iconocasa from "../../../images/Desktop/iconocasa.png";

function Fideicomiso() {
  return (
    <div
      className="relative h-[670px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${fideicomiso}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`,
      }}
    >
      {/* Degradado inferior */}
      <div
        className="absolute bottom-0 w-full h-[40%]"
        style={{
          background:
            "linear-gradient(0deg, #004A16 0%, rgba(0, 74, 22, 0) 100%)",
        }}
      />

      {/* Contenido sobre la imagen */}
      <div className="absolute inset-0 flex flex-col items-center mt-12">
        {/* Título */}
        <h1 className="text-white text-[60px] w-[422px] font-fira-sans font-black leading-[60px] tracking-[-1px] text-center">
          Fideicomiso San Antonio
        </h1>

        {/* Tres columnas */}
        <div className="flex justify-center items-center mt-32 gap-8">
          {/* Primera columna */}
          <div className="flex items-center gap-8">
            <div>
              <div
                className="text-white text-[14px] font-medium uppercase tracking-[4px]"
                style={{ fontFamily: "Fira Sans" }}
              >
                Proyecto
              </div>
              <div
                className="text-white text-[18px] font-normal leading-[18px] text-right"
                style={{ fontFamily: "Fira Sans" }}
              >
                Forestal
              </div>
            </div>
            <div className="w-[2px] h-[56px] bg-white" />
          </div>

          {/* Columna central */}
          <div className="flex items-center gap-4">
            <div>
              <div className="text-white text-[14px] font-fira-sans font-medium uppercase tracking-[4px] text-center">
                Objetivo
              </div>
              <div className="text-white text-[18px] font-fira-sans font-normal leading-[28px] text-center w-[268px]">
                Producción madera de calidad.
              </div>
            </div>
            <div className="w-[2px] h-[56px] bg-white" />
          </div>

          {/* Tercera columna */}
          <div>
            <div className="text-white text-[14px] font-fira-sans font-medium uppercase tracking-[4px] text-right">
              Superficie
            </div>
            <div className="text-white text-[18px] font-fira-sans font-normal leading-[28px] text-right w-[118px]">
              580 hectáreas.
            </div>
          </div>
        </div>

        {/* Dos columnas debajo de las tres anteriores */}
        <div className="flex justify-center gap-12 mt-28">
          {/* Primera columna */}
          <div className="flex flex-col items-center">
            {/* Imagen y Título */}
            <div className="flex items-center gap-4">
              <img
                src={iconofiguras}
                alt="Icono Figuras"
                className="w-[76.176px] h-[61.297px] flex-shrink-0"
              />
              <div className="text-white text-[22px] font-fira-sans font-medium leading-[32px] w-[406.616px]">
                Advertising Internet Online Opportunities To Explore
              </div>
            </div>
            <div className="w-[526px] text-white text-[18px] font-fira-sans font-normal leading-[28px] mt-6">
              From ads that dance or sing to MTV-like commercials, online
              advertisers are now using a new type of technology called “rich
              media” to attract consumers.
            </div>
          </div>

          {/* Segunda columna */}
          <div className="flex flex-col items-center">
            {/* Imagen y Título */}
            <div className="flex items-center gap-4">
              <img
                src={iconocasa}
                alt="Icono Figuras"
                className="w-[76.176px] h-[61.297px] flex-shrink-0"
              />
              <div className="text-white text-[22px] font-fira-sans font-medium leading-[32px] w-[406.616px]">
                Advertising Internet Online Opportunities To Explore
              </div>
            </div>
            <div className="w-[526px] text-white text-[18px] font-fira-sans font-normal leading-[28px] mt-6">
              From ads that dance or sing to MTV-like commercials, online
              advertisers are now using a new type of technology called “rich
              media” to attract consumers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fideicomiso;
