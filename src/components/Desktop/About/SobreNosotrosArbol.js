import React from "react";
import fondoServicios from "../../../images/Desktop/fondoServicios.png";
import arbolCentral from "../../../images/Desktop/arbolCentral.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function SobreNosotrosArbol() {
  return (
    <div>
      <div className="w-full relative ">
        {/* Contenedor con imagen de fondo y texto */}
        <div
          className="relative z-10 flex flex-col h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imagenFondo})` }}
        >
          <div className="flex flex-col items-center justify-center pb-32">
            {/* Contenedor del árbol */}
            <div className="relative flex flex-col items-center">
              <img
                src={arbolCentral}
                alt="Árbol Central"
                className="w-[40vw] h-auto"
              />

              {/* Línea a la izquierda */}
              <div className="absolute -left-[19.5rem]  2xl:-left-[18.5rem] w-[16.5vw] h-[0.4vw] bg-[#00561A] transform -translate-y-1/2 mt-4 top-[31%] 2xl:top-[51.5%]"></div>

              {/* Texto "Vision" */}
              <h1 className="absolute -left-[23rem] transform -translate-y-1/2 top-[30%] 2xl:top-[50%] translate-x-1/2 z-20 title-arbol-nosotros">
                Visión
              </h1>

              {/* Texto "Trayectoria" */}
              <h1 className="absolute -right-[12rem] 2xl:-right-[18.5rem] transform -translate-y-1/2  font-fira-sans top-[15%] translate-x-1/2 z-20 title-arbol-nosotros">
                Trayectoria
              </h1>

              {/* Texto de descripción bajo "Visión" */}
              <p className="absolute -left-[28rem] 2xl:-left-[30rem] transform -translate-y-1/2 top-[67%] 2xl:top-[74%] translate-x-1/2 z-20 w-[19vw] paragraph-arbol-nosotros">
                Convertirnos en una empresa líder y referente dentro del sector.
                Brindando la mejor calidad en la gestión forestal. Sostener este
                prestigio a lo largo del tiempo manteniendo nuestro compromiso
                con la preservación del medio ambiente. Y mejorando la calidad
                de vida de las comunidades locales actuales y futuras.
              </p>

              {/* Texto de descripción bajo "Trayectoria" (justificado a la derecha) */}
              <p className="absolute -right-[16rem] 2xl:-right-[15rem] transform -translate-y-1/2 top-[42%] 2xl:top-[35%] font-fira-sans translate-x-1/2 z-20 paragraph-arbol-nosotros w-[18vw] text-right">
                Hace más de 40 años Grupo Garabí brinda un servicio
                personalizado, adecuado a las necesidades de sus clientes
                buscando maximizar de manera eficiente y sustentable el
                rendimiento de sus proyectos agro forestales.
              </p>

              {/* Línea a la derecha */}
              <div className="absolute -right-[24rem] 2xl:-right-[26rem] top-[17%] w-[20vw] h-[0.4vw] bg-[#00561A]  transform -translate-y-1/2 mt-4"></div>
              {/* Linea debajo del árbol */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosArbol;
