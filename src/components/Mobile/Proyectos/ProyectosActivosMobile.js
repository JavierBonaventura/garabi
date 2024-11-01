import React from "react";
import { Link } from "react-router-dom";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";

import imagenCurva from "../../../images/Desktop/imagenCurva.png";
import tarjetaProyectos1 from "../../../images/Mobile/tarjetaProyectos1.png";
import tarjetaProyectos2 from "../../../images/Mobile/tarjetaProyectos2.png";
import tarjetaProyectos3 from "../../../images/Mobile/tarjetaProyectos3.png";
import tarjetaProyectos4 from "../../../images/Mobile/tarjetaProyectos4.png";
import tarjetaProyectos5 from "../../../images/Mobile/tarjetaProyectos5.png";

import arbolesProyectos from "../../../images/Mobile/arbolesProyectos.png";

function ProyectosActivosMobile() {
  // Cálculo del margen izquierdo en porcentaje

  return (
    <div>
      <div className="w-full h-[1420px] relative">
        {" "}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <img
          src={imagenCurva}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20 max-h-[250px]" // Ajusta el z-index aquí (menor que la tarjeta)
          style={{
            mixBlendMode: "normal", // No aplicar ningún filtro o mezcla
            top: "30px",
          }}
        />
        <div
          id="verlo"
          className="absolute "
          style={{
            zIndex: "20",
            width: "100px",
            height: "100vw",
            transform: "rotate(90deg)", // Mantén la rotación
            flexShrink: 0,
            background:
              "linear-gradient(90deg, rgba(237, 242, 232, 0.00) 0%, #dfe8e0 100%)", // Cambia el degradado a 270 grados
            top: "72.5%", // Ajusta según necesites
            left: "100%", // Ajusta según necesites
            transformOrigin: "top left", // Asegura que la rotación sea desde la esquina superior izquierda
          }}
        />
        <div
          className="relative z-10 flex flex-col h-full px-4" // Cambia z-index aquí para menor prioridad que la tarjeta
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundSize: "contain",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y", // Repetir la imagen verticalmente
          }}
        >
          {/* Texto "Proyectos activos" */}
          <div
            className="w-[250px] h-[88px] flex-shrink-0 mt-[50px]"
            style={{
              marginLeft: `2%`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "36px",
              fontWeight: "900",
              lineHeight: "41px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Proyectos activos
          </div>
        </div>
        {/* Tarjeta superpuesta 1 */}
        <Link
          to="/singleproject"
          className="absolute z-30"
          style={{ top: "210px", left: "50%", transform: "translateX(-50%)" }}
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "326px",
              height: "177px",
              flexShrink: 0,
              borderRadius: "6.15px",
              background: "#DAD8CB",
              boxShadow: "3.822px 3.822px 6.688px 1.911px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte izquierda con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjetaProyectos1}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "6px 0 0 6px",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Parte derecha con texto */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "0 21.323px 21.323px 0" }}
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center mt-6"
                style={{
                  width: "114px",
                  height: "37px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "16px",
                  letterSpacing: "-0.382px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "114px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "14px",
                  letterSpacing: "-0.382px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <div
                className="flex items-center cursor-pointer mt-2 mb-6" // Agregamos la clase cursor-pointer para indicar que es un botón
                style={{
                  width: "68px",
                  height: "16px",
                  flexShrink: 0,
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "16px", // 133.333%
                  letterSpacing: "-0.382px",
                  textDecorationLine: "underline",
                }}
              >
                Ver proyecto
              </div>
            </div>
          </div>
        </Link>
        {/* Tarjeta superpuesta foto derecha 2*/}
        <Link
          to="/singleproject"
          className="absolute z-30"
          style={{
            top: "410px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "326px",
              height: "177px",
              flexShrink: 0,
              borderRadius: "6.15px",
              background: "#DAD8CB",
              boxShadow: "3.822px 3.822px 6.688px 1.911px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte derecha con texto */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "21.323px 0 0 21.323px" }} // Cambia el radio de la esquina superior izquierda y inferior izquierda
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center mt-6"
                style={{
                  width: "114px",
                  height: "37px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "16px",
                  letterSpacing: "-0.382px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "114px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "14px",
                  letterSpacing: "-0.382px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <div
                className="flex items-center cursor-pointer mt-2 mb-6" // Agregamos la clase cursor-pointer para indicar que es un botón
                style={{
                  width: "68px",
                  height: "16px",
                  flexShrink: 0,
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "16px", // 133.333%
                  letterSpacing: "-0.382px",
                  textDecorationLine: "underline",
                }}
              >
                Ver proyecto
              </div>
            </div>

            {/* Parte derecha con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjetaProyectos2}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "0 6px 6px 0", // Cambia el radio de la esquina superior derecha y inferior derecha
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </Link>
        {/* Tarjeta superpuesta 3 */}
        <Link
          to="/singleproject"
          className="absolute z-30"
          style={{
            top: "610px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "326px",
              height: "177px",
              flexShrink: 0,
              borderRadius: "6.15px",
              background: "#DAD8CB",
              boxShadow: "3.822px 3.822px 6.688px 1.911px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte izquierda con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjetaProyectos3}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "6px 0 0 6px",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Parte derecha con texto */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "0 21.323px 21.323px 0" }}
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center mt-6"
                style={{
                  width: "114px",
                  height: "37px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "16px",
                  letterSpacing: "-0.382px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "114px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "14px",
                  letterSpacing: "-0.382px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <div
                className="flex items-center cursor-pointer mt-2 mb-6" // Agregamos la clase cursor-pointer para indicar que es un botón
                style={{
                  width: "68px",
                  height: "16px",
                  flexShrink: 0,
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "16px", // 133.333%
                  letterSpacing: "-0.382px",
                  textDecorationLine: "underline",
                }}
              >
                Ver proyecto
              </div>
            </div>
          </div>
        </Link>
        {/* Tarjeta superpuesta foto derecha 4*/}
       <Link
          to="/singleproject"
          className="absolute z-30"
          style={{
            top: "810px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "326px",
              height: "177px",
              flexShrink: 0,
              borderRadius: "6.15px",
              background: "#DAD8CB",
              boxShadow: "3.822px 3.822px 6.688px 1.911px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte derecha con texto */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "21.323px 0 0 21.323px" }} // Cambia el radio de la esquina superior izquierda y inferior izquierda
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center mt-6"
                style={{
                  width: "114px",
                  height: "37px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "16px",
                  letterSpacing: "-0.382px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "114px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "14px",
                  letterSpacing: "-0.382px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <div
                className="flex items-center cursor-pointer mt-2 mb-6" // Agregamos la clase cursor-pointer para indicar que es un botón
                style={{
                  width: "68px",
                  height: "16px",
                  flexShrink: 0,
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "16px", // 133.333%
                  letterSpacing: "-0.382px",
                  textDecorationLine: "underline",
                }}
              >
                Ver proyecto
              </div>
            </div>

            {/* Parte derecha con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjetaProyectos4}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "0 6px 6px 0", // Cambia el radio de la esquina superior derecha y inferior derecha
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </Link>
        {/* Tarjeta superpuesta foto derecha 5*/}
        <Link
          to="/singleproject"
          className="absolute z-30"
          style={{
            top: "1010px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "326px",
              height: "177px",
              flexShrink: 0,
              borderRadius: "6.15px",
              background: "#DAD8CB",
              boxShadow: "3.822px 3.822px 6.688px 1.911px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte izquierda con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjetaProyectos5}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "6px 0 0 6px",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Parte derecha con texto */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "0 21.323px 21.323px 0" }}
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center mt-6"
                style={{
                  width: "114px",
                  height: "37px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "16px",
                  letterSpacing: "-0.382px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "114px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "14px",
                  letterSpacing: "-0.382px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <div
                className="flex items-center cursor-pointer mt-2 mb-6" // Agregamos la clase cursor-pointer para indicar que es un botón
                style={{
                  width: "68px",
                  height: "16px",
                  flexShrink: 0,
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "16px", // 133.333%
                  letterSpacing: "-0.382px",
                  textDecorationLine: "underline",
                }}
              >
                Ver proyecto
              </div>
            </div>
          </div>
        </Link>
        {/* Imagen de árboles con texto y botón debajo */}
        <div className="absolute z-10 w-full" style={{ top: "1140px" }}>
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
  );
}

export default ProyectosActivosMobile;
