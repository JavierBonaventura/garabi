import React, { useState, useEffect } from "react";
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

            {/* Contenedor del iframe para el video de YouTube */}
            <iframe
              width="1100"
              height="600"
              src="https://www.youtube.com/embed/in3WqWBq5qw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="max-w-[80vw] max-h-[80vh]"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default SobreNosotrosVideo;
