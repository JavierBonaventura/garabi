import React from "react";
import { Link } from "react-router-dom";


import arbolesProyectos from "../../../images/Mobile/arbolesProyectos.png";

function ArbolesMobile() {
  // Cálculo del margen izquierdo en porcentaje

  return (
    <div>
      <div className="w-full h-[290px] relative">
        {" "}

        <div
          id="verlo"
          className="absolute "
          style={{
            zIndex: "10",
            width: "100px",
            height: "100vw",
            transform: "rotate(90deg)", // Mantén la rotación
            flexShrink: 0,
            background:
              "linear-gradient(90deg, rgba(237, 242, 232, 0.00) 0%, #dfe8e0 100%)", // Cambia el degradado a 270 grados
            top: "72.5%", // Ajusta según necesites
            left: "100%", // Ajusta según necesites
            transformOrigin: "top left", // Asegura que la rotación sea desde la esquina superior izquierda
          }}
        />

        {/* Imagen de árboles con texto y botón debajo */}
        <div className="absolute z-10 w-full" style={{ top: "0px" }}>
          <img
            src={arbolesProyectos}
            alt="Árboles Proyectos"
            style={{ width: "100vw", height: "300px" }}
          />

          {/* Nuevo div superpuesto */}
          <div
            className="absolute"
            style={{
              width: "200px",
              height: "100vw",
              transform: "rotate(90deg)",
              flexShrink: 0,
              background:
                "linear-gradient(90deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
              top: "0%", // Ajusta según necesites
              left: "100%", // Ajusta según necesites
              transformOrigin: "top left", // Asegura que la rotación sea desde la esquina superior izquierda
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
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "27px",
                maxWidth: "379px", // Limitar el ancho máximo del texto
              }}
            >
              Contáctanos ahora para darle forma a tu futuro verde
            </div>

            <button
              className="mt-6 flex justify-center items-center bg-white cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5"
              style={{
                width: "158px",
                height: "36px",
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
                  fontSize: "12px",
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

export default ArbolesMobile;
