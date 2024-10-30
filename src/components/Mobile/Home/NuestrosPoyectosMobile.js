import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import fotoDesde from "../../../images/Mobile/fotoDesde.png";
import proyectos1 from "../../../images/Mobile/proyectos1.png";
import proyectos2 from "../../../images/Mobile/proyectos2.png";
import proyectos3 from "../../../images/Mobile/proyectos3.png";
import proyectos4 from "../../../images/Mobile/proyectos4.png";
import flechaAbajo from "../../../images/Mobile/flechaAbajo.png"; // Import the arrow image

function NuestrosPoyectosMobile() {
  return (
    <div className="w-full h-auto">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full px-0"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        {/* Contenedor de texto alineado en la parte superior */}
        <div className="-mt-2 w-full">
          <div
            className="flex-shrink-0 ml-8"
            style={{
              width: "274px",
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
            Nuestros proyectos
          </div>

          {/* Descripción de "Grupo Garabí comienza..." */}
          <div
            className="mt-2 flex-shrink-0 ml-8"
            style={{
              width: "329px",
              height: "52px",
              color: "#000",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "'Fira Sans', sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-1px",
            }}
          >
            Esta es una selección de todos los proyectos en los cuales venimos trabajando hace más de 40 años.
          </div>

          {/* Contenedor de imágenes con gradiente */}
          <div className="flex justify-center mt-12">
            {[proyectos1, proyectos2, proyectos3, proyectos4].map((project, index) => (
              <div key={index} className="relative" style={{ width: "25%" }}>
                <img
                  src={project}
                  alt={`Proyecto ${index + 1}`}
                  style={{ height: "230px", width: "100%" }} // Ensuring the image fills the container width
                />
                {/* Contenedor del degradado */}
                <div
                  style={{
                    width: "100%",
                    height: "134px",
                    flexShrink: 0,
                    background: "linear-gradient(181deg, rgba(0, 46, 14, 0.00) 13.29%, #002E0E 99.55%)",
                    position: "absolute",
                    bottom: "0", // Position at the bottom of the image
                    left: "0",   // Align to the left
                  }}
                >
                  {/* Texto sobre el degradado */}
                  <div
                    style={{
                      width: "90px",
                      height: "16px",
                      flexShrink: 0,
                      color: "#FFF",
                      textAlign: "center",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "Fira Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "39px", // 278.571%
                      position: "absolute",
                      bottom: "40px", // Position text a bit above the bottom
                      left: "50%",    // Center the text
                      transform: "translateX(-50%)" // Correcting centering
                    }}
                  >
                    Proyecto ABC
                  </div>
                  {/* Imagen de flecha */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px", // Adjust to position the arrow below the text
                      left: "50%",     // Center the arrow
                      transform: "translateX(-50%)" // Correcting centering
                    }}
                  >
                    <img
                      src={flechaAbajo}
                      alt="Flecha hacia abajo"
                      style={{ width: "12.5px", height: "7.15px", flexShrink: 0 }} // Set the size of the arrow
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestrosPoyectosMobile;
