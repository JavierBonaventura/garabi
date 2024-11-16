import React from "react";
import imagenFondo from "../../../images/Desktop/imagenFondo.jpg";
import campoDesde from "../../../images/Desktop/campoDesde.png";

function Desde1976() {
  return (
    <div>
      <div className="w-full h-[58vw]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex h-full"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Nuevo div contenedor centrado */}
          <div className="mx-auto flex items-start relative w-full mt-[30px]">
            {/* Imagen campoDesde a la izquierda */}
            <img
              className="w-[50vw] flex-shrink-0"
              src={campoDesde}
              alt="Campo Desde"
            />

            {/* Recuadro a la derecha, rotado 90 grados */}
            <div
              className="absolute w-[30vw] h-[44vw] right-[calc(46%-0px)]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(229, 235, 225, 0.00) 0%, #E5EBE1 100%)",
              }}
            />

            {/* Recuadro pegado a la derecha, rotado -90 grados */}
            <div
              className="flex-shrink-0 absolute w-[30vw] h-[44vw] left-[calc(50%-0px)]"
              style={{
                background:
                  "linear-gradient(-90deg, rgba(229, 235, 225, 0.00) 0%, #E5EBE1 100%)",
              }}
            >
              <div className="absolute text-right  right-[-10vw] w-[354px] h-[76px] flex-shrink-0 text-black text-[60px] font-fira-sans font-extrabold leading-[60px] tracking-[-1px]">
                Desde 1976
              </div>

              {/* Nuevo recuadro debajo */}
              <div className="w-[510px] h-[485px] flex-shrink-0 flex flex-col justify-start">
                <div className="absolute w-[510px] top-[8vw] right-[-10vw] text-black text-right font-tt-norms-pro text-[1.46vw] font-[450] leading-[32px] tracking-[-1px]">
                  <span className="font-bold">Grupo Garabí</span> comienza su
                  actividad en la provincia de Corrientes con la administración
                  de dos establecimientos forestales ubicados en el centro norte
                  de la provincia, en las localidades de Loreto y Santa Rosa.{" "}
                  <br />
                  <br />
                  En el año <span className="font-bold">1983</span> la empresa
                  incorpora a su administración dos nuevas sociedades en la
                  localidad de{" "}
                  <span className="font-bold">Gobernador Virasoro</span>. Cabe
                  destacar que tres de estas empresas continúan al día de hoy
                  bajo la administración de Grupo Garabí. <br />
                  <br />
                  En la actualidad Grupo Garabí tiene bajo administración más de
                  <span className="font-bold">18.000 hectáreas forestadas</span>
                  , entre pinos y eucaliptos. <br />
                  <br />
                  En los últimos años, Grupo Garabí incorporó nuevos proyectos:
                  <span className="font-bold">
                    Ganadería, Agricultura, Yerba Mate, Arroz, cultivo de
                    arándanos y Olivos
                  </span>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desde1976;
