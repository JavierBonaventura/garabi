import React from "react";
import imagenCurvaSobreNosotros from "../../../images/Desktop/imagenCurvaSobreNosotros.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function SobreNosotros() {
  return (
    <div>
      <div className="w-full h-[720px] relative">
        {/* Fondo principal */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        {/* Imagen curva */}
        <img
          src={imagenCurvaSobreNosotros}
          alt="Curva"
          className="absolute top-[-10px] left-0 w-full h-auto z-20 max-h-[900px] mix-blend-normal"
        />

        {/* Contenedor con imagen de fondo y texto */}
        <div
          className="relative z-10 flex flex-col h-full px-4 bg-cover bg-center"
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
            Enter dark mode. Oft referred to as night mode, high contrast, or
            inverted colors, the setting has grown popular with those who claim
            to experience eye fatigue from a deluge of white.
          </div>

          <div className="mr-[8%]">
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
