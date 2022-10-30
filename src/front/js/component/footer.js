import React, { Component } from "react";

export const Footer = () => (
  <div className="container-fluid mt-5 bg-footer">
    <footer
      className="bg-transparent align-items-center align-middle"
      style={{ paddingTop: "310px" }}
    >
      <div className="row  justify-content-center bg-transparent">
        <div className="col-6 col-md-2 mb-3  bg-transparent">
          <h5 className=" bg-transparent">Información</h5>
          <ul className="nav flex-column bg-transparent">
            <li className="nav-item mb-2 bg-transparent">
              <a href="#" className="nav-link p-0 text-muted ">
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item mb-2 bg-transparent">
              <a href="#" className="nav-link p-0 text-muted ">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3 bg-transparent">
          <h5 className="bg-transparent">Siguenos en Redes</h5>
          <ul className="nav flex-column bg-transparent">
            <li className="ms-3 bg-transparent">
              <a className="link-dark" href="#">
                <i className="fa-brands fa-twitter fs-4 bg-transparent"></i>
                <i className="fa-brands fa-instagram fs-4 bg-transparent ms-3"></i>
                <i className="fa-brands fa-facebook fs-4 bg-transparent ms-3"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-evenly pt-5 border-top bg-transparent">
        <img
          src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667067119/Animalium/Animalium-logo-blanco_xhxquy.png"
          alt="..."
          className="bg-transparent"
          style={{ width: "150px", height: "72.95px" }}
        />
        <div className="col-6 col-md-3 mb-3 bg-transparent">
          <p className="bg-transparent fw-bold">
            Animalium-Vip © Todos los derechos reservados.
          </p>
          <ul className="nav flex-column bg-transparent">
            <li className="nav-item bg-transparent">
              <a href="#" className="nav-link p-0 text-muted text-center ">
                Hecho en Venezuela con{" "}
                <i class="fa-regular fa-heart bg-transparent"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);
