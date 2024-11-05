import React, { useRef, useState } from 'react';
import logoNuestraHistoria from "../images/Desktop/logoNuestraHistoria.png"; // Asegúrate de tener esta imagen importada

const Carousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // Empezamos con el índice de la tarjeta central
  const cardHeight = 103; // Ajuste de altura para las tarjetas
  const totalCards = 4; // Total de tarjetas

  // Swipe detection variables
  const startY = useRef(0);
  const endY = useRef(0);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY; // Get initial touch position
  };

  const handleTouchMove = (e) => {
    endY.current = e.touches[0].clientY; // Update position on move
  };

  const handleTouchEnd = () => {
    if (startY.current - endY.current > 50) {
      // Swipe up
      handleNext();
    } else if (endY.current - startY.current > 50) {
      // Swipe down
      handlePrev();
    }
  };

  const handleNext = () => {
    const carousel = carouselRef.current;
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards); // Actualiza el índice

    if (carousel) {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateY(-${cardHeight}px)`;

      setTimeout(() => {
        carousel.appendChild(carousel.firstElementChild);
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateY(0)';
      }, 500);
    }
  };

  const handlePrev = () => {
    const carousel = carouselRef.current;
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards); // Actualiza el índice

    if (carousel) {
      carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
      carousel.style.transition = 'none';
      carousel.style.transform = `translateY(-${cardHeight}px)`;

      setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = 'translateY(0)';
      }, 10); // Breve pausa para aplicar la transición
    }
  };

  return (
    <section 
      style={{
        height: '100vh',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        style={{
          position: 'relative',
          width: '300px',
          height: '309px', // Espacio para mostrar 3 tarjetas de 103px cada una
          overflow: 'hidden'
        }}
      >
        <div 
          ref={carouselRef} 
          style={{
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.5s ease-in-out',
            alignItems: 'center' // Para centrar las tarjetas
          }}
        >
          {[2009, 2010, 2011, 2012].map((year, index) => {
            const opacity = index === activeIndex ? 1 : 0.5; // Establece la opacidad
            return (
              <div
                key={index}
                style={{
                  width: '269px',
                  height: '83px',
                  borderRadius: '3px',
                  border: '1px solid #00942C',
                  background: '#F5F4FF',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  marginTop: '20px',
                  opacity: opacity, // Aplica la opacidad
                  transition: 'opacity 0.5s ease-in-out' // Añadir transición de opacidad
                }}
              >
                <img
                  src={logoNuestraHistoria}
                  alt="Logo Nuestra Historia"
                  style={{
                    width: '49px',
                    height: '55px',
                    flexShrink: 0,
                    marginRight: '10px'
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      color: '#000',
                      fontFamily: 'Fira Sans',
                      fontSize: '13px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '20px',
                    }}
                  >
                    {year}
                  </span>
                  <p
                    style={{
                      width: '169px',
                      height: '30px',
                      color: '#000',
                      fontFamily: 'Fira Sans',
                      fontSize: '11px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '17px',
                    }}
                  >
                    Esto es lo que hicimos en el año y los logros que conseguimos.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
