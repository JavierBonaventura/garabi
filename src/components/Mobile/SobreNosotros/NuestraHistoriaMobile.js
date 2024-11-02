import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoNuestraHistoria from "../../../images/Desktop/logoNuestraHistoria.png"; // Asegúrate de tener esta imagen importada
import arbolesProyectos from "../../../images/Mobile/arbolesProyectos.png";


function NuestraHistoriaMobile() {
  return (
    <div style={{ overflow: "hidden" }}>
      {" "}
      {/* Prevent scrolling */}
      <div className="w-full h-[771px] relative">
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
          {/* Centered text container */}
          <div
            style={{
              width: "216px",
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
            }}
          >
            Nuestra historia
          </div>
          <div
            style={{
              width: "329px",
              height: "51px",
              flexShrink: 0,
              color: "#000",
              textAlign: "center",
              fontFamily: "Fira Sans",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "17px" /* 125% */,
              margin: "0 auto",
              marginTop: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            interdum erat nec commodo imperdiet. Duis libero nisi, mollis quis
            urna ornare, feugiat egestas nunc.
          </div>
          <button
            style={{
              width: "177px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#00942C",
              color: "#FFF",
              fontFamily: "Fira Sans",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "4px",
              textTransform: "uppercase",
              margin: "0 auto",
              marginTop: "20px",
              marginBottom: "10px"
            }}
          >
            ver video
          </button>

          <div className="flex flex-col space-y-8 z-20">
            {" "}
            {/* Espaciado entre las tarjetas */}
            {[2009, 2009, 2009].map((year, index) => (
              <div
                key={index}
                style={{
                  width: "269px",
                  height: "83px",
                  borderRadius: "3px",
                  border: "1px solid #00942C",
                  background: "#F5F4FF", // Cambia esto si tienes una variable CSS para el color
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  margin: "0 auto",
                  marginTop: "20px"
                }}
              >
                {/* Imagen a la izquierda */}
                <img
                  src={logoNuestraHistoria} // Asegúrate de tener esta imagen
                  alt="Logo Nuestra Historia"
                  style={{
                    width: "49px",
                    height: "55px",
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
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "20px",
                    }}
                  >
                    {year}
                  </span>
                  <p
                    style={{
                      width: "169px",
                      height: "30px",
                      color: "#000",
                      fontFamily: "Fira Sans",
                      fontSize: "11px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "17px",
                    }}
                  >
                    Esto es lo que hicimos en el año y los logros que
                    conseguimos.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
  style={{
    position: "absolute",
    right: "7%", // A 2% del margen derecho de la página
    top: "45%",  // Centrado al 50% en altura
    transform: "translateY(-50%)", // Centra verticalmente el contenedor en el 50%
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column", // Alineación vertical
      justifyContent: "space-between",
      height: "75px", // Controla la separación vertical entre círculos
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



<div className="absolute z-10 w-full" style={{ top: "470px" }}>
          <img
            src={arbolesProyectos}
            alt="Árboles Proyectos"
            style={{ width: "100vw", height: "300px" }}
          />

          {/* Nuevo div superpuesto */}
          <div
            className="absolute"
            style={{
              width: "200px",
              height: "100vw",
              transform: "rotate(90deg)",
              flexShrink: 0,
              background:
                "linear-gradient(90deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
              top: "0%", // Ajusta según necesites
              left: "100%", // Ajusta según necesites
              transformOrigin: "top left", // Asegura que la rotación sea desde la esquina superior izquierda
            }}
          />

          <div
            className="absolute inset-0 flex flex-col justify-center items-center"
            style={{ width: "100%", margin: "0 auto", textAlign: "center" }}
          >
            <div
              className="text-center"
              style={{
                color: "#00942C",
                fontFamily: "Fira Sans",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "27px",
                maxWidth: "379px", // Limitar el ancho máximo del texto
              }}
            >
              Contáctanos ahora para darle forma a tu futuro verde
            </div>

            <button
              className="mt-6 flex justify-center items-center bg-white cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5"
              style={{
                width: "158px",
                height: "36px",
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
                  fontSize: "12px",
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
  );
}

export default NuestraHistoriaMobile;
