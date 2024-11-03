import React, { useRef, useState } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoCandado from "../../../images/Desktop/logoCandado.png";
import logoVision from "../../../images/Desktop/logoVision.png";
import logoTrayectoria from "../../../images/Desktop/logoTrayectoria.png";

function ValoresMobile() {
  const initialCards = [
    {
      logo: logoCandado,
      title: "Confianza",
      description:
        "This product's simple design focuses on videos and standout quotes from customers.",
    },
    {
      logo: logoVision,
      title: "Visión",
      description:
        "Vision focuses on the core aspects of the business and customer needs.",
    },
    {
      logo: logoTrayectoria,
      title: "Trayectoria",
      description:
        "A proven track record of success in delivering quality products.",
    },
    {
      logo: logoCandado,
      title: "Confianza",
      description:
        "This product's simple design focuses on videos and standout quotes from customers.",
    },
    {
      logo: logoVision,
      title: "Visión",
      description:
        "Vision focuses on the core aspects of the business and customer needs.",
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const carouselRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  const cardWidth = 270; // Width for centering logic, adjust as needed

  const handleNext = () => {
    if (isSliding) return;

    setIsSliding(true);

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
              className="flex"
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
                    width: "232px",
                    height: "155px",
                    margin: "0 20px",
                    background: "#00942C",
                    borderRadius: "14px",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    padding: "10px", // Añadido para un mejor espaciado
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
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
                        textAlign: "left", // Cambiado a 'left' para que se alinee correctamente
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
                    backgroundColor: "#FFF",
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
