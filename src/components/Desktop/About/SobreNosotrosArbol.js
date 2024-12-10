import React from "react";
import fondoServicios from "../../../images/Desktop/fondoServicios.png";
import arbolCentral from "../../../images/Desktop/arbolCentral.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function SobreNosotrosArbol() {
  return (
    <div>
      <div className="w-full h-[52vw] relative ">
        {/* Fondo principal */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        {/* Contenedor con imagen de fondo y texto */}
        <div
          className="relative z-10 flex flex-col h-full px-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagenFondo})` }}
        >
          <div className="flex flex-col items-center justify-center mt-[-26px]">
            {/* Contenedor del árbol */}
            <div className="relative flex flex-col items-center">
              <img
                src={arbolCentral}
                alt="Árbol Central"
                className="w-[55vw] h-auto"
              />

              {/* Línea a la izquierda */}
              <div
                className="absolute left-[-7.4vw] w-[16.5vw] h-[0.4vw] bg-[#00561A] transform -translate-y-1/2 mt-4"
                style={{
                  top: "63.8%",
                }}
              ></div>

              {/* Texto "Vision" */}
              <h1 className="absolute left-[-12vw] transform -translate-y-1/2 font-fira-sans top-[63%] translate-x-1/2 z-20 pb-2 text-black text-[3vw] font-medium">
                Vision
              </h1>

              {/* Texto "Trayectoria" */}
              <h1 className="absolute right-[-6vw] transform -translate-y-1/2  font-fira-sans top-[15%] translate-x-1/2 z-20 pb-2 text-black text-[3vw] font-medium">
                Trayectoria
              </h1>

              {/* Texto de descripción bajo "Visión" */}
              <p className="absolute left-[-16vw] transform -translate-y-1/2 top-[80%] font-fira-sans translate-x-1/2 z-20 pb-2 text-black text-[1.25vw] leading-[2vw] w-[17.5vw]">
                Convertirnos en una empresa líder y referente dentro del sector.
                Brindando la mejor calidad en la gestión forestal. Sostener este
                prestigio a lo largo del tiempo manteniendo nuestro compromiso
                con la preservación del medio ambiente. Y mejorando la calidad
                de vida de las comunidades locales actuales y futuras.
              </p>

              {/* Texto de descripción bajo "Trayectoria" (justificado a la derecha) */}
              <p className="absolute right-[-5vw] transform -translate-y-1/2 top-[32%] font-fira-sans translate-x-1/2 z-20 pb-2 text-black text-[1.25vw] leading-[2vw] w-[18vw] text-right">
                Hace más de 40 años Grupo Garabí brinda un servicio
                personalizado, adecuado a las necesidades de sus clientes
                buscando maximizar de manera eficiente y sustentable el
                rendimiento de sus proyectos agro forestales.
              </p>

              {/* Línea a la derecha */}
              <div className="absolute right-[-13.5vw] top-[16%] w-[27vw] h-[0.4vw] bg-[#00942C]  transform -translate-y-1/2 mt-4"></div>
              {/* Linea debajo del árbol */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosArbol;
