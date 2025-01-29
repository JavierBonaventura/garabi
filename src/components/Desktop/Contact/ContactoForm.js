import React from "react";
import imagenCurvaContacto from "../../../images/Desktop/imagenCurvaContacto.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function ContactoForm() {
  return (
    <div>
      <div className="w-full h-[1348px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col h-full pt-32"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
          }}
        >
          <div class="w-[707px] h-[72px] flex-shrink-0 mt-[50px] ml-[12%] text-black font-fira-sans text-[60px] font-extrabold leading-[60px] tracking-[-1px] [font-feature-settings:'liga'_off,'clig'_off]">
            Quedemos en contacto
          </div>
          {/* Contenedor principal con flex para organizar campos */}
          <div class="flex mt-8 ml-[12%] justify-start">
            <div>
              {/* Sección de formulario */}
              <div class="flex flex-wrap gap-[39px]">
                {/* Input NOMBRE */}
                <div>
                  <label class="block w-[336.444px] h-[16px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    class="w-[336.444px] h-[50px] rounded-[4px] border-2 border-black bg-transparent p-2.5"
                  />
                </div>

                {/* Input EMAIL */}
                <div>
                  <label
                    for="email"
                    class="block w-[336.444px] h-[16px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="w-[336.444px] h-[50px] rounded-[4px] border-2 border-black bg-transparent p-2.5"
                  />
                </div>
              </div>

              {/* Sección de Servicio y Teléfono */}
              <div class="flex flex-wrap mt-8 gap-[39px]">
                {/* Input SERVICIO */}
                <div>
                  <label class="block w-[336.444px] h-[16px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2">
                    Servicio
                  </label>
                  <input
                    type="text"
                    id="servicio"
                    class="w-[336.444px] h-[50px] rounded-[4px] border-2 border-black bg-transparent p-2.5"
                  />
                </div>

                {/* Input TELÉFONO */}
                <div>
                  <label class="block w-[336.444px] h-[16px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    class="w-[336.444px] h-[50px] rounded-[4px] border-2 border-black bg-transparent p-2.5"
                  />
                </div>
              </div>

              {/* Input MENSAJE */}
              <div className="mt-8">
                <label class="block w-[114.338px] text-black font-fira-sans text-[14px] font-medium tracking-[4px] uppercase mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  class="w-[711px] h-[136px] rounded-[4px] border-2 border-black bg-transparent p-2.5"
                />
              </div>
              {/* Contenedor del botón "Enviar" */}
              <div class="flex justify-end mt-5">
                <button class="bg-black cursor-pointer transition-transform duration-500 ease-out hover:bg-[#292929] hover:-translate-y-0.5 w-[227.846px] h-[50px] flex-shrink-0 rounded-[5px] text-white text-center font-fira-sans text-[14px] font-medium tracking-[4px] uppercase z-20">
                  Enviar
                </button>
              </div>
            </div>

            {/* Sección de campos textos */}
            <div class="ml-[85px] mt-0">
              {/* Texto 1 - Dirección */}
              <div>
                <p class="text-black font-fira-sans text-[14px] font-extrabold tracking-[4px] uppercase mb-2">
                  Dirección
                </p>
                <a
                  href="https://maps.app.goo.gl/b4E5DYbGraA1kZqw8"
                  target="_blank"
                >
                  <p class="w-[216px] text-black font-fira-sans text-[18px] font-normal leading-[28px] mb-5">
                    Dardo Rocha 986, Oficina 104, Martinez, Buenos Aires
                  </p>
                </a>
                <a
                  href="https://maps.app.goo.gl/N6hgiDiaTxGXaurc6"
                  target="_blank"
                >
                  <p class="w-[216px] text-black font-fira-sans text-[18px] font-normal leading-[28px]">
                    Ruta Nac. 120 - Km 2, Gobernador Virasoro - Corrientes
                  </p>
                </a>
              </div>

              {/* Texto 2 - Teléfono */}
              <div style={{ marginTop: "16px" }}>
                <p class="text-black font-fira-sans text-[14px] font-extrabold tracking-[4px] uppercase mb-2">
                  Teléfono
                </p>
                <p class="w-[216px] text-black font-fira-sans text-[18px] font-normal leading-[28px]">
                  +54 11 4723 6967
                </p>
              </div>

              {/* Texto 3 - Email */}
              <div style={{ marginTop: "16px" }}>
                <p class="text-black font-fira-sans text-[14px] font-extrabold tracking-[4px] uppercase mb-2">
                  Email
                </p>
                <p class="text-black font-fira-sans text-[18px] font-normal leading-[28px]">
                  Escribinos a:
                </p>
                <p class="text-black font-fira-sans text-[18px] font-normal leading-[28px]">
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
              class="relative max-h-[650px] -top-[140px] w-screen h-auto block"
            />
          </div>

          {/* Contenedor principal */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-100px",
            }}
          >
            {/* Primer Mapa */}
            <div className="text-center mr-[20px]">
              <a
                href="https://maps.app.goo.gl/b4E5DYbGraA1kZqw8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../images/Desktop/ifram-san-isidro.jpg")}
                  alt="Mapa"
                  className="relative -top-[260px] w-[519px] h-[262px] flex-shrink-0 cursor-pointer object-cover rounded-xl"
                />
              </a>
              <div className="mt-[-240px]">
                <div className="w-[144px] mx-auto text-black font-fira-sans text-[22px] font-semibold leading-[32px] mt-[15px]">
                  Grupo Garabí
                </div>
                <div className="w-[216.933px] mx-auto text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[10px]">
                  Dardo Rocha 986
                </div>
                <div className="w-[237.926px] mx-auto text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[10px]">
                  Martinez, Buenos Aires
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
                  className="relative -top-[260px] w-[519px] h-[262px] flex-shrink-0 cursor-pointer object-cover rounded-xl"
                />
              </a>
              <div className="mt-[-240px]">
                <div className="w-[144px] mx-auto text-black font-fira-sans text-[22px] font-semibold leading-[32px] mt-[15px]">
                  Grupo Garabí
                </div>
                <div className="w-[216.933px] mx-auto text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[10px]">
                  Ruta Nac. 120 - Km 2
                </div>
                <div className="w-[237.926px] mx-auto text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[10px]">
                  Gobernador Virasoro - Corrientes
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
