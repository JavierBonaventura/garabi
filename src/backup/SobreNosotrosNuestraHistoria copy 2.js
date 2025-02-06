import React, { useEffect } from "react";

function SobreNosotrosNuestraHistoria() {
  useEffect(() => {
    const bloquearScroll = document.getElementById("bloquearScroll");

    const handleWheel = (e) => {
      // Previene el scroll cuando el ratón está sobre el div
      e.preventDefault();
    };

    const handleMouseEnter = () => {
      // Bloquea el scroll cuando el ratón entra en el div
      bloquearScroll.addEventListener("wheel", handleWheel, { passive: false });
    };

    const handleMouseLeave = () => {
      // Desbloquea el scroll cuando el ratón sale del div
      bloquearScroll.removeEventListener("wheel", handleWheel);
    };

    // Agrega los eventos al div
    bloquearScroll.addEventListener("mouseenter", handleMouseEnter);
    bloquearScroll.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup: eliminar los eventos al desmontar el componente
    return () => {
      bloquearScroll.removeEventListener("mouseenter", handleMouseEnter);
      bloquearScroll.removeEventListener("mouseleave", handleMouseLeave);
      bloquearScroll.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="bg-gray-800 w-full h-[2000px] overflow-auto pt-[800px]">
      <div>
        <div
          className="w-[600px] h-[600px] mx-auto border-black border-2"
          id="bloquearScroll"
        >
          <div className="w-[300px] h-[300px] mx-auto bg-white mt-32"></div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosNuestraHistoria;
