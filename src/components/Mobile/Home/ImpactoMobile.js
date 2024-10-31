import React, { useState } from "react"; 
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import impacto from "../../../images/Mobile/impacto.png";
import sustentabilidad from "../../../images/Desktop/sustentabilidad.png"; 
import seguridad from "../../../images/Desktop/seguridad.png"; 
import comunidad from "../../../images/Desktop/comunidad.png"; 

function ImpactoMobile() {
  const [selectedImage, setSelectedImage] = useState("sustentabilidad");

  const handleImageSelect = (imageName) => {
    setSelectedImage(imageName);
  };

  const images = [
    { name: "sustentabilidad", src: sustentabilidad, marginLeft: "0px", textAlign: "left" }, 
    { name: "seguridad", src: seguridad, marginLeft: "-60px", textAlign: "center" }, 
    { name: "comunidad", src: comunidad, marginLeft: "-120px", textAlign: "right" }, 
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
          <div
            className="flex-shrink-0 ml-8"
            style={{
              width: "328px",
              height: "88px",
              color: "#000",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "'Fira Sans', sans-serif",
              fontSize: "41px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "39px",
            }}
          >
            Impacto medio ambiente
          </div>

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
                      style={{
                        width: "156px",
                        height: "30px",
                        flexShrink: 0,
                        color: "#443838",
                        fontFeatureSettings: "'liga' off, 'clig' off",
                        fontFamily: "Fira Sans",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "32px", 
                      }}
                    >
                      {image.name.charAt(0).toUpperCase() + image.name.slice(1)} 
                    </div>
                    <div className="mt-2" 
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
                        textAlign: image.textAlign, // Agregar alineación de texto
                      }}
                    >
                      Proof-of-Work protocols are slow, expensive, unscalable, and environmentally harmful. And we have solved that problem.
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
