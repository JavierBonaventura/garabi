import React from "react";
import fondoServicios from "../../../images/Desktop/fondoServicios.png";
import arbolCentral from "../../../images/Desktop/arbolCentral.png";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";

function SobreNosotrosArbolMobile() {
  return (
    <div>
      <div className="w-full h-[424px] relative ">
        {/* Fondo principal */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        {/* Contenedor con imagen de fondo y texto */}
        <div
          className="relative z-10 flex flex-col h-full px-4 "
          style={{
            backgroundImage: `url(${fondoMobile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="flex flex-col items-center justify-center "
            style={{
              marginTop: "-26px",
            }}
          >
            {/* Contenedor del árbol */}
            <div className="relative flex flex-col items-center w-[100%]">
              <img
                className="no-max-width w-[460px] "
                src={arbolCentral}
                alt="Árbol Central"
                style={{
                  left: "-52%", 
                  position: "relative", 
                  maxWidth: "none !important",
                }}
              />

              {/* primer texto */}
              <h1
                className="w-[107px] absolute right-[0vw] transform  z-20 pb-2 "
                style={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans, sans-serif",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  top: "10%",
                  lineHeight: "32px",
                  textAlign: "right",
                }}
              >
                Trayectoria
              </h1>

              <p
                className="absolute right-[-5vw] right-[0vw]  z-20 pb-2 text-right "
                style={{
                  color: "#000",
                  fontSize: "10px",
                  lineHeight: "12pxw",
                  width: "172px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  top: "22%",
                  fontWeight: "400",
                  height: "72px",
                  lineHeight: "12px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                interdum erat nec commodo imperdiet. Duis libero nisi, mollis
                quis urna ornare, feugiat egestas nunc.
              </p>

              {/* Línea a la derecha */}
              <div
                className="absolute right-[-13.5vw] w-[63vw] h-[1px] bg-[#00942C]  transform -translate-y-1/2 mt-4"
                style={{
                  top: "15%",
                  left: "32%",
                }}
              ></div>
              {/* segundo texto */}
              <h1
                className="w-[107px] absolute right-[0vw] transform  z-20 pb-2 "
                style={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans, sans-serif",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  top: "37%",
                  lineHeight: "32px",
                  textAlign: "right",
                }}
              >
                Misión
              </h1>

              <p
                className="absolute right-[-5vw] right-[0vw]  z-20 pb-2 text-right "
                style={{
                  color: "#000",
                  fontSize: "10px",
                  lineHeight: "12pxw",
                  width: "172px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  top: "49%",
                  fontWeight: "400",
                  height: "72px",
                  lineHeight: "12px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                interdum erat nec commodo imperdiet. Duis libero nisi, mollis
                quis urna ornare, feugiat egestas nunc.
              </p>

              {/* Línea a la derecha */}
              <div
                className="absolute right-[-13.5vw] w-[44vw] h-[1px] bg-[#00942C]  transform -translate-y-1/2 mt-4"
                style={{
                  top: "42%",
                  left: "52%", 
                }}
              ></div>

              {/* tercer texto */}
              <h1
                className="w-[107px] absolute right-[0vw] transform  z-20 pb-2 "
                style={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans, sans-serif",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  top: "64%",
                  lineHeight: "32px",
                  textAlign: "right",
                }}
              >
                Visión
              </h1>

              <p
                className="absolute right-[-5vw] right-[0vw]  z-20 pb-2 text-right "
                style={{
                  color: "#000",
                  fontSize: "10px",
                  lineHeight: "12pxw",
                  width: "172px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  top: "76%",
                  fontWeight: "400",
                  height: "72px",
                  lineHeight: "12px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                interdum erat nec commodo imperdiet. Duis libero nisi, mollis
                quis urna ornare, feugiat egestas nunc.
              </p>

              {/* Línea a la derecha */}
              <div
                className="absolute right-[-13.5vw] w-[73vw] h-[1px] bg-[#00942C]  transform -translate-y-1/2 mt-4"
                style={{
                  top: "69%",
                  left: "21%", 
                }}
              ></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosArbolMobile;
