import React from "react";
import fondoLideres from "../../../images/Mobile/fondoLideres.png";

function LideresMobile() {
  return (
    <div
      className="w-full h-[402px] flex flex-col items-start justify-start" // Cambia justify-center a justify-start
      style={{
        backgroundImage: `url(${fondoLideres})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Primer div para "Líderes en forestación" */}
      <div
        className="ml-8 mt-16" // Asegúrate de que no haya margen superior
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
        className="ml-8 mt-4" // Asegúrate de que no haya margen superior
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
          textAlign: "left", // Alinear el texto a la izquierda
        }}
      >
        Desde 1983 gestionando con éxito más de 18.000 hectáreas de bosques
      </div>
    </div>
  );
}

export default LideresMobile;
