import React, { useRef, useState } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoNuestraHistoria from "../../../images/Desktop/logoNuestraHistoria.png"; 
import arbolesProyectos from "../../../images/Mobile/arbolesProyectos.png";

function NuestraHistoriaMobile() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); 
  const cardHeight = 103; 
  const totalCards = 4; 

  const startY = useRef(0);
  const endY = useRef(0);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY; 
  };

  const handleTouchMove = (e) => {
    endY.current = e.touches[0].clientY; 
  };

  const handleTouchEnd = () => {
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
    <div style={{ overflow: "hidden" }}>
      <div className="w-full h-[790px] relative">
        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
            {/* Centered text container */}
            <div
            style={{
              width: "216px",
              height: "30px",
              flexShrink: 0,
              color: "#000",
              textAlign: "center",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "30px" /* 125% */,
              margin: "0 auto",
            }}
          >
            Nuestra historia
          </div>
          <div
            style={{
              width: "329px",
              height: "51px",
              flexShrink: 0,
              color: "#000",
              textAlign: "center",
              fontFamily: "Fira Sans",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "17px" ,
              margin: "0 auto",
              marginTop: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            interdum erat nec commodo imperdiet. Duis libero nisi, mollis quis
            urna ornare, feugiat egestas nunc.
          </div>
          <button
            style={{
              width: "177px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background: "#00942C",
              color: "#FFF",
              fontFamily: "Fira Sans",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "4px",
              textTransform: "uppercase",
              margin: "0 auto",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            ver video
          </button>

          <div
            style={{
              margin: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                position: "relative",
                width: "300px",
                height: "309px",
                overflow: "hidden",
              }}
            >
              <div
                ref={carouselRef}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.5s ease-in-out",
                  alignItems: "center",
                }}
              >
                {[2009, 2010, 2011, 2012].map((year, index) => {
                  const opacity = index === activeIndex ? 1 : 0.5;
                  return (
                    <div
                      key={index}
                      style={{
                        width: "269px",
                        height: "83px",
                        borderRadius: "3px",
                        border: "1px solid #00942C",
                        background: "#F5F4FF",
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        marginTop: "20px",
                        opacity: opacity,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      <img
                        src={logoNuestraHistoria}
                        alt="Logo Nuestra Historia"
                        style={{
                          width: "49px",
                          height: "55px",
                          flexShrink: 0,
                          marginRight: "10px",
                        }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            color: "#000",
                            fontFamily: "Fira Sans",
                            fontSize: "13px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "20px",
                          }}
                        >
                          {year}
                        </span>
                        <p
                          style={{
                            width: "169px",
                            height: "30px",
                            color: "#000",
                            fontFamily: "Fira Sans",
                            fontSize: "11px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "17px",
                          }}
                        >
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
            style={{
              position: "absolute",
              right: "7%",
              top: "45%",
              transform: "translateY(-50%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "75px",
              }}
            >
              {[...Array(totalCards)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    border: "1px solid #00942C",
                    backgroundColor: index === activeIndex ? "#00942C" : "#FFF", 
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute z-10 w-full" style={{ top: "490px" }}>
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
                top: "0%", 
                left: "100%", 
                transformOrigin: "top left", 
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
                  maxWidth: "379px", 
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
    </div>
  );
}

export default NuestraHistoriaMobile;
