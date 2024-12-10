import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

//////////////////// DESKTOP //////////////////////
// general
import Header from "./components/Desktop/General/Header";
import Footer from "./components/Desktop/General/Footer";
// home
import Lideres from "./components/Desktop/Home/Lideres";
import Servicios from "./components/Desktop/Home/Servicios";
import Desde1976 from "./components/Desktop/Home/Desde1976";
import AlgunosNumeros from "./components/Desktop/Home/AlgunosNumeros";
import NuestrosProyectos from "./components/Desktop/Home/NuestrosProyectos";
import Historias from "./components/Desktop/Home/Historias";
import Impacto from "./components/Desktop/Home/Impacto";
import EnMarcha from "./components/Desktop/Home/EnMarcha";
// projects
import ProyectosEnMarcha from "./components/Desktop/Projects/ProyectosEnMarcha";
// Contact
import ContactoForm from "./components/Desktop/Contact/ContactoForm";
// Sobre Nosotros
import SobreNosotros from "./components/Desktop/About/SobreNosotros";
import SobreNosotrosArbol from "./components/Desktop/About/SobreNosotrosArbol";
import SobreNosotrosVideo from "./components/Desktop/About/SobreNosotrsVideo";
import SobreNosotrosValores from "./components/Desktop/About/SobreNosotrosValores";
import SobreNosotrosNuestraHistoria from "./components/Desktop/About/SobreNosotrosNuestraHistoria";
import SobreNosotrosNuestraHistoriaArboles from "./components/Desktop/About/SobreNosotrosNuestraHistoriaArboles";
// Servicios
import ServiciosOfrecidos from "./components/Desktop/Services/ServiciosOfrecidos";
// Impacto
import Imapcto from "./components/Desktop/Impacto/Impacto";
// SingleProject
import Fideicomiso from "./components/Desktop/SingleProject/Fideicomiso";
import Advertising from "./components/Desktop/SingleProject/Advertising";
import OtrosProyectos from "./components/Desktop/SingleProject/OtrosProyectos";
// Politicas
import Politicas from "./components/Desktop/Home/Politicas";

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
// SingleProject
import FideicomisoMobile from "./components/Mobile/SingleProject/FideicomisoMobile";
import AdvertisingMobile from "./components/Mobile/SingleProject/AdvertisingMobile";
import NombreDeProyectoMobile from "./components/Mobile/SingleProject/NombreDeProyectoMobile";
//Contacto
import QuedemosEnContactoMobile from "./components/Mobile/Contacto/QuedemosEnContactoMobile";
// Sobre Nosotrs
import SobreNosotrosMobile from "./components/Mobile/SobreNosotros/SobreNosotrosMobile";
import SobreNosotrosArbolMobile from "./components/Mobile/SobreNosotros/SobreNosotrosArbolMobile";
import VideoMobile from "./components/Mobile/SobreNosotros/VideoMobile";
import ValoresMobile from "./components/Mobile/SobreNosotros/ValoresMobile";
import NuestraHistoriaMobile from "./components/Mobile/SobreNosotros/NuestraHistoriaMobile";
// Servicios
import ServiciosOfrecidosMobile from "./components/Mobile/Servicios/ServiciosOfrecidosMobile";
import AsesoramientoMobile from "./components/Mobile/Servicios/AsesoramientoMobile";
import ArbolesMobile from "./components/Mobile/Servicios/ArbolesMobile";
// Impacto
import ImpactoMobileMain from "./components/Mobile/Impacto/ImpactoMobileMain";

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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1204);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
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
                  <Politicas />
                  <ContactanosMobile />
                  <FooterMobile />
                </>
              }
            />
            <Route
              path="/proyectos"
              element={
                <>
                  <HeaderMobile />
                  <ProyectosActivosMobile />
                  <FooterMobile />
                </>
              }
            />
            <Route
              path="/proyectosimple"
              element={
                <>
                  <HeaderMobile />
                  <FideicomisoMobile />
                  <AdvertisingMobile />
                  <NombreDeProyectoMobile />
                  <FooterMobile />
                </>
              }
            />
            <Route
              path="/contacto"
              element={
                <>
                  <HeaderMobile />
                  <QuedemosEnContactoMobile />
                  <FooterMobile />
                </>
              }
            />
            <Route
              path="/nosotros"
              element={
                <>
                  <HeaderMobile />
                  <SobreNosotrosMobile />
                  <SobreNosotrosArbolMobile />
                  <VideoMobile />
                  <ValoresMobile />
                  <NuestraHistoriaMobile />
                  <FooterMobile />
                </>
              }
            />
            <Route
              path="/servicios"
              element={
                <>
                  <HeaderMobile />
                  <ServiciosOfrecidosMobile />
                  <AsesoramientoMobile />
                  <ArbolesMobile />
                  <FooterMobile />
                </>
              }
            />
            <Route
              path="/impacto"
              element={
                <>
                  <HeaderMobile />
                  <ImpactoMobileMain />
                  <ArbolesMobile />
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
                  <Lideres />
                  <Servicios />
                  <Desde1976 />
                  <AlgunosNumeros />
                  <NuestrosProyectos />

                  <Impacto />
                  <Politicas />
                  <EnMarcha />
                  <Footer />
                </>
              }
            />
            <Route
              path="/proyectos"
              element={
                <>
                  <Header />
                  <ProyectosEnMarcha />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contacto"
              element={
                <>
                  <Header />
                  <ContactoForm />
                  <Footer />
                </>
              }
            />
            <Route
              path="/nosotros"
              element={
                <>
                  <Header />
                  <SobreNosotros />
                  <SobreNosotrosArbol />
                  <SobreNosotrosVideo />
                  <SobreNosotrosValores />
                  <SobreNosotrosNuestraHistoria />
                  <SobreNosotrosNuestraHistoriaArboles />
                  <Footer />
                </>
              }
            />
            <Route
              path="/servicios"
              element={
                <>
                  <Header />
                  <ServiciosOfrecidos />
                  <Footer />
                </>
              }
            />
            <Route
              path="/impacto"
              element={
                <>
                  <Header />
                  <Imapcto />
                  <Footer />
                </>
              }
            />
            <Route
              path="/proyectosimple"
              element={
                <>
                  <Header />
                  <Fideicomiso />
                  <Advertising />
                  <OtrosProyectos />
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
