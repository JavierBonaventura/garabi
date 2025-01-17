import React, { useRef, useState } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoCandado from "../../../images/Desktop/logoCandado.png";
import logoVision from "../../../images/Desktop/logoVision.png";
import logoTrayectoria from "../../../images/Desktop/logoTrayectoria.png";
import logoCheck from "../../../images/Mobile/list-check-solid.svg"
import logoLamp from "../../../images/Mobile/lightbulb-regular.svg"
import logoReciclado from "../../../images/Mobile/recycle-solid.svg"


function ValoresMobile() {
  const initialCards = [
    {
      logo: logoCheck,
      title: "GESTIÓN FORESTAL SOSTENIBLE",
      description:
        "La empresa prioriza prácticas sostenibles que garanticen la salud y la productividad a largo plazo de los bosques.",
    },
    {
      logo: logoReciclado,
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
      logo: logoLamp,
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

  const [cards, setCards] = useState(initialCards);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  const cardWidth = 270;

  const handleNext = () => {
    if (isSliding) return;

    setIsSliding(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);

    carouselRef.current.style.transition = "transform 0.5s ease-in-out";
    carouselRef.current.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = "translateX(0)";
      setIsSliding(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isSliding) return;

    setIsSliding(true);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );

    setCards((prevCards) => [
      prevCards[prevCards.length - 1],
      ...prevCards.slice(0, -1),
    ]);

    carouselRef.current.style.transition = "none";
    carouselRef.current.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current.style.transform = "translateX(0)";
    }, 50);

    setTimeout(() => {
      setIsSliding(false);
    }, 500);
  };

  // Swipe detection variables
  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      handleNext();
    } else if (endX.current - startX.current > 50) {
      handlePrev();
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="w-full h-auto relative">
        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
            paddingBottom: "30px",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "30px",
              flexShrink: 0,
              color: "#000",
              textAlign: "center",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontWeight: 700,
              margin: "0 auto",
              marginTop: "20px",
            }}
          >
            Valores
          </div>

          <div
            className="relative w-full flex items-center justify-center overflow-hidden mt-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={carouselRef}
              className="flex -ml-[270px]"
              style={{
                width: `${cards.length * cardWidth}px`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                  style={{
                    alignItems: "flex-start",
                    width: "232px",
                    height: "200px",
                    margin: "0 20px",
                    background: "#00942C",
                    borderRadius: "14px",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <img
                      src={card.logo}
                      alt={card.title}
                      style={{
                        width: "34px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                    />
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "Fira Sans",
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "left",
                      }}
                    >
                      {card.title}
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "Fira Sans",
                      fontSize: "12px",
                      fontWeight: 400,
                      textAlign: "center",
                      padding: "0 10px",
                      textAlign: "left",
                    }}
                  >
                    {card.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Círculos debajo de las tarjetas */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "75px",
              }}
            >
              {[...Array(cards.length)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    border: "1px solid #00942C",
                    backgroundColor: activeIndex === index ? "#00942C" : "#FFF",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValoresMobile;
