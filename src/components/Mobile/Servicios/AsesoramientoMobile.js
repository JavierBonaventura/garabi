import React, { useState } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import tarjetaServicios1 from "../../../images/Desktop/asesoramiento-integral-2.jpg";
import tarjetaServicios2 from "../../../images/Desktop/asesoramiento-productivo.jpg";
import tarjetaServicios3 from "../../../images/Desktop/tarjetaServicios.png";

function AsesoramientoMobile() {
  const [activeTab, setActiveTab] = useState("Asesoramiento productivo");

  // Descripciones para cada pestaña
  const descriptions = {
    "Asesoramiento productivo":
    "Asesoramos a nuestros clientes a la hora de estudiar sus inversiones, optimizando el rendimiento del capital en base a nuestro conocimiento sobre el campo y a nuestra experiencia en explotaciones agropecuarias.",
    "Administracion integral":
    "Los emprendimientos de manera integral, eficiente y dinámica. La flexibilidad y agilidad de nuestra organización, sumado a la ventaja de estar en la zona de mayor crecimiento forestal del país, nos permiten garantizar un servicio de alta calidad.",
    "Experiencia":
    "Más de 40 años de servicio. Agroforestal Garabí SRL, administra un total de 50778.53 Ha. De las cuales 21500 están comprometidas actualmente al proceso de certificación (FGF Santa María y Rudaco SA).",
  };

  // Determina qué imagen mostrar según el tab activo
  const getImageForTab = (tab) => {
    switch (tab) {
      case "Asesoramiento productivo":
        return tarjetaServicios2;
      case "Administracion integral":
        return tarjetaServicios1;
      case "Experiencia":
        return tarjetaServicios3;
      default:
        return tarjetaServicios2; // Imagen por defecto
    }
  };

  return (
    <div>
      <div className="w-full h-[auto] relative">
        <div className="inset-0 bg-[#F7FFF1]"></div>

        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          {/* Green Tab and Section Titles */}
          <div className="w-[327px] mx-auto mt-4 flex flex-col items-center">
            <div className="flex space-x-[13px]">
              {/* Pestañas */}
              {[
                "Asesoramiento productivo",
                "Administracion integral",
                "Experiencia",
              ].map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex justify-center items-center text-white text-xs font-fira-sans cursor-pointer"
                  style={{
                    width: "101px",
                    height: "38px",
                    borderRadius: "7px 7px 0 0",
                    backgroundColor:
                      activeTab === tab ? "#00942C" : "transparent",
                    opacity: activeTab === tab ? 1 : 0.24,
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: "9px",
                    lineHeight: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: activeTab === tab ? "white" : "black",
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>
            {/* Línea debajo del recuadro verde */}
            <div
              style={{
                width: "329px",
                height: "1px",
                background: "linear-gradient(0deg, #00942C 0%, #00942C 100%)",
              }}
            />
          </div>

          {/* Main Heading */}
          <div
            className="w-[327px] h-[38px] flex-shrink-0"
            style={{
              marginTop: "20px",
              margin: `0 auto`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "50px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            {activeTab}
          </div>

          {/* Description */}
          <div
            className="ml-8 w-[327px] h-[auto] flex-shrink-0 mt-4"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "17px",
              letterSpacing: "-1px",
            }}
          >
            {descriptions[activeTab]}
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center mt-4 ">
            <img
              src={getImageForTab(activeTab)} // Usa la función para obtener la imagen correcta
              alt={`Imagen para ${activeTab}`}
              style={{
                width: "334px",
                height: "219px",
                flexShrink: 0,
                borderRadius: "10px",
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsesoramientoMobile;
