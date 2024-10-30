import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import fotoDesde from "../../../images/Mobile/fotoDesde.png";

function ContactanosMobile() {
  return (
    <div className="w-full h-[400px]">
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
              width: "318px",
              height: "88px",
              color: "#000",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "'Fira Sans', sans-serif",
              fontSize: "41px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "39px",
            }}
          >
Contactanos ahora para darle forma a tu futuro verde          </div>

       

        </div>
      </div>
    </div>
  );
}

export default ContactanosMobile;
