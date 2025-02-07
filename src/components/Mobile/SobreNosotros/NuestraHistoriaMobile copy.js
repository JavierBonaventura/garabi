import React, { useRef, useState } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoNuestraHistoria from "../../../images/Desktop/logoNuestraHistoria.png";
import arbolesProyectos from "../../../images/Mobile/arbolesProyectos.png";

function NuestraHistoriaMobile() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const cardHeight = 103;

  const startY = useRef(0);
  const endY = useRef(0);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    document.body.style.overflow = "hidden";
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    endY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    document.body.style.overflow = "auto";
    if (startY.current - endY.current > 50) {
      handleNext();
    } else if (endY.current - startY.current > 50) {
      handlePrev();
    }
  };

  const handleNext = () => {
    const carousel = carouselRef.current;
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);

    if (carousel) {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateY(-${cardHeight}px)`;

      setTimeout(() => {
        carousel.appendChild(carousel.firstElementChild);
        carousel.style.transition = "none";
        carousel.style.transform = "translateY(0)";
      }, 500);
    }
  };

  const handlePrev = () => {
    const carousel = carouselRef.current;
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);

    if (carousel) {
      carousel.insertBefore(
        carousel.lastElementChild,
        carousel.firstElementChild
      );
      carousel.style.transition = "none";
      carousel.style.transform = `translateY(-${cardHeight}px)`;

      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = "translateY(0)";
      }, 10);
    }
  };

  // Agregar este objeto con los datos históricos
  const historicalData = [
    {
      year: 1976,
      description:
        "Grupo Garabí comienza su actividad con la administración de dos establecimientos forestales, las localidades de Loreto y Santa Rosa.",
    },
    {
      year: 1983,
      description:
        "La empresa incorpora a su administración dos nuevas sociedades en la localidad de Gobernador Virasoro. Cabe destacar que tres de estas empresas continúan bajo la administración de GG.",
    },
    {
      year: 2002,
      description:
        "Primeros proyectos productivos en conjunto con el grupo Eidico en la zona de Virasoro.",
    },
    {
      year: 2007,
      description: "Gestión de nuevos emprendimiento de  inversores locales.",
    },
    {
      year: 2012,
      description:
        "Captación de los primeros proyectos “family funds” de origen europeo y primeros clientes con administración integral por parte de grupo Garabí.",
    },
    {
      year: 2014,
      description:
        "Alianza con establecimiento Las Marías y primeros proyectos de plantación de yerba mate.",
    },
    {
      year: 2015,
      description:
        "Gran crecimiento de administraciones de la mano de clientes europeos.",
    },
    {
      year: 2018,
      description: "Incorporación socio belga a Grupo Garabí.",
    },
    {
      year: 2021,
      description:
        "Alianza estratégica con grupo industrial austriaco - belga. Se duplica la superficie administrada con el ingreso de un grupo austriaco a GG.",
    },
    {
      year: 2023,
      description:
        "Alianza estratégica con grupo industrial de origen francés y belga.",
    },
  ];

  const totalCards = historicalData.length;

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="w-full h-[790px] relative">
        <div
          className="relative z-10 flex flex-col h-full padding-section"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          {/* Centered text container */}
          <div className="mx-8 gap-title-paragraph">
            <h1 className="title-section">Nuestra historia</h1>
            <p className="paragraph-section">
              Nuestra trayectoria, construida a lo largo de más de 40 años, ha
              estado marcada por la innovación, el compromiso y el crecimiento
              constante.
            </p>
          </div>

          <div
            style={{
              margin: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                position: "relative",
                width: "300px",
                height: "309px",
                overflow: "hidden",
              }}
            >
              <div
                ref={carouselRef}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.5s ease-in-out",
                  alignItems: "center",
                }}
              >
                {historicalData.map((item, index) => {
                  const opacity = index === activeIndex ? 1 : 0.5;
                  return (
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
                        marginTop: "20px",
                        opacity: opacity,
                        transition: "opacity 0.5s ease-in-out",
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
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            color: "#000",
                            fontFamily: "Fira Sans",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "20px",
                          }}
                        >
                          {item.year}
                        </span>
                        <p
                          style={{
                            marginBottom: "30px",
                            width: "190px",
                            height: "30px",
                            color: "#000",
                            fontFamily: "Fira Sans",
                            fontSize: "9px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "11px",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              right: "7%",
              top: "45%",
              transform: "translateY(-50%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "140px",
              }}
            >
              {[...Array(totalCards)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    border: "1px solid #00942C",
                    backgroundColor: index === activeIndex ? "#00942C" : "#FFF",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute z-10 w-full" style={{ top: "520px" }}>
            <img
              src={arbolesProyectos}
              alt="Árboles Proyectos"
              style={{ width: "100vw", height: "300px" }}
            />

            {/* Nuevo div superpuesto */}
            <div
              className="absolute"
              style={{
                width: "200px",
                height: "100vw",
                transform: "rotate(90deg)",
                flexShrink: 0,
                background:
                  "linear-gradient(90deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
                top: "0%",
                left: "100%",
                transformOrigin: "top left",
              }}
            />

            <div
              className="absolute inset-0 flex flex-col justify-center items-center"
              style={{ width: "100%", margin: "0 auto", textAlign: "center" }}
            >
              <div
                className="text-center"
                style={{
                  color: "#00942C",
                  fontFamily: "Fira Sans",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "27px",
                  maxWidth: "379px",
                }}
              >
                Contáctanos ahora para darle forma a tu futuro verde
              </div>

              <a
                href="/contacto"
                className="mt-6 flex justify-center items-center bg-white cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5"
                style={{
                  width: "158px",
                  height: "36px",
                  flexShrink: 0,
                  borderRadius: "5px",
                  border: "1px solid #00942C",
                }}
              >
                <span
                  style={{
                    color: "#00942C",
                    textAlign: "center",
                    fontFamily: "Fira Code",
                    fontSize: "12px",
                    fontWeight: "400",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Contáctanos
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestraHistoriaMobile;
