import React, { useState, useRef, useEffect } from "react";
import logoCandado from "../../../images/Desktop/logoCandado.png";
import logoVision from "../../../images/Desktop/logoVision.png";
import logoTrayectoria from "../../../images/Desktop/logoTrayectoria.png";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

const cards = [
  {
    logo: logoCandado,
    title: "GESTIÓN FORESTAL SOSTENIBLE",
    description:
      "La empresa prioriza prácticas sostenibles que garanticen la salud y la productividad a largo plazo de los bosques.",
  },
  {
    logo: logoVision,
    title: "CONSERVACIÓN AMBIENTAL",
    description:
      "La empresa tiene como objetivo proteger la biodiversidad, preservar los ecosistemas y mitigar el cambio climático a través de sus buenas prácticas forestales.",
  },
  {
    logo: logoTrayectoria,
    title: "DESARROLLO LOCAL",
    description:
      "La empresa da prioridad al bienestar de las comunidades locales, los pueblos originarios y los trabajadores involucrados en las operaciones forestales. ",
  },
  {
    logo: logoCandado,
    title: "INNOVACIÓN",
    description:
      "Estar a la vanguardia en cuanto a nuevas técnicas y tecnologías de gestión forestal. Buscar siempre mejorar la eficiencia y efectividad de los proyectos a través de la innovación y la implementación de prácticas modernas.",
  },
  {
    logo: logoCandado,
    title: "TRANSPARENCIA Y HONESTIDAD",
    description:
      "La empresa se compromete con la transparencia en sus operaciones, incluida la divulgación de información sobre sus prácticas forestales, impactos ambientales e iniciativas sociales.",
  },
  {
    logo: logoVision,
    title: "COMPROMISO CON LA CALIDAD",
    description:
      "Asegurar que todos los proyectos se lleven a cabo con los más altos estándares de calidad, desde la planificación hasta la ejecución, para garantizar resultados exitosos y duraderos.",
  },
];

function SobreNosotrosValores() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [buttonZIndex, setButtonZIndex] = useState(30);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const cardWidth = 400 + 20;

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
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
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
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
      <div className="w-full h-auto overflow-x-hidden">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative flex flex-col h-full "
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-[85px] w-[250px] h-[50px] flex-shrink-0 text-center self-center">
            <h1 className="text-black font-sans text-[60px] font-bold leading-[50px]">
              Valores
            </h1>
          </div>
          <button
            className=" absolute left-1/2 top-[94px] transform -translate-x-[300px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white  bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.86213 1.54581C9.5431 1.21738 9.02661 1.21738 8.70839 1.54581L1.96137 8.50935C1.32331 9.16705 1.32331 10.234 1.96137 10.8917L8.75735 17.9066C9.07312 18.2317 9.58308 18.2359 9.90293 17.9151C10.2293 17.5875 10.2334 17.0477 9.91191 16.715L3.69198 10.2963C3.37295 9.96707 3.37295 9.434 3.69198 9.10473L9.86213 2.73657C10.1812 2.40814 10.1812 1.87508 9.86213 1.54581Z"
                fill="white"
              />
            </svg>
          </button>
          <div
            ref={carouselRef}
            className="flex justify-center mt-[78px] gap-[20px] -ml-[420px] "
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative w-[400px] h-[230px] flex-shrink-0 rounded-[21px] bg-[#00942C] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              >
                <img
                  src={card.logo}
                  alt={`Logo ${card.title}`}
                  className="absolute top-[15px] left-[34px] w-[41px] h-[47px] fill-white"
                />

                <div className="absolute top-[12px] left-[109px] w-[250px] h-[32px] text-white font-sans text-[22px] font-medium leading-[32px]">
                  {card.title}
                </div>

                <div className="absolute top-[80px] left-[34px] w-[350px] h-[84px] text-white font-sans text-[18px] font-normal leading-[24px]">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-[45px]">
            <div className="flex justify-between w-[96px]">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-[10px] h-[10px] rounded-full border-2 border-[#00942C] ${
                    currentIndex === index ? "bg-[#00942C]" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            className=" absolute left-1/2 top-[94px] transform -translate-x-[-260px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white  bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.66033 17.9067C1.97936 18.2351 2.49585 18.2351 2.81407 17.9067L9.56109 10.9432C10.1992 10.2855 10.1992 9.21849 9.56109 8.56079L2.76511 1.54588C2.44934 1.22082 1.93938 1.21661 1.61953 1.53746C1.29315 1.86505 1.28907 2.40485 1.61055 2.73749L7.83048 9.15617C8.14951 9.48545 8.14951 10.0185 7.83048 10.3478L1.66033 16.7159C1.34129 17.0444 1.34129 17.5774 1.66033 17.9067Z"
                fill="white"
              />
            </svg>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosValores;
