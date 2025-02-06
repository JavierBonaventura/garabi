import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import recuadroUno from "../../../images/Desktop/asesoramiento-integral-3.png";
import recuadroDos from "../../../images/Desktop/asesoramiento-productivo-2.png";

function Servicios() {
  return (
    <div id="servicios">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col h-full padding-section"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-24">
          <div className="gap-title-paragraph  w-2/3 2xl:w-1/2 mx-auto">
            <h1 className="title-section">Servicios</h1>

            <p className="paragraph-section mx-auto">
              La flexibilidad, agilidad de nuestra organización sumado a la
              experiencia de más de 40 años en el sector forestal nos permite
              planificar y ejecutar proyectos a la medida y necesidades de cada
              uno de nuestros clientes.
            </p>
          </div>

          {/* Contenedor de los dos rectángulos centrados horizontalmente */}
          <div className="flex justify-center  space-x-[30px]">
            {/* Primer rectángulo */}
            <div className="relative w-[527px] h-[470px] flex-shrink-0 rounded-[21.323px] bg-[#DAD8CB]  transform transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-[13.327px_13.327px_23.322px_6.663px_rgba(2,2,2,0.30)] shadow-2xl">
              {/* Imagen en la parte superior del rectángulo */}
              <img
                src={recuadroUno}
                alt="Recuadro uno"
                className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 rounded-t-2xl"
              />

              {/* Texto debajo de la imagen */}
              <div className="absolute top-[220px] w-full title-card-servicios">
                <span className="font-normal">Asesoramiento </span>
                <span className="font-bold">Integral</span>
              </div>

              {/* Texto adicional debajo de "Asesoramiento " */}
              <div className="paragraph-card-servicios absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[452.381px] h-[62.274px]">
                Nuestros clientes obtienen los beneficios de ser los dueños de
                las forestaciones dejando en manos de nuestro equipo todas las
                responsabilidades de la administración y el manejo.
              </div>

              {/* Botón debajo del texto */}
              <a href="/servicios" className="btn-card-servicios">
                <span>ver más</span>
              </a>
            </div>

            {/* Segundo rectángulo */}
            <div className="relative w-[527px] h-[470px] flex-shrink-0 rounded-[21.323px] bg-[#DAD8CB]  transform transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-[13.327px_13.327px_23.322px_6.663px_rgba(2,2,2,0.30)] shadow-2xl">
              {/* Imagen en la parte superior del rectángulo */}
              <img
                src={recuadroDos}
                alt="Recuadro uno"
                className="absolute top-[-30px] left-1/2 transform -translate-x-1/2  rounded-t-2xl"
              />

              {/* Texto debajo de la imagen */}
              <div className="title-card-servicios absolute top-[220px] w-full ">
                <span className="font-normal">Asesoramiento </span>
                <span className="font-bold">Productivo</span>
              </div>

              {/* Texto adicional debajo de "Asesoramiento " */}
              <div className="paragraph-card-servicios absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[452.381px] h-[62.274px]">
                Buscamos optimizar el manejo de los bosques, promoviendo el uso
                sostenible de los productos forestales, maximizando la
                rentabilidad de nuestros clientes.
              </div>

              {/* Botón debajo del texto */}
              <a href="/servicios" className="btn-card-servicios">
                <span className="">ver más</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
