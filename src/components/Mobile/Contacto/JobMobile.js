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
            transform: "rotate(90deg)",
            flexShrink: 0,
            background:
              "linear-gradient(90deg, rgba(237, 242, 232, 0.00) 0%, #dfe8e0 100%)",
            top: "72.5%",
            left: "100%",
            transformOrigin: "top left",
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
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "27px",
                maxWidth: "379px",
              }}
            >
              ¿Querés trabajar con nosotros?
              <br /> ¡Dejanos tu CV!
            </div>

            <a
              href="mailto:contacto@grupogarabi.com.ar"
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
                Enviar CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArbolesMobile;
