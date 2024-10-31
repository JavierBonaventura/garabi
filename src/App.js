import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

//////////////////// DESKTOP //////////////////////
// home
import Header_Home from "./components/Desktop/Home/Header_Home";
import Servicios from "./components/Desktop/Home/Servicios";
import Desde1976 from "./components/Desktop/Home/Desde1976";
import AlgunosNumeros from "./components/Desktop/Home/AlgunosNumeros";
import NuestrosProyectos from "./components/Desktop/Home/NuestrosProyectos";
import Historias from "./components/Desktop/Home/Historias";
import Impacto from "./components/Desktop/Home/Impacto";
import EnMarcha from "./components/Desktop/Home/EnMarcha";
import Footer from "./components/Desktop/Home/Footer";
// projects
import Header from "./components/Desktop/Projects/Header";
import ProyectosEnMarcha from "./components/Desktop/Projects/ProyectosEnMarcha";
// Contact
import ContactoForm from "./components/Desktop/Contact/ContactoForm";
// Sobre Nosotros
import SobreNosotros from "./components/Desktop/About/SobreNosotros";
import SobreNosotrosArbol from "./components/Desktop/About/SobreNosotrosArbol";
import SobreNosotrosVideo from "./components/Desktop/About/SobreNosotrsVideo";
import SobreNosotrosValores from "./components/Desktop/About/SobreNosotrosValores";
import SobreNosotrosNuestraHistoria from "./components/Desktop/About/SobreNosotrosNuestraHistoria";
// Servicios
import ServiciosOfrecidos from "./components/Desktop/Services/ServiciosOfrecidos";
// Impacto
import Imapcto from "./components/Desktop/Impacto/Impacto";

/////////////////// MOBILE ////////////////////////////
// Home
import HeaderMobile from "./components/Mobile/Home/HeaderMobile";
import LideresMobile from "./components/Mobile/Home/LideresMobile";
import ServiciosMobile from "./components/Mobile/Home/ServiciosMobile";
import DesdeMobile from "./components/Mobile/Home/DesdeMobile";
import AlgunosNumerosMobile from "./components/Mobile/Home/AlgunosNumerosMobile";
import NuestrosPoyectosMobile from "./components/Mobile/Home/NuestrosPoyectosMobile";
import ImpactoMobile from "./components/Mobile/Home/ImpactoMobile";
import ContactanosMobile from "./components/Mobile/Home/ContactanosMobile";
import FooterMobile from "./components/Mobile/Home/FooterMobile";
// Proyectos
import ProyectosActivosMobile from "./components/Mobile/Proyectos/ProyectosActivosMobile";



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const WarningMessage = () => (
  <div style={{ textAlign: "center", padding: "20px", color: "#333" }}>
    <h2>Este proyecto está diseñado para resoluciones mayores a 1280px.</h2>
    su resulucion es de : {window.innerWidth}
  </div>
);

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1365);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1305);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {isSmallScreen ? (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeaderMobile />
                  <LideresMobile />
                  <ServiciosMobile />
                  <DesdeMobile />
                  <AlgunosNumerosMobile />
                  <NuestrosPoyectosMobile />
                  <ImpactoMobile />
                  <ContactanosMobile />
                  <FooterMobile />
                </>
              }
            />
             <Route
              path="/projects"
              element={
                <>
                  <HeaderMobile />
                 <ProyectosActivosMobile />
                  <FooterMobile />
                </>
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Header_Home />
                  <Servicios />
                  <Desde1976 />
                  <AlgunosNumeros />
                  <NuestrosProyectos />
                  <Historias />
                  <Impacto />
                  <EnMarcha />
                  <Footer />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Header />
                  <ProyectosEnMarcha />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <ContactoForm />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <SobreNosotros />
                  <SobreNosotrosArbol />
                  <SobreNosotrosVideo />
                  <SobreNosotrosValores />
                  <SobreNosotrosNuestraHistoria />
                  <Footer />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Header />
                  <ServiciosOfrecidos />
                  <Footer />
                </>
              }
            />
            <Route
              path="/impact"
              element={
                <>
                  <Header />
                  <Imapcto />
                  <Footer />
                </>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
