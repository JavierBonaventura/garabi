import React from "react";
import imagenCurvaContacto from "../../../images/Desktop/imagenCurvaContacto.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function ContactoForm() {
  return (
    <div>
      <div className="w-full">
        <div
          className="relative z-10 flex flex-col h-full padding-section-2"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
          }}
        >
          <h1 class="title-section !w-auto !text-left ml-[12%]">
            Quedemos en contacto
          </h1>
          {/* Contenedor principal con flex para organizar campos */}
          <div className="flex mt-14 ml-[12%] justify-start">
            <div className="space-y-5 2xl:space-y-8">
              {/* Sección de formulario */}
              <div className="flex gap-x-5 2xl:gap-x-10">
                {/* Input NOMBRE */}
                <div>
                  <label className="block w-[336.444px] h-[16px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    className="w-[336.444px] h-[50px] rounded-[4px] border-2 border-black bg-transparent p-2.5 focus:outline-none focus:ring focus:ring-black focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Input EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="block w-[336.444px] h-[16px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    className="w-[336.444px] h-[50px] rounded-[4px] border-2 border-black bg-transparent p-2.5 focus:outline-none focus:ring focus:ring-black focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Sección de Servicio y Teléfono */}
              <div className="flex gap-x-5 2xl:gap-x-10">
                {/* Input SERVICIO */}
                <div>
                  <label className="block w-[336.444px] h-[16px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    required
                    id="asunto"
                    className="w-[336.444px] h-[50px] rounded-[4px] border-2 border-black bg-transparent p-2.5 focus:outline-none focus:ring focus:ring-black focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Input TELÉFONO */}
                <div>
                  <label className="block w-[336.444px] h-[16px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2">
                    Teléfono
                  </label>
                  <input
                    type="number"
                    required
                    id="telefono"
                    className="w-[336.444px] h-[50px] rounded-[4px] border-2 border-black bg-transparent p-2.5 focus:outline-none focus:ring focus:ring-black focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Input MENSAJE */}
              <div>
                <label className="block w-[114.338px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  required
                  className="w-[711px] h-[136px] rounded-[4px] border-2 border-black bg-transparent p-2.5 focus:outline-none focus:ring focus:ring-black focus:border-transparent transition-all duration-300"
                />
              </div>
              {/* Contenedor del botón "Enviar" */}
              <div className="flex justify-end">
                <button className="bg-black cursor-pointer transition-transform duration-500 ease-out hover:bg-[#292929] hover:-translate-y-0.5 w-[227.846px] h-[50px] flex-shrink-0 rounded-[5px] text-white text-center font-fira-sans text-[14px] font-medium tracking-[4px] uppercase z-20">
                  Enviar
                </button>
              </div>
            </div>

            {/* Sección de campos textos */}
            <div className="ml-[85px] mt-0">
              {/* Texto 1 - Dirección */}
              <div>
                <p className="text-black font-fira-sans text-[14px] font-extrabold tracking-[4px] uppercase mb-2">
                  Dirección
                </p>

                <a
                  href="https://maps.app.goo.gl/b4E5DYbGraA1kZqw8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className=" text-black font-fira-sans text-[18px] font-normal leading-[28px] mb-5">
                    Dardo Rocha 986, Oficina 104, Martinez, Buenos Aires
                  </p>
                </a>

                <a
                  href="https://maps.app.goo.gl/N6hgiDiaTxGXaurc6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className=" text-black font-fira-sans text-[18px] font-normal leading-[28px]">
                    Ruta Nac. 120 Km 2, Gobernador Virasoro, Corrientes
                  </p>
                </a>
              </div>

              {/* Texto 2 - Teléfono */}
              <div style={{ marginTop: "16px" }}>
                <p className="text-black font-fira-sans text-[14px] font-extrabold tracking-[4px] uppercase mb-2">
                  Teléfono
                </p>
                <p className="w-[216px] text-black font-fira-sans text-[18px] font-normal leading-[28px]">
                  +54 11 3025-4376
                </p>
              </div>

              {/* Texto 3 - Email */}
              <div style={{ marginTop: "16px" }}>
                <p className="text-black font-fira-sans text-[14px] font-extrabold tracking-[4px] uppercase mb-2">
                  Email
                </p>
                <p className="text-black font-fira-sans text-[18px] font-normal leading-[28px]">
                  Escribinos a:
                </p>
                <p className="text-black font-fira-sans text-[18px] font-normal leading-[28px]">
                  contacto@grupogarabi.com.ar
                </p>
              </div>
            </div>
          </div>

          {/* Imagen que se superpone al contenedor superior */}
          <div className="w-full">
            <img
              src={imagenCurvaContacto}
              alt="Curva de contacto"
              class="relative max-h-[650px] -top-[60px] 2xl:-top-[140px] w-screen h-auto block"
            />
          </div>

          {/* Contenedor principal */}
          <div className="flex justify-center mt-60 2xl:mt-36 mb-8">
            {/* Primer Mapa */}
            <div className="text-center mr-[20px] z-50">
              <a
                href="https://maps.app.goo.gl/b4E5DYbGraA1kZqw8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../images/Desktop/ifram-san-isidro.jpg")}
                  alt="Mapa"
                  className="relative -top-[260px] w-[519px] h-[262px] flex-shrink-0 cursor-pointer object-cover rounded-xl transform transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                />
              </a>
              <div className="mt-[-240px]">
                <h3 className="title-mapa-contact mt-[15px]">Grupo Garabí</h3>
                <div className="span-mapa-contact mt-[10px]">
                  <p> Dardo Rocha 986 - Martinez - Buenos Aires</p>
                </div>
              </div>
            </div>

            {/* Segundo Mapa */}
            <div className="text-center">
              <a
                href="https://maps.app.goo.gl/N6hgiDiaTxGXaurc6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../images/Desktop/ifram-corrientes.jpg")}
                  alt="Mapa"
                  className="relative -top-[260px] w-[519px] h-[262px] flex-shrink-0 cursor-pointer object-cover rounded-xl transform transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                />
              </a>
              <div className="mt-[-240px]">
                <div className="title-mapa-contact mt-[15px]">Grupo Garabí</div>
                <div className="span-mapa-contact mt-[10px]">
                  <p>
                    Ruta Nac. 120 - Km 2 - Gobernador Virasoro - Corrientes{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoForm;
