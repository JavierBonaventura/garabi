import React, { useState, useRef, useEffect } from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

import ProyectosMixtos from "../../../images/Desktop/gallery1.png";
import ProyectosYerbateros from "../../../images/Desktop/gallery2.png";
import ProyectosYerbaMate from "../../../images/Desktop/gallery3.png";
import ProyectosForestales from "../../../images/Desktop/gallery4.png";
import ProyectosAgricolas from "../../../images/Desktop/gallery5.png";

function Servicios() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [buttonZIndex, setButtonZIndex] = useState(30);
  const carouselRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Proyectos Forestales",
      description:
        "Plantaciones de pino y/o eucaliptus en campos propios o arrendados. Con la posibilidad de incorporar hacienda propia o de terceros como complemento.",
      image: ProyectosForestales,
    },
    {
      id: 2,
      title: "Proyectos Yerbatero/Forestal",
      description:
        "Se trata de proyectos de plantaciones de pino y/o eucaliptus combinado con yerba mate en las lomas coloradas.",
      image: ProyectosYerbateros,
    },
    {
      id: 3,
      title: "Proyectos Yerba Mate",
      description: "Plantaciones de yerba mate en loma colorada",
      image: ProyectosYerbaMate,
    },
    {
      id: 4,
      title: "Proyectos Mixtos",
      description:
        "De acuerdo a las características propias del campo y del suelo se pueden incorporar más actividades además de la forestación y la yerba, como el arroz y la ganadería.",
      image: ProyectosMixtos,
    },
    {
      id: 5,
      title: "Proyectos Agrícolas",
      description:
        "Hemos desarrollado pooles de siembra tradicionales, arándanos y olivos en otras zonas del país.",
      image: ProyectosAgricolas,
    },
    {
      id: 1,
      title: "Proyectos Forestales",
      description:
        "Plantaciones de pino y/o eucaliptus en campos propios o arrendados. Con la posibilidad de incorporar hacienda propia o de terceros como complemento.",
      image: ProyectosForestales,
    },
    {
      id: 2,
      title: "Proyectos Yerbateros/Forestales",
      description:
        "Se trata de proyectos de plantaciones de pino y/o eucaliptus combinado con yerba mate en las lomas coloradas.",
      image: ProyectosYerbateros,
    },
    {
      id: 3,
      title: "Proyectos Yerba Mate",
      description: "Plantaciones de yerba mate en loma colorada.",
      image: ProyectosYerbaMate,
    },
    {
      id: 4,
      title: "Proyectos Mixtos",
      description:
        "De acuerdo a las características propias del campo y del suelo se pueden incorporar más actividades además de la forestación y la yerba, como el arroz y la ganadería.",
      image: ProyectosMixtos,
    },
    {
      id: 5,
      title: "Proyectos Agrícolas",
      description:
        "Hemos desarrollado pooles de siembra tradicionales, arándanos y olivos en otras zonas del país.",
      image: ProyectosAgricolas,
    },
  ];

  const cardWidth = 409.736 + 160;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.insertBefore(carousel.lastChild, carousel.firstChild);
    }
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    animateButtons();

    const carousel = carouselRef.current;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";
      carousel.appendChild(carousel.firstChild);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    animateButtons();

    const carousel = carouselRef.current;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${cardWidth}px)`;

    carousel.insertBefore(carousel.lastChild, carousel.firstChild);

    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = "translateX(0)";
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 10);
  };

  const animateButtons = () => {
    setButtonZIndex(10);
    setTimeout(() => {
      setButtonZIndex(30);
    }, 500);
  };

  return (
    <div>
      <div className="w-full  overflow-hidden relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative  flex flex-col items-center justify-center h-full padding-section  space-y-24 2xl:space-y-32"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="gap-title-paragraph">
            <h1 className="title-section">Nuestros proyectos</h1>
            <p className="paragraph-section">
              A lo largo de estos años hemos desarrollado y administrado
              proyectos a medida para cada cliente.
            </p>
          </div>
          {/* Contenedor para los botones y las tarjetas */}
          <div className="flex items-center justify-center mt-[50px] relative z-10">
            {/* Botón de navegación izquierda */}
            <button
              className=" absolute left-1/2 top-[255px] transform -translate-x-[300px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white  bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
              onClick={handlePrev}
              style={{ zIndex: buttonZIndex }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.86213 1.54581C9.5431 1.21738 9.02661 1.21738 8.70839 1.54581L1.96137 8.50935C1.32331 9.16705 1.32331 10.234 1.96137 10.8917L8.75735 17.9066C9.07312 18.2317 9.58308 18.2359 9.90293 17.9151C10.2293 17.5875 10.2334 17.0477 9.91191 16.715L3.69198 10.2963C3.37295 9.96707 3.37295 9.434 3.69198 9.10473L9.86213 2.73657C10.1812 2.40814 10.1812 1.87508 9.86213 1.54581Z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Contenedor para las tarjetas */}
            <div
              ref={carouselRef}
              className="flex gap-[160px] transition-transform duration-500 ease-in-out z-20 ml-[569.7px]"
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="relative w-[409.736px] h-[480px] flex-shrink-0 transition-transform duration-500"
                  style={{
                    borderRadius: "28.132px",
                    background: "#DAD8CB",
                    boxShadow:
                      "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
                  }}
                >
                  {/* Imagen de la tarjeta */}
                  <div
                    className="w-[409.736px] h-[259.258px] rounded-t-[28.132px] bg-[#F7FFF1] absolute top-0 left-0 "
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "28.132px 28.132px 0px 0px",
                    }}
                  />

                  {/* Título de la tarjeta */}
                  <div className="absolute top-[280px] title-card-servicios w-full">
                    <span className="font-[450]">
                      {card.title.split(" ")[0]}
                    </span>
                    <div className="font-[600]">
                      {card.title.split(" ").slice(1).join(" ")}
                    </div>
                  </div>

                  {/* Descripción de la tarjeta */}
                  <div className="absolute top-[350px] paragraph-card-servicios w-full px-10">
                    {card.description}
                  </div>

                  {/* Botón de la tarjeta */}
                  <div className="hidden absolute bottom-[20px] left-[50%] transform -translate-x-[50%] w-[217px] h-[50px] bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 flex justify-center items-center rounded-[5px]">
                    <div className="text-white text-center font-fira-sans text-[14px] font-normal tracking-[4px] uppercase">
                      ver más
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón de navegación derecha */}
            <button
              className=" absolute left-1/2 top-[255px] transform -translate-x-[-260px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white  bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
              onClick={handleNext}
              style={{ zIndex: buttonZIndex }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.66033 17.9067C1.97936 18.2351 2.49585 18.2351 2.81407 17.9067L9.56109 10.9432C10.1992 10.2855 10.1992 9.21849 9.56109 8.56079L2.76511 1.54588C2.44934 1.22082 1.93938 1.21661 1.61953 1.53746C1.29315 1.86505 1.28907 2.40485 1.61055 2.73749L7.83048 9.15617C8.14951 9.48545 8.14951 10.0185 7.83048 10.3478L1.66033 16.7159C1.34129 17.0444 1.34129 17.5774 1.66033 17.9067Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
