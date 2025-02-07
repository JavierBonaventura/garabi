import React, { useRef, useState } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import servicios from "../../../images/Mobile/servicios.png";
import recuadroUno from "../../../images/Desktop/asesoramiento-integral-3.png";
import recuadroDos from "../../../images/Desktop/asesoramiento-productivo-2.png";
import botonIzquierdo from "../../../images/Mobile/botonIzquierdo.png";
import botonDerecho from "../../../images/Mobile/botonDerecho.png";

function ServiciosMobile() {
  const initialCards = [
    {
      image: recuadroUno,
      testimonial:
        "Nuestros clientes obtienen los beneficios de ser los dueños de las forestaciones dejando en manos de nuestro equipo todas las responsabilidades de la administración y el manejo.",
      name: "Asesoramiento Integral",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: recuadroDos,
      testimonial:
        " Buscamos optimizar el manejo de los bosques, promoviendo el uso sostenible de los productos forestales, maximizando la rentabilidad de nuestros clientes.",
      name: "Asesoramiento Productivo",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: recuadroUno,
      testimonial:
        "Nuestros clientes obtienen los beneficios de ser los dueños de las forestaciones dejando en manos de nuestro equipo todas las responsabilidades de la administración y el manejo.",

      name: "Asesoramiento Integral",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: recuadroDos,
      testimonial:
        " Buscamos optimizar el manejo de los bosques, promoviendo el uso sostenible de los productos forestales, maximizando la rentabilidad de nuestros clientes.",

      name: "Asesoramiento Productivo",
      position: "Owner of CF INVESTMENTS",
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const carouselRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  const cardWidth = 371;

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

    // Mover la última tarjeta al inicio antes de iniciar la animación
    setCards((prevCards) => [
      prevCards[prevCards.length - 1],
      ...prevCards.slice(0, -1),
    ]);

    // Posicionar el carrusel al final (en -cardWidth) sin transición
    carouselRef.current.style.transition = "none";
    carouselRef.current.style.transform = `translateX(-${cardWidth}px)`;

    // Esperar un ciclo para aplicar la transición hacia 0
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
    startX.current = e.touches[0].clientX; // Get initial touch position
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX; // Update position on move
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      // Swipe left
      handleNext();
    } else if (endX.current - startX.current > 50) {
      // Swipe right
      handlePrev();
    }
  };

  return (
    <div id="serviciosMob" className="w-full  relative">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full px-4 padding-section !pt-12"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className=" space-y-8">
          <div className="gap-title-paragraph mx-8">
            {/* Div principal con layout y tipografía para "Servicios" */}
            <h1 className="title-section">Servicios</h1>

            {/* Div secundario con layout y tipografía para el texto debajo */}
            <p className="paragraph-section">
              La flexibilidad, agilidad de nuestra organización sumado a la
              experiencia de más de 40 años en el sector forestal nos permite
              planificar y ejecutar proyectos a la medida y necesidades de cada
              uno de nuestros clientes.
            </p>
          </div>

          <div className="relative w-full flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-[10px] w-[26px] h-[26px] flex items-center justify-center  z-10  "
            >
              <img src={botonIzquierdo}></img>
            </button>

            <div className="relative w-[371px] overflow-x-hidden pb-10">
              <div
                ref={carouselRef}
                className="flex"
                style={{ width: `${cards.length * cardWidth}px` }}
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center mr-[50px] ml-[40px]"
                  >
                    <div
                      className="relative ml-[20px] flex flex-col items-center mx-auto flex-shrink-0"
                      style={{
                        width: "258px",
                        height: "330px",
                        borderRadius: "10px",
                        background: "#DAD8CB",
                        boxShadow:
                          "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
                      }}
                    >
                      {/* Imagen en la parte superior de la tarjeta */}
                      <img
                        src={card.image}
                        alt="Servicios"
                        className="object-cover"
                        style={{
                          width: "258px",
                          height: "150px",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                        }}
                      />

                      {/* Texto de "Asesoramiento Productivo" */}
                      <div className="mt-2 w-[246.069px] h-[36.393px] title-card-servicios">
                        {card.name}
                      </div>

                      {/* Descripción */}
                      <div className="-mt-2 w-[230px] h-[80px] paragraph-card-servicios">
                        {card.testimonial}
                      </div>

                      {/* Botón "VER" */}
                      <a
                        href="/servicios"
                        className="mt-7 flex items-center justify-center w-[99px] h-[26px] rounded-[5px] bg-[#00942C]"
                      >
                        <span className="text-[#FFF] text-center font-fira-sans text-[12px] font-normal tracking-[4px] uppercase ">
                          VER MÁS
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-[10px] w-[26px] h-[26px] flex items-center justify-center z-10 "
            >
              <img src={botonDerecho}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosMobile;
