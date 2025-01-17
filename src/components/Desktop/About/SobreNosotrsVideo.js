import React, { useState } from "react";
import Video from "../../../images/Desktop/hero-garabi-alta.mp4";
import videoSobreNosotros from "../../../images/Desktop/videoSobreNosotrosSinBoton.png";

function SobreNosotrosVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          width: "80px", // Ajusta el tamaño del botón
          height: "80px",
          border: "2px solid white", // Borde blanco
        }}
      >
        <span
          className="text-3xl font-bold"
          style={{
            marginLeft: "2px", // Ajuste de posición para centrar el triángulo
          }}
        >
          ▶
        </span>
      </button>

      {/* Modal con el video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
          onClick={closeModal} // Cierra el modal si haces clic en el fondo
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Evita que el clic en el video cierre el modal
          >

            <video
              controls
              autoPlay
              className="max-w-[80vw] max-h-[80vh]"
            >
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
