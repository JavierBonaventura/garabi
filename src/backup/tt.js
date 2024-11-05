import React from "react";
import { Link } from "react-router-dom";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import imagenCurvaImpacto from "../../../images/Mobile/imagenCurvaImpacto.png";
import botonDerecha from "../../../images/Desktop/botonDerecha.png";
import botonIzquierda from "../../../images/Desktop/botonIzquierda.png";

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
        <p>
          Preservación y promoción de especies nativas y bosques naturales
          (fotos de bosques nativos + fotos de viveros de árboles)
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Preservación y promoción del entorno natural de la fauna local</li>
          <li>
            Captura de carbón, como consecuencia de las plantaciones continuas de
            bosques para uso comercial y bosques naturales
          </li>
          <li>
            Diseño de un sistema de gestión de residuos y optimización del uso de
            productos residuales en nuevas industrias
          </li>
        </ul>
      </>
    ),
    image: medioAmbiente,
  },
  {
    title: "Económico",
    content: (
      <p>
        Es nuestro fin de aportar al crecimiento económico en la zona y en el
        país, creando operaciones con un alto valor agregado y un potencial
        importante de exportación así contribuyendo a la apertura del país al
        resto del mundo.
      </p>
    ),
    image: economico,
  },
  {
    title: "Social",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
        augue, finibus sed magna varius, egestas varius ex. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Donec nisl augue, finibus sed
        magna varius, egestas varius ex. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec nisl augue.
      </p>
    ),
    image: social,
  },
];

function Card({ title, content, image }) {
  return (
    <div>
      <div
        className="ml-8 w-[327px] h-[30px] flex-shrink-0 mt-6"
        style={{
          color: "#000",
          fontFamily: "Fira Sans",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "50px",
          letterSpacing: "-1px",
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: "329px",
          height: "auto",
          flexShrink: 0,
          color: "#000",
          fontFamily: "Fira Sans",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "17px",
        }}
        className="mt-6 ml-8"
      >
        {content}
      </div>
      <div style={{ position: "relative" }}>
        <img
          src={image}
          alt={Tarjeta ${title}}
          style={{
            margin: "0 auto",
            width: "83%",
            height: "143px",
            borderRadius: "8px",
            marginTop: "40px",
          }}
        />

        {/* Botón izquierda */}
        <img
          src={botonIzquierda}
          alt="Botón Izquierda"
          style={{
            position: "absolute",
            top: "50%",
            left: "12%",
            transform: "translateY(-50%) ",
            width: "24px",
            height: "24px",
            flexShrink: 0,
          }}
        />

        {/* Botón derecha */}
        <img
          src={botonDerecha}
          alt="Botón Derecha"
          style={{
            position: "absolute",
            top: "50%",
            right: "12%",
            transform: "translateY(-50%) ",
            width: "24px",
            height: "24px",
            flexShrink: 0,
          }}
        />
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
            backgroundImage: url(${fondoMobile}),
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
          }}
        >
          <div
            className="ml-8 w-[260px] h-[88px] flex-shrink-0 mt-[30px]"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "36px",
              fontWeight: "900",
              lineHeight: "32px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Impacto
          </div>
          <div
            className="ml-8 w-[315px] h-[72px] flex-shrink-0 mt-36"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "17px",
              letterSpacing: "-1px",
            }}
          >
            Descubrí cómo nuestra empresa se enfoca en reducir su impacto
            ambiental y fomentar un cambio positivo para el medio ambiente y la
            comunidad, desde lo económico hasta lo social
          </div>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImpactoMobileMain;