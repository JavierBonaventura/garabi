// NavBarMobile.js
import React from "react";
import { Link } from "react-router-dom";
import logoGarabi from "../../../images/Mobile/logoGarabiNavBar.png";
import iconoX from "../../../images/Mobile/iconoX.png";
import iconoHome from "../../../images/Mobile/iconoHome.png";
import iconoProjects from "../../../images/Mobile/iconoProjects.png";
import iconoServicios from "../../../images/Mobile/iconoServicios.png";
import iconoImpact from "../../../images/Mobile/iconoImpact.png";
import iconoAbout from "../../../images/Mobile/iconoAbout.png";
import iconoContact from "../../../images/Mobile/iconoContact.png";
import iconoLinkedin from "../../../images/Mobile/iconoLonkedinNegra.png";
import iconoInstagram from "../../../images/Mobile/iconoIGNegra.png";

function NavBarMobile({ menuAbierto, toggleMenu }) {
  return (
    <>
      {/* Fondo oscuro semitransparente */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          menuAbierto ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        style={{ zIndex: 30 }}
      />

      {/* Menú deslizable desde la izquierda */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          menuAbierto ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          width: "257px", // Ancho fijo del menú
          backgroundColor: "#D9DED4", // Fondo de color sólido
          zIndex: 40,
        }}
      >
        {/* Encabezado del menú con logo y botón de cierre */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
          <a href="/">
            <img
              src={logoGarabi}
              alt="Logo Garabi"
              className="w-[110px] h-[47.689px] flex-shrink-0"
            />
          </a>

          <img
            src={iconoX}
            alt="Cerrar"
            onClick={toggleMenu}
            className="w-[11px] h-[11px] flex-shrink-0 cursor-pointer mr-4"
          />
        </div>

        {/* Sección de menues con degradado */}
        <Link to="/">
          <div
            className="flex items-center mt-6 px-4"
            style={{
              background: "linear-gradient(270deg, #B6BCB2 0%, #D9DED4 100%)",
              width: "257px",
              height: "51px",
              flexShrink: 0,
            }}
          >
            <img
              src={iconoHome}
              alt="Icono Home"
              className="w-[37px] h-[37px] flex-shrink-0"
            />
            <span
              className="ml-[5px] text-black "
              style={{
                flexShrink: 0,
                fontFamily: "Fira Sans",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "-3px",
              }}
            >
              Home
            </span>
          </div>
        </Link>

        <Link to="/nosotros">
          <div
            className="flex items-center mt-[9px] px-6"
            style={{
              background: "linear-gradient(270deg, #B6BCB2 0%, #D9DED4 100%)",
              width: "257px",
              height: "51px",
              flexShrink: 0,
            }}
          >
            <img
              src={iconoProjects}
              alt="Icono Home"
              className="w-[23px] h-[20px] flex-shrink-0"
            />
            <span
              className="ml-[5px] text-black px-[3px]"
              style={{
                flexShrink: 0,
                fontFamily: "Fira Sans",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "-3px",
              }}
            >
              Nosotros
            </span>
          </div>
        </Link>

        <Link to="/proyectos" className="hidden">
          <div
            className="flex items-center mt-[9px] px-6"
            style={{
              background: "linear-gradient(270deg, #B6BCB2 0%, #D9DED4 100%)",
              width: "257px",
              height: "51px",
              flexShrink: 0,
            }}
          >
            <img
              src={iconoServicios}
              alt="Icono Home"
              className="w-[17px] h-[18px] flex-shrink-0"
            />
            <span
              className="ml-[5px] text-black px-[6px] "
              style={{
                flexShrink: 0,
                fontFamily: "Fira Sans",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "-3px",
              }}
            >
              Proyectos
            </span>
          </div>
        </Link>

        <Link to="/impacto">
          <div
            className="flex items-center mt-[9px] px-4"
            style={{
              background: "linear-gradient(270deg, #B6BCB2 0%, #D9DED4 100%)",
              width: "257px",
              height: "51px",
              flexShrink: 0,
            }}
          >
            <img
              src={iconoImpact}
              alt="Icono Home"
              className="w-[29px] h-[29px] flex-shrink-0"
            />
            <span
              className="ml-[5px] text-black "
              style={{
                flexShrink: 0,
                fontFamily: "Fira Sans",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "-3px",
              }}
            >
              Impacto
            </span>
          </div>
        </Link>

        <Link to="/servicios">
          <div
            className="flex items-center mt-[9px] px-[20px]"
            style={{
              background: "linear-gradient(270deg, #B6BCB2 0%, #D9DED4 100%)",
              width: "257px",
              height: "51px",
              flexShrink: 0,
            }}
          >
            <img
              src={iconoAbout}
              alt="Icono Home"
              className="w-[19px] h-[20px] flex-shrink-0"
            />
            <span
              className="ml-[5px] text-black px-[5px]"
              style={{
                flexShrink: 0,
                fontFamily: "Fira Sans",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "-3px",
              }}
            >
              Servicios
            </span>
          </div>
        </Link>

        <Link to="/contacto">
          <div
            className="flex items-center mt-[9px] px-4"
            style={{
              background: "linear-gradient(270deg, #B6BCB2 0%, #D9DED4 100%)",
              width: "257px",
              height: "51px",
              flexShrink: 0,
            }}
          >
            <img
              src={iconoContact}
              alt="Icono Home"
              className="w-[21px] h-[21px] flex-shrink-0"
            />
            <span
              className="ml-[9px] text-black "
              style={{
                flexShrink: 0,
                fontFamily: "Fira Sans",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "-3px",
              }}
            >
              Contacto
            </span>
          </div>
        </Link>

        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center mb-4 hidden">
          {/* Íconos de LinkedIn e Instagram */}
          <div className="flex items-center justify-center mb-2">
            <img
              src={iconoLinkedin}
              alt="LinkedIn"
              className="w-[20px] h-[20px] "
            />
            <div
              cla
              style={{
                width: "0.288px",
                height: "32.41px",
                background: "#000",
                margin: "16px 15px",
              }}
            />
            <img
              src={iconoInstagram}
              alt="Instagram"
              className="w-[20px] h-[20px]"
            />
          </div>

          {/* Línea horizontal debajo de los íconos */}
          <div />
        </div>
      </div>
    </>
  );
}

export default NavBarMobile;
