// HeaderMobile.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBarMobile from "./NavBarMobile"; // Importa el componente NavBarMobile
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoGarabi from "../../../images/Desktop/logo-garabi.svg";
import hamburguesa from "../../../images/Mobile/hamburguesa.png";

function HeaderMobile() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    setMenuAbierto(false);
  }, [location]);

  return (
    <div className="relative w-full h-[85px]">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex items-center justify-between h-full px-4"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        <a href="/">
          <img src={logoGarabi} alt="Logo Garabi" className=" ml-4 -mt-4" />
        </a>

        <img
          src={hamburguesa}
          alt="Hamburguesa"
          className="h-[32px] w-[32px] mr-4 -mt-1 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Renderiza el componente NavBarMobile y pasa las props necesarias */}
      <NavBarMobile menuAbierto={menuAbierto} toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderMobile;
