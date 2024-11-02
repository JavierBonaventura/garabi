import React from "react";
import { Link } from "react-router-dom";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import serviciosOfrecidos from "../../../images/Mobile/serviciosOfrecidos.png";
import imagenAsesoramiento from "../../../images/Mobile/imagenAsesoramiento.png";

function AsesoramientoMobile() {
  return (
    <div>
      <div className="w-full h-[auto] relative">
        <div className="inset-0 bg-[#F7FFF1]"></div>

        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          {/* Green Tab and Section Titles */}
          <div className="w-[327px] mx-auto mt-4 flex flex-col items-center">
            <div className="flex space-x-[13px]">
              {/* Pestaña Activa */}
              <div
                className="flex justify-center items-center text-white text-xs font-fira-sans"
                style={{
                  width: "101px",
                  height: "38px",
                  borderRadius: "7px 7px 0 0",
                  backgroundColor: "#00942C",
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: "9px",
                  lineHeight: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                ASESORAMIENTO PRODUCTIVO
              </div>
              {/* Pestañas Inactivas */}
              <div
                className="flex justify-center items-center text-white text-xs font-fira-sans"
                style={{
                  width: "101px",
                  height: "38px",
                  borderRadius: "7px 7px 0 0",
                  backgroundColor: "#00942C",
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: "9px",
                  lineHeight: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                ASESORAMIENTO INTEGRAL
              </div>
              <div
                className="flex justify-center items-center text-white text-xs font-fira-sans"
                style={{
                  width: "101px",
                  height: "38px",
                  borderRadius: "7px 7px 0 0",
                  backgroundColor: "#00942C",
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: "9px",
                  lineHeight: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                DESARROLLO DE PRODUCTO
              </div>
            </div>
            {/* Línea debajo del recuadro verde */}
            <div
              style={{
                width: "329px",
                height: "1px",
                background: "linear-gradient(0deg, #00942C 0%, #00942C 100%)",
              }}
            />
          </div>

          {/* Main Heading */}
          <div
            className="w-[327px] h-[38px] flex-shrink-0"
            style={{
              marginTop: "20px",
              margin: `0 auto`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "50px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Asesoramiento productivo
          </div>

          {/* Description */}
          <div
            className="ml-8 w-[327px] h-[51px] flex-shrink-0 mt-4"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "17px",
              letterSpacing: "-1px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            interdum erat nec commodo imperdiet. Duis libero nisi, mollis quis
            urna ornare, feugiat egestas nunc.
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center mt-4">
            <img
              src={imagenAsesoramiento}
              alt="Imagen Asesoramiento"
              style={{
                width: "334px",
                height: "219px",
                flexShrink: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsesoramientoMobile;
