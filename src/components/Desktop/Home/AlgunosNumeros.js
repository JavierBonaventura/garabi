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

  const finalCount1 = 47865;
  const finalCount2 = 25926;
  const finalCount3 = 1840;
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
      <div className="w-full h-[700px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex h-full"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 w-[648px] h-[76px] text-black text-center font-fira-sans text-[60px] font-extrabold leading-[60px] tracking-[-1px]">
            Algunos números
          </div>
          <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 w-[290px] h-[32px] text-black text-center font-fira-sans text-[24px] font-normal leading-[32px] tracking-[-1px] flex-shrink-0">
            Esto logramos en nuestros 20 años de trayectoria
          </div>

          <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 flex gap-[100px] justify-center">
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
                <div className="text-[#00942C] text-center font-fira-sans text-[62.133px] font-extrabold leading-[41.422px] pt-8">
                  {count1}
                </div>
                <div className="text-[#000] text-center font-fira-sans text-[20.711px] font-medium tracking-[5.178px] uppercase pt-[20px] leading-none">
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
                <div className="text-[#00942C] text-center font-fira-sans text-[62.133px] font-extrabold leading-[41.422px] pt-8">
                  {count2}
                </div>
                <div className="text-[#000] text-center font-fira-sans text-[20.711px] font-medium tracking-[5.178px] uppercase pt-[20px] leading-none">
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
                <div className="text-[#00942C] text-center font-fira-sans text-[62.133px] font-extrabold leading-[41.422px] pt-12">
                  {count3}
                </div>
                <div className="text-[#000] text-center font-fira-sans text-[20.711px] font-medium tracking-[5.178px] uppercase pt-[20px] leading-none">
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
                <div className="text-[#00942C] text-center font-fira-sans text-[62.133px] font-extrabold leading-[41.422px] pt-12">
                  + {count4}
                </div>
                <div className="text-[#000] text-center font-fira-sans text-[20.711px] font-medium tracking-[5.178px] uppercase pt-[20px] leading-none">
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
