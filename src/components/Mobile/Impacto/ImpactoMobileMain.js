import React, { useRef, useState } from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import imagenCurvaImpacto from "../../../images/Mobile/imagenCurvaImpacto.png";
import botonIzquierda from "../../../images/Desktop/botonIzquierda.png";
import botonDerecha from "../../../images/Desktop/botonDerecha.png";
import Politicas from "../../Desktop/Home/Politicas";
import medioAmbiente1 from "../../../images/Mobile/medioAmbiente.png";
import medioAmbiente2 from "../../../images/Mobile/medioAmbiente.png";
import medioAmbiente3 from "../../../images/Mobile/medioAmbiente.png";

import economico1 from "../../../images/Mobile/economico.png";
import economico2 from "../../../images/Mobile/economico.png";
import economico3 from "../../../images/Mobile/economico.png";

import social1 from "../../../images/Mobile/social.png";
import social2 from "../../../images/Mobile/social.png";
import social3 from "../../../images/Mobile/social.png";

const cardsData = [
  {
    title: "Medio ambiente",
    content: (
      <>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Preservación y promoción de especies nativas y bosques naturales.
          </li>
          <li>
            Preservación y promoción del entorno natural de la fauna local.
          </li>
          <li>
            Implementar sistemas de prevención y control de incendios, como la
            creación de cortafuegos, monitoreos y campañas de sensibilización en
            las comunidades locales sobre cómo prevenir incendios.
          </li>
          <li>
            Diseño de un sistema de gestión de residuos Conservación de fuentes
            de agua: Crear zonas de protección alrededor de ríos, arroyos y
            lagos dentro del bosque, protegiendo las cuencas hidrográficas de la
            contaminación y el sobreuso. Estas áreas pueden ser declaradas
            "zonas de conservación" donde no se permite la actividad comercial
            intensiva.
          </li>
        </ul>
      </>
    ),
    images: [medioAmbiente1, medioAmbiente2, medioAmbiente3],
  },
  {
    title: "Económico",
    content: (
      <ul className="list-disc pl-5 mt-2">
        <li>
          Creación de empleos directos e indirectos: La empresa puede contratar
          a trabajadores locales para actividades que requieran los diferentes
          proyectos.
        </li>
        <li>
          La empresa puede contribuir a la sostenibilidad económica mediante la
          diversificación de productos forestales, el impulso a la economía
          circular y la creación de cadenas de valor que generen ingresos de
          manera responsable. Además, puede establecer acuerdos comerciales que
          promuevan el uso eficiente de los recursos, la reducción de residuos y
          el apoyo a prácticas que fortalezcan la viabilidad económica a largo
          plazo, sin comprometer la salud de los ecosistemas.
        </li>
      </ul>
    ),
    images: [economico1, economico2, economico3],
  },
  {
    title: "Social",
    content: (
      <ul className="list-disc pl-5 mt-2">
        <li>
          Consultas comunitarias y participación: Involucrar a las comunidades
          locales en la toma de decisiones sobre la gestión del bosque, mediante
          consultas públicas o la creación de comités de gestión comunitarios,
          para que las actividades forestales estén alineadas con sus intereses
          y necesidades.
        </li>
        <li>
          Colaboración establecimientos educativos de diferentes maneras:
          mediante el dictado de cursos, capacitaciones en ciertos temas,
          colaboración en algunos proyectos particulares, ofrecer posibilidad de
          pasantías.
        </li>
        <li>
          Promoción de salud y seguridad: Asegurar que los trabajadores
          forestales reciban capacitación en seguridad laboral, uso de equipos
          de protección y primeros auxilios.
        </li>
        <li>
          Establecer alianzas con organizaciones no gubernamentales locales para
          apoyar iniciativas que beneficien a las comunidades, como proyectos
          educativos, de salud o de desarrollo económico
        </li>
      </ul>
    ),
    images: [social1, social2, social3],
  },
];

function Card({ title, content, images }) {
  const initialCards = images.map((image) => ({ image }));
  const [cards, setCards] = useState(initialCards);
  const carouselRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  const cardWidth = 329; // Ancho de cada tarjeta, ajusta según el tamaño real

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

    setCards((prevCards) => [
      prevCards[prevCards.length - 1],
      ...prevCards.slice(0, -1),
    ]);

    carouselRef.current.style.transition = "none";
    carouselRef.current.style.transform = `translateX(-${cardWidth}px)`;

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
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      handleNext();
    } else if (endX.current - startX.current > 50) {
      handlePrev();
    }
  };

  return (
    <div>
      {/* Título */}
      <div className="w-[327px] h-[30px] flex-shrink-0 text-black font-fira-sans text-[24px] font-[700] leading-[50px] tracking-[-1px] mx-auto">
        {title}
      </div>

      {/* Contenido */}
      <div className="w-[329px] h-auto flex-shrink-0 text-black font-fira-sans text-[12px] font-normal leading-[17px] mx-auto mt-[20px]">
        {content}
      </div>

      {/* Contenedor principal del carrusel */}
      <div className="relative w-full flex items-center justify-center">
        {/* Contenedor de las imágenes con botones fijos */}
        <div className="relative w-[329px] overflow-hidden">
          {/* Botón de navegación izquierda */}
          <button
            onClick={handlePrev}
            className="absolute z-10 left-[10px] top-[57%] transform -translate-y-[50%]"
          >
            <img
              src={botonIzquierda}
              alt="Botón Izquierda"
              className="w-[24px] h-[24px]"
            />
          </button>

          {/* Carrusel de imágenes */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={carouselRef}
              className="flex"
              style={{ width: `${cards.length * cardWidth}px` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={card.image}
                    alt={`Tarjeta ${title} ${index + 1}`}
                    className="w-[329px] h-[143px] rounded-[8px] mt-[40px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botón de navegación derecha */}
          <button
            onClick={handleNext}
            className="absolute z-10 right-[10px] top-[57%] transform -translate-y-[50%]"
          >
            <img
              src={botonDerecha}
              alt="Botón Derecha"
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function ImpactoMobileMain() {
  return (
    <div>
      <div className="w-full h-[auto] relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100 -mt-6"></div>
        <img
          src={imagenCurvaImpacto}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20 max-h-[250px]"
          style={{
            mixBlendMode: "normal",
            top: "26px",
            maxHeight: "222px",
          }}
        />

        <div
          className="relative z-10 flex flex-col h-full"
          style={{
            zIndex: "10",
            backgroundImage: `url(${fondoMobile})`,
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          <div className="ml-8 w-[260px] h-[88px] flex-shrink-0 mt-[30px] text-black font-fira-sans text-[36px] font-[900] leading-[32px] tracking-[-1px]">
            Impacto
          </div>

          <div className="w-[315px] h-[100px] flex-shrink-0 mt-[136px] text-black font-fira-sans text-[12px] font-normal leading-[17px] tracking-[-1px] mx-auto">
            En Grupo Garabí, buscamos gestionar proyectos forestales que
            promuevan la conservación del medio ambiente, fomenten la
            biodiversidad y generen un impacto positivo y sostenible en las
            comunidades locales. Hacemos foco en estos tres pilares de la
            siguiente manera
          </div>

          <div className="flex flex-col mt-2">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                content={card.content}
                images={card.images}
              />
            ))}
          </div>
        </div>
        <Politicas />
      </div>
    </div>
  );
}

export default ImpactoMobileMain;
