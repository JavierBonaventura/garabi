import React, { useRef, useState } from "react";
import galleryPersona1 from "../../../images/Desktop/galleryPersona1.png";
import imagenFondo from "../../../images/Desktop/imagenFondoRecortada.jpg";

function Historias() {
  const initialCards = [
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const carouselRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  const cardWidth = 941;

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

  return (
    <div className="w-full h-[350px] relative">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center h-full px-4"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full flex items-center justify-center mt-[30px]">
          <button
            onClick={handlePrev}
            className="absolute left-24 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white z-10 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform"
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

          <div className="relative w-[941px] h-[235px] overflow-hidden">
            <div
              ref={carouselRef}
              className="flex"
              style={{ width: `${cards.length * cardWidth}px` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-[941px] flex-shrink-0 flex items-center justify-center p-6 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 w-[185.39px] h-[185.39px] rounded-full overflow-hidden bg-[#D9D9D9]">
                      <img
                        src={card.image}
                        alt="Persona"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col justify-center ml-6">
                      <div className="mb-4 text-[#633F3F] font-normal text-[18px] leading-[28px]">
                        <p>{card.testimonial}</p>
                      </div>
                      <div className="mb-2 text-[#633F3F] font-medium text-[22px] leading-[32px]">
                        <p>{card.name}</p>
                      </div>
                      <div className="text-[#633F3F] font-medium text-[14px] uppercase tracking-widest">
                        <p>{card.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-24 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white z-10 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform"
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
  );
}

export default Historias;
