import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

import sustentabilidad from "../../../images/Desktop/sustentabilidad.png"; // Imagen de sustentabilidad
import seguridad from "../../../images/Desktop/seguridad.png"; // Imagen de seguridad
import comunidad from "../../../images/Desktop/comunidad.png"; // Imagen de comunidad
import medioAmbiente from "../../../images/Desktop/medioAmbiente.png"; // Imagen de fondo

function Impacto() {
  return (
    <div>
      <div className="w-full h-[852px] ">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover", // Asegura que la imagen cubra todo el ancho
            backgroundPosition: "center", // Centra la imagen
          }}
        >
          <div className="w-[804px] h-[76px] flex-shrink-0 mt-[-8px] text-[#443838] font-fira-sans text-[60px] font-bold leading-[50px] text-center">
            Impacto Medio Ambiente
          </div>

          <div className="w-[794px] h-[70px] flex-shrink-0 mt-[5px] text-black font-fira-sans text-[24px] font-normal leading-[28px] text-center">
            En Grupo Garabí, buscamos gestionar proyectos forestales que
            promuevan la conservación del medio ambiente, fomenten la
            biodiversidad y generen un impacto positivo y sostenible en las
            comunidades locales. Hacemos foco en estos tres pilares.
          </div>

          {/* Imagen centrada */}
          <div
            className="w-[1075px] h-[349px] flex-shrink-0 mt-[65px] bg-lightgray bg-center bg-contain bg-no-repeat rounded-[31px]"
            style={{
              backgroundImage: `url(${medioAmbiente})`,
            }}
          ></div>

          {/* Contenedor para las tarjetas */}
          <div className="flex items-center justify-center mt-[77px] space-x-6 ml-[-200px]">
            {/* Tarjeta 1 - Sustentabilidad */}
            <div className="w-[340px] h-[150px] bg-transparent  rounded-lg flex ">
              <div className="flex flex-col items-end w-1/2 border-r">
                <div
                  className="w-[59.778px] h-[67px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${sustentabilidad})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <div className="flex-shrink-0 w-[271.171px] h-[30px] text-[#443838] text-[18px] font-fira-sans font-semibold leading-[28px] tracking-tight">
                  Medio ambiente
                </div>
                <div className="flex-shrink-0 mt-2 w-[270.203px] h-[112px] text-[#443838] text-[18px] font-fira-sans font-normal leading-[28px]">
                  Implementamos prácticas de manejo forestal sostenible,
                  haciendo un uso eficiente de los recursos naturales y
                  protegiendo la biodiversidad de la zona.
                </div>
              </div>
            </div>

            {/* Tarjeta 2 - Seguridad */}
            <div className="w-[340px] h-[150px] bg-transparent  rounded-lg flex">
              <div className="flex flex-col items-end w-1/2 border-r">
                <div
                  className="w-[58px] h-[67px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${seguridad})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <div className="flex-shrink-0 w-[271.171px] h-[30px] text-[#443838] text-[22px] font-fira-sans font-semibold leading-[32px]">
                  Social
                </div>
                <div className="flex-shrink-0 mt-2 w-[270.203px] h-[112px] text-[#443838] text-[18px] font-fira-sans font-normal leading-[28px]">
                  Trabajamos estrechamente con las comunidades locales,
                  promoviendo su desarrollo social y económico.
                </div>
              </div>
            </div>

            {/* Tarjeta 3 - Comunidad */}
            <div className="w-[340px] h-[150px] bg-transparent  rounded-lg flex">
              <div className="flex flex-col items-end w-1/2 border-r">
                <div
                  className="w-[58px] h-[68px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${comunidad})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <div className="flex-shrink-0 w-[271.171px] h-[30px] text-[#443838] text-[22px] font-fira-sans font-semibold leading-[32px]">
                  Económico
                </div>
                <div className="flex-shrink-0 mt-2 w-[270.203px] h-[112px] text-[#443838] text-[18px] font-fira-sans font-normal leading-[28px]">
                  Impulsamos la economía circular y la creación de cadenas de
                  valor que generen ingresos de manera responsable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impacto;
