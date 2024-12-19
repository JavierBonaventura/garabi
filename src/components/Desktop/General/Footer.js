import React from "react";
import { Link } from "react-router-dom";
import imagenFondo from "../../../images/Desktop/imagenFondoRecortada.jpg";
import logoGarabi from "../../../images/Desktop/logo-garabi.svg"; // Importa el logo
import logoInstagram from "../../../images/Desktop/instagramNegra.png";
import logoLinkedin from "../../../images/Desktop/linkedinNegra.png";

function Footer() {
  return (
    <div>
      <div className="w-full h-[380px] relative">
        {/* Fondo y contenedor principal */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div
            className="flex justify-between mt-[-10px]"
            style={{
              marginLeft: `12%`,
            }}
          >
            <div className="flex flex-col">
              <Link to="/" className="flex-shrink-0">
                <img
                  src={logoGarabi}
                  alt="Logo Garabi"
                  className="w-[157px] h-[80px]"
                />
              </Link>

              <div className="w-[304.457px] text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[20px]">
                Especialistas en Forestación. Administramos y asesoramos
                proyectos forestales de nuestros clientes.
              </div>
            </div>

            {/* Segunda columna */}
            <div className="flex flex-col top-20px mt-16">
              <div className="text-black font-fira-sans text-[14px] font-medium uppercase tracking-[4px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                <a href="/"> HOME</a>
              </div>
              <div className="w-[133.714px] h-[139px] text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[20px]">
                <p className="mb-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  <a href="/nosotros">Nosotros</a>
                </p>
                <p className="mb-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  <a href="/proyetos">Proyectos</a>
                </p>
                <p className="mb-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  <a href="/impacto">Impacto</a>
                </p>
                <p className="hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  <a href="/servicios">Servicios</a>
                </p>
              </div>
            </div>

            {/* Tercera columna */}
            <div className="flex flex-col top-20px mt-16">
              <div className="text-black font-fira-sans text-[14px] font-medium uppercase tracking-[4px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                <a href="/servicios">SERVICIOS</a>
              </div>
              <div className="w-[133.714px] h-[139px] text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[20px]">
                <p className="mb-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  Servicio 1
                </p>
                <p className="mb-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  Servicio 2
                </p>
                <p className="hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  Servicio 3
                </p>
              </div>
            </div>

            {/* Cuarta columna */}
            <div className="flex flex-col top-20px mt-16">
              <div className="text-black font-fira-sans text-[14px] font-medium uppercase tracking-[4px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                <a href="/contacto">CONTACTO</a>
              </div>
              <div className="w-[350px] h-[139px] text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[20px]">
                <a
                  href="https://api.whatsapp.com/send?phone=541130254376"
                  target="_blank"
                >
                  <p className="mb-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                    +54 9 11 3025-4376
                  </p>
                </a>
                <p className="mb-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  contacto@grupogarabi.com.ar
                </p>
                <a
                  href="https://maps.app.goo.gl/ZweJ6Q1BHQyBzHFW6"
                  target="_blank"
                >
                  <p className="mb-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                    Dardo Rocha 986, Oficina 104, Martinez
                  </p>
                </a>

                <a
                  href="https://maps.app.goo.gl/qvvduCztbkSRDXUv6"
                  target="_blank"
                >
                  <p className="mb-[10px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                    Ruta Nac. 120 - Km 2, Gobernador Virasoro - Corrientes
                  </p>
                </a>
                <div className="absolute flex items-center hidden">
                  <div className="flex items-center">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={logoLinkedin}
                        alt="LinkedIn"
                        className="w-[30px] h-[30px] flex-shrink-0 mr-[10px] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
                      />
                    </a>
                    <div className="w-[0.5px] h-[28.343px] bg-[#00942C] mx-[10px]" />

                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={logoInstagram}
                        alt="Instagram"
                        className="w-[26.572px] h-[28.343px] flex-shrink-0 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quinta columna */}
            <div className="flex flex-col mt-8 w-[12px]"></div>
          </div>

          {/* Línea centrada */}
          <div className="w-[90%] h-[1px] bg-black mt-[40px] mb-6 mx-auto"></div>

          {/* Texto centrado */}
          <div className="w-[522.514px] text-black font-[Fira Sans] text-[14px] font-medium tracking-[4px] uppercase text-center mx-auto">
            © 2024 AW visual studio. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
