// NavBarMobile.js
import React from "react";
import { Link } from "react-router-dom";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoGarabi from "../../../images/Desktop/logo-garabi.svg";

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
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          menuAbierto ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundColor: "#D9DED4", // Fondo de color sólido
          zIndex: 40,
        }}
      >
        {/* Encabezado del menú con logo y botón de cierre */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
          <img
            src={logoGarabi}
            alt="Logo Garabi"
            className="w-[110px] h-[47.689px] flex-shrink-0"
          />
          <button
            onClick={toggleMenu}
            className="w-[11px] h-[11px] flex-shrink-0 text-[#00942C] text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-black text-lg hover:text-green-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className="text-black text-lg hover:text-green-600"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/singleproject"
                onClick={toggleMenu}
                className="text-black text-lg hover:text-green-600"
              >
                Single Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="text-black text-lg hover:text-green-600"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="text-black text-lg hover:text-green-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={toggleMenu}
                className="text-black text-lg hover:text-green-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/impact"
                onClick={toggleMenu}
                className="text-black text-lg hover:text-green-600"
              >
                Impact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBarMobile;
