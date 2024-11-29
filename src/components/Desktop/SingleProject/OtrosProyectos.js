import React, { useState, useRef, useEffect } from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import otrosproyectosslider1 from "../../../images/Desktop/otrosproyectosslider1.png";
import otrosproyectosslider2 from "../../../images/Desktop/otrosproyectosslider1.png";
import otrosproyectosslider3 from "../../../images/Desktop/otrosproyectosslider1.png";
import otrosproyectosslider4 from "../../../images/Desktop/otrosproyectosslider1.png";

import botonDerecha from "../../../images/Desktop/botonDerecha.png";
import botonIzquierda from "../../../images/Desktop/botonIzquierda.png";

const tarjetas = [
  {
    id: 1,
    imgSrc: otrosproyectosslider1,
    altText: "Slider 1",
    title: "Margaret Turner",
    description: "Advertising Internet Online Opportunities To Explore",
  },
  {
    id: 2,
    imgSrc: otrosproyectosslider2,
    altText: "Slider 2",
    title: "Margaret Turner",
    description: "Advertising Internet Online Opportunities To Explore",
  },
  {
    id: 3,
    imgSrc: otrosproyectosslider3,
    altText: "Slider 3",
    title: "Margaret Turner",
    description: "Advertising Internet Online Opportunities To Explore",
  },
  {
    id: 4,
    imgSrc: otrosproyectosslider4,
    altText: "Slider 4",
    title: "Margaret Turner",
    description: "Advertising Internet Online Opportunities To Explore",
  },
];

function OtrosProyectos() {
  const carouselRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = tarjetas.length - 2;
  const cardWidth = 499; // Ancho de una tarjeta (ajusta según tu diseño)

  // Manejar el siguiente carrusel
  const handleNext = () => {

    if (isTransitioning || !carouselRef.current) return; // Comprobar que carouselRef no es null
    setIsTransitioning(true);

    const carousel = carouselRef.current;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${cardWidth}px)`; // Mover hacia la izquierda

    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)"; // Volver al inicio
      carousel.appendChild(carousel.firstChild); // Mover la tarjeta al final
      setIsTransitioning(false);
    }, 500);
  };

  // Manejar el anterior carrusel
  const handlePrev = () => {

    if (isTransitioning || !carouselRef.current) return; // Comprobar que carouselRef no es null
    setIsTransitioning(true);

    const carousel = carouselRef.current;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${cardWidth}px)`; // Preparar el desplazamiento

    carousel.insertBefore(carousel.lastChild, carousel.firstChild); // Mover la tarjeta al inicio

    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = "translateX(0)"; // Mover a la posición original
      setIsTransitioning(false);
    }, 10);
  };

  // Asegurarnos de que el ref está disponible después de que el componente se haya montado
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
          {/* Título y botón en la misma línea */}
          <div className="flex justify-center items-center pt-32">
            <div className="w-[660px] text-black font-fira-sans text-[40px] font-bold leading-[50px]">
              Otros proyectos
            </div>
            {/* Botón "Ver todos" */}
            <div className="ml-8 w-[212px] h-[50px] bg-[#00942C] rounded-[5px] flex-shrink-0 flex justify-center items-center">
              <div className="flex flex-col justify-center w-[212px] h-[16px] text-white text-[14px] font-fira-sans font-medium leading-normal tracking-[4px] uppercase text-center">
                Ver todos
              </div>
            </div>
          </div>

          {/* Contenedor de las tarjetas con flechas a los lados */}
          <div className="relative flex justify-center mt-8 gap-16">
            {/* Flecha izquierda */}
           
              <img
                onClick={handlePrev}
                src={botonIzquierda}
                alt="Flecha izquierda"
                className="w-[40px] h-[40px] mt-32 cursor-pointer "
              />
      
            <div className="flex w-[934px] overflow-hidden ">
              {/* Contenedor de tarjetas con overflow y transición */}
              <div
                className="flex gap-16 mt-8 pb-24 transition-transform duration-700 ease-in-out"
                ref={carouselRef}     
              >
                {tarjetas.map((tarjeta) => (
                  <div
                    key={tarjeta.id}
                    className="w-[435px] h-[350px] flex-shrink-0 rounded-[19px]"
                  >
                    <img
                      src={tarjeta.imgSrc}
                      alt={tarjeta.altText}
                      className="w-full h-[213px] object-cover"
                    />
                    {/* Texto debajo de la imagen */}
                    <div className="px-4 py-2">
                      <div className="text-[14px] font-fira-sans font-medium text-black tracking-[4px] uppercase">
                        {tarjeta.title}
                      </div>
                      <div className="text-[22px] font-fira-sans font-medium text-black leading-[32px] mt-2">
                        {tarjeta.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Flecha derecha */}
           
              <img
                   onClick={handleNext}
                src={botonDerecha}
                alt="Flecha derecha"
                className="w-[40px] h-[40px]  mt-32 cursor-pointer"
              />

          </div>
        </div>
      </div>
    </div>
  );
}

export default OtrosProyectos;
