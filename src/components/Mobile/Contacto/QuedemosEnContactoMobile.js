import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import imagenCurva from "../../../images/Desktop/imagenCurva.png";
import imagenCurvaContacto from "../../../images/Mobile/imagenCurvaContacto.png"; // New image
import mapa from "../../../images/Mobile/mapa.png"; // New image

function QuedemosEnContactoMobile() {
  return (
    <div>
      <div className="w-full h-[1300px] relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100 -mt-6"></div>
        <img
          src={imagenCurva}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20 max-h-[250px]"
          style={{
            mixBlendMode: "normal",
            top: "30px",
            maxHeight: "222px",
          }}
        />

        <div
          className="relative z-10 flex flex-col h-full "
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          {/* Texto "Quedemos en contacto" */}
          <div
            className="w-[250px] h-[88px] flex-shrink-0 mt-[50px]"
            style={{
              marginLeft: `2%`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "36px",
              fontWeight: "900",
              lineHeight: "32px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Quedemos en contacto
          </div>

          <div>
            {/* Sección de formulario */}
            <div className="flex justify-center mt-32" style={{ gap: "26px" }}>
              {/* Input NOMBRE */}
              <div>
                <label
                  htmlFor="nombre"
                  style={{
                    display: "block",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  style={{
                    width: "152.843px",
                    height: "27.766px",
                    borderRadius: "4px",
                    border: "2px solid #000",
                    background: "rgba(218, 218, 218, 0.00)",
                    padding: "10px",
                  }}
                />
              </div>

              {/* Input TELÉFONO */}
              <div>
                <label
                  htmlFor="telefono"
                  style={{
                    display: "block",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  style={{
                    width: "152px",
                    height: "27.766px",
                    borderRadius: "4px",
                    border: "2px solid #000",
                    background: "rgba(218, 218, 218, 0.00)",
                    padding: "10px",
                  }}
                />
              </div>
            </div>

            {/* Input EMAIL */}
            <div className="flex justify-center">
              <div className="mt-4">
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  style={{
                    width: "328px",
                    height: "27.778px",
                    borderRadius: "4px",
                    border: "2px solid #000",
                    background: "rgba(218, 218, 218, 0.00)",
                    padding: "10px",
                  }}
                />
              </div>
            </div>

            {/* Input MENSAJE */}
            <div className="flex justify-center">
              <div className="mt-4">
                <label
                  htmlFor="mensaje"
                  style={{
                    display: "block",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  style={{
                    width: "329px",
                    height: "75.523px",
                    borderRadius: "4px",
                    border: "2px solid #000",
                    background: "rgba(218, 218, 218, 0.00)",
                    padding: "10px",
                  }}
                />
              </div>
            </div>

            {/* Contenedor del botón "Enviar" */}
            <div className="flex justify-center">
              <div
                style={{
                  width: "328px",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                  marginRight: "-40px",
                }}
              >
                <button
                  className="bg-[#000] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#292929] hover:-translate-y-0.5"
                  style={{
                    width: "103.508px",
                    height: "27.766px",
                    flexShrink: 0,
                    borderRadius: "5px",
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginRight: "20px", // Margen derecho
                  }}
                >
                  Enviar
                </button>
              </div>
            </div>

            {/* Nueva sección de contacto */}
            <div className="flex justify-center">
              <div className="mt-6 ml-4">
                <div
                  style={{
                    width: "115px",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "normal",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  DIRECCIÓN
                </div>
                <div
                  style={{
                    width: "329px",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  Chubut 991, San Isidro, Buenos Aires
                </div>

                <div
                  style={{
                    width: "115px",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "normal",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginTop: "20px",
                  }}
                >
                  EMAIL
                </div>
                <div
                  style={{
                    width: "329px",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  contacto@grupogarabi.com.ar
                </div>

                <div
                  style={{
                    width: "115px",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "normal",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginTop: "20px",
                  }}
                >
                  TELÉFONO
                </div>
                <div
                  style={{
                    width: "329px",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  +54 11 4723 6967
                </div>
              </div>
            </div>
          </div>
          {/* Imágenes */}
          <img
            src={imagenCurvaContacto}
            alt="Curva de contacto"
            className="w-full -mt-12"
            style={{
              position: "relative",
              zIndex: 0,
              maxHeight: "228px",
            }}
          />

          {/* Mapa */}
          <a
            href="https://www.google.com/maps?q=Chubut+991,+San+Isidro,+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mapa}
              alt="Mapa"
              className="w-[146px] mx-auto"
              style={{
                position: "absolute",
                bottom: "314px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            />
          </a>

          {/* Texto debajo del mapa */}
          <div
            style={{
              position: "absolute",
              bottom: "235px", // Ajusta para posicionar justo debajo del mapa
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {/* Oficina Central */}
            <div
              style={{
                color: "#000",
                fontFamily: "Fira Sans",
                fontSize: "10.237px",
                fontWeight: "600",
                lineHeight: "14.891px",
              }}
            >
              Oficina Central
            </div>

            {/* Dirección */}
            <div
              style={{
                color: "#000",
                fontFamily: "Fira Sans",
                fontSize: "10.237px",
                fontWeight: "500",
                lineHeight: "14.891px",
                marginTop: "12px", // Pequeño espacio entre los textos
              }}
            >
              Chubut 991
              <br></br>
              San Isidro, Buenos Aires
            </div>
          </div>

          {/* Mapa */}
          <a
            href="https://www.google.com/maps?q=Chubut+991,+San+Isidro,+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mapa}
              alt="Mapa"
              className="w-[146px] mx-auto"
              style={{
                position: "absolute",
                bottom: "77px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            />
          </a>

          {/* Texto debajo del mapa */}
          <div
            style={{
              position: "absolute",
              bottom: "0px", // Ajusta para posicionar justo debajo del mapa
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {/* Oficina Central */}
            <div
              style={{
                color: "#000",
                fontFamily: "Fira Sans",
                fontSize: "10.237px",
                fontWeight: "600",
                lineHeight: "14.891px",
              }}
            >
              Oficina Central
            </div>

            {/* Dirección */}
            <div
              style={{
                color: "#000",
                fontFamily: "Fira Sans",
                fontSize: "10.237px",
                fontWeight: "500",
                lineHeight: "14.891px",
                marginTop: "12px", // Pequeño espacio entre los textos
              }}
            >
              Chubut 991
              <br></br>
              San Isidro, Buenos Aires
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuedemosEnContactoMobile;
