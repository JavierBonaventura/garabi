import React from "react";
import imagenCurvaSobreNosotros from "../../../images/Desktop/imagenCurvaSobreNosotros.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function SobreNosotros() {
  return (
    <div>
      <div className="w-full h-[1200px] relative">
        {/* Fondo principal */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        {/* Imagen curva */}
        <img
          src={imagenCurvaSobreNosotros}
          alt="Curva"
          className="absolute top-[420px] lg:top-[600px] xl:top-[460px] left-0 w-full h-auto z-20 max-h-[900px] mix-blend-normal"
        />

        {/* Contenedor con imagen de fondo y texto */}
        <div
          className="relative z-10 flex flex-col h-full px-4 bg-cover bg-center pt-28"
          style={{
            backgroundImage: `url(${imagenFondo})`,
          }}
        >
          {/* Título "Sobre nosotros" */}
          <div className="w-[546px] h-[72px] flex-shrink-0 mt-[50px] ml-[12%] text-black font-fira-sans text-[60px] font-extrabold leading-[60px] tracking-[-1px] font-feature-settings='liga' off, 'clig' off">
            Sobre nosotros
          </div>

          {/* Texto debajo del título */}
          <div className="w-[452px] h-[64px] flex-shrink-0 mt-[28px] ml-[12%] text-black font-fira-sans text-[24px] font-normal leading-[28px] tracking-[-1px] font-feature-settings='liga' off, 'clig' off">
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

          <div className="mr-[8%] pt-96 hidden">
            <div className="ml-auto w-[338px] h-[142px] mt-[238px] text-black font-fira-sans text-[60px] font-semibold leading-[70px] tracking-[-1px] text-right">
              Lorem ipsum dolor
            </div>

            {/* Segundo bloque de texto */}
            <div className="ml-auto w-[589px] h-[140px] mt-[30px] text-black font-fira-sans text-[24px] font-normal leading-[28px] tracking-[-1px] text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              interdum erat nec commodo imperdiet.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
