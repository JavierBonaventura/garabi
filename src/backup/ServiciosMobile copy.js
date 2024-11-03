import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import servicios from "../../../images/Mobile/servicios.png";
import botonIzquierdo from "../../../images/Mobile/botonIzquierdo.png";
import botonDerecho from "../../../images/Mobile/botonDerecho.png";

function ServiciosMobile() {
  return (
    <div className="w-full h-[530px]">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full px-4"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        {/* Contenedor de texto alineado en la parte superior */}
        <div className="mt-8">
          {/* Div principal con layout y tipografía para "Servicios" */}
          <div
            className="flex-shrink-0 ml-2"
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
            Servicios
          </div>

          {/* Div secundario con layout y tipografía para el texto debajo */}
          <div
            className="mt-4 flex-shrink-0 ml-2 "
            style={{
              width: "329px",
              height: "52px",
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
            Desde 1983 gestionado con éxito más de 18.000 hectáreas de bosques
          </div>

          {/* Tarjeta centrada */}
          <div
            className="relative mt-8 flex flex-col items-center mx-auto flex-shrink-0"
            style={{
              width: "258px",
              height: "296px",
              borderRadius: "10px",
              background: "#DAD8CB",
              boxShadow:
                "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
            }}
          >
            {/* Botón izquierdo */}
            <img
              src={botonIzquierdo}
              alt="Botón Izquierdo"
              className="absolute top-1/2 left-[-30px] -mt-4 transform -translate-y-1/2"
              style={{
                width: "26px",
                height: "26px",
                marginLeft: "-20px",
              }}
            />

            {/* Imagen en la parte superior de la tarjeta */}
            <img
              src={servicios}
              alt="Servicios"
              style={{
                width: "258px",
                height: "149px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />

            {/* Texto de "Asesoramiento Productivo" */}
            <div
              className="mt-2 flex-shrink-0 text-center"
              style={{
                width: "246.069px",
                height: "36.393px",
                color: "#464646",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "'Fira Sans', sans-serif",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "21.323px",
                letterSpacing: "-1.333px",
              }}
            >
              Asesoramiento Productivo
            </div>

            {/* Descripción */}
            <div
              className="mt-0 flex-shrink-0 text-center"
              style={{
                width: "230px",
                height: "52px",
                color: "#000",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "'Fira Sans', sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "-1px",
              }}
            >
              Desde 1983 gestionado con éxito más de 18.000 hectáreas de bosques
            </div>

            {/* Botón "VER" */}
            <button
              className="mt-2 flex items-center justify-center"
              style={{
                width: "99px",
                height: "26px",
                borderRadius: "5px",
                background: "#00942C",
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "'Fira Sans', sans-serif",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                VER
              </span>
            </button>

            {/* Botón derecho */}
            <img
              src={botonDerecho}
              alt="Botón Derecho"
              className="absolute top-1/2 right-[-30px] -mt-4 transform -translate-y-1/2"
              style={{
                width: "26px",
                height: "26px",
                marginRight: "-20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosMobile;
