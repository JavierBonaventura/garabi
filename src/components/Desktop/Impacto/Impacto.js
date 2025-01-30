import React, { useState, useRef, useEffect } from "react";
import imagenCurvaImpacto from "../../../images/Desktop/imagenCurvaImpacto.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import Politicas from "../Home/Politicas";

import tarjetaImpacto1a from "../../../images/Desktop/tarjetaImpacto1.png";
import tarjetaImpacto1b from "../../../images/Desktop/tarjetaImpacto2.png";
import tarjetaImpacto1c from "../../../images/Desktop/tarjetaImpacto3.png";
import tarjetaImpacto2a from "../../../images/Desktop/tarjetaImpacto4.png";
import tarjetaImpacto2b from "../../../images/Desktop/tarjetaImpacto5.png";
import tarjetaImpacto2c from "../../../images/Desktop/tarjetaImpacto6.png";
import tarjetaImpacto3a from "../../../images/Desktop/tarjetaImpacto7.png";
import tarjetaImpacto3b from "../../../images/Desktop/tarjetaImpacto8.png";
import tarjetaImpacto3c from "../../../images/Desktop/tarjetaImpacto9.png";

import arbolesProyectos from "../../../images/Desktop/arboles-proyectos.png";

import botonDerecha from "../../../images/Desktop/botonDerecha.png";
import botonIzquierda from "../../../images/Desktop/botonIzquierda.png";

