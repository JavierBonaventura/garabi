import React, { useState, useRef, useEffect } from "react";
import imagenCurvaImpacto from "../../../images/Desktop/imagenCurvaImpacto.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import Politicas from "../Home/Politicas";

import MedioAmbiente1 from "../../../images/Desktop/slide-medio-ambiente-1.jpg";
import MedioAmbiente2 from "../../../images/Desktop/slide-medio-ambiente-2.jpg";
import MedioAmbiente3 from "../../../images/Desktop/slide-medio-ambiente-3.jpg";
import MedioAmbiente4 from "../../../images/Desktop/slide-medio-ambiente-4.jpg";
import MedioAmbiente5 from "../../../images/Desktop/slide-medio-ambiente-5.jpg";
import Economico1 from "../../../images/Desktop/slide-economico-1.jpg";
import Economico2 from "../../../images/Desktop/slide-economico-2.jpg";
import Economico3 from "../../../images/Desktop/slide-economico-3.jpg";
import Social1 from "../../../images/Desktop/slide-social-1.jpg";
import Social2 from "../../../images/Desktop/slide-social-2.jpg";
import Social3 from "../../../images/Desktop/slide-social-3.jpg";

import arbolesProyectos from "../../../images/Desktop/arboles-proyectos.png";
import botonDerecha from "../../../images/Desktop/botonDerecha.png";
import botonIzquierda from "../../../images/Desktop/botonIzquierda.png";

function Impacto() {
  const [currentIndex1, setCurrentIndex1] = useState(1);
  const [isSliding1, setIsSliding1] = useState(false);

  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [isSliding2, setIsSliding2] = useState(false);

  const [currentIndex3, setCurrentIndex3] = useState(1);
  const [isSliding3, setIsSliding3] = useState(false);

  // Arreglo de imágenes
  const images1 = [
    MedioAmbiente1,
    MedioAmbiente2,
    MedioAmbiente3,
    MedioAmbiente4,
    MedioAmbiente5,
  ];
  const images2 = [Economico1, Economico2, Economico3];
  const images3 = [Social1, Social2, Social3];

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
    <div className="w-full relative ">
      <img
        src={imagenCurvaImpacto}
        alt="Curva"
        className="absolute top-0 left-0 w-full h-auto z-20 max-h-[850px]"
        style={{
          mixBlendMode: "normal",
          top: "200px",
        }}
      />

      <div
        className="relative z-10 flex flex-col h-full padding-section-2"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "contain",
          backgroundPosition: "center top",
        }}
      >
        <div className="gap-title-paragraph ml-[12%]">
          <h1 className="title-section !text-left ">Impacto</h1>
          <p className="paragraph-section !text-left !w-1/3">
            En Grupo Garabi, nos dedicamos a la gestión de proyectos agro
            forestales que impulsen la conservación del medio ambiente,
            promuevan la biodiversidad y generen un impacto positivo en las
            comunidades locales de manera sostenible a lo largo del tiempo.
            <br />
            <br />
            Nuestra labor se centra en estos tres pilares de la siguiente
            manera:
          </p>
        </div>
        <div className="relative w-full h-full">
          {/* Bloque de fondo */}
          <div className="relative w-full">{/* Capa de degradado */}</div>
          {/* primer tarjeta */}
          <div
            className="flex mt-[450px] 2xl:mt-[650px] mx-auto w-full justify-center items-center gap-x-10 2xl:gap-x-32"
            style={{
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* Columna izquierda */}
            <div className="w-[528px] relative">
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
            <div className="mr-4 w-[500px] 2xl:w-[600px]">
              <h1 className="title-impacto">Medio ambiente</h1>
              <div className="paragraph-impacto">
                <ul className="list-disc pl-5 space-y-1 2xl:space-y-2">
                  <li>
                    Preservación y promoción de especies nativas y bosques
                    naturales.
                  </li>
                  <li>
                    Preservación y promoción del entorno natural de la fauna
                    local.
                  </li>
                  <li>
                    Implementación de sistemas de prevención y control de
                    incendios. Como puede serla creación de cortafuegos,
                    monitoreos y campañas de sensibilización en las comunidades
                    locales sobre cómo prevenir incendios.
                  </li>
                  <li>Diseño de un sistema de gestión de residuos.</li>
                  <li>
                    Conservación de fuentes de agua: Crear zonas de protección
                    alrededor de ríos, arroyos y lagos dentro del bosque,
                    protegiendo las cuencas hidrográficas de la contaminación y
                    el sobreuso. Estas áreas pueden ser declaradas "zonas de
                    conservación" donde no se permite la actividad comercial
                    intensiva.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* segunda tarjeta */}
          <div
            className="flex mt-[40px] 2xl:mt-[120px] mx-auto  gap-x-10 2xl:gap-x-32 justify-center"
            style={{
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* Columna izquierda */}

            <div className="w-[500px] 2xl:w-[600px]">
              <div className="title-impacto">Desarrollo económico</div>
              <div className="paragraph-impacto">
                <ul className="list-disc pl-5  space-y-1 2xl:space-y-2">
                  <li>
                    Creación de empleos directos e indirectos: La empresa puede
                    contratar a trabajadores locales para actividades que
                    requieran los diferentes proyectos.
                  </li>
                  <li>
                    La empresa puede contribuir a la sostenibilidad económica
                    mediante la diversificación de productos forestales, el
                    impulso a la economía circular y la creación de cadenas de
                    valor que generen ingresos de manera responsable. Además,
                    puede establecer acuerdos comerciales que promuevan el uso
                    eficiente de los recursos, la reducción de residuos y el
                    apoyo a prácticas que fortalezcan la viabilidad económica a
                    largo plazo, sin comprometer la salud de los ecosistemas.
                  </li>
                </ul>
              </div>
            </div>

            {/* Columna derecha */}

            <div className="w-[528px] relative">
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
            className="flex mt-[40px] 2xl:mt-[120px] mx-auto gap-x-10 2xl:gap-x-32 justify-center"
            style={{
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* Columna izquierda */}
            <div className="w-[528px] relative">
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

            <div className="mr-4 w-[500px] 2xl:w-[600px]">
              <div className="title-impacto">Desarrollo social</div>

              <div className="paragraph-impacto">
                <ul className="list-disc pl-5  space-y-1 2xl:space-y-2">
                  <li>
                    Involucramiento con las comunidades locales en la toma de
                    decisiones sobre la gestión del bosque, mediante consultas
                    públicas o la creación de comités de gestión comunitarios,
                    para que las actividades forestales estén alineadas con sus
                    intereses y necesidades.
                  </li>
                  <li>
                    Colaboración con establecimientos educativos de diferentes
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
  );
}

export default Impacto;
