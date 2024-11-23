import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import proyectos1 from "../../../images/Mobile/proyectos1.png";
import proyectos2 from "../../../images/Mobile/proyectos2.png";
import proyectos3 from "../../../images/Mobile/proyectos3.png";
import proyectos4 from "../../../images/Mobile/proyectos4.png";
import flechaAbajo from "../../../images/Mobile/flechaAbajo.png"; 

function NombreDeProyectoMobile() {
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
              width: "156px",
              height: "38px",
              color: "#443838",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "'Fira Sans', sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "32px",
            }}
          >
            Nombre de proyecto
          </div>

          {/* Descripción de "Grupo Garabí comienza..." */}
          <div
            className="flex-shrink-0 ml-8"
            style={{
              width: "334px",
              height: "45px",
              color: "#443838",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "'Fira Sans', sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "15px",
            }}
          >
            Proof-of-Work protocols are slow, expensive, unscalable, and environmentally harmful. And we have solved that problem.
          </div>

          {/* Contenedor de imágenes con gradiente */}
          <div className="flex justify-center mt-4">
            {[proyectos1, proyectos2, proyectos3, proyectos4].map((project, index) => (
              <div key={index} className="relative" style={{ width: "25%" }}>
                <img
                  src={project}
                  alt={`Proyecto ${index + 1}`}
                  style={{ height: "230px", width: "100%" }} 
                />
                {/* Contenedor del degradado */}
                <div
                  style={{
                    width: "100%",
                    height: "134px",
                    flexShrink: 0,
                    background: "linear-gradient(181deg, rgba(0, 46, 14, 0.00) 13.29%, #002E0E 99.55%)",
                    position: "absolute",
                    bottom: "0", 
                    left: "0",   
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
                      lineHeight: "39px", 
                      position: "absolute",
                      bottom: "40px", 
                      left: "50%",   
                      transform: "translateX(-50%)" 
                    }}
                  >
                    Proyecto ABC
                  </div>
                  {/* Imagen de flecha */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px", 
                      left: "50%",   
                      transform: "translateX(-50%)"
                    }}
                  >
                    <img
                      src={flechaAbajo}
                      alt="Flecha hacia abajo"
                      style={{ width: "12.5px", height: "7.15px", flexShrink: 0 }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón centrado horizontalmente */}
          <div className="flex justify-center mt-12">
            <button
              style={{
                width: "158px",
                height: "36px",
                borderRadius: "5px",
                background: "#00942C",
                color: "#FFF",
                fontFamily: "Fira Code",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: "4px",
                textTransform: "uppercase",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              }}
              className="flex items-center justify-center" 
            >
              Ver todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NombreDeProyectoMobile;
