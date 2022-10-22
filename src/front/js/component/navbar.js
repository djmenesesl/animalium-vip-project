import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-1 pb-0">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-5">
          <img
            src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1666407647/Animalium/Animalium-logo_odggax.jpg"
            alt="animalium"
            style={{ height: "80px", width: "150px" }}
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
              <Link to="/demo" className="nav-link active" aria-current="page">
                Cuidadores
              </Link>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Hazte Cuidador
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link active" aria-current="page">
                Contáctanos
              </Link>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Blog
              </a>
            </li>
          </ul>
          <div>
            <button className="btn btn-success me-2" type="submit">
              Inicio de Sesión
            </button>
            <button className="btn btn-outline-success" type="submit">
              Registro
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
