import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-5">
          <img
            src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1666407647/Animalium/Animalium-logo_odggax.jpg"
            alt="animalium"
            style={{ height: "89px", width: "150px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <div></div>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link
                to="/cuidadores"
                className="nav-link active"
                aria-current="page"
                style={{ color: "#20C997" }}
              >
                Cuidadores
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/haztecuidador"
                className="nav-link active"
                aria-current="page"
                style={{ color: "#20C997" }}
              >
                Hazte Cuidador
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/sobrenosotros"
                className="nav-link active"
                aria-current="page"
                style={{ color: "#20C997" }}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/contactanos"
                className="nav-link active"
                aria-current="page"
                style={{ color: "#20C997" }}
              >
                Contáctanos
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/contactanos"
                className="nav-link active"
                aria-current="page"
                style={{ color: "#20C997" }}
              >
                Blog
              </Link>
            </li>
          </ul>
          <div>
            <button className="me-2 p-2 boton-iniciar" type="submit">
              Iniciar Sesión
            </button>
            <button className="boton-registrate p-2" type="submit">
              <Link to="/registro" style={{ color: "white" }}>
                Registrate
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
