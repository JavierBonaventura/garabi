import React, { useState, useEffect, useRef } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import imagenCirculo1 from "../../../images/Desktop/imagen-circulo-1.png";
import imagenCirculo2 from "../../../images/Desktop/imagen-circulo-2.png";
import imagenCirculo3 from "../../../images/Desktop/imagen-circulo-3.png";
import imagenCirculo4 from "../../../images/Desktop/imagen-circulo-5.png";

function AlgunosNumerosMobile() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const ref = useRef(null);

  const finalCount1 = 54.036;
  const finalCount2 = 26.925;
  const finalCount3 = 3.696;
  const finalCount4 = 150;

  const totalDuration = 2000; // 2 segundos

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
    }, 35);
  };

  const resetCounter = (setCount, finalCount) => {
    setCount(0);
    countUp(finalCount, setCount);
  };

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (inView) {
        countUp(finalCount1, setCount1);
        countUp(finalCount2, setCount2);
        countUp(finalCount3, setCount3);
        countUp(finalCount4, setCount4);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-start h-full px-0 padding-section"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full space-y-8">
          <h1 className="title-section !leading-9">
            Nuestra gestión en números
          </h1>

          {/* Contenedor de círculos */}
          <div className="flex flex-col items-center mt-6">
            <div className="flex justify-center gap-6 mb-4">
              {/* Círculo 1 */}
              <div className="flex flex-col items-center w-[167px]">
                <img
                  className="w-[110px] h-[110px] rounded-full object-cover transition-transform duration-300 ease-in-out cursor-pointer shadow-[4px_5px_10px_rgba(0,0,0,0.3)]"
                  src={imagenCirculo1}
                  alt="Imagen 1"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onClick={() => resetCounter(setCount1, finalCount1)}
                />
                <div className="mt-2 text-[#00942C] text-center font-fira-sans text-[30px] font-extrabold leading-[35px]">
                  {count1}
                </div>
                <div className="w-[105px] text-black text-center font-fira-sans text-[12px] font-medium uppercase pt-[5px]">
                  hectáreas administradas
                </div>
              </div>

              {/* Círculo 2 */}
              <div className="flex flex-col items-center w-[167px]">
                <img
                  className="w-[110px] h-[110px] rounded-full object-cover transition-transform duration-300 ease-in-out cursor-pointer shadow-[4px_5px_10px_rgba(0,0,0,0.3)]"
                  src={imagenCirculo2}
                  alt="Imagen 2"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onClick={() => resetCounter(setCount2, finalCount2)}
                />
                <div className="mt-2 text-[#00942C] text-center font-fira-sans text-[30px] font-extrabold leading-[35px]">
                  {count2}
                </div>
                <div className="w-[83px] text-black text-center font-fira-sans text-[12px] font-medium uppercase pt-[5px]">
                  hectáreas forestadas
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              {/* Círculo 3 */}
              <div className="flex flex-col items-center w-[167px]">
                <img
                  className="w-[110px] h-[110px] rounded-full object-cover transition-transform duration-300 ease-in-out cursor-pointer shadow-[4px_5px_10px_rgba(0,0,0,0.3)]"
                  src={imagenCirculo3}
                  alt="Imagen 3"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onClick={() => resetCounter(setCount3, finalCount3)}
                />
                <div className="mt-2 text-[#00942C] text-center font-fira-sans text-[30px] font-extrabold leading-[35px]">
                  {count3.toFixed(3)}
                </div>
                <div className="w-[127px] text-black text-center font-fira-sans text-[12px] font-medium uppercase pt-[5px]">
                  hectáreas de producción agrícola
                </div>
              </div>

              {/* Círculo 4 */}
              <div className="flex flex-col items-center w-[167px]">
                <img
                  className="w-[110px] h-[110px] rounded-full object-cover transition-transform duration-300 ease-in-out cursor-pointer shadow-[4px_5px_10px_rgba(0,0,0,0.3)]"
                  src={imagenCirculo4}
                  alt="Imagen 4"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onClick={() => resetCounter(setCount4, finalCount4)}
                />
                <div className="mt-2 text-[#00942C] text-center font-fira-sans text-[30px] font-extrabold leading-[35px]">
                  + {count4}
                </div>
                <div className="w-[167px] text-black text-center font-fira-sans text-[12px] font-medium uppercase pt-[5px]">
                  EMPLEADOS DIRECTOS E INDIRECTOS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgunosNumerosMobile;
