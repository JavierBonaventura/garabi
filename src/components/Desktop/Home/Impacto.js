import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

import sustentabilidad from "../../../images/Desktop/sustentabilidad.png"; // Imagen de sustentabilidad
import economico from "../../../images/Desktop/impacto-economico.svg"; // Imagen de seguridad
import comunidad from "../../../images/Desktop/comunidad.png"; // Imagen de comunidad
import medioAmbiente from "../../../images/Desktop/medioAmbiente.png"; // Imagen de fondo

function Impacto() {
  return (
    <div>
      <div className="w-full">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center  h-full px-4 padding-section space-y-24 2xl:space-y-32"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover", // Asegura que la imagen cubra todo el ancho
            backgroundPosition: "center", // Centra la imagen
          }}
        >
          <div className="gap-title-paragraph xl:w-2/3 2xl:w-1/2 mx-auto">
            <h1 className="title-section">Triple impacto</h1>
            <p className="paragraph-section">
              En Grupo Garabí, buscamos gestionar proyectos forestales que
              promuevan la conservación del medio ambiente, fomenten la
              biodiversidad y generen un impacto positivo y sostenible en las
              comunidades locales. Hacemos foco en tres pilares fundamentales:
              el medio ambiente, lo social y el desarrollo económico.
            </p>
          </div>
          {/* Imagen centrada */}
          <div
            className="w-[1075px] h-[349px] flex-shrink-0 mt-[65px] bg-lightgray bg-center bg-contain bg-no-repeat rounded-[31px]"
            style={{
              backgroundImage: `url(${medioAmbiente})`,
            }}
          ></div>
          {/* Contenedor para las tarjetas */}
          <div className="grid grid-cols-3 items-center justify-between gap-x-10 2xl:gap-x-20 w-[80%] 2xl:w-2/3">
            {/* Tarjeta 1 - Sustentabilidad */}
            <div className="bg-transparent rounded-lg flex flex-col gap-y-10 w-full">
              <div
                className="img-cards-impacto"
                style={{
                  backgroundImage: `url(${sustentabilidad})`,
                }}
              ></div>

              <div className="flex flex-col gap-y-4 -mb-6 2xl:-mb-7">
                <div className="title-cards-impacto">Medio ambiente</div>
                <div className="paragraph-cards-impacto">
                  Implementamos prácticas de manejo forestal sostenible,
                  haciendo un uso eficiente de los recursos naturales y
                  protegiendo la biodiversidad de la zona.
                </div>
              </div>
            </div>

            {/* Tarjeta 2 - Seguridad */}
            <div className="bg-transparent rounded-lg flex flex-col gap-y-10 w-full">
              <div
                className="img-cards-impacto"
                style={{
                  backgroundImage: `url(${comunidad})`,
                }}
              ></div>

              <div className="flex flex-col gap-y-4">
                <div className="title-cards-impacto">Desarrollo Social</div>
                <div className="paragraph-cards-impacto">
                  Trabajamos estrechamente con las comunidades locales,
                  promoviendo su desarrollo social y económico.
                </div>
              </div>
            </div>

            {/* Tarjeta 3 - Comunidad */}
            <div className="bg-transparent rounded-lg flex flex-col gap-y-10 w-full">
              <div
                className="img-cards-impacto"
                style={{
                  backgroundImage: `url(${economico})`,
                }}
              ></div>

              <div className="flex flex-col gap-y-4">
                <div className="title-cards-impacto">Desarrollo económico</div>
                <div className="paragraph-cards-impacto">
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
