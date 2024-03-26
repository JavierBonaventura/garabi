import React from "react";
import fondoContacto from "../images/fondoContacto.png";

function FormContacto() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  return (
    <div
      className="bg-[#252323]"
      style={{
        backgroundImage: `url(${fondoContacto})`,
        backgroundSize: "40%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl !py-24">
        <form className="max-w-xl mx-auto p-8  rounded shadow-md">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-white font-bold mb-2"
              >
                Servicio
              </label>
              <select
                id="service"
                name="service"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected hidden>
                  Seleccionar
                </option>
                <option value="Servicio 1">Servicio 1</option>
                <option value="Servicio 2">Servicio 2</option>
                <option value="Servicio 3">Servicio 3</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-white font-bold mb-2"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-white font-bold mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-start">
              <button
                type="submit"
                href=""
                className="border px-8 py-3 !rounded-none border-white relative  flex flex-col items-center hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
                <p className="boton-ver-mas-texto-vision">Enviar</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormContacto;