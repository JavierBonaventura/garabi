import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import recuadroUno from "../../../images/Desktop/asesoramiento-integral.jpg";
import recuadroDos from "../../../images/Desktop/asesoramiento-productivo.jpg";

function Servicios() {
  return (
    <div>
      <div className="w-full h-[852px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <div className="relative mt-[100px] h-[76px]">
              <div className="absolute right-1/2 transform translate-x-[12px] w-[550px] text-black text-[60px] font-fira-sans font-black leading-[60px] tracking-[-1px]">
                Servicios
              </div>
            </div>

            <div className="relative mt-[15px] h-[70px]">
              <div className="absolute right-1/2 transform translate-x-[172px] w-[711px]  text-black font-fira-sans text-[18px] font-normal leading-[28px]">
                La flexibilidad, agilidad de nuestra organización sumado a la
                experiencia de más de 40 años en el sector forestal nos permite
                planificar y ejecutar proyectos a la medida y necesidades de
                cada uno de nuestros clientes.
              </div>
            </div>

            {/* Contenedor de los dos rectángulos centrados horizontalmente */}
            <div className="flex justify-center mt-[80px] space-x-[30px]">
              {/* Primer rectángulo */}
              <div className="relative w-[527px] h-[453.484px] flex-shrink-0 rounded-[21.323px] bg-[#DAD8CB] shadow-[13.327px_13.327px_23.322px_6.663px_rgba(2,2,2,0.30)] ">
                {/* Imagen en la parte superior del rectángulo */}
                <img
                  src={recuadroUno}
                  alt="Recuadro uno"
                  className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 rounded-t-2xl"
                />

                {/* Texto debajo de la imagen */}
                <div className="text-[#464646] text-center font-fira-sans text-[30px] font-normal leading-[21.323px] tracking-[-1.333px]  absolute top-[220px] w-full ">
                  <span className="font-normal">Asesoramiento </span>
                  <span className="font-bold">Integral</span>
                </div>

                {/* Texto adicional debajo de "Asesoramiento " */}
                <div className="text-[#464646] text-center  text-[20px] font-normal leading-[23px] tracking-[-1.333px] absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[452.381px] h-[62.274px]">
                  Nuestros clientes obtienen los beneficios de ser los dueños de
                  las forestaciones sin ninguna de las responsabilidades de la
                  administración y el manejo.
                </div>

                {/* Botón debajo del texto */}
                <button className="w-[217px] h-[50px] rounded-[5px]  absolute top-[370px] left-1/2  flex justify-center items-center bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform translate-x-[-50%]">
                  <span className="text-white text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
                    VER MAS
                  </span>
                </button>
              </div>

              {/* Segundo rectángulo */}
              <div className="relative w-[527px] h-[453.484px] flex-shrink-0 rounded-[21.323px] bg-[#DAD8CB] shadow-[13.327px_13.327px_23.322px_6.663px_rgba(2,2,2,0.30)] ">
                {/* Imagen en la parte superior del rectángulo */}
                <img
                  src={recuadroDos}
                  alt="Recuadro uno"
                  className="absolute top-[-30px] left-1/2 transform -translate-x-1/2  rounded-t-2xls"
                />

                {/* Texto debajo de la imagen */}
                <div className="text-[#464646] text-center font-fira-sans text-[30px] font-normal leading-[21.323px] tracking-[-1.333px]  absolute top-[220px] w-full ">
                  <span className="font-normal">Asesoramiento </span>
                  <span className="font-bold">Productivo</span>
                </div>

                {/* Texto adicional debajo de "Asesoramiento " */}
                <div className="text-[#464646] text-center  text-[20px] font-normal leading-[23px] tracking-[-1.333px] absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[452.381px] h-[62.274px]">
                  Nuestros clientes obtienen los beneficios de ser los dueños de
                  las forestaciones sin ninguna de las responsabilidades de la
                  administración y el manejo.
                </div>

                {/* Botón debajo del texto */}
                <button className="w-[217px] h-[50px] rounded-[5px]  absolute top-[370px] left-1/2  flex justify-center items-center bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform translate-x-[-50%]">
                  <span className="text-white text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
                    VER MAS
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
