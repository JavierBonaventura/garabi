import React, { useState, useRef } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoNuestraHistoria from "../../../images/Desktop/logoNuestraHistoria.png";

const tarjetas = [
  { year: 2009, description: "Esto es lo que hicimos en el año y los logros que conseguimos." },
  { year: 2010, description: "Esto es lo que hicimos en el año y los logros que conseguimos." },
  { year: 2011, description: "Esto es lo que hicimos en el año y los logros que conseguimos." },
  { year: 2012, description: "Esto es lo que hicimos en el año y los logros que conseguimos." },
  { year: 2013, description: "Esto es lo que hicimos en el año y los logros que conseguimos." },
  { year: 2014, description: "Esto es lo que hicimos en el año y los logros que conseguimos." },
];

function NuestraHistoriaMobile() {
  const [indiceActual, setIndiceActual] = useState(0);
  const [animacion, setAnimacion] = useState(false);
  const [desplazamiento, setDesplazamiento] = useState(0);
  
  // Variables de detección de swipe
  const startY = useRef(0);
  const endY = useRef(0);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY; // Guardar la posición inicial del toque
  };

  const handleTouchMove = (e) => {
    endY.current = e.touches[0].clientY; // Actualizar la posición final del toque
  };

  const handleTouchEnd = () => {
    // Comprobar la dirección del deslizamiento
    if (startY.current - endY.current > 50) {
      siguiente(); // Deslizamiento hacia arriba
    } else if (endY.current - startY.current > 50) {
      anterior(); // Deslizamiento hacia abajo
    }
  };

  const siguiente = () => {
    if (animacion) return; // Evitar múltiples animaciones
    setAnimacion(true);
    setDesplazamiento(-97); // Mueve hacia arriba
    setTimeout(() => {
      setIndiceActual((prevIndice) => (prevIndice + 1) % tarjetas.length);
      setAnimacion(false);
      setDesplazamiento(0);
    }, 500);
  };

  const anterior = () => {
    if (animacion) return; // Evitar múltiples animaciones
    setAnimacion(true);
    setDesplazamiento(97); // Mueve hacia abajo
    setTimeout(() => {
      setIndiceActual((prevIndice) => (prevIndice - 1 + tarjetas.length) % tarjetas.length);
      setAnimacion(false);
      setDesplazamiento(0);
    }, 500);
  };

  const tarjetasVisibles = [
    tarjetas[indiceActual],
    tarjetas[(indiceActual + 1) % tarjetas.length],
    tarjetas[(indiceActual + 2) % tarjetas.length],
    tarjetas[(indiceActual + 3) % tarjetas.length],
  ];

  return (
    <div style={{ overflow: "hidden",  }}>
      <div className="w-full h-[771px] relative flex flex-col items-center justify-center">
        <div
          className="relative z-10 flex flex-col items-center h-[300px] overflow-hidden"
          style={{
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
      
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          <div
            className="flex flex-col items-center"
            style={{
              transform: `translateY(${animacion ? desplazamiento + "px" : "0px"})`,
              transition: animacion ? "transform 0.5s ease" : "none",
              height: "250px",
              
            }}
          >
            {tarjetasVisibles.map((tarjeta, index) => (
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
                  margin: "10px 0",
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
                <div className="flex flex-col">
                  <span
                    style={{
                      color: "#000",
                      fontFamily: "Fira Sans",
                      fontSize: "13px",
                      fontWeight: 500,
                      lineHeight: "20px",
                    }}
                  >
                    {tarjeta.year}
                  </span>
                  <p
                    style={{
                      width: "169px",
                      height: "30px",
                      color: "#000",
                      fontFamily: "Fira Sans",
                      fontSize: "11px",
                      fontWeight: 400,
                      lineHeight: "17px",
                    }}
                  >
                    {tarjeta.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestraHistoriaMobile;
