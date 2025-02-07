import React from "react";
import { Link } from "react-router-dom";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import serviciosOfrecidos from "../../../images/Mobile/serviciosOfrecidos.png";

function ServiciosOfrecidosMobile() {
  return (
    <div>
      <div className="w-full h-[auto] relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100 -mt-2"></div>
        <img
          src={serviciosOfrecidos}
          alt="Curva"
          className="absolute left-0 w-full h-auto z-20 top-[500px]"
          style={{}}
        />

        <div
          className="relative z-10 flex flex-col h-full padding-section"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          {/* Texto "Quedemos en contacto" */}
          <div className="gap-title-paragraph mx-8">
            <h1 className="title-section whitespace-nowrap">
              Servicios ofrecidos
            </h1>
            <p className="paragraph-section">
              En Grupo Garabí nos comprometemos con el desarrollo sostenible y
              el crecimiento eficiente de los sectores productivos del campo.
              Ofrecemos una gama completa de servicios de administración
              integral y asesoramiento productivo, diseñados para optimizar el
              rendimiento de tus recursos naturales, garantizar la
              sostenibilidad de tu proyecto y maximizar la rentabilidad a largo
              plazo.
              <br /> <br />
              Entendemos que cada proyecto agroforestal es único. Por eso, nos
              dedicamos a ofrecer soluciones integrales que aborden las
              necesidades específicas de cada cliente, con el objetivo de
              alcanzar una producción eficiente, rentable y sostenible a largo
              plazo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosOfrecidosMobile;
