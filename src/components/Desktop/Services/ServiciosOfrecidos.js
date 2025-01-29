import React, { useState } from "react";
import imagenCurvaServicios from "../../../images/Desktop/imagenCurvaServicios.png";
import tarjetaServicios from "../../../images/Desktop/asesoramiento-integral-2.jpg";
import arbolesProyectos from "../../../images/Desktop/arboles-proyectos.png";
import tarjetaServicios1 from "../../../images/Desktop/asesoramiento-productivo.jpg";
import tarjetaServicios2 from "../../../images/Desktop/tarjetaServicios.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function ServiciosOfrecidos() {
  // Estado para el índice del tab seleccionado
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Estado para el índice del hover

  const servicios = [
    "Asesoramiento productivo",
    "Administracion integral",
    "Experiencia",
  ];

  // Contenido para cada servicio (puedes modificar el contenido para cada servicio aquí)
  const contenidoServicios = [
    {
      titulo: "Asesoramiento productivo",
      descripcion:
        "Asesoramos a nuestros clientes a la hora de estudiar sus inversiones, optimizando el rendimiento del capital en base a nuestro conocimiento sobre el campo y a nuestra experiencia en explotaciones agropecuarias.",
      imagen: tarjetaServicios1,
    },
    {
      titulo: "Administracion integral",
      descripcion:
        "Los emprendimientos de manera integral, eficiente y dinámica. La flexibilidad y agilidad de nuestra organización, sumado a la ventaja de estar en la zona de mayor crecimiento forestal del país, nos permiten garantizar un servicio de alta calidad.",
      imagen: tarjetaServicios,
    },
    {
      titulo: "Experiencia",
      descripcion:
        "Más de 40 años de servicio. Agroforestal Garabí SRL, administra un total de 50778.53 Ha. De las cuales 21500 están comprometidas actualmente al proceso de certificación (FGF Santa María y Rudaco SA).",
      imagen: tarjetaServicios2,
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

          <div className="w-[452px] h-[180px] flex-shrink-0 mt-[20px] ml-[12%] text-[#000] font-fira-sans text-[24px] font-normal leading-[28px] tracking-[-1px] [font-feature-settings:'liga_off','clig_off']">
            Nuestros servicios se basan en tres pilares: Asesoramiento
            Productivo, Administración Integral y una Basta Experiencia, para
            ofrecerte soluciones estratégicas y efectivas adaptadas a tus
            necesidades.
          </div>

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
                <div className="w-[526px] h-[206px] flex-shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-8">
                  {contenidoServicios[selectedIndex].descripcion}
                </div>
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
