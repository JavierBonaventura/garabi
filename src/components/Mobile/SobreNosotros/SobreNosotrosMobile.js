import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import imagenCurvaSobreNosotros from "../../../images/Mobile/imagenCurvaSobreNosotros.png";

function SobreNosotrosMobile() {
  return (
    <div>
      <div className="w-full h-[450px] relative">
        <img
          src={imagenCurvaSobreNosotros}
          alt="Curva"
          className="absolute  left-0 w-full h-auto z-20 max-h-[250px]"
          style={{
            mixBlendMode: "normal",
            top: "250px",
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
            <h2>Administramos lo nuestro y lo suyo</h2>
            <br />
            <p>
              Empezamos en 1976 como empresa familiar dedicada a la
              administración de forestaciones y actividades agrícolas en la zona
              Noreste de la Argentina.
              <br />
              <br /> En 2010 un grupo de capitales belgas, dueños de una extensa
              experiencia en America Latina en materia de forestaciones de
              rápido crecimiento y el manejo de campos agrícolas, entroó en el
              capital para acompañar a nuestra empresa en su crecimiento
              exponencial. <br />
              <br />
              Juntos garantizamos un manejo profesional, creativo, expansivo y
              totalmente transparente. Nuestro lema es CREAR VALOR y CRECER de
              forma sustentable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosMobile;
