import React, { useState, useEffect } from "react";
import Video from "../../../images/Desktop/hero-garabi-alta.mp4";
import videoSobreNosotros from "../../../images/Desktop/videoSobreNosotrosSinBoton.png";

function SobreNosotrosVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Limpieza al desmontar el componente
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-[842px] w-full relative">
      <img
        src={videoSobreNosotros}
        alt="Sobre Nosotros"
        className="object-cover w-full h-full z-10"
      />

      {/* Botón de Play estilo YouTube */}
      <button
        onClick={openModal}
        className="absolute z-20 text-white bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 flex justify-center items-center"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80px",
          height: "80px",
          border: "2px solid white",
        }}
      >
        <span
          className="text-3xl font-bold"
          style={{
            marginLeft: "2px",
          }}
        >
          ▶
        </span>
      </button>

      {/* Modal con el video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
          onClick={closeModal} // Cierra el modal si haces clic en el fondo
        >
          <div
            className="relative bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Evita que el clic en el video cierre el modal
          >
            {/* Contenedor del botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 z-50"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* Contenedor del video */}
            <video controls autoPlay className="max-w-[80vw] max-h-[80vh]">
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default SobreNosotrosVideo;
