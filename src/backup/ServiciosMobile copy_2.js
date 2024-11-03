import React, { useRef, useState } from "react";
import { useSwipeable } from 'react-swipeable'; // Importa el hook de swipeable
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import servicios from "../../../images/Mobile/servicios.png";
import botonIzquierdo from "../../../images/Mobile/botonIzquierdo.png";
import botonDerecho from "../../../images/Mobile/botonDerecho.png";

function Historias() {
  const initialCards = [
    {
      image: servicios,
      testimonial: "Desde 1983 gestionado con éxito más de 18.000 hectáreas de bosques",
      name: "Asesoramiento Productivo",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: servicios,
      testimonial: "Desde 1983 gestionado con éxito más de 18.000 hectáreas de bosques",
      name: "Asesoramiento Productivo",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: servicios,
      testimonial: "Desde 1983 gestionado con éxito más de 18.000 hectáreas de bosques",
      name: "Asesoramiento Productivo",
      position: "Owner of CF INVESTMENTS",
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const carouselRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  const cardWidth = 378;

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

  // Configura los manejadores de swipe
  const handlers = useSwipeable({
    onSwipedLeft: handleNext, // Deslizar a la izquierda para avanzar
    onSwipedRight: handlePrev, // Deslizar a la derecha para retroceder
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Esto permite el seguimiento del mouse para pruebas
  });

  return (
    <div className="w-full h-[580px] relative">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full px-4"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        <div className="mt-8">
          <div
            className="flex-shrink-0 ml-8"
            style={{
              width: "274px",
              height: "48px",
              color: "#000",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "'Fira Sans', sans-serif",
              fontSize: "41px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "39px",
            }}
          >
            Servicios
          </div>
          <div
            className="mt-4 flex-shrink-0 ml-8 "
            style={{
              width: "329px",
              height: "52px",
              color: "#000",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "'Fira Sans', sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-1px",
            }}
          >
            Desde 1983 gestionado con éxito más de 18.000 hectáreas de bosques
          </div>
          <div className="relative w-full flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-[10px] w-[26px] h-[26px] flex items-center justify-center z-10"
            >
              <img src={botonIzquierdo}></img>
            </button>

            <div className="relative w-[393px] overflow-x-hidden">
              <div className="py-12">
                <div
                  ref={carouselRef}
                  className="flex"
                  style={{ width: `${cards.length * cardWidth}px` }}
                  {...handlers} // Aplica los manejadores de swipe aquí
                >
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center mr-[50px] ml-[50px]"
                    >
                      <div
                        className="relative ml-[20px] flex flex-col items-center mx-auto flex-shrink-0"
                        style={{
                          width: "258px",
                          height: "296px",
                          borderRadius: "10px",
                          background: "#DAD8CB",
                          boxShadow: "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
                        }}
                      >
                        <img
                          src={card.image}
                          alt="Servicios"
                          style={{
                            width: "258px",
                            height: "149px",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                          }}
                        />
                        <div
                          className="mt-2 flex-shrink-0 text-center"
                          style={{
                            width: "246.069px",
                            height: "36.393px",
                            color: "#464646",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "'Fira Sans', sans-serif",
                            fontSize: "22px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "21.323px",
                            letterSpacing: "-1.333px",
                          }}
                        >
                          {card.name}
                        </div>
                        <div
                          className="mt-0 flex-shrink-0 text-center"
                          style={{
                            width: "230px",
                            height: "52px",
                            color: "#000",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "'Fira Sans', sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "24px",
                            letterSpacing: "-1px",
                          }}
                        >
                          {card.testimonial}
                        </div>
                        <button
                          className="mt-2 flex items-center justify-center"
                          style={{
                            width: "99px",
                            height: "26px",
                            borderRadius: "5px",
                            background: "#00942C",
                          }}
                        >
                          <span
                            style={{
                              color: "#FFF",
                              textAlign: "center",
                              fontFamily: "'Fira Sans', sans-serif",
                              fontSize: "12px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              letterSpacing: "4px",
                              textTransform: "uppercase",
                            }}
                          >
                            VER
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="absolute right-[10px] w-[26px] h-[26px] flex items-center justify-center z-10"
            >
              <img src={botonDerecho}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historias;
