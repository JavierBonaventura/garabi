import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import fotoDesde from "../../../images/Mobile/fotoDesde.png";

function DesdeMobile() {
  return (
    <div className="w-full h-auto">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full px-0" // Cambiar a px-0 para eliminar márgenes laterales
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        {/* Contenedor de texto alineado en la parte superior */}
        <div className="-mt-2 w-full"> {/* Cambiar a w-full para llenar el ancho del contenedor */}
          {/* Título "Desde 1973" */}
          <div
            className="flex-shrink-0 ml-8"
            style={{
              width: "274px",
              height: "48px",
              color: "#000",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "'Fira Sans', sans-serif",
              fontSize: "41px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "39px",
            }}
          >
            Desde 1973
          </div>

          {/* Descripción de "Grupo Garabí comienza..." */}
          <div
            className="mt-2 flex-shrink-0 ml-8"
            style={{
              width: "329px",
              height: "191px",
              color: "#000",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "'Fira Sans', sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-1px",
            }}
          >
            Grupo Garabí comienza su actividad en la provincia de Corrientes con
            la administración de dos establecimientos forestales ubicados en el
            centro norte de la provincia, en las localidades de Loreto y Santa
            Rosa.
          </div>

          {/* Imagen "fotoDesde.png" */}
          <img
            src={fotoDesde}
            alt="Grupo Garabí en Corrientes"
            className="-mt-4"
            style={{
              width: "100%", // Cambiar a 100% para ocupar el ancho completo
              height: "344px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DesdeMobile;
