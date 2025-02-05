import React, { useState, useEffect, useRef } from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import imagenCirculo1 from "../../../images/Desktop/imagen-circulo-1.png";
import imagenCirculo2 from "../../../images/Desktop/imagen-circulo-2.png";
import imagenCirculo3 from "../../../images/Desktop/imagen-circulo-3.png";
import imagenCirculo4 from "../../../images/Desktop/imagen-circulo-4.png";

function AlgunosNumeros() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  const finalCount1 = 54.036;
  const finalCount2 = 26.925;
  const finalCount3 = 3.696;
  const finalCount4 = 150;

  // Tiempo total de referencia (en milisegundos)
  const totalDuration = 2000;

  // Función para contar hasta el número final
  const countUp = (target, setCount) => {
    let start = 0;
    const increment = Math.ceil(target / (totalDuration / 100));
    const timer = setInterval(() => {
      if (start >= target) {
        clearInterval(timer);
      } else {
        start += increment;
        if (start > target) start = target;
        setCount(start);
      }
    }, 35); // Se ejecuta cada 35 ms
  };

  // Función para reiniciar el contador
  const resetCounter = (setCount, finalCount) => {
    setCount(0);
    countUp(finalCount, setCount);
  };

  // Manejar el scroll para iniciar el conteo solo una vez
  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0; // Parcialmente visible

      if (inView && !hasStarted) {
        setHasStarted(true); // Evita reiniciar múltiples veces
        countUp(finalCount1, setCount1);
        countUp(finalCount2, setCount2);
        countUp(finalCount3, setCount3);
        countUp(finalCount4, setCount4);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasStarted]);

  return (
    <div ref={ref}>
      <div className="w-full  overflow-hidden">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col h-full padding-section space-y-24 2xl:space-y-32"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full gap-title-paragraph">
            <h1 className="title-section">Nuestros resultados</h1>
            <p className="paragraph-section hidden">
              Esto logramos en nuestros 20 años de trayectoria
            </p>
          </div>
          <div className="flex  justify-between w-[80%] 2xl:w-2/3 mx-auto">
            {/* Bloque de imagen 1 */}
            <div className="flex flex-col items-center">
              <img
                className="w-[198px] h-[198px] rounded-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
                src={imagenCirculo1}
                alt="Imagen 1"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => resetCounter(setCount1, finalCount1)} // Reinicia el contador al hacer clic
              />
              <div className="w-[219px] h-[130.083px] flex-shrink-0 flex flex-col justify-center items-center pt-[55px]">
                <div className="numbers pt-8">{count1}</div>
                <div className="title-numbers pt-[20px]">
                  hectáreas administradas
                </div>
              </div>
            </div>

            {/* Bloque de imagen 2 */}
            <div className="flex flex-col items-center">
              <img
                className="w-[198px] h-[198px] rounded-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
                src={imagenCirculo2}
                alt="Imagen 2"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => resetCounter(setCount2, finalCount2)} // Reinicia el contador al hacer clic
              />
              <div className="w-[219px] h-[130.083px] flex-shrink-0 flex flex-col justify-center items-center pt-[55px]">
                <div className="numbers pt-8">{count2}</div>
                <div className="title-numbers pt-[20px]">
                  hectáreas forestadas
                </div>
              </div>
            </div>

            {/* Bloque de imagen 3 */}
            <div className="flex flex-col items-center">
              <img
                className="w-[198px] h-[198px] rounded-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
                src={imagenCirculo3}
                alt="Imagen 3"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => resetCounter(setCount3, finalCount3)} // Reinicia el contador al hacer clic
              />
              <div className="w-[219px] h-[130.083px] flex-shrink-0 flex flex-col justify-center items-center pt-[55px]">
                <div className="numbers pt-8 ">{count3.toFixed(3)}</div>
                <div className="title-numbers pt-[20px]">
                  hectáreas con yerba mate
                </div>
              </div>
            </div>

            {/* Bloque de imagen 4 */}
            <div className="flex flex-col items-center">
              <img
                className="w-[198px] h-[198px] rounded-full object-cover transition-transform duration-300 ease-in-out cursor-pointer"
                src={imagenCirculo4}
                alt="Imagen 4"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => resetCounter(setCount4, finalCount4)} // Reinicia el contador al hacer clic
              />
              <div className="w-[219px] h-[130.083px] flex-shrink-0 flex flex-col justify-center items-center pt-[55px]">
                <div className="numbers pt-8">+ {count4}</div>
                <div className="title-numbers pt-[20px]">
                  empleados directos e indirectos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgunosNumeros;
