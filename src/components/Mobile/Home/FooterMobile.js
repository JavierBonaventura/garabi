import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoGarabi from "../../../images/Desktop/logo-garabi.svg";
import logoInstagram from "../../../images/Desktop/instagramNegra.png";
import logoLinkedin from "../../../images/Desktop/linkedinNegra.png";
import logoWhatsapp from "../../../images/Mobile/whatsappNegra.png";
import logoEmail from "../../../images/Mobile/emailNegra.png";

function FooterMobile() {
  return (
    <div
      className="w-full h-auto bg-[#F7FFF1] flex flex-col items-center pt-10 pb-6"
      style={{
        backgroundImage: `url(${fondoMobile})`,
        backgroundSize: "cover",
      }}
    >
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center mb-2">
        <img
          src={logoGarabi}
          alt="Logo Garabi"
          className="w-[162px] flex-shrink-0"
        />
        <p className="text-black font-fira-sans text-sm font-normal leading-[20px] mt-[10px] text-center px-5">
          Somos especialistas en Forestación. Administramos y asesoramos
          proyectos agroforestales.
        </p>
      </div>

      {/* Footer Links Section */}
      <div className="w-full flex mt-8 justify-around px-2">
        {/* Column 1: Home */}
        <div className="text-center">
          <p className="text-black font-fira-sans text-sm font-medium tracking-[2.409px] uppercase mb-1 text-left">
            Secciones
          </p>
          <div className="mt-2 text-black font-fira-sans text-xs font-normal leading-[16.864px] text-center">
            <Link to="/" className="mt-2 block cursor-pointer">
              Inicio
            </Link>
            <Link to="/nosotros" className="mt-2 block cursor-pointer">
              Nosotros
            </Link>

            <Link to="/impacto" className="mt-2 block cursor-pointer">
              Impacto
            </Link>
            <Link to="/servicios" className="mt-2 block cursor-pointer">
              Servicios
            </Link>
            <Link to="/contacto" className="mt-2 block cursor-pointer">
              Contacto
            </Link>
          </div>
        </div>
        {/* Column 2: Servicios */}
        <div className="text-center hidden">
          <div className="text-black font-fira-sans text-sm font-medium tracking-[2.409px] uppercase mb-1 text-left">
            <Link to="/services" className="mt-2 block cursor-pointer">
              Servicios
            </Link>
          </div>
          <div className="mt-2 text-black font-fira-sans text-xs font-normal leading-[16.864px] text-left">
            <p className="mt-2 cursor-pointer">Servicio 01</p>
            <p className="mt-2 cursor-pointer">Servicio 02</p>
            <p className="mt-2 cursor-pointer">Servicio 03</p>
          </div>
        </div>{" "}
        {/* Column 3: Redes */}
        <div className="text-center hidden">
          <div className="text-black font-fira-sans text-[12px] font-medium tracking-[2.409px] uppercase mb-1">
            <Link to="/contact" className="mt-2 block cursor-pointer">
              Redes
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2 mt-2">
            {/* First row of icons */}
            <div className="flex space-x-4">
              <img
                src={logoLinkedin}
                alt="LinkedIn"
                className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
              <img
                src={logoInstagram}
                alt="Instagram"
                className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="w-full flex mt-8 justify-around px-2">
        {/* Column 4: Contacto */}
        <div className="text-center">
          <p className="text-black font-fira-sans text-[12px] font-medium tracking-[2.409px] uppercase mb-1 text-center">
            Información
          </p>
          <div className="flex flex-col items-center space-y-2 mt-2">
            {/* First row of icons */}
            <div className="flex flex-col space-x-4 text-xs font-fira-sans">
              <a
                href="https://api.whatsapp.com/send?phone=541130254376"
                target="_blank"
              >
                <p className="mb-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  +54 9 11 3025-4376
                </p>
              </a>
              <p className="mb-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                contacto@grupogarabi.com.ar
              </p>
              <a
                href="https://maps.app.goo.gl/b4E5DYbGraA1kZqw8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="mb-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  Dardo Rocha 986, Oficina 104, Martinez, Buenos Aires
                </p>
              </a>
              <a
                href="https://maps.app.goo.gl/qvvduCztbkSRDXUv6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="mb-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                  Ruta Nac. 120 - Km 2, Gobernador Virasoro, Corrientes
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-4/5 h-[1px] bg-black my-4"></div>

      {/* Copyright Section */}
      <div className="text-black font-fira-sans text-sm font-medium tracking-[1.708px] text-center">
        © 2025 Todos los derechos reservados. Desarrollado por Digital Fellow.
      </div>
    </div>
  );
}

export default FooterMobile;
