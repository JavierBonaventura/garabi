import React, { useState } from "react";
import fondoServicios from "../../../images/Desktop/fondoServicios.png";
import imagenCurvaServicios from "../../../images/Desktop/imagenCurvaServicios.png";
import tarjetaServicios from "../../../images/Desktop/tarjetaServicios.png";
import arbolesProyectos from "../../../images/Desktop/arboles-proyectos.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg"


function ServiciosOfrecidos() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;
  
  // Estado para el índice del tab seleccionado
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Estado para el índice del hover

  const servicios = [
    "Asesoramiento productivo",
    "Asesoramiento integral",
    "Desarrollo de producto",
  ];

  // Contenido para cada servicio (puedes modificar el contenido para cada servicio aquí)
  const contenidoServicios = [
    {
      titulo: "Asesoramiento productivo",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed magna varius, egestas varius ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed magna varius, egestas varius ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed magna varius, egestas varius ex. ",
      imagen: tarjetaServicios,
    },
    {
      titulo: "Asesoramiento integral",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed magna varius, egestas varius ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed magna varius, egestas varius ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed magna varius, egestas varius ex. ",
      imagen: tarjetaServicios,
    },
    {
      titulo: "Desarrollo de producto",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed magna varius, egestas varius ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed magna varius, egestas varius ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed magna varius, egestas varius ex. ",
      imagen: tarjetaServicios,
    },
  ];

  return (
    <div>
      <div className="w-full h-[1745px] relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <img
          src={imagenCurvaServicios}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20"
          style={{
            mixBlendMode: "normal",
            top: "30px",
            maxHeight: "650px",
          }}
        />
        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: 'contain',  
            backgroundPosition: 'center top',              
          }}
        >
                      <div id="verlo"
      className="absolute "
      style={{
        zIndex: "9",
        width: "100px",
        height: "100vw",
        transform: "rotate(90deg)", // Mantén la rotación
        flexShrink: 0,
        background:
          "linear-gradient(90deg, rgba(237, 242, 232, 0.00) 0%, #dfe8e0 100%)", // Cambia el degradado a 270 grados
        top: "56%", // Ajusta según necesites
        left: "100%", // Ajusta según necesites
        transformOrigin: "top left", // Asegura que la rotación sea desde la esquina superior izquierda
      }}
    />
          
          <div
            className="w-[546px] h-[72px] flex-shrink-0 mt-[40px]"
            style={{
              marginLeft: `${leftPercentageLogo}%`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "60px",
              fontWeight: "900",
              lineHeight: "60px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Servicios ofrecidos
          </div>

          <div
            className="w-[452px] h-[64px] flex-shrink-0 mt-[20px]"
            style={{
              marginLeft: `${leftPercentageLogo}%`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Enter dark mode. Oft referred to as night mode, high contrast, or
            inverted colors, the setting has grown popular with those who claim
            to experience eye fatigue from a deluge of white.
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
                className="text-center"
                style={{
                  width: "326px",
                  color: "#000",
                  fontFamily: "Fira Sans",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "50px",
                  position: "relative",
                  cursor: "pointer",
                }}
                // Cambiamos el tab seleccionado al hacer clic
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {servicio}
                {(selectedIndex === index) && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "361.768px",
                      height: "5px",
                      background:
                        "linear-gradient(0deg, #00942C 0%, #00942C 100%), #00942C",
                    }}
                  />
                )}
                            {hoveredIndex === index && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "361.768px",
                      height: "5px",
                      background:
                        "linear-gradient(0deg, #00942C 0%, #00942C 100%), #00942C",
                      transition: "height 0.3s ease", // Efecto de suavizado para la línea
                    }}
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
            <div className="relative w-full" style={{ top: "300px" }}>
              {/* Contenedor de la imagen */}
              <div className="absolute z-0 w-full">
                <img
                  src={arbolesProyectos}
                  alt="Árboles Proyectos"
                  style={{
                    width: "100vw",
                    height: "678px",
                    objectFit: "cover",
                  }} // Asegúrate de que la imagen cubra el contenedor sin deformarse
                />
              </div>

              {/* Capa de degradado */}
              <div
                className="absolute"
                style={{
                  width: "571px",
                  height: "100vw", // Considera si necesitas ajustar esta altura para que el degradado cubra adecuadamente la imagen
                  transform: "rotate(90deg)",
                  flexShrink: 0,
                  background:
                    "linear-gradient(90deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
                  top: "0%",
                  left: "100%",
                  transformOrigin: "top left",
                  pointerEvents: "none", // Esto asegura que el degradado no interfiere con otros eventos del mouse, como clicks
                }}
              />
            </div>

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
                <div
                  style={{
                    width: "468.214px",
                    height: "32px",
                    flexShrink: 0,
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "32px",
                  }}
                >
                  {contenidoServicios[selectedIndex].titulo}
                </div>
                <div
                  style={{
                    width: "526px",
                    height: "206px",
                    flexShrink: 0,
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                  className="mt-8"
                >
                  {contenidoServicios[selectedIndex].descripcion}
                </div>
              </div>

              {/* Columna derecha: imagen según la selección */}
              <div style={{ width: "528px" }}>
                <img
                  src={contenidoServicios[selectedIndex].imagen}
                  alt="Imagen del Servicio"
                  style={{
                    width: "528px",
                    height: "352px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>

            {/* Contenido adicional, botones, etc. */}
            <div
              className="absolute z-10 w-full"
              style={{ top: "300px", position: "relative" }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div
                  className="text-center"
                  style={{
                    color: "#00942C",
                    fontFamily: "Fira Sans",
                    fontSize: "40px",
                    fontWeight: "700",
                    lineHeight: "50px",
                    maxWidth: "615px",
                  }}
                >
                  Contáctanos ahora para darle forma a tu futuro verde
                </div>

                <button
                  className="mt-6 flex justify-center items-center bg-white cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5"
                  style={{
                    width: "245.25px",
                    height: "50px",
                    flexShrink: 0,
                    borderRadius: "5px",
                    border: "1px solid #00942C",
                  }}
                >
                  <span
                    style={{
                      color: "#00942C",
                      textAlign: "center",
                      fontFamily: "Fira Code",
                      fontSize: "14px",
                      fontWeight: "400",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    Contáctanos
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosOfrecidos;
