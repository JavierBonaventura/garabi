import React from "react";
import imagenCurva from "../../../images/Desktop/imagenCurva.png"; // Importa la imagen curva
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";

function EnMarcha() {
  return (
    <div>
      <div className="w-full relative overflow-hidden">
        {/* Contenedor con el fondo */}
        <div
          className="relative flex flex-col h-full z-0 py-28 2xl:py-36"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-3/4 mx-auto space-y-12">
            {/* Título */}
            <h1 className="text-black text-5xl 2xl:text-[60px] font-fira-sans font-extrabold leading-[60px] tracking-[-1px] te">
              Querés poner en marcha
              <br /> tu proyecto? Escribinos!
            </h1>

            {/* Botones */}
            <div className="flex  gap-4 z-20">
              <a
                href="mailto:contacto@grupogarabi.com.ar"
                className="btn-prefooter-1"
              >
                contacto@grupogarabi.com.ar
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=541130254376"
                target="_blank"
                className="btn-prefooter-2"
              >
                11-3025-4376
              </a>
            </div>
          </div>
        </div>
        {/* Imagen curva con pointer-events desactivado */}
        <img
          src={imagenCurva}
          alt="Curva"
          className="absolute top-20 2xl:top-0 w-full h-auto z-10"
          style={{ pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}

export default EnMarcha;
