import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import imgDesde from "../../../images/Desktop/desde-1976.jpeg";

function Desde1976() {
  return (
    <section>
      <div
        className="padding-section"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-10 md:space-y-24">
          <div className="gap-title-paragraph ml-8 lg:ml-0 ">
            <h1 className="title-section !text-left lg:!text-center">
              Desde 1976
            </h1>
            <p className="paragraph-section !text-left lg:!text-center">
              Administrando y asesorando proyectos en uno de los polos foresto
              industriales más importantes del país
            </p>
          </div>
          <div className="">
            <img
              src={imgDesde}
              className="w-full md:w-[75%] 2xl:w-[60%] md:h-[300px] 2xl:h-[420px] object-cover mx-auto aspect-video md:rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Desde1976;
