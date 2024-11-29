import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import otrosproyectosslider1 from "../../../images/Desktop/otrosproyectosslider1.png";
import otrosproyectosslider2 from "../../../images/Desktop/otrosproyectosslider1.png";
import botonDerecha from "../../../images/Desktop/botonDerecha.png"; 
import botonIzquierda from "../../../images/Desktop/botonIzquierda.png"; 

function OtrosProyectos() {
  return (
    <div>
      <div className="w-full h-full overflow-hidden relative">
        {/* Fondo con imagen */}
        <div
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Título y botón en la misma línea */}
          <div className="flex justify-center items-center pt-32">
            <div className="w-[660px] text-black font-fira-sans text-[40px] font-bold leading-[50px]">
              Otros proyectos
            </div>
            {/* Botón "Ver todos" */}
            <div className="ml-8 w-[212px] h-[50px] bg-[#00942C] rounded-[5px] flex-shrink-0 flex justify-center items-center">
              <div className="flex flex-col justify-center w-[212px] h-[16px] text-white text-[14px] font-fira-sans font-medium leading-normal tracking-[4px] uppercase text-center">
                Ver todos
              </div>
            </div>
          </div>

          {/* Contenedor de las tres imágenes en línea con flechas a los lados */}
          <div className="relative flex justify-center mt-8 gap-16">
            {/* Flecha izquierda */}
            <div className="absolute pr-[1050px] top-[28%] transform -translate-y-1/2">
              <img
                src={botonIzquierda}
                alt="Flecha izquierda"
                className="w-[40px] h-[40px] cursor-pointer"
              />
            </div>

            {/* Tarjetas con las imágenes */}
            <div className="flex gap-16 mt-8 pb-24">
              {/* Primera tarjeta */}
              <div className="w-[435px] h-[350px] flex-shrink-0 rounded-[19px]  overflow-hidden ">
                <img
                  src={otrosproyectosslider1}
                  alt="Slider 1"
                  className="w-full h-[213px] object-cover"
                />
                {/* Texto debajo de la imagen */}
                <div className="px-2 pt-4">
                  <div className="text-[14px] font-fira-sans font-medium text-black tracking-[4px] uppercase">
                    Margaret Turner
                  </div>
                  <div className="text-[22px] font-fira-sans font-medium text-black leading-[32px] mt-2">
                    Advertising Internet Online Opportunities To Explore
                  </div>
                </div>
              </div>

              {/* Segunda tarjeta */}
              <div className="w-[435px] h-[350px] flex-shrink-0 rounded-[19px] overflow-hidden ">
                <img
                  src={otrosproyectosslider2}
                  alt="Slider 2"
                  className="w-full h-[213px] object-cover"
                />
                {/* Texto debajo de la imagen */}
                <div className="px-4 py-2">
                  <div className="text-[14px] font-fira-sans font-medium text-black tracking-[4px] uppercase">
                    Margaret Turner
                  </div>
                  <div className="text-[22px] font-fira-sans font-medium text-black leading-[32px] mt-2">
                    Advertising Internet Online Opportunities To Explore
                  </div>
                </div>
              </div>
            </div>

            {/* Flecha derecha */}
            <div className="absolute pl-[1050px] top-[28%] transform -translate-y-1/2">
              <img
                src={botonDerecha}
                alt="Flecha derecha"
                className="w-[40px] h-[40px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtrosProyectos;
