import React, { useState } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import impacto from "../../../images/Mobile/impacto.png";
import sustentabilidad from "../../../images/Desktop/sustentabilidad.png";
import economico from "../../../images/Desktop/impacto-economico.svg";
import comunidad from "../../../images/Desktop/comunidad.png";

function ImpactoMobile() {
  const [selectedImage, setSelectedImage] = useState("Medio ambiente");

  const handleImageSelect = (imageName) => {
    setSelectedImage(imageName);
  };

  const images = [
    {
      name: "Medio ambiente",
      src: sustentabilidad,
      marginLeft: "0px",
      marginLeftTitle: "0px",
      textAlign: "left",
      text: "Implementamos prácticas de manejo forestal sostenible, haciendo un uso eficiente de los recursos naturales y protegiendo la biodiversidad de la zona.",
    },
    {
      name: "Desarrollo social",
      src: comunidad,
      marginLeft: "-70px",
      marginLeftTitle: "-25px",

      textAlign: "center",
      text: "Trabajamos estrechamente con las comunidades locales, promoviendo su desarrollo social y económico",
    },
    {
      name: "Desarrollo económico",
      src: economico,
      marginLeft: "-120px",
      marginLeftTitle: "-40px",

      textAlign: "right",
      text: "Impulsamos la economía circular y la creación de cadenas de valor que generen ingresos de manera responsable.",
    },
  ];

  return (
    <div className="w-full h-[580px]">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full px-0"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        <div className="mt-8 w-full">
          <h1 className="flex-shrink-0 ml-8 text-black font-fira-sans text-[41px] font-extrabold leading-[39px]">
            Triple impacto
          </h1>
          <p className="text-base">
            En Grupo Garabí, buscamos gestionar proyectos forestales que
            promuevan la conservación del medio ambiente, fomenten la
            biodiversidad y generen un impacto positivo y sostenible en las
            comunidades locales. Hacemos foco en tres pilares fundamentales: el
            medio ambiente, lo social y el desarrollo económico.
            <br />
            <br />
            Nuestra labor se centra en estos tres pilares de la siguiente
            manera:
          </p>

          <img
            src={impacto}
            alt="Grupo Garabí en Corrientes"
            className="mt-6"
            style={{
              width: "100%",
              height: "191px",
            }}
          />

          <div className="flex justify-around mt-8">
            {images.map((image) => (
              <div
                key={image.name}
                onClick={() => handleImageSelect(image.name)}
                className="relative cursor-pointer"
                style={{
                  opacity: selectedImage === image.name ? 1 : 0.5,
                }}
              >
                <img
                  className=""
                  src={image.src}
                  alt={image.name}
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                {selectedImage === image.name && (
                  <div className="absolute mt-4 w-full -ml-4">
                    <div
                      className=" w-32 h-[30px] flex-shrink-0 text-[#443838] font-fira-sans text-[16px] font-semibold leading-[32px]"
                      style={{
                        textAlign: image.textAlign,
                        marginLeft: image.marginLeftTitle,
                      }}
                    >
                      {image.name.charAt(0).toUpperCase() + image.name.slice(1)}
                    </div>

                    <div
                      className="mt-2"
                      style={{
                        marginLeft: image.marginLeft,
                        width: "213.35px",
                        height: "45px",
                        flexShrink: 0,
                        color: "#443838",
                        fontFeatureSettings: "'liga' off, 'clig' off",
                        fontFamily: "Fira Sans",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "15px",
                        textAlign: image.textAlign,
                      }}
                    >
                      {image.text}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpactoMobile;
