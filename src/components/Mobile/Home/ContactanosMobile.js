import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import fotoDesde from "../../../images/Mobile/fotoDesde.png";
import imagenCurvaContactanos from "../../../images/Mobile/imagenCurvaContactanos.png";

function ContactanosMobile() {
  return (
    <div className="w-full h-[280px] relative">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full px-0"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        {/* Contenedor de texto alineado en la parte superior */}
        <div className="-mt-2 w-full">
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
            Contactanos ahora para darle forma a tu futuro verde
          </div>
        </div>

        {/* Imagen curva debajo del texto */}
        <img
          src={imagenCurvaContactanos}
          alt="Curva decorativa de Contactanos"
          className="mt-12 w-full"
          style={{ maxHeight: '200px' }}
        />

        {/* Contenedor de botones sobre la imagen */}
        <div className="absolute mt-8 left-10 top-[65%] flex space-x-4">
          {/* Primer botón - Email */}
          <button
            style={{
              width: "99px",
              height: "26.322px",
              borderRadius: "5px",
              backgroundColor: "#00942C",
            }}
            className="flex items-center justify-center"
          >
            <span
              style={{
                color: "#FFF",
                fontFamily: "Fira Sans, sans-serif",
                fontSize: "12px",
                fontWeight: "400",
                textAlign: "center",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Email
            </span>
          </button>

          {/* Segundo botón - WSP */}
          <button
            style={{
              width: "99px",
              height: "26.322px",
              borderRadius: "5px",
              backgroundColor: "#FFF",
              border: "1px solid #00942C",
            }}
            className="flex items-center justify-center"
          >
            <span
              style={{
                color: "#00942C",
                fontFamily: "Fira Sans, sans-serif",
                fontSize: "12px",
                fontWeight: "400",
                textAlign: "center",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              WSP
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactanosMobile;
