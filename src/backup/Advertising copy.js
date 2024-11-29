import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import advertisingImg from "../../../images/Desktop/advertising.png"; // Imagen principal
import singleprojectslider1 from "../../../images/Desktop/singleprojectslider1.png"; // Imágenes adicionales
import singleprojectslider2 from "../../../images/Desktop/singleprojectslider2.png";
import singleprojectslider3 from "../../../images/Desktop/singleprojectslider3.png";
import singleprojectslider4 from "../../../images/Desktop/singleprojectslider1.png";
import singleprojectslider5 from "../../../images/Desktop/singleprojectslider2.png";
import singleprojectslider6 from "../../../images/Desktop/singleprojectslider3.png";

import botonDerecha from "../../../images/Desktop/botonDerecha.png"; // Flecha derecha
import botonIzquierda from "../../../images/Desktop/botonIzquierda.png"; // Flecha izquierda

function Advertising() {
  return (
    <div>
      <div className="w-full h-full overflow-hidden relative">
        {/* Fondo con imagen */}
        <div
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Título */}
          <div className="pt-12 w-[1074px] ml-[12%] h-[65px] flex-shrink-0 text-black font-fira-sans text-[22px] font-medium leading-[32px]">
            Advertising Internet Online Opportunities To Explore
          </div>

          {/* Párrafo */}
          <div className="pt-12 ml-[12%] w-[1074px] h-[80px] flex-shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px]">
            From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology called “rich media” to attract consumers.
          </div>

          {/* Imagen centrada debajo */}
          <div className="mt-16">
            <img
              src={advertisingImg}
              alt="Advertising"
              className="mx-auto w-[889px] h-[400px] flex-shrink-0"
            />
          </div>

          {/* Contenedor de las tres imágenes en línea con flechas a los lados */}
          <div className="relative flex justify-center mt-8 gap-16">
            {/* Flecha izquierda */}
            <div className="absolute pr-[1050px] top-1/2 transform -translate-y-1/2">
              <img
                src={botonIzquierda}
                alt="Flecha izquierda"
                className="w-[40px] h-[40px] cursor-pointer"
              />
            </div>

            {/* Tres imágenes en línea */}
            <div className="flex gap-16 mt-6">
              {/* Primera imagen */}
              <div className="w-[259px] h-[172px] flex-shrink-0 rounded-[19px] shadow-lg overflow-hidden">
                <img
                  src={singleprojectslider1}
                  alt="Slider 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Segunda imagen */}
              <div className="w-[259px] h-[172px] flex-shrink-0 rounded-[19px] shadow-lg overflow-hidden">
                <img
                  src={singleprojectslider2}
                  alt="Slider 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tercera imagen */}
              <div className="w-[259px] h-[172px] flex-shrink-0 rounded-[19px] shadow-lg overflow-hidden">
                <img
                  src={singleprojectslider3}
                  alt="Slider 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Flecha derecha */}
            <div className="absolute pl-[1050px] top-1/2 transform -translate-y-1/2">
              <img
                src={botonDerecha}
                alt="Flecha derecha"
                className="w-[40px] h-[40px] cursor-pointer"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Advertising;
