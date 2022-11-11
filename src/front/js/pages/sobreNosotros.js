import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const SobreNosotros = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid me-5">
      <div
        className="card mb-5 shadow d-flex justify-content-center container"
        style={{ maxWidth: "1065px", height: "252px", borderRadius: "10px" }}
      >
        <div className="row g-0">
          <div
            className="col-md-4 ms-4"
            style={{
              width: "550px",
              height: "205px",
              borderRadius: "5px",
              objectFit: "cover",
            }}
          >
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668138860/Animalium/Gaby-brief_g7hykf.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div
            className="col-md-8 ms-4"
            style={{ width: "440px", height: "205px", borderRadius: "5px" }}
          >
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Gabriela Tochon | UX Designer
              </h4>
              <p className="card-text fs-5">
                Me encantan las mascotas, estoy disponible para darles atención
                y cuidarlos❤️ Lo más importante es que ellos...
              </p>
              <p className="card-text">
                <small className="text fs-6">
                  <i className="fa-solid fa-location-dot me-1"></i> Caracas
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card mb-5 shadow d-flex justify-content-center container"
        style={{ maxWidth: "1065px", height: "252px", borderRadius: "10px" }}
      >
        <div className="row g-0">
          <div
            className="col-md-4 ms-4"
            style={{
              width: "550px",
              height: "205px",
              borderRadius: "5px",
              objectFit: "cover",
            }}
          >
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668138860/Animalium/Gaby-brief_g7hykf.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div
            className="col-md-8 ms-4"
            style={{ width: "440px", height: "205px", borderRadius: "5px" }}
          >
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Daniel Meneses | Ing. de Petróleo
              </h4>
              <p className="card-text fs-5">
                Me encantan las mascotas, estoy disponible para darles atención
                y cuidarlos❤️ Lo más importante es que ellos...
              </p>
              <p className="card-text">
                <small className="text fs-6">
                  <i className="fa-solid fa-location-dot me-1"></i> Maturín
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card mb-5 shadow d-flex justify-content-center container"
        style={{ maxWidth: "1065px", height: "252px", borderRadius: "10px" }}
      >
        <div className="row g-0">
          <div
            className="col-md-4 ms-4"
            style={{
              width: "550px",
              height: "205px",
              borderRadius: "5px",
              objectFit: "cover",
            }}
          >
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668138860/Animalium/Gaby-brief_g7hykf.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div
            className="col-md-8 ms-4"
            style={{ width: "440px", height: "205px", borderRadius: "5px" }}
          >
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Cesar Gorge | Est. de Informática
              </h4>
              <p className="card-text fs-5">
                Me encantan las mascotas, estoy disponible para darles atención
                y cuidarlos❤️ Lo más importante es que ellos...
              </p>
              <p className="card-text">
                <small className="text fs-6">
                  <i className="fa-solid fa-location-dot me-1"></i> Caracas
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card mb-5 shadow d-flex justify-content-center container"
        style={{ maxWidth: "1065px", height: "252px", borderRadius: "10px" }}
      >
        <div className="row g-0">
          <div
            className="col-md-4 ms-4"
            style={{
              width: "550px",
              height: "205px",
              borderRadius: "5px",
              objectFit: "cover",
            }}
          >
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668138860/Animalium/Gaby-brief_g7hykf.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div
            className="col-md-8 ms-4"
            style={{ width: "440px", height: "205px", borderRadius: "5px" }}
          >
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Joan Flores | Ing. en Informática
              </h4>
              <p className="card-text fs-5">
                Me encantan las mascotas, estoy disponible para darles atención
                y cuidarlos❤️ Lo más importante es que ellos...
              </p>
              <p className="card-text">
                <small className="text fs-6">
                  <i className="fa-solid fa-location-dot me-1"></i> Caracas
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-transparent">
        <div className="bg-transparent mt-5">
          <h1 id="h1paso" className="bg-transparent">
            <strong>¿Cómo nace la idea?</strong>
          </h1>
        </div>
      </div>
      <div
        className="bg-idea mt-5 mb-5"
        style={{ height: "288px", width: "770.15px", marginLeft: "300px" }}
      ></div>
      <div className="container bg-transparent">
        <div className="bg-transparent mt-5">
          <h1 id="h1paso" className="bg-transparent">
            <strong>Nuestra inspiración</strong>
          </h1>
        </div>
      </div>
      <div
        className="bg-inspiracion mt-5 mb-5"
        style={{ height: "535px", width: "1335px" }}
      ></div>
      <div className="container">
        <div className="bg-transparent mt-5">
          <h1 id="h1paso">
            <strong>Tecnologías usadas</strong>
          </h1>
        </div>
      </div>

      <div className="row d-flex justify-content-center bg-transparent">
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body ">
            <h5 id="h5paso" className="card-title">
              Ser mayor de edad (+18)
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667879204/Animalium/MayorDeEdad_hmuerl.jpg"
                id="imgpaso"
                style={{ height: "57px", width: "62px" }}
                alt=""
              />
            </div>
            <p id="ppaso" className="card-text">
              Debes de tener 18 años cumplidos para poder ser cuidador
              Animalium.
            </p>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              Información de Contacto
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667879288/Animalium/Contacto_1_u6t8fi.jpg"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" className="card-text">
              Necesitas un celular activo con WhatsApp y un correo electrónico
              donde nosotros y el cliente nos podamos comunicar contigo.
            </p>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              ¡Foto de Perfil!
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667879317/Animalium/Foto-perfil_mjbmbr.jpg"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" className="card-text">
              Foto tipo carnet donde se pueda apreciar claramente tu rostro.
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center bg-transparent">
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body ">
            <h5 id="h5paso" className="card-title">
              Comprobante de dirección
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667879487/Animalium/Locacion_jw7aro.jpg"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" className="card-text">
              Necesitas adjuntar un comprobante de servicio de electricidad,
              agua, telefono, etc.
            </p>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              Comprobante de identidad
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667879447/Animalium/ID_yiu6ez.jpg"
                id="imgpaso"
                style={{ height: "42px", width: "65px" }}
                alt=""
              />
            </div>
            <p id="ppaso" className="card-text">
              Puede ser tu cedula de identidad o pasaporte.
            </p>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              Fotos del espacio donde recibiras a la mascota
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667879390/Animalium/Fotos_jowxi4.jpg"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" className="card-text">
              Saca fotos de tu espacio para que los clientes puedan observarlo.
            </p>
          </div>
        </div>
      </div>
      <div className="container bg-transparent">
        <div className="bg-transparent mt-5">
          <h1 id="h1paso" className="bg-transparent">
            <strong>Pasos a seguir</strong>
          </h1>
        </div>
      </div>
      <div
        className="bg-pasos-seguir mt-2 mb-5"
        style={{ height: "496px", width: "1000px", marginLeft: "160px" }}
      ></div>
      <div
        className="container bg-transparent"
        style={{ marginLeft: "500px", marginTop: "100px" }}
      >
        <div className="bg-transparent">
          <h1 id="h1paso" className="bg-transparent">
            <strong>
              ¡Muchas gracias!{" "}
              <i
                class="fa-solid fa-heart ms-2"
                style={{ color: "#20C997" }}
              ></i>
            </strong>
          </h1>
        </div>
      </div>
    </div>
  );
};
