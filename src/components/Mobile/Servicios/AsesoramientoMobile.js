import React, { useState } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import recuadroUno from "../../../images/Desktop/asesoramiento-integral-3.png";
import recuadroDos from "../../../images/Desktop/asesoramiento-productivo-2.png";

function AsesoramientoMobile() {
  const [activeTab, setActiveTab] = useState("Asesoramiento integral");

  // Descripciones para cada pestaña
  const descriptions = {
    "Asesoramiento integral":
      "Los proyectos que cuentan con asesoramiento integral ofrecen todas las ventajas del asesoramiento productivo, asegurando un acompañamiento completo en el desarrollo y optimización de las actividades. Estos proyectos liberan a los propietarios de la responsabilidad de gestionar tareas administrativas, legales, impositivas y de tesorería, a la vez que los mantienen informados mediante rendiciones periódicas y reportes detallados. De esta forma, pueden concentrarse exclusivamente en las áreas estratégicas y operativas del negocio, con plena transparencia sobre el estado de las gestiones realizadas.<br/><br/>" +
      "<ul>" +
      "<li><span class='font-bold'>Gestión Administrativa de la Empresa:</span><br/> Asesoría legal, contable e impositiva, asegurando el cumplimiento normativo y la correcta gestión de la documentación empresarial.</li><br/> " +
      "<li><span class='font-bold'>Consultoría Financiera y Planificación:</span><br/> Te ayudamos a gestionar la financiación de tu proyecto y optimizar flujos de caja.</li><br/> " +
      "<li><span class='font-bold'>Gestión de Tesorería y Pagos:</span><br/> Nos encargamos de la administración de pagos, cobranzas y rendiciones de gastos, asegurando que tu flujo de caja esté siempre en orden y que las obligaciones financieras se cumplan de manera eficiente.</li><br/> " +
      "<li><span class='font-bold'>Armado de Reportes:</span><br/> Elaboramos informes detallados y periódicos sobre el estado de la producción, la situación financiera y otros indicadores clave de tu empresa, facilitando la toma de decisiones informadas y estratégicas.</li>" +
      "</ul>",

    "Asesoramiento productivo":
      "Ofrecemos asesoramiento y soluciones personalizadas buscando maximizar la productividad y sostenibilidad de los proyectos de nuestros clientes. Gracias a nuestra amplia experiencia en el sector sumado al respaldo de un equipo especializado, ayudamos a seleccionar las mejores prácticas y estrategias para cada proyecto, asegurando su rentabilidad y la conservación del entorno. Acompañamos a nuestros clientes en todas las etapas, desde la planificación hasta la ejecución, con un enfoque práctico y adaptado a sus necesidades.<br/><br/>" +
      "<ul>" +
      "<li><span class='font-bold'>Asesoramiento en Manejo Agroforestal:</span><br/> Brindamos asesoramiento especializado en la planificación y ejecución de proyectos agroforestales, adaptados a las necesidades específicas de cada cliente.</li><br/> " +
      "<li><span class='font-bold'>Planificación y Gestión de Proyectos:</span><br/> Desarrollamos planes de trabajo detallados, asegurando la correcta ejecución de las tareas y el cumplimiento de los plazos establecidos.</li><br/> " +
      "<li><span class='font-bold'>Monitoreo y Seguimiento de la Producción:</span><br/> Implementamos sistemas de control para asegurar el avance de las actividades y la eficiencia de los recursos, realizando ajustes cuando sea necesario.</li><br/> " +
      "<li><span class='font-bold'>Asesoramiento en Comercialización:</span><br/> Te apoyamos en la toma de decisiones sobre la comercialización de tus productos, identificando oportunidades y mejorando la cadena de valor.</li>" +
      "</ul>",
  };

  // Determina qué imagen mostrar según el tab activo
  const getImageForTab = (tab) => {
    switch (tab) {
      case "Asesoramiento integral":
        return recuadroUno;
      case "Asesoramiento productivo":
        return recuadroDos;
      default:
        return recuadroUno; // Imagen por defecto
    }
  };

  return (
    <div>
      <div className="w-full h-[auto] relative">
        <div className="inset-0 bg-[#F7FFF1]"></div>

        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          {/* Green Tab and Section Titles */}
          <div className="w-[327px] mx-auto mt-60 flex flex-col items-center">
            <div className="flex space-x-[13px]">
              {/* Pestañas */}
              {["Asesoramiento integral", "Asesoramiento productivo"].map(
                (tab) => (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex justify-center items-center text-white text-xs font-fira-sans cursor-pointer"
                    style={{
                      width: "101px",
                      height: "38px",
                      borderRadius: "7px 7px 0 0",
                      backgroundColor:
                        activeTab === tab ? "#00942C" : "transparent",
                      opacity: activeTab === tab ? 1 : 0.24,
                      textAlign: "center",
                      fontWeight: 400,
                      fontSize: "9px",
                      lineHeight: "12px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: activeTab === tab ? "white" : "black",
                    }}
                  >
                    {tab}
                  </div>
                )
              )}
            </div>
            {/* Línea debajo del recuadro verde */}
            <div
              style={{
                width: "329px",
                height: "1px",
                background: "linear-gradient(0deg, #00942C 0%, #00942C 100%)",
              }}
            />
          </div>

          {/* Description */}
          <div
            className="ml-8 w-[327px] h-[auto] flex-shrink-0 mt-4"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "17px",
              letterSpacing: "-1px",
            }}
            dangerouslySetInnerHTML={{ __html: descriptions[activeTab] }}
          />

          {/* Image Section */}
          <div className="w-full flex justify-center mt-4 ">
            <img
              src={getImageForTab(activeTab)} // Usa la función para obtener la imagen correcta
              alt={`Imagen para ${activeTab}`}
              style={{
                width: "334px",
                height: "219px",
                flexShrink: 0,
                borderRadius: "10px",
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsesoramientoMobile;
