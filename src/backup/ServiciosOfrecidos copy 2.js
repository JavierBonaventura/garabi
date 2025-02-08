import React, { useState } from "react";
import imagenCurvaServicios from "../../../images/Desktop/imagenCurvaServicios.png";
import recuadroUno from "../../../images/Desktop/asesoramiento-integral-4.png";
import recuadroDos from "../../../images/Desktop/asesoramiento-productivo-3.png";
import arbolesProyectos from "../../../images/Desktop/arboles-proyectos.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import Valores from "../components/Desktop/About/SobreNosotrosValores";

function ServiciosOfrecidos() {
  // Estado para el índice del tab seleccionado
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Estado para el índice del hover

  const servicios = ["Asesoramiento Integral", "Asesoramiento Productivo"];

  // Contenido para cada servicio (puedes modificar el contenido para cada servicio aquí)
  const contenidoServicios = [
    {
      titulo: "Asesoramiento Integral",
      descripcion:
        "Los proyectos que cuentan con asesoramiento integral ofrecen todas las ventajas del asesoramiento productivo, asegurando un acompañamiento completo en el desarrollo y optimización de las actividades.<br/><br/> Estos proyectos liberan a los propietarios de la responsabilidad de gestionar tareas administrativas, legales, impositivas y de tesorería, a la vez que los mantienen informados mediante rendiciones periódicas y reportes detallados. De esta forma, pueden concentrarse exclusivamente en las áreas estratégicas y operativas del negocio, con plena transparencia sobre el estado de las gestiones realizadas.<br/><br/>" +
        "<ul>" +
        "<li><span class='font-bold'>Gestión Administrativa de la Empresa:</span><br/> Asesoría legal, contable e impositiva, asegurando el cumplimiento normativo y la correcta gestión de la documentación empresarial.</li><br/>" +
        "<li><span class='font-bold'>Consultoría Financiera y Planificación:</span><br/> Te ayudamos a gestionar la financiación de tu proyecto y optimizar flujos de caja.</li><br/>" +
        "<li><span class='font-bold'>Gestión de Tesorería y Pagos:</span><br/> Nos encargamos de la administración de pagos, cobranzas y rendiciones de gastos, asegurando que tu flujo de caja esté siempre en orden y que las obligaciones financieras se cumplan de manera eficiente.</li><br/>" +
        "<li><span class='font-bold'>Armado de Reportes:</span><br/> Elaboramos informes detallados y periódicos sobre el estado de la producción, la situación financiera y otros indicadores clave de tu empresa, facilitando la toma de decisiones informadas y estratégicas.</li>" +
        "</ul>",
      imagen: recuadroUno,
    },
    {
      titulo: "Asesoramiento Productivo",
      descripcion:
        "Ofrecemos asesoramiento y soluciones personalizadas buscando maximizar la productividad y sostenibilidad de los proyectos de nuestros clientes.<br/><br/>Gracias a nuestra amplia experiencia en el sector sumado al respaldo de un equipo especializado, ayudamos a seleccionar las mejores prácticas y estrategias para cada proyecto, asegurando su rentabilidad y la conservación del entorno. Acompañamos a nuestros clientes en todas las etapas, desde la planificación hasta la ejecución, con un enfoque práctico y adaptado a sus necesidades.<br/><br/>" +
        "<ul>" +
        "<li><span class='font-bold'>Asesoramiento en Manejo Agroforestal:</span><br/>Brindamos asesoramiento especializado en la planificación y ejecución de proyectos agroforestales, adaptados a las necesidades específicas de cada cliente.</li><br/>" +
        "<li><span class='font-bold'>Planificación y Gestión de Proyectos:</span><br/>Desarrollamos planes de trabajo detallados, asegurando la correcta ejecución de las tareas y el cumplimiento de los plazos establecidos.</li><br/>" +
        "<li><span class='font-bold'>Monitoreo y Seguimiento de la Producción:</span> Implementamos sistemas de control para asegurar el avance de las actividades y la eficiencia de los recursos, realizando ajustes cuando sea necesario.</li><br/>" +
        "<li><span class='font-bold'>Asesoramiento en Comercialización:</span> Te apoyamos en la toma de decisiones sobre la comercialización de tus productos, identificando oportunidades y mejorando la cadena de valor.</li>" +
        "</ul>",
      imagen: recuadroDos,
    },
  ];

  return (
    <div>
      <div className="w-full h-auto relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <img
          src={imagenCurvaServicios}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20"
          style={{
            mixBlendMode: "normal",
            top: "400px",
            maxHeight: "650px",
          }}
        />
        <div
          className="relative z-10 flex flex-col h-full padding-section-2 !pb-0"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
          }}
        >
          <div className="gap-title-paragraph w-2/3 2xl:w-1/2 mx-auto">
            <h1 className="title-section">Servicios ofrecidos</h1>

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
          <div
            className="flex justify-center gap-32 mt-[550px] 2xl:mt-[700px] mx-auto"
            style={{
              width: "1074px",
            }}
          >
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="text-center w-[326px] text-black font-fira-sans text-[24px] font-bold leading-[50px] relative cursor-pointer"
                // Cambiamos el tab seleccionado al hacer clic
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {servicio}
                {selectedIndex === index && (
                  <div
                    style={{
                      left:
                        index === 0 ? "-147px" : index === 1 ? "-65px" : "50%",
                    }}
                    className="absolute bottom-[-20px] w-[537px] h-[5px] bg-gradient-to-t from-[#00942C] to-[#00942C]"
                  />
                )}
                {hoveredIndex === index && (
                  <div
                    style={{
                      left:
                        index === 0 ? "-147px" : index === 1 ? "-65px" : "50%",
                    }}
                    className="absolute bottom-[-20px] w-[537px] h-[5px] bg-gradient-to-t from-[#00942C] to-[#00942C]"
                  />
                )}
              </div>
            ))}
          </div>
          <div
            className="mx-auto mt-4"
            style={{
              width: "1074px",
              height: "1px",
              background:
                "linear-gradient(0deg, #00942C 0%, #00942C 100%), #00942C",
              flexShrink: 0,
            }}
          ></div>
          {/* Aquí comienza la sección de dos columnas */}
          <div className="relative w-full h-full">
            {/* Bloque de fondo que se debe mostrar detrás */}
            <div className="relative w-full" style={{ top: "300px" }}></div>
            {/* Sección de dos columnas dinámicas */}
            <div
              className={`flex mt-24 mx-auto ${
                selectedIndex === 1 ? "flex-row-reverse" : ""
              }`}
              style={{
                width: "1074px",
                gap: "100px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Columna de contenido */}
              <div style={{ width: "468.214px" }}>
                <div
                  className="w-[526px] flex-shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px]"
                  dangerouslySetInnerHTML={{
                    __html: contenidoServicios[selectedIndex].descripcion,
                  }}
                ></div>
              </div>

              {/* Columna de imagen */}
              <div style={{ width: "528px" }}>
                <img
                  src={contenidoServicios[selectedIndex].imagen}
                  alt="Imagen del Servicio"
                  className="w-[528px] h-[352px] rounded-[20px] object-cover"
                />
              </div>
            </div>{" "}
          </div>
          <Valores />
          <div className="relative w-full mt-16">
            {/* Gradiente superior */}
            <div
              className="absolute z-20 w-full h-[21%] top-[-20%] left-0 origin-top-left"
              style={{
                zIndex: "1",
                background:
                  "linear-gradient(00deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
              }}
            />

            {/* Imagen */}
            <img
              className="z-10 w-full"
              src={arbolesProyectos}
              alt="Árboles Proyectos"
            />

            {/* Gradiente inferior */}
            <div
              className="absolute top-0 right-0 w-full h-[300px] origin-top-left"
              style={{
                background:
                  "linear-gradient(00deg, rgba(237, 242, 232, 0.00) 0%, #dfe8e0 100%)",
              }}
            />

            {/* Contenido central */}
            <div className="relative flex flex-col justify-center items-center text-center">
              <div className="text-center text-[#00942C] font-fira-sans text-[40px] font-bold leading-[50px] max-w-[615px] mt-[-40%]">
                Contáctanos ahora para darle forma VERDE a tu futuro
              </div>

              <a
                href="/contacto"
                className="mt-12 flex justify-center items-center bg-white border border-[#00942C] rounded-[5px] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5 w-[245.25px] h-[50px]"
              >
                <span className="text-[#00942C] text-center font-fira-code text-[14px] font-normal uppercase tracking-[4px]">
                  Contáctanos
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosOfrecidos;
