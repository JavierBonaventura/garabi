import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import imagenCurva from "../../../images/Desktop/imagenCurva.png";
import tarjeta1Proyectos1 from "../../../images/Desktop/tarjeta1-proyectos.png";
import tarjeta2Proyectos2 from "../../../images/Desktop/tarjeta2-proyectos.png";
import tarjeta3Proyectos3 from "../../../images/Desktop/tarjeta3-proyectos.png";
import tarjeta4Proyectos4 from "../../../images/Desktop/tarjeta4-proyectos.png";
import tarjeta5Proyectos5 from "../../../images/Desktop/tarjeta5-proyectos.png";
import arbolesProyectos from "../../../images/Desktop/arboles-proyectos.png";

function ProyectosEnMarcha() {
  return (
    <div>
      <div className="w-full h-[2828px] relative">
        {" "}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <img
          src={imagenCurva}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20 max-h-[950px]"
          style={{
            mixBlendMode: "normal",
            top: "30px",
          }}
        />
        <div
          id="verlo"
          className="absolute z-[20] w-[100px] h-[100vw] bg-gradient-to-r from-transparent to-[#dfe8e0] rotate-90 top-[72.5%] left-[100%]"
          style={{
            transformOrigin: "top left",
          }}
        />
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            zIndex: "10",
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "contain",
            backgroundPosition: "top center",
          }}
        >
          {/* Texto "Proyectos activos" */}
          <div className="w-[546px] h-[72px] flex-shrink-0 mt-[80px] ml-[12%] text-black font-fira-sans text-[60px] font-extrabold leading-[60px] tracking-[-1px]">
            Proyectos activos
          </div>

          {/* Contenedor de texto */}
          <div className="w-[452px] h-[64px] flex-shrink-0 mt-[20px] ml-[12%] text-black font-fira-sans text-[24px] font-normal leading-[28px] tracking-[-1px]">
            Enter dark mode. Oft referred to as night mode, high contrast, or
            inverted colors, the setting has grown popular with those who claim
            to experience eye fatigue from a deluge of white.
          </div>

          {/* Contenedor vacío para generar espacio antes de la tarjeta */}
          <div className="mt-[580px]"></div>
        </div>
        {/* Tarjeta superpuesta 1 */}
        <div
          className="absolute z-30 top-[680px] left-1/2 transform -translate-x-1/2 transition-transform duration-300" // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div className="flex w-[1074px] h-[268px] flex-shrink-0 rounded-[21.323px] bg-[#DAD8CB] shadow-[13.327px_13.327px_23.322px_6.663px_rgba(2,2,2,0.3)] relative">
            {/* Parte izquierda con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta1Proyectos1}
                alt="Tarjeta Proyectos"
                className="object-cover h-full w-full rounded-l-[21.323px]"
              />
            </div>

            {/* Parte derecha con texto */}
            {/* Parte derecha con contenedores */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "0 21.323px 21.323px 0" }}
            >
              {/* Primer contenedor - Título */}
              <div className="flex items-center w-[435px] h-[26px] flex-shrink-0 text-[#464646] font-fira-sans text-[32px] font-bold leading-[30px] tracking-[-1.333px] mb-[17px]">
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div className="mt-4 w-[447px] h-[47px] flex-shrink-0 text-[#464646] font-fira-sans text-[24px] font-normal leading-[23px] tracking-[-1.333px] mb-[17px]">
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button className="mt-6 flex justify-center items-center w-[217px] h-[50px] bg-[#00942C] rounded-[5px] flex-shrink-0 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5">
                <span className="text-white text-center font-[400] text-[14px] tracking-[4px] uppercase font-fira-sans">
                  Ver Proyecto
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Tarjeta superpuesta foto derecha 2*/}
        <div
          className="absolute z-30 top-[1000px] left-1/2 transform -translate-x-1/2 transition-transform duration-300" // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div className="flex w-[1074px] h-[268px] flex-shrink-0 rounded-[21.323px] bg-[#DAD8CB] shadow-[13.327px_13.327px_23.322px_6.663px_rgba(2,2,2,0.3)] relative">
            {/* Parte izquierda con texto */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "21.323px 0 0 21.323px" }}
            >
              {/* Primer contenedor - Título */}
              <div className="flex items-center w-[435px] h-[26px] flex-shrink-0 text-[#464646] font-fira-sans text-[32px] font-bold leading-[30px] tracking-[-1.333px] mb-[17px]">
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div className="mt-4 w-[447px] h-[47px] flex-shrink-0 text-[#464646] font-fira-sans text-[24px] font-normal leading-[23px] tracking-[-1.333px] mb-[17px]">
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button className="mt-6 flex justify-center items-center w-[217px] h-[50px] bg-[#00942C] rounded-[5px] flex-shrink-0 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5">
                <span className="text-white text-center font-[400] text-[14px] tracking-[4px] uppercase font-fira-sans">
                  Ver Proyecto
                </span>
              </button>
            </div>

            {/* Parte derecha con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta2Proyectos2}
                alt="Tarjeta Proyectos"
                className="object-cover h-full w-full rounded-r-[21.323px]"
              />
            </div>
          </div>
        </div>
        {/* Tarjeta superpuesta 3*/}
        <div
          className="absolute z-30 top-[1320px] left-1/2 transform -translate-x-1/2 transition-transform duration-300" // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div className="flex w-[1074px] h-[268px] flex-shrink-0 rounded-[21.323px] bg-[#DAD8CB] shadow-[13.327px_13.327px_23.322px_6.663px_rgba(2,2,2,0.3)] relative">
            {/* Parte izquierda con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta3Proyectos3}
                alt="Tarjeta Proyectos"
                className="object-cover h-full w-full rounded-l-[21.323px]"
              />
            </div>

            {/* Parte derecha con texto */}
            {/* Parte derecha con contenedores */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "0 21.323px 21.323px 0" }}
            >
              {/* Primer contenedor - Título */}
              <div className="flex items-center w-[435px] h-[26px] flex-shrink-0 text-[#464646] font-fira-sans text-[32px] font-bold leading-[30px] tracking-[-1.333px] mb-[17px]">
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div className="mt-4 w-[447px] h-[47px] flex-shrink-0 text-[#464646] font-fira-sans text-[24px] font-normal leading-[23px] tracking-[-1.333px] mb-[17px]">
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button className="mt-6 flex justify-center items-center w-[217px] h-[50px] bg-[#00942C] rounded-[5px] flex-shrink-0 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5">
                <span className="text-white text-center font-[400] text-[14px] tracking-[4px] uppercase font-fira-sans">
                  Ver Proyecto
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Tarjeta superpuesta foto derecha 4*/}
        <div
          className="absolute z-30 top-[1640px] left-1/2 transform -translate-x-1/2 transition-transform duration-300" // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div className="flex w-[1074px] h-[268px] flex-shrink-0 rounded-[21.323px] bg-[#DAD8CB] shadow-[13.327px_13.327px_23.322px_6.663px_rgba(2,2,2,0.3)] relative">
            {/* Parte izquierda con texto */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "21.323px 0 0 21.323px" }}
            >
              {/* Primer contenedor - Título */}
              <div className="flex items-center w-[435px] h-[26px] flex-shrink-0 text-[#464646] font-fira-sans text-[32px] font-bold leading-[30px] tracking-[-1.333px] mb-[17px]">
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div className="mt-4 w-[447px] h-[47px] flex-shrink-0 text-[#464646] font-fira-sans text-[24px] font-normal leading-[23px] tracking-[-1.333px] mb-[17px]">
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button className="mt-6 flex justify-center items-center w-[217px] h-[50px] bg-[#00942C] rounded-[5px] flex-shrink-0 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5">
                <span className="text-white text-center font-[400] text-[14px] tracking-[4px] uppercase font-fira-sans">
                  Ver Proyecto
                </span>
              </button>
            </div>

            {/* Parte derecha con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta4Proyectos4}
                alt="Tarjeta Proyectos"
                className="object-cover h-full w-full rounded-r-[21.323px]"
              />
            </div>
          </div>
        </div>
        {/* Tarjeta superpuesta 5 */}
        <div
          className="absolute z-30 top-[1960px] left-1/2 transform -translate-x-1/2 transition-transform duration-300" // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div className="flex w-[1074px] h-[268px] flex-shrink-0 rounded-[21.323px] bg-[#DAD8CB] shadow-[13.327px_13.327px_23.322px_6.663px_rgba(2,2,2,0.3)] relative">
            {/* Parte izquierda con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta5Proyectos5}
                alt="Tarjeta Proyectos"
                className="object-cover h-full w-full rounded-l-[21.323px]"
              />
            </div>

            {/* Parte derecha con texto */}
            {/* Parte derecha con contenedores */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "0 21.323px 21.323px 0" }}
            >
              {/* Primer contenedor - Título */}
              <div className="flex items-center w-[435px] h-[26px] flex-shrink-0 text-[#464646] font-fira-sans text-[32px] font-bold leading-[30px] tracking-[-1.333px] mb-[17px]">
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div className="mt-4 w-[447px] h-[47px] flex-shrink-0 text-[#464646] font-fira-sans text-[24px] font-normal leading-[23px] tracking-[-1.333px] mb-[17px]">
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button className="mt-6 flex justify-center items-center w-[217px] h-[50px] bg-[#00942C] rounded-[5px] flex-shrink-0 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5">
                <span className="text-white text-center font-[400] text-[14px] tracking-[4px] uppercase font-fira-sans">
                  Ver Proyecto
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Imagen de árboles con texto y botón debajo */}
        <div className="absolute z-10 w-full" style={{ top: "2140px" }}>
          <img
            src={arbolesProyectos}
            alt="Árboles Proyectos"
            style={{ width: "100vw", height: "678px" }}
          />

          {/* Nuevo div superpuesto */}
          <div
            className="absolute"
            style={{
              width: "571px",
              height: "100vw",
              transform: "rotate(90deg)",
              flexShrink: 0,
              background:
                "linear-gradient(90deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
              top: "0%",
              left: "100%",
              transformOrigin: "top left",
            }}
          />

          <div
            className="absolute inset-0 flex flex-col justify-center items-center"
            style={{ width: "100%", margin: "0 auto", textAlign: "center" }}
          >
            <div
              className="text-center"
              style={{
                color: "#00942C",
                fontFamily: "Fira Sans",
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "50px",
                maxWidth: "615px",
              }}
            >
              Contáctanos ahora para darle forma a tu futuro verde
            </div>

            <button
              className="mt-6 flex justify-center items-center bg-white cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5"
              style={{
                width: "245.25px",
                height: "50px",
                flexShrink: 0,
                borderRadius: "5px",
                border: "1px solid #00942C",
              }}
            >
              <span
                style={{
                  color: "#00942C",
                  textAlign: "center",
                  fontFamily: "Fira Code",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                Contáctanos
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectosEnMarcha;
