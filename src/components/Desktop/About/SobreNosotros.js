import React from "react";
import imagenCurvaSobreNosotros from "../../../images/Desktop/imagenCurvaSobreNosotros.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function SobreNosotros() {
  return (
    <div className="w-full relative">
      {/* Imagen curva */}
      <img
        src={imagenCurvaSobreNosotros}
        alt="Curva"
        className="absolute top-[420px] lg:top-[600px] xl:top-[460px] left-0 w-full h-auto z-20 max-h-[900px] mix-blend-normal hidden"
      />

      {/* Contenedor con imagen de fondo y texto */}
      <div
        className="relative z-10 flex flex-col h-full bg-cover bg-center padding-section-2"
        style={{
          backgroundImage: `url(${imagenFondo})`,
        }}
      >
        <div className="gap-title-paragraph w-2/3 2xl:w-1/2 mx-auto">
          {/* Título "Sobre nosotros" */}
          <h1 className="title-section">Sobre nosotros</h1>

          {/* Texto debajo del título */}
          <div>
            <p className="paragraph-section">
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
              guiaron al inicio: el trabajo en equipo, la responsabilidad
              social, la transparencia y la pasión por lo que hacemos. Con el
              tiempo, hemos logrado fortalecer nuestras relaciones con clientes
              y proveedores, siempre con el firme propósito de seguir brindando
              productos y servicios que superen las expectativas de quienes
              confían en nosotros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
