import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import logoGarabi from "../../../images/Desktop/logo-garabi.svg";
import logoInstagram from "../../../images/Desktop/logoInstagram.svg";
import logoLinkedin from "../../../images/Desktop/linkedin.png";

function Header() {
  const [fontSize, setFontSize] = useState(14);
  const [letterSpacing, setLetterSpacing] = useState(4);
  const location = useLocation(); 
  const [selected, setSelected] = useState(location.pathname); 

  const handleResize = () => {
    const width = window.innerWidth;
    const newFontSize = (width / 1440) * 14;
    const newLetterSpacing = (width / 1440) * 4;
    setFontSize(newFontSize);
    setLetterSpacing(newLetterSpacing);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setSelected(location.pathname); 
  }, [location]);

  return (
    <header className="relative w-full h-[94px] bg-[#F7FFF1] bg-opacity-100">
      {/* Contenedor principal con fondo de imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imagenFondo})` }}
      />

      {/* Contenido dentro del Header */}
      <div className="relative z-10 flex flex-col h-full px-4">
        {/* Logo Garabi */}
        <div className="absolute top-2 left-[13%] md:left-[12%]">
          <Link to="/">
            <img
              src={logoGarabi}
              alt="Logo Garabi"
              className="w-auto h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Menú de navegación */}
        <nav className="absolute top-[38px] left-[29.3%] flex items-center gap-8">
          {[
            { text: "HOME", to: "/" },
            { text: "ABOUT US", to: "/nosotros" },
            { text: "PROYECTOS", to: "/proyectos" },
            { text: "IMPACTO", to: "/impacto" },
            { text: "SERVICIOS", to: "/servicios" },
            { text: "CONTACTO", to: "/contacto" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={() => setSelected(item.to)} // Actualiza el estado al hacer clic
              className="relative text-[#00942C] text-center font-medium uppercase tracking-[0.2em] transition duration-300 group"
              style={{
                fontSize: `${fontSize}px`,
                letterSpacing: `${letterSpacing}px`,
              }}
            >
              {item.text}
              {/* Subrayado animado */}
              <div
                className={`absolute bottom-[-4px] left-[-3px] w-full h-[3px] bg-[#00942C] transform transition-all duration-300 origin-left ${
                  selected === item.to
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

{/* Contenedor de iconos sociales */}
<div className="absolute top-[36px] right-[5vw] flex items-center gap-4">
  <a
    href="https://www.linkedin.com/" 
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform transform hover:scale-110"
  >
    <img
      src={logoLinkedin}
      alt="LinkedIn"
      className="w-6 h-6" 
    />
  </a>
  <a
    href="https://www.instagram.com/" 
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform transform hover:scale-110"
  >
    <img
      src={logoInstagram}
      alt="Instagram"
      className="w-6 h-6" 
    />
  </a>
</div>
      </div>
    </header>
  );
}

export default Header;
