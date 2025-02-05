import React, { useState } from "react";
import imagenCurvaServicios from "../../../images/Desktop/imagenCurvaServicios.png";
import tarjetaServicios from "../../../images/Desktop/asesoramiento-integral-2.jpg";
import arbolesProyectos from "../../../images/Desktop/arboles-proyectos.png";
import tarjetaServicios1 from "../../../images/Desktop/asesoramiento-productivo.jpg";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import Valores from "../About/SobreNosotrosValores";

function ServiciosOfrecidos() {
  // Estado para el índice del tab seleccionado
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Estado para el índice del hover

  const servicios = ["Asesoramiento integral", "Asesoramiento productivo"];

  // Contenido para cada servicio (puedes modificar el contenido para cada servicio aquí)
  const contenidoServicios = [
    {
      titulo: "Asesoramiento integral",
      descripcion:
        "Los proyectos que cuentan con asesoramiento integral ofrecen todas las ventajas del asesoramiento productivo, asegurando un acompañamiento completo en el desarrollo y optimización de las actividades. Estos proyectos liberan a los propietarios de la responsabilidad de gestionar tareas administrativas, legales, impositivas y de tesorería, a la vez que los mantienen informados mediante rendiciones periódicas y reportes detallados. De esta forma, pueden concentrarse exclusivamente en las áreas estratégicas y operativas del negocio, con plena transparencia sobre el estado de las gestiones realizadas.<br/><br/>" +
        "<ul>" +
        "<li>Gestión Administrativa de la Empresa: Asesoría legal, contable e impositiva, asegurando el cumplimiento normativo y la correcta gestión de la documentación empresarial.</li>" +
        "<li>Consultoría Financiera y Planificación: Te ayudamos a gestionar la financiación de tu proyecto y optimizar flujos de caja.</li>" +
        "<li>Gestión de Tesorería y Pagos: Nos encargamos de la administración de pagos, cobranzas y rendiciones de gastos, asegurando que tu flujo de caja esté siempre en orden y que las obligaciones financieras se cumplan de manera eficiente.</li>" +
        "<li>Armado de Reportes: Elaboramos informes detallados y periódicos sobre el estado de la producción, la situación financiera y otros indicadores clave de tu empresa, facilitando la toma de decisiones informadas y estratégicas.</li>" +
        "</ul>",
      imagen: tarjetaServicios,
    },
    {
      titulo: "Asesoramiento productivo",
      descripcion:
        "Ofrecemos asesoramiento y soluciones personalizadas buscando maximizar la productividad y sostenibilidad de los proyectos de nuestros clientes. Gracias a nuestra amplia experiencia en el sector sumado al respaldo de un equipo especializado, ayudamos a seleccionar las mejores prácticas y estrategias para cada proyecto, asegurando su rentabilidad y la conservación del entorno. Acompañamos a nuestros clientes en todas las etapas, desde la planificación hasta la ejecución, con un enfoque práctico y adaptado a sus necesidades.<br/><br/>" +
        "<ul>" +
        "<li>Asesoramiento en Manejo Agroforestal: Brindamos asesoramiento especializado en la planificación y ejecución de proyectos agroforestales, adaptados a las necesidades específicas de cada cliente.</li>" +
        "<li>Planificación y Gestión de Proyectos: Desarrollamos planes de trabajo detallados, asegurando la correcta ejecución de las tareas y el cumplimiento de los plazos establecidos.</li>" +
        "<li>Monitoreo y Seguimiento de la Producción: Implementamos sistemas de control para asegurar el avance de las actividades y la eficiencia de los recursos, realizando ajustes cuando sea necesario.</li>" +
        "<li>Asesoramiento en Comercialización: Te apoyamos en la toma de decisiones sobre la comercialización de tus productos, identificando oportunidades y mejorando la cadena de valor.</li>" +
        "</ul>",
      imagen: tarjetaServicios1,
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
            top: "200px",
            maxHeight: "650px",
          }}
        />
        <div
          className="relative z-10 flex flex-col h-full pt-32"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
          }}
        >
          <div className="w-[546px] h-[72px] flex-shrink-0 mt-[50px] ml-[12%] text-[#000] font-fira-sans text-[60px] font-black leading-[60px] tracking-[-1px] [font-feature-settings:'liga_off','clig_off']">
            Servicios ofrecidos
          </div>

          <p className="w-[452px] h-[180px] flex-shrink-0 mt-[20px] ml-[12%] text-[#000] font-fira-sans text-[24px] font-normal leading-[28px] tracking-[-1px] [font-feature-settings:'liga_off','clig_off']">
            En Grupo Garabi nos comprometemos con el desarrollo sostenible y el
            crecimiento eficiente de los sectores productivos del campo.
            Ofrecemos una gama completa de servicios de administración integral
            y asesoramiento productivo, diseñados para optimizar el rendimiento
            de tus recursos naturales, garantizar la sostenibilidad de tu
            proyecto y maximizar la rentabilidad a largo plazo.
            <br />
            Entendemos que cada proyecto agroforestal es único. Por eso, nos
            dedicamos a ofrecer soluciones integrales que aborden las
            necesidades específicas de cada cliente, con el objetivo de alcanzar
            una producción eficiente, rentable y sostenible a largo plazo.
          </p>

          <div
            className="flex justify-between mt-[500px] mx-auto"
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
                  <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[361.768px] h-[5px] bg-gradient-to-t from-[#00942C] to-[#00942C]" />
                )}
                {hoveredIndex === index && (
                  <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[361.768px] h-[5px] bg-gradient-to-t from-[#00942C] to-[#00942C] bg-[#00942C] transition-all duration-300 ease-in-out" />
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
              className="flex mt-24 mx-auto"
              style={{
                width: "1074px",
                gap: "100px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Columna izquierda: título y descripción según la selección */}
              <div className="mr-4" style={{ width: "468.214px" }}>
                <div className="w-[468.214px] h-[32px] flex-shrink-0 text-black font-fira-sans text-[24px] font-semibold leading-[32px]">
                  {contenidoServicios[selectedIndex].titulo}
                </div>
                <div
                  className="w-[526px] h-[206px] flex-shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-8"
                  dangerouslySetInnerHTML={{
                    __html: contenidoServicios[selectedIndex].descripcion,
                  }}
                ></div>
              </div>

              {/* Columna derecha: imagen según la selección */}
              <div style={{ width: "528px" }}>
                <img
                  src={contenidoServicios[selectedIndex].imagen}
                  alt="Imagen del Servicio"
                  className="w-[528px] h-[352px] rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
          <Valores />
          <div className="relative w-full pb-20 mt-[-13%]">
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
                Contáctanos ahora para darle forma a tu futuro verde
              </div>

              <button className="mt-12 flex justify-center items-center bg-white border border-[#00942C] rounded-[5px] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5 w-[245.25px] h-[50px]">
                <span className="text-[#00942C] text-center font-fira-code text-[14px] font-normal uppercase tracking-[4px]">
                  Contáctanos
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosOfrecidos;
