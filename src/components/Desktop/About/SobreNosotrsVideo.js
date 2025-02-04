"use client";

import { useState, useRef, useEffect } from "react";
import videoSobreNosotros from "../../../images/Desktop/videoSobreNosotrosSinBoton.png";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);

  // Función para recargar el componente después de 57 segundos
  useEffect(() => {
    let timer;
    if (isPlaying) {
      // Establecer un temporizador para recargar el componente después de 57 segundos
      timer = setTimeout(() => {
        setIsPlaying(false);
        iframeRef.current.src = ""; // Detener el video al quitar la fuente
        iframeRef.current.src =
          "https://www.youtube.com/embed/in3WqWBq5qw?controls=0&showinfo=0&rel=0"; // Reestablecer la fuente
      }, 57000); // 57 segundos
    }

    // Limpiar el temporizador cuando el componente se desmonte o se detenga la reproducción
    return () => clearTimeout(timer);
  }, [isPlaying]);

  const handlePlay = () => {
    if (iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = `${src}&autoplay=1`;
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-[40vh] lg:h-[80vh]">
      {!isPlaying && (
        <img
          src={videoSobreNosotros}
          alt="Video Preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <iframe
        ref={iframeRef}
        className={`w-full h-full ${!isPlaying ? "hidden" : "block"}`}
        src="https://www.youtube.com/embed/in3WqWBq5qw?controls=0&showinfo=0&rel=0"
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 hover:scale-110"
          >
            <circle cx="12" cy="12" r="12" fill="#00561A" />
            <polygon points="9,7 17,12 9,17" fill="white" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
