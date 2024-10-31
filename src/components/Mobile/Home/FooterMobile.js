import React from "react";
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
      <div className="flex items-center justify-center mb-2">
        <img
          src={logoGarabi}
          alt="Logo Garabi"
          style={{
            width: "162px",
            flexShrink: 0,
          }}
        />
      </div>

      {/* Footer Links Section */}
      <div className="w-full flex mt-8 justify-around px-2">
        {/* Column 1: Home */}
        <div className="text-center">
          <div
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "8.432px",
              fontWeight: 500,
              letterSpacing: "2.409px",
              textTransform: "uppercase",
              marginBottom: "4px",
                textAlign: "left"
            }}
          >
            Home
          </div>
          <div className="mt-4"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "10.841px",
              fontWeight: 400,
              lineHeight: "16.864px",
               textAlign: "left"
            }}
          >
            <p className="mt-2 cursor-pointer">Nosotros</p>
            <p className=" mt-2 cursor-pointer">Proyectos</p>
            <p className="mt-2 cursor-pointer">Medio Ambiente</p>
          </div>
        </div>

        {/* Column 2: Servicios */}
        <div className="text-center">
          <div
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "8.432px",
              fontWeight: 500,
              letterSpacing: "2.409px",
              textTransform: "uppercase",
              marginBottom: "4px",
                  textAlign: "left"
            }}
          >
            Servicios
          </div>
          <div className="mt-4"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "10.841px",
              fontWeight: 400,
              lineHeight: "16.864px",
                  textAlign: "left"
            }}
          >
            <p className="mt-2 cursor-pointer">Servicio 01</p>
            <p className="mt-2 cursor-pointer">Servicio 02</p>
            <p className="mt-2 cursor-pointer">Servicio 03</p>
          </div>
        </div>

        {/* Column 3: Contacto */}
        <div className="text-center">
          <div
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "8.432px",
              fontWeight: 500,
              letterSpacing: "2.409px",
              textTransform: "uppercase",
              marginBottom: "4px",
            }}
          >
            Contacto
          </div>
          <div className="flex flex-col items-center space-y-2 mt-6">
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
            {/* Second row of icons */}
            <div className="flex space-x-4 mt-2">
              <img
                src={logoWhatsapp}
                alt="WhatsApp"
                className="mt-4 w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
              <img
                src={logoEmail}
                alt="Email"
                className="mt-4 w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-4/5 h-[1px] bg-black my-4"></div>

      {/* Copyright Section */}
      <div
       style={{
        color: "#000",
        fontFamily: "Fira Sans",
        fontSize: "5.977px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        letterSpacing: "1.708px",
        textTransform: "uppercase",
        textAlign: "center", // Retaining this to ensure centered alignment if needed
      }}
      >
        © 2024 AW Visual Studio. All rights reserved.
      </div>
    </div>
  );
}

export default FooterMobile;
