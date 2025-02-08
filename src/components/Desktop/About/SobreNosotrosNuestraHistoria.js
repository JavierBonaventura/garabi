import React, { useRef, useState, useEffect } from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import logoNuestraHistoria from "../../../images/Desktop/logoNuestraHistoria.png";
import arbolesProyectos from "../../../images/Desktop/arboles-proyectos-cortada.png";

function SobreNosotrosNuestraHistoria() {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const distance = e.clientY - startY;
    setCurrentTranslate(distance); // Actualiza el desplazamiento mientras arrastras.
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Decide el desplazamiento basado en la distancia arrastrada.
    if (currentTranslate > 50) {
      handlePrev(); // Arrastrar hacia abajo.
    } else if (currentTranslate < -50) {
      handleNext(); // Arrastrar hacia arriba.
    }

    setCurrentTranslate(0); // Resetea el desplazamiento.
  };

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const cardHeight = 162;
  const totalCards = 10;

  const handleScroll = (e) => {
    e.stopPropagation(); // Evita que el evento se propague al scroll de la página.
    e.preventDefault();

    if (e.deltaY > 0) {
      handleNext(); // Desplazamiento hacia abajo
    } else {
      handlePrev(); // Desplazamiento hacia arriba
    }
  };

  const handleNext = () => {
    const carousel = carouselRef.current;
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);

    if (carousel) {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateY(-${cardHeight}px)`;

      setTimeout(() => {
        carousel.appendChild(carousel.firstElementChild);
        carousel.style.transition = "none";
        carousel.style.transform = "translateY(0)";
      }, 500);
    }
  };

  const handlePrev = () => {
    const carousel = carouselRef.current;
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);

    if (carousel) {
      carousel.insertBefore(
        carousel.lastElementChild,
        carousel.firstElementChild
      );
      carousel.style.transition = "none";
      carousel.style.transform = `translateY(-${cardHeight}px)`;

      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = "translateY(0)";
      }, 10);
    }
  };

  // Bloquear scroll cuando el ratón está sobre las tarjetas
  useEffect(() => {
    const handleWheelBlock = (e) => {
      e.preventDefault(); // Bloquea el scroll
    };

    const cardContainer = document.getElementById("cardContainer");

    const handleMouseEnter = () => {
      cardContainer.addEventListener("wheel", handleWheelBlock, {
        passive: false,
      });
    };

    const handleMouseLeave = () => {
      cardContainer.removeEventListener("wheel", handleWheelBlock);
    };

    // Añadir eventos
    cardContainer.addEventListener("mouseenter", handleMouseEnter);
    cardContainer.addEventListener("mouseleave", handleMouseLeave);

    // Limpiar eventos al desmontar
    return () => {
      cardContainer.removeEventListener("mouseenter", handleMouseEnter);
      cardContainer.removeEventListener("mouseleave", handleMouseLeave);
      cardContainer.removeEventListener("wheel", handleWheelBlock);
    };
  }, []);

  return (
    <div className="w-full h-auto">
      <div
        className="relative z-10 flex flex-col h-full"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Contenedor central con dos columnas */}
        <div className="flex justify-center items-center h-full padding-section ">
          <div className="grid grid-cols-2 w-[85%] 2xl:w-2/3 mx-auto">
            {/* Columna izquierda */}
            <div className="flex flex-col items-start gap-title-paragraph mt-40">
              <h1 className="title-section !text-left">Nuestra historia</h1>

              <p className="paragraph-section !text-left">
                Nuestra trayectoria, construida a lo largo de más de 40 años, ha
                estado marcada por la innovación, el compromiso y el crecimiento
                constante.
              </p>
            </div>
            <div
              className=" h-[580px] mt-[-80px] "
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                id="cardContainer"
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="mt-[80px]"
                  style={{
                    position: "relative",
                    width: "627px",
                    height: "460px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    ref={carouselRef}
                    className="flex flex-col space-y-8 z-20"
                  >
                    {[
                      1976, 1983, 2002, 2007, 2012, 2014, 2015, 2018, 2021,
                      2023,
                    ].map((year, index) => {
                      const opacity = index === activeIndex ? 1 : 0.5;

                      // Define los textos por año
                      const yearTexts = {
                        1976: "Grupo Garabí comienza su actividad con la administración de dos establecimientos forestales, las localidades de Loreto y Santa Rosa.",
                        1983: "La empresa incorpora a su administración dos nuevas sociedades en la localidad de Gobernador Virasoro. Cabe destacar que tres de estas empresas continúan bajo la administración de GG.",
                        2002: "Primeros proyectos productivos en conjunto con el grupo Eidico en la zona de Virasoro.",
                        2007: "Gestión de nuevos emprendimiento de inversores locales.",
                        2012: "Captación de los primeros proyectos “family funds” de origen europeo y primeros clientes con administración integral por parte de grupo Garabi.",
                        2014: "Alianza con establecimiento Las Marías y primeros proyectos de plantación de yerba mate.",
                        2015: "Gran crecimiento de administraciones de la mano de clientes europeos.",
                        2018: "Incorporación socio belga a Grupo Garabí.",
                        2021: "Alianza estratégica con grupo industrial austriaco - belga. Se duplica la superficie administrada con el ingreso de un grupo austriaco a GG.",
                        2023: "Alianza estratégica con grupo industrial de origen francés y belga.",
                      };

                      return (
                        <div
                          key={index}
                          className="w-[427.385px] h-[132px] rounded-[4px] border-2 border-[#00942C] bg-[#F5F4FF] flex items-center p-2 cursor-pointer"
                          style={{ opacity }}
                        >
                          <img
                            src={logoNuestraHistoria}
                            alt="Logo Nuestra Historia"
                            className="w-[79px] h-[88.545px] flex-shrink-0 mr-8"
                          />
                          <div
                            className="-mt-12 -ml-6"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span className="text-[#000] font-fira-sans text-[16px] font-medium leading-[32px]">
                              {year}
                            </span>
                            <p className="w-[320px] h-[49px] text-[#000] font-fira-sans text-[14px] font-normal leading-[20px]">
                              {yearTexts[year] ||
                                "Logros y actividades destacadas de este año."}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="absolute right-[00px] top-1/2 transform -translate-y-1/2 flex items-center space-x-4  ">
                      {/* Contenedor de los botones */}
                      <div className="flex flex-col items-center space-y-2">
                        {/* Botón superior */}
                        <button 
                         onClick={handlePrev}
                        className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-[120px] mr-[3vw]">
                          <svg
                            className="rotate-90"
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

                        {/* Botón inferior */}
                        <button 
                         onClick={handleNext}
                        className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-[3vw]">
                          <svg
                            className="-rotate-90"
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
                      </div>

                      {/* Puntos de navegación */}
                      <div className="flex flex-col space-y-3">
                        {[...Array(totalCards)].map((_, index) => (
                          <div
                            key={index}
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              border: "2px solid #00942C",
                              backgroundColor:
                                index === activeIndex ? "#00942C" : "#FFF",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosNuestraHistoria;
