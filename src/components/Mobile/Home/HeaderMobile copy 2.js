import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Importa Link y useLocation
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoGarabi from "../../../images/Desktop/logo-garabi.svg";
import hamburguesa from "../../../images/Mobile/hamburguesa.png";

function HeaderMobile() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation(); // Hook para obtener la ubicación actual

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  // Efecto que cierra el menú al cambiar la ruta
  useEffect(() => {
    setMenuAbierto(false);
  }, [location]); // Se ejecuta cada vez que cambia la ubicación

  return (
    <div className="relative w-full h-[76px]">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex items-center justify-between h-full px-4"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        <img
          src={logoGarabi}
          alt="Logo Garabi"
          className="h-[64px] w-auto ml-4"
        />

        <img
          src={hamburguesa}
          alt="Hamburguesa"
          className="h-[32px] w-[32px] mr-4 mt-2 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Menú desplegable */}
      <div
        className={`absolute top-[76px] right-0 w-64 h-[300px] bg-white shadow-lg transition-transform duration-300 ${
          menuAbierto ? "block" : "hidden" // Usa block y hidden para mostrar u ocultar el menú
        }`}
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
          zIndex: 40,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/" onClick={toggleMenu} className="text-black text-lg hover:text-green-600">Home</Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu} className="text-black text-lg hover:text-green-600">Projects</Link>
            </li>
            <li>
              <Link to="/singleproject" onClick={toggleMenu} className="text-black text-lg hover:text-green-600">Single Project</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="text-black text-lg hover:text-green-600">Contact</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="text-black text-lg hover:text-green-600">About</Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu} className="text-black text-lg hover:text-green-600">Services</Link>
            </li>
            <li>
              <Link to="/impact" onClick={toggleMenu} className="text-black text-lg hover:text-green-600">Impact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderMobile;
