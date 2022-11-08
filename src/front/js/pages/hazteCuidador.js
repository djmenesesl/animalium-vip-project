import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const HazteCuidador = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="contenedor">
      <div className="container-fluid bg-hero-hcuidadores">
        <div
          className="container bg-transparent mb-5 text-light"
          id="buscador-tope"
        >
          <div className="row mt-5 bg-transparent">
            <div
              className="col-7 fw-bold bg-transparent"
              style={{ fontSize: "56px" }}
            >
              ¡Genera ingresos extra cuidando mascotas!
            </div>
            <button
              type="button"
              className="boton-cuidador w-50 p-2 mt-4"
              style={{
                backgroundColor: "#623CEA",
                width: "324px",
                height: "48px",
              }}
            >
              <Link
                target={"_blank"}
                to="/registrocuidador"
                style={{ color: "white", fontSize: "20px" }}
              >
                ¡Postularme!
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bg-transparent mt-5 ps-5">
          <h1 id="h1paso">
            <strong>¿Qué necesitas para ser cuidador?</strong>
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

      <div className="container">
        <div className="d-flex justify-content-center bg-transparent mt-5">
          <h1 id="h1paso">
            <strong>¿Cuáles son los pasos a seguir?</strong>
          </h1>
        </div>
      </div>

      <div className="stepper d-flex flex-column mt-5 bg-pasos-cuidador">
        <div id="steppericon" className="d-flex mb-1 bg-transparent">
          <div className="d-flex flex-column pr-4 align-items-center bg-transparent">
            <div id="circle" className="rounded-circle text-white">
              1
            </div>
            <div id="line" className="line h-50 bg-transparent"></div>
          </div>
          <div id="infostepper">
            <h5 id="h5stepper" className="text-dark bg-transparent">
              ¡Postúlate!
            </h5>
            <p id="lead" className="lead text-muted pb-3 bg-transparent"></p>
          </div>
        </div>
        <div id="steppericon" className="d-flex mb-1 bg-transparent">
          <div className="d-flex flex-column pr-4 align-items-center bg-transparent">
            <div id="circle" className="rounded-circle text-white">
              2
            </div>
            <div id="line" className="line h-100 bg-transparent"></div>
          </div>
          <div id="infostepper">
            <h5 id="h5stepper" className="text-dark bg-transparent">
              Revisaremos tu perfil
            </h5>
            <p id="lead" className="lead text-muted pb-3 bg-transparent"></p>
          </div>
        </div>
        <div id="steppericon" className="d-flex mb-1 bg-transparent">
          <div className="d-flex flex-column pr-4 align-items-center bg-transparent">
            <div id="circle" className="rounded-circle text-white">
              3
            </div>
            <div id="line" className="line h-100 bg-transparent"></div>
          </div>
          <div id="infostepper">
            <h5 id="h5stepper" className="text-dark bg-transparent">
              Acepta solicitudes
            </h5>
            <p id="lead" className="lead text-muted pb-3 bg-transparent"></p>
          </div>
        </div>
        <div id="steppericon" className="d-flex mb-1 bg-transparent">
          <div className="d-flex flex-column pr-4 align-items-center bg-transparent">
            <div id="circle" className="rounded-circle text-white">
              4
            </div>
            <div id="line" className="line h-100 d-none bg-transparent"></div>
          </div>
          <div id="infostepper" className="mb-5 bg-transparent">
            <h5 id="h5stepper" className="text-dark bg-transparent">
              Recibe tus pagos
            </h5>
            <p id="lead" className="lead text-muted pb-3 bg-transparent"></p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-center bg-transparent mt-5">
          <h1 id="h1paso">
            <strong>Descubre todos los beneficios siendo cuidador</strong>
          </h1>
        </div>
      </div>

      <div className="row d-flex justify-content-center bg-transparent">
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body ">
            <h5 id="h5paso" className="card-title">
              Flexibilidad
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667881945/Animalium/Flexibilidad_rx7848.jpg"
                id="imgpaso"
                style={{ height: "58px", width: "33px" }}
                alt=""
              />
            </div>
            <p id="ppaso" className="card-text">
              Tu decides cuando estas disponible, horarios, cuantas mascotas
              puedes cuidar, tus tarifas y mucho más!!
            </p>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              Ayuda y Soporte
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667881763/Animalium/Soporte_zig4o5.jpg"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" className="card-text">
              Cuentas con todo el equipo Animalium para gestionar tus
              solicitudes y ayuda en caso de algún contratiempo.
            </p>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              ¡Gana dinero extra!
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667881770/Animalium/Ingreso-extra_cdruvc.jpg"
                id="imgpaso"
                style={{ height: "58px", width: "58px" }}
                alt=""
              />
            </div>
            <p id="ppaso" className="card-text">
              Aprovecha tu tiempo libre y genera ingresos extra cuidando
              mascotas.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container card justify-content-center align-items-center"
        style={{
          width: "1027px",
          height: "501px",
          backgroundColor: "#623CEA",
          borderRadius: "15px",
          marginTop: "100px",
          marginBottom: "80px",
        }}
      >
        <div className="row g-0" style={{ backgroundColor: "#623CEA" }}>
          <div
            className="col-md-7 text-center"
            style={{ backgroundColor: "#623CEA" }}
          >
            <div className="card-body" style={{ backgroundColor: "#623CEA" }}>
              <div
                className="card-title fw-bold"
                style={{
                  backgroundColor: "#623CEA",
                  color: "white",
                  fontSize: "48px",
                  width: "448px",
                }}
              >
                ¿Quieres ser cuidador?
              </div>
              <div
                className="card-title"
                style={{
                  backgroundColor: "#623CEA",
                  color: "#FAFAFA",
                  fontSize: "16px",
                  width: "448px",
                }}
              >
                Genera ingresos extras cuidando hermosas mascotas y forma parte
                del mundo Animalium.
              </div>
              <div
                className="card-title"
                style={{
                  backgroundColor: "#623CEA",
                  color: "#FAFAFA",
                  fontSize: "16px",
                  width: "448px",
                }}
              >
                <button type="button" className="boton-cuidador w-50 p-2 mt-4">
                  <Link
                    target={"_blank"}
                    to="/registrocuidador"
                    style={{ color: "white" }}
                  >
                    ¡Postularme!
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ backgroundColor: "#623CEA" }}>
            <img
              src="https://res.cloudinary.com/dpihypqmp/image/upload/v1667145307/samples/image_4_zq3p5o.png"
              className="img-fluid"
              alt="..."
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
