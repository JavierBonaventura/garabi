import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import imagenCurvaSobreNosotros from "../../../images/Mobile/imagenCurvaSobreNosotros.png";

function SobreNosotrosMobile() {
  return (
    <div>
      <div className="w-full h-[240px] relative">
        <img
          src={imagenCurvaSobreNosotros}
          alt="Curva"
          className="absolute  left-0 w-full h-auto z-20 max-h-[250px]"
          style={{
            mixBlendMode: "normal",
            top: "60px",
            maxHeight: "176px",
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
            className="ml-8 w-[340px] h-[58px] flex-shrink-0 mt-[10px]"
            style={{
              
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "36px",
              fontWeight: "900",
              lineHeight: "32px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
           Sobre nosotros
          </div>

          <div
            className="ml-8 w-[329px] h-[74px] flex-shrink-0 "
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

export default SobreNosotrosMobile;
