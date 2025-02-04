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
            <h2 className="text-black text-[36px] font-fira-sans font-black leading-[60px] tracking-[-1px] text-center">
              Administramos lo nuestro y lo suyo
            </h2>
            <br />
            <p className="paragraph-section">
              Empezamos en 1976 como empresa familiar dedicada a la
              administración de forestaciones y actividades agrícolas en la zona
              Noreste de la Argentina.
              <br /> <br />
              En 2010 un grupo de capitales belgas, dueños de una extensa
              experiencia en America Latina en materia de forestaciones de
              rápido crecimiento y el manejo de campos agrícolas, entró en el
              capital para acompañar a nuestra empresa en su crecimiento
              exponencial.
              <br /> <br />
              Juntos garantizamos un manejo profesional, creativo, expansivo y
              totalmente transparente. <br />
              Nuestro lema es CREAR VALOR y CRECER de forma sustentable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
