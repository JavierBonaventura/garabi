import React, { useState, useRef, useEffect } from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import advertisingImg from "../../../images/Desktop/advertising.png"; 
import singleprojectslider1 from "../../../images/Desktop/singleprojectslider1.png"; 
import singleprojectslider2 from "../../../images/Desktop/singleprojectslider2.png";
import singleprojectslider3 from "../../../images/Desktop/singleprojectslider3.png";
import singleprojectslider4 from "../../../images/Desktop/singleprojectslider1.png";
import singleprojectslider5 from "../../../images/Desktop/singleprojectslider2.png";
import singleprojectslider6 from "../../../images/Desktop/singleprojectslider3.png";

import botonDerecha from "../../../images/Desktop/botonDerecha.png"; 
import botonIzquierda from "../../../images/Desktop/botonIzquierda.png"; 

const tarjetas = [
  {
    id: 1,
    imgSrc: singleprojectslider1,
    altText: "Slider 1",
    title: "Project 1",
    description: "Advertising Internet Online Opportunities To Explore",
  },
  {
    id: 2,
    imgSrc: singleprojectslider2,
    altText: "Slider 2",
    title: "Project 2",
    description: "Advertising Internet Online Opportunities To Explore",
  },
  {
    id: 3,
    imgSrc: singleprojectslider3,
    altText: "Slider 3",
    title: "Project 3",
    description: "Advertising Internet Online Opportunities To Explore",
  },
  {
    id: 4,
    imgSrc: singleprojectslider4,
    altText: "Slider 4",
    title: "Project 4",
    description: "Advertising Internet Online Opportunities To Explore",
  },
  {
    id: 5,
    imgSrc: singleprojectslider5,
    altText: "Slider 5",
    title: "Project 5",
    description: "Advertising Internet Online Opportunities To Explore",
  },
  {
    id: 6,
    imgSrc: singleprojectslider6,
    altText: "Slider 6",
    title: "Project 6",
    description: "Advertising Internet Online Opportunities To Explore",
  },
];

function Advertising() {
  const carouselRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex] = useState(0);

  const cardWidth = 323; 

  
  // Manejar el siguiente carrusel
  const handleNext = () => {

    if (isTransitioning || !carouselRef.current) return; 
    setIsTransitioning(true);

    const carousel = carouselRef.current;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${cardWidth}px)`; 

    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)"; 
      carousel.appendChild(carousel.firstChild); 
      setIsTransitioning(false);
    }, 500);
  };

  // Manejar el anterior carrusel
  const handlePrev = () => {

    if (isTransitioning || !carouselRef.current) return; 
    setIsTransitioning(true);

    const carousel = carouselRef.current;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${cardWidth}px)`; 

    carousel.insertBefore(carousel.lastChild, carousel.firstChild); 

    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = "translateX(0)"; 
      setIsTransitioning(false);
    }, 10);
  };

  useEffect(() => {
    if (carouselRef.current) {
      console.log("Carrusel montado y ref disponible");
    }
  }, []);


  return (
    <div>
      <div className="w-full h-full overflow-hidden relative">
        {/* Fondo con imagen */}
        <div
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Título */}
          <div className="pt-12 w-[1074px] ml-[12%] h-[65px] flex-shrink-0 text-black font-fira-sans text-[22px] font-medium leading-[32px]">
            Advertising Internet Online Opportunities To Explore
          </div>

          {/* Párrafo */}
          <div className="pt-12 ml-[12%] w-[1074px] h-[80px] flex-shrink-0 text-black font-fira-sans text-[18px] font-normal leading-[28px]">
            From ads that dance or sing to MTV-like commercials, online
            advertisers are now using a new type of technology called “rich
            media” to attract consumers.
          </div>

          {/* Imagen centrada debajo */}
          <div className="mt-16">
            <img
              src={advertisingImg}
              alt="Advertising"
              className="mx-auto w-[889px] h-[400px] flex-shrink-0"
            />
          </div>

          {/* Contenedor de las tres imágenes en línea con flechas a los lados */}
          <div className="relative flex justify-center mt-8 gap-16">
            {/* Flecha izquierda */}
           
              <img
              onClick={handlePrev}
                src={botonIzquierda}
                alt="Flecha izquierda"
                className="w-[40px] h-[40px] cursor-pointer mt-24"
              />
   

            {/* Tres imágenes en línea */}
            <div className="flex gap-16 mt-6 w-[934px] overflow-hidden">
              {/* Contenedor de las tres tarjetas */}
              <div
                className="flex gap-16 transition-transform duration-700 ease-in-out"
                ref={carouselRef}
                style={{
                  transform: `translateX(-${currentIndex * cardWidth * 3}px)`,
                }}
              >
                {tarjetas.map((tarjeta) => (
                  <div
                    key={tarjeta.id}
                    className="w-[259px] h-[172px] flex-shrink-0 rounded-[19px] shadow-lg overflow-hidden"
                  >
                    <img
                      src={tarjeta.imgSrc}
                      alt={tarjeta.altText}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Flecha derecha */}
          
              <img
               onClick={handleNext}
                src={botonDerecha}
                alt="Flecha derecha"
                className="w-[40px] h-[40px] cursor-pointer mt-24"
              />
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertising;
