import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";

import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { HazteCuidador } from "./pages/hazteCuidador";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cuidadores } from "./pages/cuidadores";
import { SobreNosotros } from "./pages/sobreNosotros";
import { Contactanos } from "./pages/contactanos";
import { Registro } from "./pages/registro";
import { Login } from "./pages/login";
import { RegistroCuidador } from "./pages/registroCuidador";
import { ProfileCliente } from "./pages/profileCliente";
import { ProfileCuidador } from "./pages/profileCuidador";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Cuidadores />} path="/cuidadores" />
            <Route element={<HazteCuidador />} path="/haztecuidador" />
            <Route element={<SobreNosotros />} path="/sobrenosotros" />
            <Route element={<Contactanos />} path="/contactanos" />
            <Route element={<Registro />} path="/registro" />
            <Route element={<RegistroCuidador />} path="/registrocuidador" />
            <Route element={<Login />} path="/login" />
            <Route element={<ProfileCliente />} path="/cliente/profile/:id" />
            <Route element={<ProfileCuidador />} path="/cuidador/profile/:id" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
