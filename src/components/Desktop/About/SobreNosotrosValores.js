import React from "react";
import logoCandado from "../../../images/Desktop/logoCandado.png";
import logoVision from "../../../images/Desktop/logoVision.png";
import logoTrayectoria from "../../../images/Desktop/logoTrayectoria.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import arbolesProyectos from "../../../images/Desktop/arboles-proyectos.png";

const tarjetas = [
  {
    logo: logoCandado,
    titulo: "GESTIÓN FORESTAL SOSTENIBLE",
    descripcion:
      "La empresa prioriza prácticas sostenibles que garanticen la salud y la productividad a largo plazo de los bosques.",
  },
  {
    logo: logoVision,
    titulo: "CONSERVACIÓN AMBIENTAL",
    descripcion:
      "La empresa tiene como objetivo proteger la biodiversidad, preservar los ecosistemas y mitigar el cambio climático a través de sus buenas prácticas forestales.",
  },
  {
    logo: logoTrayectoria,
    titulo: "DESARROLLO LOCAL",
    descripcion:
      "La empresa da prioridad al bienestar de las comunidades locales, los pueblos originarios y los trabajadores involucrados en las operaciones forestales. ",
  },
];

function SobreNosotrosValores() {
  return (
    <div>
      <div className="w-full h-auto">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative flex flex-col h-full "
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Título "Valores" centrado a 79px de la parte superior */}
          <div className="mt-[85px] w-[250px] h-[50px] flex-shrink-0 text-center self-center">
            <h1 className="text-black font-sans text-[60px] font-bold leading-[50px]">
              Valores
            </h1>
          </div>
          {/* Tarjetas centradas con un gap de 20px */}
          <div className="flex justify-center mt-[78px] gap-[20px]">
            {tarjetas.map((tarjeta, index) => (
              <div
                key={index}
                className="relative w-[400px] h-[230px] flex-shrink-0 rounded-[21px] bg-[#00942C] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              >
                {/* Logo */}
                <img
                  src={tarjeta.logo}
                  alt={`Logo ${tarjeta.titulo}`}
                  className="absolute top-[35px] left-[34px] w-[41px] h-[47px] fill-white"
                />

                {/* Titulo de la tarjeta */}
                <div className="absolute top-[42px] left-[109px] w-[250px] h-[32px] text-white font-sans text-[22px] font-medium leading-[32px]">
                  {tarjeta.titulo}
                </div>

                {/* Descripción debajo del logo y el título */}
                <div className="absolute top-[110px] left-[34px] w-[350px] h-[84px] text-white font-sans text-[18px] font-normal leading-[28px]">
                  {tarjeta.descripcion}
                </div>
              </div>
            ))}
          </div>
          {/* Círculos debajo de las tarjetas */}
          <div className="flex justify-center items-center mt-[45px]">
            <div className="flex justify-between w-[96px]">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-[10px] h-[10px] rounded-full border-2 border-[#00942C] bg-white"
                />
              ))}
            </div>
          </div>
          {/* Imagen de árboles con texto y botón debajo */}
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosValores;
