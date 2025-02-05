import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import proyectos1 from "../../../images/Mobile/proyectos1.png";
import proyectos2 from "../../../images/Mobile/proyectos2.png";
import proyectos3 from "../../../images/Mobile/proyectos3.png";
import proyectos4 from "../../../images/Mobile/proyectos4.png";
import flechaAbajo from "../../../images/Mobile/flechaAbajo.png"; // Import the arrow image

function NuestrosPoyectosMobile() {
  // Array con los datos de los proyectos (imagen y nombre)
  const proyectos = [
    { img: proyectos1, name: "Proyectos Forestales" },
    { img: proyectos2, name: "Proyectos Yerbateros / Forestales" },
    { img: proyectos3, name: "Proyectos Yerba Mate" },
    { img: proyectos4, name: "Proyectos Mixtos" },
  ];

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
          <div className="flex-shrink-0 ml-8 w-[274px] h-[88px] text-black font-fira-sans text-[41px] font-extrabold leading-[39px]">
            Nuestros proyectos
          </div>

          {/* Descripción de "Grupo Garabí comienza..." */}
          <div className="mt-2 flex-shrink-0 ml-8 w-[329px] h-[52px] text-black font-fira-sans text-[20px] font-normal leading-[24px] tracking-[-1px]">
            A lo largo de estos años hemos desarrollado y administrado proyectos
            a medida para cada cliente.
          </div>

          {/* Contenedor de imágenes con gradiente */}
          <div className="flex justify-center mt-12 ">
            {proyectos.map((proyecto, index) => (
              <div key={index} className="relative " style={{ width: "25%" }}>
                <img
                  src={proyecto.img}
                  alt={`Proyecto ${index + 1}`}
                  style={{ height: "230px", width: "100%" }} // Ensuring the image fills the container width
                />
                {/* Contenedor del degradado */}
                <div
                  style={{
                    width: "100%",
                    height: "134px",
                    flexShrink: 0,
                    background:
                      "linear-gradient(181deg, rgba(0, 46, 14, 0.00) 13.29%, #002E0E 99.55%)",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  {/* Texto sobre el degradado */}
                  <div className="w-[90px] flex-shrink-0 text-white text-center font-fira-sans text-[14px] font-light leading-[20px] absolute bottom-[35px] left-1/2 transform -translate-x-1/2">
                    {proyecto.name}
                  </div>

                  {/* Imagen de flecha */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <img
                      src={flechaAbajo}
                      alt="Flecha hacia abajo"
                      style={{
                        width: "12.5px",
                        height: "7.15px",
                        flexShrink: 0,
                      }}
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