function Imapcto() {
  const [currentIndex1, setCurrentIndex1] = useState(1);
  const [isSliding1, setIsSliding1] = useState(false);

  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [isSliding2, setIsSliding2] = useState(false);

  const [currentIndex3, setCurrentIndex3] = useState(1);
  const [isSliding3, setIsSliding3] = useState(false);

  // Arreglo de imágenes
  const images1 = [
    tarjetaImpacto1c,
    tarjetaImpacto1a,
    tarjetaImpacto1b,
    tarjetaImpacto1c,
    tarjetaImpacto1a,
  ];
  const images2 = [
    tarjetaImpacto2c,
    tarjetaImpacto2a,
    tarjetaImpacto2b,
    tarjetaImpacto2c,
    tarjetaImpacto2a,
  ];
  const images3 = [
    tarjetaImpacto3c,
    tarjetaImpacto3a,
    tarjetaImpacto3b,
    tarjetaImpacto3c,
    tarjetaImpacto3a,
  ];

  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);

  const cardWidth = 528; // Ancho de cada tarjeta

  //card 1

  useEffect(() => {
    // Al terminar la transición, ajusta el índice si está en un clon
    if (!isSliding1) return;

    const timeout = setTimeout(() => {
      if (currentIndex1 === 0) {
        carouselRef1.current.style.transition = "none";
        setCurrentIndex1(images1.length - 2);
      } else if (currentIndex1 === images1.length - 1) {
        carouselRef1.current.style.transition = "none";
        setCurrentIndex1(1);
      }
      setIsSliding1(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex1, isSliding1]);

  // Efecto para sincronizar la posición del carrusel
  useEffect(() => {
    if (!carouselRef1.current) return;

    const offset = -currentIndex1 * cardWidth;
    carouselRef1.current.style.transform = `translateX(${offset}px)`;
    if (!isSliding1) {
      carouselRef1.current.style.transition = "none";
    } else {
      carouselRef1.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentIndex1, isSliding1]);

  const moveLeft1 = () => {
    if (isSliding1) return;
    setIsSliding1(true);
    setCurrentIndex1((prevIndex) => prevIndex - 1);
  };

  const moveRight1 = () => {
    if (isSliding1) return;
    setIsSliding1(true);
    setCurrentIndex1((prevIndex) => prevIndex + 1);
  };

  //card 2

  useEffect(() => {
    // Al terminar la transición, ajusta el índice si está en un clon
    if (!isSliding2) return;

    const timeout = setTimeout(() => {
      if (currentIndex2 === 0) {
        carouselRef2.current.style.transition = "none";
        setCurrentIndex2(images2.length - 2);
      } else if (currentIndex2 === images2.length - 1) {
        carouselRef2.current.style.transition = "none";
        setCurrentIndex2(1);
      }
      setIsSliding2(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex2, isSliding2]);

  // Efecto para sincronizar la posición del carrusel
  useEffect(() => {
    if (!carouselRef2.current) return;

    const offset = -currentIndex2 * cardWidth;
    carouselRef2.current.style.transform = `translateX(${offset}px)`;
    if (!isSliding2) {
      carouselRef2.current.style.transition = "none";
    } else {
      carouselRef2.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentIndex2, isSliding2]);

  const moveLeft2 = () => {
    if (isSliding2) return;
    setIsSliding2(true);
    setCurrentIndex2((prevIndex) => prevIndex - 1);
  };

  const moveRight2 = () => {
    if (isSliding2) return;
    setIsSliding2(true);
    setCurrentIndex2((prevIndex) => prevIndex + 1);
  };

  //card 3

  useEffect(() => {
    // Al terminar la transición, ajusta el índice si está en un clon
    if (!isSliding3) return;

    const timeout = setTimeout(() => {
      if (currentIndex3 === 0) {
        carouselRef3.current.style.transition = "none";
        setCurrentIndex3(images3.length - 2);
      } else if (currentIndex3 === images3.length - 1) {
        carouselRef3.current.style.transition = "none";
        setCurrentIndex3(1);
      }
      setIsSliding3(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex3, isSliding3]);

  // Efecto para sincronizar la posición del carrusel
  useEffect(() => {
    if (!carouselRef3.current) return;

    const offset = -currentIndex3 * cardWidth;
    carouselRef3.current.style.transform = `translateX(${offset}px)`;
    if (!isSliding3) {
      carouselRef3.current.style.transition = "none";
    } else {
      carouselRef3.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentIndex3, isSliding3]);

  const moveLeft3 = () => {
    if (isSliding3) return;
    setIsSliding3(true);
    setCurrentIndex3((prevIndex) => prevIndex - 1);
  };

  const moveRight3 = () => {
    if (isSliding3) return;
    setIsSliding3(true);
    setCurrentIndex3((prevIndex) => prevIndex + 1);
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
            top: "200px",
          }}
        />
        {/* <div
          id="verlo"
          className="absolute z-[20] w-[100px] h-[100vw] bg-gradient-to-r from-transparent to-[#dfe8e0] rotate-90 top-[3450px] left-[100%] border-2 border-black "
          style={{
            transformOrigin: "top left",
          }}
        /> */}
        <div
          className="relative z-10 flex flex-col h-full pt-32"
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
            En Grupo Garabí, buscamos gestionar proyectos forestales que
            promuevan la conservación del medio ambiente, fomenten la
            biodiversidad y generen un impacto positivo y sostenible en las
            comunidades locales. Hacemos foco en estos tres pilares de la
            siguiente manera
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
                <div className="w-[464px] h-[446px] shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-12">
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Preservación y promoción de especies nativas y bosques
                      naturales.
                    </li>
                    <li>
                      Preservación y promoción del entorno natural de la fauna
                      local.
                    </li>
                    <li>
                      Implementar sistemas de prevención y control de incendios,
                      como la creación de cortafuegos, monitoreos y campañas de
                      sensibilización en las comunidades locales sobre cómo
                      prevenir incendios.
                    </li>
                    <li>
                      Diseño de un sistema de gestión de residuos Conservación
                      de fuentes de agua: Crear zonas de protección alrededor de
                      ríos, arroyos y lagos dentro del bosque, protegiendo las
                      cuencas hidrográficas de la contaminación y el sobreuso.
                      Estas áreas pueden ser declaradas "zonas de conservación"
                      donde no se permite la actividad comercial intensiva.
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
                <div className="w-[464px] h-[426px] shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-12">
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Creación de empleos directos e indirectos: La empresa
                      puede contratar a trabajadores locales para actividades
                      que requieran los diferentes proyectos.
                    </li>
                    <li>
                      La empresa puede contribuir a la sostenibilidad económica
                      mediante la diversificación de productos forestales, el
                      impulso a la economía circular y la creación de cadenas de
                      valor que generen ingresos de manera responsable. Además,
                      puede establecer acuerdos comerciales que promuevan el uso
                      eficiente de los recursos, la reducción de residuos y el
                      apoyo a prácticas que fortalezcan la viabilidad económica
                      a largo plazo, sin comprometer la salud de los
                      ecosistemas.
                    </li>
                  </ul>
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
                <div className="w-[461px] h-[32px] text-black font-fira-sans text-[40px] font-extrabold leading-[50px] text-left">
                  Social
                </div>

                <div className="w-[464px] h-[446px] shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-12">
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                      Consultas comunitarias y participación: Involucrar a las
                      comunidades locales en la toma de decisiones sobre la
                      gestión del bosque, mediante consultas públicas o la
                      creación de comités de gestión comunitarios, para que las
                      actividades forestales estén alineadas con sus intereses y
                      necesidades.
                    </li>
                    <li>
                      Colaboración establecimientos educativos de diferentes
                      maneras: mediante el dictado de cursos, capacitaciones en
                      ciertos temas, colaboración en algunos proyectos
                      particulares, ofrecer posibilidad de pasantías.
                    </li>
                    <li>
                      Promoción de salud y seguridad: Asegurar que los
                      trabajadores forestales reciban capacitación en seguridad
                      laboral, uso de equipos de protección y primeros auxilios.
                    </li>
                    <li>
                      Establecer alianzas con organizaciones no gubernamentales
                      locales para apoyar iniciativas que beneficien a las
                      comunidades, como proyectos educativos, de salud o de
                      desarrollo económico
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Contenido adicional, botones, etc. */}
            <Politicas />
            <div className="relative w-full pb-20 mt-[-4%]">
              {/* Gradiente superior */}

              <div
                className="z-20  absolute top-[0%] right-0 w-full h-[8%] origin-top-left "
                style={{
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
                className="z-20 absolute top-[8%] right-0 w-full h-[40%] origin-top-left "
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
