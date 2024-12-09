import React, { useRef, useState } from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import logoNuestraHistoria from "../../../images/Desktop/logoNuestraHistoria.png";
import arbolesProyectos from "../../../images/Desktop/arboles-proyectos-cortada.png";

function SobreNosotrosNuestraHistoria() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const cardHeight = 162;
  const totalCards = 4;

  const handleScroll = (e) => {
    e.stopPropagation(); // Evita que el evento se propague al scroll de la página.
    e.preventDefault();

    if (e.deltaY > 0) {
      handleNext(); // Desplazamiento hacia abajo
    } else {
      handlePrev(); // Desplazamiento hacia arriba
    }
  };

  const startY = useRef(0);
  const endY = useRef(0);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    document.body.style.overflow = "hidden";
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    endY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    document.body.style.overflow = "auto";
    if (startY.current - endY.current > 50) {
      handleNext();
    } else if (endY.current - startY.current > 50) {
      handlePrev();
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
          className="absolute z-30 w-[40vw] h-[24%] -top-[0%] left-[56%] origin-top-left"
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

              <button className="w-[245.25px] h-[50px] bg-[#00942C] rounded-[5px] mt-[50px] flex justify-center items-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5">
                <div className="z-30 w-[245.25px] h-[16px] flex flex-col justify-center">
                  <span className="text-white text-center font-fira-sans text-[14px] font-normal uppercase tracking-[4px]">
                    Ver video
                  </span>
                </div>
              </button>
            </div>

            <div
              className="border-black border-2"
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
       

               
              >
                <div ref={carouselRef} className="flex flex-col space-y-8 z-20">
                  {[2009, 2010, 2011, 2012].map((year, index) => {
                    const opacity = index === activeIndex ? 1 : 0.5;
                    return (
                      <div
                        key={index}
                        className="w-[427.385px] h-[132px] rounded-[4px] border-2 border-[#00942C] bg-[#F5F4FF] flex items-center p-2"
                      >
                        <img
                          src={logoNuestraHistoria}
                          alt="Logo Nuestra Historia"
                          className="w-[79px] h-[88.545px] flex-shrink-0 mr-8"
                        />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <span className="text-[#000] font-fira-sans text-[22px] font-medium leading-[32px]">
                            {year}
                          </span>
                          <p className="w-[269.034px] h-[49px] text-[#000] font-fira-sans text-[18px] font-normal leading-[28px]">
                            Esto es lo que hicimos en el año y los logros que
                            conseguimos.
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              className=""
              style={{
                position: "absolute",
                right: "4%",
                top: "25%",
                transform: "translateY(-50%)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100px",
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

        <div className="relative w-full pb-20 mt-2">
          {/* Gradiente superior */}
          <div
            className="absolute z-30 w-full h-[18%] top-[-16%] left-0 origin-top-left"
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
  );
}

export default SobreNosotrosNuestraHistoria;
