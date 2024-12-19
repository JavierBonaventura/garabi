import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import fotoDesde from "../../../images/Mobile/fotoDesde.png";

function DesdeMobile() {
  return (
    <div className="w-full h-auto">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        {/* Contenedor de texto alineado en la parte superior */}
        <div className="-mt-2 w-full">
          {" "}
          {/* Título "Desde 1973" */}
          <div className="flex-shrink-0 ml-8 text-black font-fira-sans text-[41px] font-extrabold leading-[39px]">
            Desde 1973
          </div>
          {/* Descripción de "Grupo Garabí comienza..." */}
          <div className="mt-4 flex-shrink-0 ml-8 text-black font-fira-sans text-[20px] font-normal leading-[24px] tracking-[-1px] h-[620px] w-[329px]">
            Grupo Garabí comienza su actividad en la provincia de Corrientes con
            la administración de dos establecimientos forestales ubicados en el
            centro norte de la provincia, en las localidades de Loreto y Santa
            Rosa.
            <br />
            <br /> En el año 1983 la empresa incorpora a su administración dos
            nuevas sociedades en la localidad de Gobernador Virasoro. Cabe
            destacar que tres de estas empresas continúan al día de hoy bajo la
            administración de Grupo Garabí. <br />
            <br /> En la actualidad Grupo Garabí tiene bajo administración más
            de18.000 hectáreas forestadas, entre pinos y eucaliptos.
            <br />
            <br /> En los últimos años, Grupo Garabí incorporó nuevos
            proyectos:Ganadería, Agricultura, Yerba Mate, Arroz, cultivo de
            arándanos y Olivos.
          </div>
          {/* Imagen "fotoDesde.png" */}
          <img
            src={fotoDesde}
            alt="Grupo Garabí en Corrientes"
            className="-mt-4"
            style={{
              width: "100%",
              height: "344px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DesdeMobile;
