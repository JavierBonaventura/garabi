import React from "react";
import { Link } from "react-router-dom";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import serviciosOfrecidos from "../../../images/Mobile/serviciosOfrecidos.png";

function ServiciosOfrecidosMobile() {
  return (
    <div>
      <div className="w-full h-[auto] relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100 -mt-6"></div>
        <img
          src={serviciosOfrecidos}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20 max-h-[250px]"
          style={{
            mixBlendMode: "normal",
            top: "26px",
            maxHeight: "222px",
          }}
        />

        <div
          className="relative z-10 flex flex-col h-full "
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          {/* Texto "Quedemos en contacto" */}
          <div
            className="w-[260px] h-[88px] flex-shrink-0 mt-[30px]"
            style={{
              marginLeft: `2%`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "36px",
              fontWeight: "900",
              lineHeight: "32px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Servicios ofrecidos{" "}
          </div>
          <div
            className="ml-8 w-[327px] h-[51px] flex-shrink-0 mt-36"
            style={{
              
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "17px",
              letterSpacing: "-1px",
            }}
          >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum erat nec commodo imperdiet. Duis libero nisi, mollis quis urna ornare, feugiat egestas nunc.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosOfrecidosMobile;
