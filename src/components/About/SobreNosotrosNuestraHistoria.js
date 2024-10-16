import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import logoNuestraHistoria from "../../images/logoNuestraHistoria.png"; // Asegúrate de tener esta imagen importada
import imagenFondo from "../../images/imagenFondo.jpg"

function SobreNosotrosNuestraHistoria() {
  return (
    <div>
      <div className="w-full h-[600px] mb-[680px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: 'cover',  
            backgroundPosition: 'center',              
          }}
        >

<div
      className="absolute"
      style={{
        width: "100px",
        height: "100vw",
        transform: "rotate(90deg)", // Mantén la rotación
        flexShrink: 0,
        background:
          "linear-gradient(90deg, rgba(237, 242, 232, 0.00) 0%, #dfe8e0 100%)", // Cambia el degradado a 270 grados
        top: "84%", // Ajusta según necesites
        left: "100%", // Ajusta según necesites
        transformOrigin: "top left", // Asegura que la rotación sea desde la esquina superior izquierda
      }}
    />



          {/* Contenedor central con dos columnas */}
          <div
            className="flex justify-center items-center h-full"
            style={{ marginLeft: "12.7vw", width: "calc(100% - 12.7vw)" }} // 183px en un monitor de 1440px es aproximadamente 12.7vw
          >
            <div className="grid grid-cols-2 gap-8 w-full max-w-[1200px]">
              {/* Columna izquierda */}
              <div className="flex flex-col items-start">
                <h1
                  style={{
                    width: "471.305px",
                    color: "#000",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "60px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "50px",
                    marginTop: "50px"
                  }}
                >
                  Nuestra historia
                </h1>

                <p
                  style={{
                    width: "460.714px",
                    color: "#000",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "28px",
                    marginTop: "50px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum erat nec commodo imperdiet. Duis libero nisi, mollis quis urna ornare, feugiat egestas nunc.
                </p>

                <button className="bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
                  style={{
                    width: "245.25px",
                    height: "50px",
                    borderRadius: "5px",
                   
                    marginTop: "50px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      width: "245.25px",
                      height: "16px",
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: "Fira Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      Ver video
                    </span>
                  </div>
                </button>
              </div>

              {/* Columna derecha con las tarjetas */}
              <div className="flex flex-col space-y-8"> {/* Espaciado entre las tarjetas */}
                {[2009, 2009, 2009].map((year, index) => (
                  <div
                    key={index}
                    style={{
                      width: "427.385px",
                      height: "132px",
                      borderRadius: "4px",
                      border: "2px solid #00942C",
                      background: "#F5F4FF", // Cambia esto si tienes una variable CSS para el color
                      display: "flex",
                      alignItems: "center",
                      padding: "10px", // Añadir padding para el contenido interno
                    }}
                  >
                    {/* Imagen a la izquierda */}
                    <img
                      src={logoNuestraHistoria} // Asegúrate de tener esta imagen
                      alt="Logo Nuestra Historia"
                      style={{
                        width: "79px",
                        height: "88.545px",
                        flexShrink: 0,
                        marginRight: "10px", // Espacio entre la imagen y el texto
                      }}
                    />
                    {/* Contenido a la derecha */}
                    <div className="flex flex-col">
                      <span
                        style={{
                          color: "#000",
                          fontFamily: "Fira Sans",
                          fontSize: "22px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "32px",
                        }}
                      >
                        {year}
                      </span>
                      <p
                        style={{
                          width: "269.034px",
                          height: "49px",
                          color: "#000",
                          fontFamily: "Fira Sans",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "28px",
                        }}
                      >
                        Esto es lo que hicimos en el año y los logros que conseguimos.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosNuestraHistoria;
