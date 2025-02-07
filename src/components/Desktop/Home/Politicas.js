import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import Genero from "../../../pdf/politica-genero.pdf";
import Comunicacion from "../../../pdf/comunicacion.pdf";
import Manejo from "../../../pdf/plan-manejo.pdf";
import Social from "../../../pdf/politica-social-ambiental.pdf";
function Politicas() {
  return (
    <div className="w-full">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full  padding-section !pb-20 space-y-12 lg:space-y-16 2xl:space-y-20"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "cover", // Asegura que la imagen cubra todo el ancho
          backgroundPosition: "center", // Centra la imagen
        }}
      >
        <div className="w-[80%] 2xl:w-2/3 flex flex-col gap-title-paragraph mx-auto">
          <h1 className="title-section">Nuestras políticas</h1>
          <p className="paragraph-section">
            Las políticas del Grupo Garabí definen su compromiso con la
            protección ambiental, el uso responsable de recursos, la
            preservación de la biodiversidad y la promoción de la seguridad
            laboral, entendiendo que estos aspectos son esenciales para
            garantizar la sostenibilidad de sus actividades.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[80%] 2xl:w-2/3 mx-auto justify-between items-end h-full">
          <div
            className="card-politicas"
            style={{
              borderRadius: "10px",
              background: "#DAD8CB",
            }}
          >
            {/* Título de la tarjeta */}
            <div className="title-politicas">
              <h1>Política de género</h1>
            </div>

            {/* Descripción de la tarjeta */}
            <p className="paragraph-politicas">
              La política promueve la igualdad de género en el trabajo,
              empoderando a las mujeres y combatiendo la discriminación sexual.
            </p>

            {/* Botón de la tarjeta */}
            <div className="btn-politicas">
              <a href={Genero} target="_blank">
                Descargar
              </a>
            </div>
          </div>
          <div
            className="card-politicas"
            style={{
              borderRadius: "10px",
              background: "#DAD8CB",
              boxShadow:
                "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
            }}
          >
            {/* Título de la tarjeta */}
            <div className=" title-politicas">
              <h1>
                Política social, ambiental, de seguridad y<br /> salud en el
                trabajo
              </h1>
            </div>

            {/* Descripción de la tarjeta */}
            <p className="paragraph-politicas">
              El grupo está motivado por el trabajo honesto e integro, con la
              finalidad de lograr que sus proyectos forestales sean sostenibles
              y responsables desde el punto de vista socal, ambienta y
              económico.
            </p>

            {/* Botón de la tarjeta */}
            <div className="btn-politicas">
              <a href={Social} target="_blank">
                Descargar
              </a>
            </div>
          </div>
          <div
            className="card-politicas"
            style={{
              borderRadius: "10px",
              background: "#DAD8CB",
              boxShadow:
                "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
            }}
          >
            {/* Título de la tarjeta */}
            <div className=" title-politicas">
              <h1>Procedimiento de comunicación</h1>
            </div>

            {/* Descripción de la tarjeta */}
            <p className="paragraph-politicas">
              Describe el proceso para resolver controversias y comunicaciones
              del Grupo Garabí, creando un canal formal con los grupos de
              interés.
            </p>

            {/* Botón de la tarjeta */}
            <div className="btn-politicas">
              <a href={Comunicacion} target="_blank">
                Descargar
              </a>
            </div>
          </div>
          <div
            className="card-politicas"
            style={{
              borderRadius: "10px",
              background: "#DAD8CB",
              boxShadow:
                "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
            }}
          >
            {/* Título de la tarjeta */}
            <div className=" title-politicas">
              <h1>
                Resumen público del plan de
                <br /> manejo forestal y monitoreo
              </h1>
            </div>

            {/* Descripción de la tarjeta */}
            <p className="paragraph-politicas">
              El plan de manejo forestal resume actividades, equilibrio entre lo
              productivo, social y ambiental, y compromiso con una comunicación
              transparente.
            </p>

            {/* Botón de la tarjeta */}
            <div className="btn-politicas">
              <a href={Manejo} target="_blank">
                Descargar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Politicas;
