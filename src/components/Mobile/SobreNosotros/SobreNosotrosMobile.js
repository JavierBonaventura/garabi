import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import imagenCurvaSobreNosotros from "../../../images/Mobile/imagenCurvaSobreNosotros.png";

function SobreNosotrosMobile() {
  return (
    <div>
      <div className="w-full relative">
        <img
          src={imagenCurvaSobreNosotros}
          alt="Curva"
          className="absolute  left-0 w-full h-auto z-20 max-h-[250px]"
          style={{
            mixBlendMode: "normal",
            top: "800px",
            maxHeight: "176px",
          }}
        />

        <div
          className="relative z-10 flex flex-col h-full padding-section"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          <div className="gap-title-paragraph mx-8">
            {/* Texto "Quedemos en contacto" */}
            <h1 className="title-section !text-left">Sobre nosotros</h1>
            <p className="paragraph-section !text-left">
              Somos una empresa que comenzó como una iniciativa familiar en
              1976, con el compromiso de ofrecer servicios de alta calidad en el
              sector. A lo largo de los años, nos hemos consolidado como un
              referente en el mercado, gracias al compromiso, dedicación y
              valores que nos caracterizan como familia.
              <br /> <br />
              Nos encontramos radicados en uno de los polos foresto-industriales
              y yerbateros más importantes del país, lo que nos permite contar
              con acceso a recursos naturales de excelencia, así como estar
              cerca de las principales actividades productivas del sector. Este
              entorno nos ha permitido crecer de manera constante, adaptarnos a
              los cambios del mercado y mantenernos siempre a la vanguardia de
              la industria.
              <br /> <br />
              Nuestra empresa sigue impulsada por los mismos principios que nos
              guiaron al inicio:
              <br />
              <br /> El trabajo en equipo, la responsabilidad social, la
              transparencia y la pasión por lo que hacemos. Con el tiempo, hemos
              logrado fortalecer nuestras relaciones con clientes y proveedores,
              siempre con el firme propósito de seguir brindando productos y
              servicios que superen las expectativas de quienes confían en
              nosotros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosMobile;
