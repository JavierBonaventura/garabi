import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import logoGarabi from "../../../images/Desktop/logo-garabi.svg";
import hamburguesa from "../../../images/Mobile/hamburguesa.png";

function HeaderMobile() {
  return (
    <div className="w-full h-[76px]">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex items-center justify-between h-full px-4"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        <img
          src={logoGarabi}
          alt="Logo Garabi"
          className="h-[64px] w-auto ml-4"
        />

        <img
          src={hamburguesa}
          alt="Hamburguesa"
          className="h-[32px] w-[32px] mr-4 mt-2"
        />
      </div>
    </div>
  );
}

export default HeaderMobile;
