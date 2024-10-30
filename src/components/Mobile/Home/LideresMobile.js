import React from "react";
import fondoLideres from "../../../images/Mobile/fondoLideres.png";

function LideresMobile() {
  return (
    <div
      className="w-full h-[402px] flex flex-col items-start justify-start"
      style={{
        backgroundImage: `url(${fondoLideres})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Primer div para "Líderes en forestación" */}
      <div
        className="ml-8 mt-12"
        style={{
          width: "274px",
          height: "88px",
          flexShrink: 0,
          color: "#FFF",
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Fira Sans",
          fontSize: "41px",
          fontStyle: "normal",
          fontWeight: 900,
          lineHeight: "39px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Líderes en forestación
      </div>

      {/* Segundo div para el texto adicional */}
      <div
        className="ml-8 mt-4"
        style={{
          width: "264px",
          height: "52px",
          flexShrink: 0,
          color: "#FFF",
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Fira Sans",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px",
          letterSpacing: "-1px",
          textAlign: "left",
        }}
      >
        Desde 1983 gestionando con éxito más de 18.000 hectáreas de bosques
      </div>

      {/* Div para los dos botones */}
      <div
        className="ml-8 mt-24 flex"
        style={{
          gap: "30px", // Espacio entre botones
        }}
      >
        {/* Primer botón */}
        <button
          style={{
            width: "104.608px",
            height: "36.322px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            background: "#00942C",
            color: "#FFF",
            fontFamily: "Fira Sans",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Nosotros
        </button>

        {/* Segundo botón */}
        <button
          style={{
            width: "112.608px",
            height: "36.322px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            background: "#FFF",
            color: "#00942C",
            fontFamily: "Fira Sans",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Proyectos
        </button>
      </div>
    </div>
  );
}

export default LideresMobile;
