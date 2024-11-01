import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoCandado from "../../../images/Desktop/logoCandado.png";
import logoVision from "../../../images/Desktop/logoVision.png";
import logoTrayectoria from "../../../images/Desktop/logoTrayectoria.png";

function ValoresMobile() {
  return (
    <div style={{ overflow: "hidden" }}>
      {" "}
      {/* Prevent scrolling */}
      <div className="w-full h-auto relative">
        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
            paddingBottom: "30px", // Optional: Add space below text for aesthetics
          }}
        >
          {/* Centered text container */}
          <div
            style={{
              width: "150px",
              height: "30px",
              flexShrink: 0,
              color: "#000",
              textAlign: "center",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "30px" /* 125% */,
              margin: "0 auto",
              marginTop: "20px" // Center the text horizontally
            }}
          >
            Valores
          </div>

          {/* Container for the cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Left card */}
            <div
              style={{
                width: "232.995px",
                height: "155.33px",
                flexShrink: 0,
                borderRadius: "14.182px",
                background: "#00942C",
                position: "absolute",
                left: "-43%",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            >
              {/* Logo Candado */}
              <img
                src={logoCandado}
                alt="Logo Candado"
                style={{
                  position: "absolute",
                  top: "22px",
                  left: "20px",
                  width: "34px",
                  height: "40px",
                  flexShrink: 0,
                  fill: "#FFF",
                }}
              />

              {/* Texto "Confianza" */}
              <div
                style={{
                  position: "absolute",
                  top: "35px", // Alineado con el candado
                  left: "75px", // 34px + 41px (ancho del logo) + 35px de separación
                  width: "102.849px",
                  height: "32px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "21px", // 145.455%
                }}
              >
                Confianza
              </div>

              {/* Texto debajo del logo y "Confianza" */}
              <div
                style={{
                  position: "absolute",
                  top: "76px", // 35px (top margin) + 47px (logo height) + space
                  left: "20px",
                  width: "202px",
                  height: "56px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "18px", // 155.556%
                  fontFeatureSettings: "'liga' off, 'clig' off",
                }}
              >
                This product's simple design focuses on videos and standout
                quotes from customers.
              </div>
            </div>

            {/* Center card */}

            <div
              style={{
                width: "232.995px",
                height: "155.33px",
                flexShrink: 0,
                borderRadius: "14.182px",
                background: "#00942C",
                position: "relative",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            >
              {/* Logo Candado */}
              <img
                src={logoVision}
                alt="Logo Candado"
                style={{
                  position: "absolute",
                  top: "22px",
                  left: "20px",
                  width: "34px",
                  height: "40px",
                  flexShrink: 0,
                  fill: "#FFF",
                }}
              />

              {/* Texto "Confianza" */}
              <div
                style={{
                  position: "absolute",
                  top: "35px", // Alineado con el candado
                  left: "75px", // 34px + 41px (ancho del logo) + 35px de separación
                  width: "102.849px",
                  height: "32px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "21px", // 145.455%
                }}
              >
                Visión
              </div>

              {/* Texto debajo del logo y "Confianza" */}
              <div
                style={{
                  position: "absolute",
                  top: "76px", // 35px (top margin) + 47px (logo height) + space
                  left: "20px",
                  width: "202px",
                  height: "56px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "18px", // 155.556%
                  fontFeatureSettings: "'liga' off, 'clig' off",
                }}
              >
                This product's simple design focuses on videos and standout
                quotes from customers.
              </div>
            </div>

            {/* Right card */}

            <div
              style={{
                width: "232.995px",
                height: "155.33px",
                flexShrink: 0,
                borderRadius: "14.182px",
                background: "#00942C",
                position: "absolute",
                right: "-43%",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            >
              {/* Logo Candado */}
              <img
                src={logoCandado}
                alt="Logo Candado"
                style={{
                  position: "absolute",
                  top: "22px",
                  left: "20px",
                  width: "34px",
                  height: "40px",
                  flexShrink: 0,
                  fill: "#FFF",
                }}
              />

              {/* Texto "Confianza" */}
              <div
                style={{
                  position: "absolute",
                  top: "35px", // Alineado con el candado
                  left: "75px", // 34px + 41px (ancho del logo) + 35px de separación
                  width: "102.849px",
                  height: "32px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "21px", // 145.455%
                }}
              >
                Confianza
              </div>

              {/* Texto debajo del logo y "Confianza" */}
              <div
                style={{
                  position: "absolute",
                  top: "76px", // 35px (top margin) + 47px (logo height) + space
                  left: "20px",
                  width: "202px",
                  height: "56px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "18px", // 155.556%
                  fontFeatureSettings: "'liga' off, 'clig' off",
                }}
              >
                This product's simple design focuses on videos and standout
                quotes from customers.
              </div>
            </div>
          </div>
                    {/* Círculos debajo de las tarjetas */}
                    <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "75px", // Ajusta este valor para controlar la separación horizontal
              }}
            >
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    border: "1px solid #00942C",
                    backgroundColor: "#FFF",
                  }}
                />
              ))}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ValoresMobile;
