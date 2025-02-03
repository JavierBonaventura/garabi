import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import PoliticasMobile from "../../Mobile/Home/PoliticasMobile";
import Genero from "../../../pdf/politica-genero.pdf";
import Comunicacion from "../../../pdf/comunicacion.pdf";
import Manejo from "../../../pdf/plan-manejo.pdf";
function Politicas() {
  return (
    <div className="">
      <div className="w-full">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full px-4 gap-y-16 py-20"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover", // Asegura que la imagen cubra todo el ancho
            backgroundPosition: "center", // Centra la imagen
          }}
        >
          <div className="w-full lg:w-1/2 mx-auto flex gap-y-10 flex-col">
            <h1 className="text-black lg:text-[#443838] font-fira-sans text-[41px] lg:text-[60px] font-bold leading-[39px] lg:leading-[50px] text-center">
              Nuestras políticas
            </h1>
            <p className="text-black font-fira-sans text-[20px] lg:text-[24px] font-normal leading-[28px] lg:text-center">
              Las políticas del Grupo Garabí definen su compromiso con la
              protección ambiental, el uso responsable de recursos, la
              preservación de la biodiversidad y la promoción de la seguridad
              laboral, entendiendo que estos aspectos son esenciales para
              garantizar la sostenibilidad de sus actividades.
            </p>
          </div>
          <div className="hidden lg:grid grid-cols-1  lg:grid-cols-3 gap-x-10">
            <div
              className="relative w-[300px] h-[340px]  lg:w-[409.736px] lg:h-[500px] flex-shrink-0 transition-transform duration-500"
              style={{
                borderRadius: "28.132px",
                background: "#DAD8CB",
                boxShadow:
                  "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
              }}
            >
              {/* Imagen de la tarjeta */}
              <div
                className="w-[300px] h-[240px] lg:w-[409.736px] lg:h-[259.258px] rounded-t-[28.132px] bg-[#F7FFF1] absolute top-0 left-0 "
                style={{
                  backgroundImage: `url(https://blog.idrsolutions.com/app/uploads/2020/10/pdf-1.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "28.132px 28.132px 0px 0px",
                }}
              />

              {/* Título de la tarjeta */}
              <div className="absolute top-[280px] w-full text-center text-[#464646] font-tt-norms-pro text-[28.132px]  leading-[28.132px] tracking-[-1.758px]">
                <div className="font-[600]">Política de género</div>
              </div>

              {/* Descripción de la tarjeta */}
              <div className="absolute top-[350px]  w-full text-center text-[#464646] font-tt-norms-pro text-[17.583px] font-[400] leading-[22.858px] tracking-[-1.758px] px-[20px]">
                La política promueve la igualdad de género en el trabajo,
                empoderando a las mujeres y combatiendo la discriminación
                sexual.
              </div>

              {/* Botón de la tarjeta */}
              <div className="absolute bottom-[20px] left-[50%] transform -translate-x-[50%] w-[217px] h-[50px] bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 flex justify-center items-center rounded-[5px]">
                <div className="text-white text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
                  <a href={Genero} target="_blank">
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
            <div
              className="relative w-[300px] h-[340px]  lg:w-[409.736px] lg:h-[500px] flex-shrink-0 transition-transform duration-500"
              style={{
                borderRadius: "28.132px",
                background: "#DAD8CB",
                boxShadow:
                  "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
              }}
            >
              {/* Imagen de la tarjeta */}
              <div
                className="w-[300px] h-[240px] lg:w-[409.736px] lg:h-[259.258px] rounded-t-[28.132px] bg-[#F7FFF1] absolute top-0 left-0 "
                style={{
                  backgroundImage: `url(https://blog.idrsolutions.com/app/uploads/2020/10/pdf-1.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "28.132px 28.132px 0px 0px",
                }}
              />

              {/* Título de la tarjeta */}
              <div className="absolute top-[280px] w-full text-center text-[#464646] font-tt-norms-pro text-[28.132px]  leading-[28.132px] tracking-[-1.758px]">
                <div className="font-[600]">Procedimiento de comunicación</div>
              </div>

              {/* Descripción de la tarjeta */}
              <div className="absolute top-[350px] w-full text-center text-[#464646] font-tt-norms-pro text-[17.583px] font-[400] leading-[22.858px] tracking-[-1.758px] px-[20px]">
                Describe el proceso para resolver controversias y comunicaciones
                del Grupo Garabi, creando un canal formal con los grupos de
                interés.
              </div>

              {/* Botón de la tarjeta */}
              <div className="absolute bottom-[20px] left-[50%] transform -translate-x-[50%] w-[217px] h-[50px] bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 flex justify-center items-center rounded-[5px]">
                <div className="text-white text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
                  <a href={Comunicacion} target="_blank">
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
            <div
              className="relative w-[300px] h-[340px]  lg:w-[409.736px] lg:h-[500px] flex-shrink-0 transition-transform duration-500"
              style={{
                borderRadius: "28.132px",
                background: "#DAD8CB",
                boxShadow:
                  "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
              }}
            >
              {/* Imagen de la tarjeta */}
              <div
                className="w-[300px] h-[240px] lg:w-[409.736px] lg:h-[259.258px] rounded-t-[28.132px] bg-[#F7FFF1] absolute top-0 left-0 "
                style={{
                  backgroundImage: `url(https://blog.idrsolutions.com/app/uploads/2020/10/pdf-1.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "28.132px 28.132px 0px 0px",
                }}
              />

              {/* Título de la tarjeta */}
              <div className="absolute top-[280px] w-full text-center text-[#464646] font-tt-norms-pro text-[28.132px]  leading-[28.132px] tracking-[-1.758px]">
                <div className="font-[600]">
                  Resumen público del plan de manejo forestal y monitoreo
                </div>
              </div>

              {/* Descripción de la tarjeta */}
              <div className="absolute top-[350px] w-full text-center text-[#464646] font-tt-norms-pro text-[17.583px] font-[400] leading-[22.858px] tracking-[-1.758px] px-[20px]">
                El plan de manejo forestal resume actividades, equilibrio entre
                lo productivo, social y ambiental, y compromiso con una
                comunicación transparente.
              </div>

              {/* Botón de la tarjeta */}
              <div className="absolute bottom-[20px] left-[50%] transform -translate-x-[50%] w-[217px] h-[50px] bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 flex justify-center items-center rounded-[5px]">
                <div className="text-white text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
                  <a href={Manejo} target="_blank">
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <PoliticasMobile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Politicas;
