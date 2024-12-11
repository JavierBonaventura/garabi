import React, { useRef, useState } from "react";
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
  const totalCards = 9;

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

  return (
    <div className="w-full h-auto">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col h-full"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute z-30 w-[40vw] h-[24%] top-[8%] left-[56%] origin-top-left  "
          style={{
            background:
              "linear-gradient(0deg, rgba(237, 242, 232, 0.00) 0%, #dfe8e0 130%)",
          }}
        />

        {/* Contenedor central con dos columnas */}
        <div
          className="flex justify-center items-center h-full mt-20"
          style={{ marginLeft: "12.7vw", width: "calc(100% - 12.7vw)" }}
        >
          <div className="grid grid-cols-2 w-full max-w-[1200px]">
            {/* Columna izquierda */}
            <div className="flex flex-col items-start z-40 mt-6">
              <h1 className="w-[471.305px] text-black font-fira-sans text-[60px] font-bold leading-[50px] mt-[50px]">
                Nuestra historia
              </h1>

              <p className="w-[460.714px] text-black font-fira-sans text-[24px] font-normal leading-[28px] mt-[50px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                interdum erat nec commodo imperdiet. Duis libero nisi, mollis
                quis urna ornare, feugiat egestas nunc.
              </p>

              <button className="w-[245.25px] hidden h-[50px] bg-[#00942C] rounded-[5px] mt-[50px] flex justify-center items-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5">
                <div className="z-30 w-[245.25px] h-[16px] flex flex-col justify-center">
                  <span className="text-white text-center font-fira-sans text-[14px] font-normal uppercase tracking-[4px]">
                    Ver video
                  </span>
                </div>
              </button>
            </div>

            <div
              className=""
              style={{
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onWheel={handleScroll}
            >
              <div
                style={{
                  position: "relative",
                  width: "427px",
                  height: "460px",
                  overflow: "hidden",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div ref={carouselRef} className="flex flex-col space-y-8 z-20">
                  {[1976, 1983, 2001, 2012, 2014, 2015, 2018, 2021, 2023].map(
                    (year, index) => {
                      const opacity = index === activeIndex ? 1 : 0.5;

                      // Define los textos por año
                      const yearTexts = {
                        1976: "Grupo Garabí comienza su actividad con la administración de dos establecimientos forestales, las localidades de Loreto y Santa Rosa.",
                        1983: "La empresa incorpora a su administración dos nuevas sociedades en la localidad de Gobernador Virasoro. Cabe destacar que tres de estas empresas continúan bajo la administración de GG.",
                        2001: "Alianza estratégica con el grupo Eidico en el manejo de proyectos productivos.",
                        2012: "Captación de los primeros proyectos “family funds” de origen europeo y primeros clientes con administración integral por parte de grupo Garabi.",
                        2014: "Alianza con establecimiento Las Marías y primeros proyectos de plantación de yerba mate.",
                        2015: "Gran crecimientos clientes europeos .",
                        2018: "Incorporación socio belga a Grupo Garabi.",
                        2021: " Se duplica la superficie administrada con el ingreso de un grupo austriaco a GG. Sociedad estratégica con grupo industrial austriaco - belga ",
                        2023: "Sociedad estratégica con grupo industrial de origen francés y belga.",
                      };

                      return (
                        <div
                          key={index}
                          className="w-[427.385px] h-[132px] rounded-[4px] border-2 border-[#00942C] bg-[#F5F4FF] flex items-center p-2"
                          style={{ opacity }}
                        >
                          <img
                            src={logoNuestraHistoria}
                            alt="Logo Nuestra Historia"
                            className="w-[79px] h-[88.545px] flex-shrink-0 mr-8"
                          />
                          <div className="-mt-12 -ml-6"
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
                    }
                  )}
                </div>
              </div>
              <div
                className=""
                style={{
                  position: "absolute",
                  right: "6%",
                  top: "49%",
                  transform: "translateY(-50%)",
                }}
              >
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "200px",
                  }}
                >
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
        <div className="relative w-full pb-20 mt-2  ">
          {/* Gradiente superior */}
          <div
            className="absolute z-30 w-full h-[150%] top-[-86%] left-0 origin-top-left "
            style={{
              background:
                "linear-gradient(00deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosNuestraHistoria;
