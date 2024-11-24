import React, { useState, useRef } from "react";
import imagenCurvaImpacto from "../../../images/Desktop/imagenCurvaImpacto.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

import tarjetaImpacto1a from "../../../images/Desktop/tarjetaImpacto1.png";
import tarjetaImpacto1b from "../../../images/Desktop/tarjetaImpacto1.png";
import tarjetaImpacto1c from "../../../images/Desktop/tarjetaImpacto1.png";
import tarjetaImpacto2a from "../../../images/Desktop/tarjetaImpacto2.png";
import tarjetaImpacto2b from "../../../images/Desktop/tarjetaImpacto2.png";
import tarjetaImpacto2c from "../../../images/Desktop/tarjetaImpacto2.png";
import tarjetaImpacto3a from "../../../images/Desktop/tarjetaImpacto3.png";
import tarjetaImpacto3b from "../../../images/Desktop/tarjetaImpacto3.png";
import tarjetaImpacto3c from "../../../images/Desktop/tarjetaImpacto3.png";

import arbolesProyectos from "../../../images/Desktop/arboles-proyectos.png";

import botonDerecha from "../../../images/Desktop/botonDerecha.png";
import botonIzquierda from "../../../images/Desktop/botonIzquierda.png";

function Imapcto() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [isSliding1, setIsSliding1] = useState(false);

  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isSliding2, setIsSliding2] = useState(false);

  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [isSliding3, setIsSliding3] = useState(false);

  // Arreglo de imágenes
  const images1 = [tarjetaImpacto1a, tarjetaImpacto1b, tarjetaImpacto1c];
  const images2 = [tarjetaImpacto2a, tarjetaImpacto2b, tarjetaImpacto2c];
  const images3 = [tarjetaImpacto3a, tarjetaImpacto3b, tarjetaImpacto3c];

  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);

  const cardWidth = 528; // Ancho de cada tarjeta

  // Función para mover el slider 1 a la izquierda
  const moveLeft1 = () => {
    if (isSliding1) return;
    setIsSliding1(true);

    carouselRef1.current.style.transition = "transform 0.5s ease-in-out";
    carouselRef1.current.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      setCurrentIndex1((prevIndex) =>
        prevIndex === 0 ? images1.length - 1 : prevIndex - 1
      );
      carouselRef1.current.style.transition = "none";
      carouselRef1.current.style.transform = "translateX(0)";
      setIsSliding1(false);
    }, 500);
  };

  // Función para mover el slider 1 a la derecha
  const moveRight1 = () => {
    if (isSliding1) return;
    setIsSliding1(true);

    setCurrentIndex1((prevIndex) =>
      prevIndex === images1.length - 1 ? 0 : prevIndex + 1
    );

    carouselRef1.current.style.transition = "none";
    carouselRef1.current.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      carouselRef1.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef1.current.style.transform = "translateX(0)";
    }, 50);

    setTimeout(() => {
      setIsSliding1(false);
    }, 500);
  };

  // Función para mover el slider 2 a la izquierda
  const moveLeft2 = () => {
    if (isSliding2) return;
    setIsSliding2(true);

    carouselRef2.current.style.transition = "transform 0.5s ease-in-out";
    carouselRef2.current.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      setCurrentIndex2((prevIndex) =>
        prevIndex === 0 ? images2.length - 1 : prevIndex - 1
      );
      carouselRef2.current.style.transition = "none";
      carouselRef2.current.style.transform = "translateX(0)";
      setIsSliding2(false);
    }, 500);
  };

  // Función para mover el slider 2 a la derecha
  const moveRight2 = () => {
    if (isSliding2) return;
    setIsSliding2(true);

    setCurrentIndex2((prevIndex) =>
      prevIndex === images2.length - 1 ? 0 : prevIndex + 1
    );

    carouselRef2.current.style.transition = "none";
    carouselRef2.current.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      carouselRef2.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef2.current.style.transform = "translateX(0)";
    }, 50);

    setTimeout(() => {
      setIsSliding2(false);
    }, 500);
  };

  // Función para mover el slider 3 a la izquierda
  const moveLeft3 = () => {
    if (isSliding3) return;
    setIsSliding1(true);

    carouselRef3.current.style.transition = "transform 0.5s ease-in-out";
    carouselRef3.current.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      setCurrentIndex3((prevIndex) =>
        prevIndex === 0 ? images3.length - 1 : prevIndex - 1
      );
      carouselRef3.current.style.transition = "none";
      carouselRef3.current.style.transform = "translateX(0)";
      setIsSliding1(false);
    }, 500);
  };

  // Función para mover el slider 1 a la derecha
  const moveRight3 = () => {
    if (isSliding3) return;
    setIsSliding3(true);

    setCurrentIndex3((prevIndex) =>
      prevIndex === images3.length - 1 ? 0 : prevIndex + 1
    );

    carouselRef3.current.style.transition = "none";
    carouselRef3.current.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      carouselRef3.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef3.current.style.transform = "translateX(0)";
    }, 50);

    setTimeout(() => {
      setIsSliding3(false);
    }, 500);
  };

  return (
    <div>
      <div className="w-full h-[auto] relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <img
          src={imagenCurvaImpacto}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20 max-h-[850px]"
          style={{
            mixBlendMode: "normal",
            top: "30px",
          }}
        />
        <div
          className="relative z-10 flex flex-col h-full "
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
          }}
        >
          <div className="w-[546px] h-[72px] flex-shrink-0 mt-[40px] ml-[12%] text-black font-fira-sans text-[60px] font-extrabold leading-[60px] tracking-[-1px] [font-feature-settings:'liga' 'off','clig' 'off']">
            Impacto
          </div>

          <div className="w-[400px] h-[64px] flex-shrink-0 mt-[30px] ml-[12%] text-black font-fira-sans text-[24px] font-normal leading-[28px] tracking-[-1px] [font-feature-settings:'liga' 'off','clig' 'off']">
            Descubrí cómo nuestra empresa se enfoca en reducir su impacto
            ambiental y fomentar un cambio positivo para el medio ambiente y la
            comunidad, desde lo economico hasta lo social
          </div>

          <div className="relative w-full h-full">
            {/* Bloque de fondo */}
            <div className="relative w-full" style={{ top: "1850px" }}>
              {/* Capa de degradado */}
            </div>
            {/* primer tarjeta */}

            <div
              className="flex mt-[620px] mx-auto"
              style={{
                width: "1074px",
                gap: "100px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Columna izquierda */}
              <div style={{ width: "528px", position: "relative" }}>
                <div className="relative w-full overflow-hidden">
                  {/* Carrusel de imágenes */}
                  <div
                    ref={carouselRef1}
                    className="flex"
                    style={{ width: `${images1.length * cardWidth}px` }}
                  >
                    {images1.map((image, index) => (
                      <div key={index} className="flex-shrink-0">
                        <img
                          src={image}
                          alt={`Imagen ${index + 1}`}
                          style={{
                            width: "528px",
                            height: "400px",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Botón izquierda */}
                  <img
                    src={botonIzquierda}
                    alt="Botón Izquierda"
                    className="absolute top-1/2 left-[30px] transform -translate-y-1/2 w-[40px] h-[38.667px] flex-shrink-0 cursor-pointer"
                    onClick={moveLeft1}
                  />

                  {/* Botón derecha */}
                  <img
                    src={botonDerecha}
                    alt="Botón Derecha"
                    className="absolute top-1/2 right-[30px] transform -translate-y-1/2 w-[40px] h-[38.667px] shrink-0 cursor-pointer"
                    onClick={moveRight1}
                  />
                </div>
              </div>

              {/* Columna derecha */}
              <div className="mr-4" style={{ width: "468.214px" }}>
                <div className="w-[344px] h-[32px] shrink-0 text-black font-fira-sans text-[40px] font-bold leading-[50px]">
                  Medio ambiente
                </div>
                <div className="w-[464px] h-[206px] shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-12">
                  <p>
                    Preservación y promoción de especies nativas y bosques
                    naturales (fotos de bosques nativos + fotos de viveros de
                    árboles)
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Preservación y promoción del entorno natural de la fauna
                      local
                    </li>
                    <li>
                      Captura de carbón, como consecuencia de las plantaciones
                      continuas de bosques para uso comercial y bosques
                      naturales
                    </li>
                    <li>
                      Diseño de un sistema de gestión de residuos y optimización
                      del uso de productos residuales en nuevas industrias
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* segunda tarjeta */}

            <div
              className="flex mt-[40px] mx-auto"
              style={{
                width: "1074px",
                gap: "100px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Columna izquierda */}

              <div className="mr-4" style={{ width: "468.214px" }}>
                <div className="w-[344px] h-[32px] shrink-0 text-black font-fira-sans text-[40px] font-bold leading-[50px]">
                  Economico
                </div>
                <div className="w-[449px] h-[206px] shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-12">
                  <p>
                    Es nuestro fin de aportar al crecimiento económico en la
                    zona y en el país, creando operaciones con un alto valor
                    agregado y un potencial importante de exportación así
                    contribuyendo a la apertura del país al resto del mundo.
                  </p>
                </div>
              </div>

              {/* Columna derecha */}

              <div style={{ width: "528px", position: "relative" }}>
                <div className="relative w-full overflow-hidden">
                  <div
                    ref={carouselRef2}
                    className="flex"
                    style={{ width: `${images2.length * cardWidth}px` }}
                  >
                    {images2.map((image, index) => (
                      <div key={index} className="flex-shrink-0">
                        <img
                          src={image}
                          alt={`Imagen ${index + 1}`}
                          style={{
                            width: "528px",
                            height: "400px",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Botón izquierda */}
                  <img
                    src={botonIzquierda}
                    alt="Botón Izquierda"
                    className="absolute top-1/2 left-[30px] transform -translate-y-1/2 w-[40px] h-[38.667px] flex-shrink-0 cursor-pointer"
                    onClick={moveLeft2}
                  />

                  {/* Botón derecha */}
                  <img
                    src={botonDerecha}
                    alt="Botón Derecha"
                    className="absolute top-1/2 right-[30px] transform -translate-y-1/2 w-[40px] h-[38.667px] shrink-0 cursor-pointer"
                    onClick={moveRight2}
                  />
                </div>
              </div>
            </div>

            {/* tercera tarjeta */}

            <div
              className="flex mt-[40px] mx-auto"
              style={{
                width: "1074px",
                gap: "100px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Columna izquierda */}
              <div style={{ width: "528px", position: "relative" }}>
                <div className="relative w-full overflow-hidden">
                  {/* Carrusel de imágenes */}
                  <div
                    ref={carouselRef3}
                    className="flex"
                    style={{ width: `${images3.length * cardWidth}px` }}
                  >
                    {images3.map((image, index) => (
                      <div key={index} className="flex-shrink-0">
                        <img
                          src={image}
                          alt={`Imagen ${index + 1}`}
                          style={{
                            width: "528px",
                            height: "400px",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Botón izquierda */}
                  <img
                    src={botonIzquierda}
                    alt="Botón Izquierda"
                    className="absolute top-1/2 left-[30px] transform -translate-y-1/2 w-[40px] h-[38.667px] flex-shrink-0 cursor-pointer"
                    onClick={moveLeft3}
                  />

                  {/* Botón derecha */}
                  <img
                    src={botonDerecha}
                    alt="Botón Derecha"
                    className="absolute top-1/2 right-[30px] transform -translate-y-1/2 w-[40px] h-[38.667px] shrink-0 cursor-pointer"
                    onClick={moveRight3}
                  />
                </div>
              </div>

              {/* Columna derecha */}

              <div className="mr-4" style={{ width: "468.214px" }}>
                <div className="w-[461px] h-[32px] text-black font-fira-sans text-[40px] font-extrabold leading-[50px] text-right">
                  Social
                </div>

                <div className="w-[461px] h-[206px] shrink-0 font-fira-sans text-black text-[18px] font-normal leading-[28px] text-right mt-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec nisl augue, finibus sed magna varius, egestas varius
                    ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec nisl augue, finibus sed magna varius, egestas varius
                    ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec nisl augue, finibus sed magna varius, egestas varius
                    ex.
                  </p>
                </div>
              </div>
            </div>
            {/* Contenido adicional, botones, etc. */}

            <div className="relative w-full pb-20 mt-[-4%]">
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
    </div>
  );
}

export default Imapcto;
