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

      <div class="container">
        <div class="bg-transparent mt-5 ps-5">
          <h1 id="h1paso">
            <strong>¿Qué necesitas para ser cuidador?</strong>
          </h1>
        </div>
      </div>

      <div class="row d-flex justify-content-center bg-transparent">
        <div id="cardpaso2" class="card bg-transparent">
          <div id="cardbodypaso" class="card-body ">
            <h5 id="h5paso" class="card-title">
              Encuentra un cuidador
            </h5>
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109884/Animalium/buscar-icon_udxb4g.png"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" class="card-text">
              Busca un cuidador que se ajuste a los días de tu viaje, lee las
              reseñas y selecciona el cuidado que mejor se adapte a las
              necesidades de tus mascotas.
            </p>
          </div>
        </div>
        <div id="cardpaso2" class="card bg-transparent">
          <div id="cardbodypaso" class="card-body">
            <h5 id="h5paso" class="card-title">
              Reserva
            </h5>
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109882/Animalium/calendar-icon_y5sf2z.png"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" class="card-text">
              Reserva con el cuidador seleccionando con total confianza.
              Pensando en el bienestar de tu mascota, sólo encontrarás a los
              mejores cuidadores.
            </p>
          </div>
        </div>
        <div id="cardpaso2" class="card bg-transparent">
          <div id="cardbodypaso" class="card-body">
            <h5 id="h5paso" class="card-title">
              ¡Y listo!
            </h5>
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109880/Animalium/heart-icon_mrr2jf.png"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" class="card-text">
              Tu mascota está en las mejores manos. El cuidador te enviará fotos
              y videos de tu mascota para tu tranquilidad.
            </p>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center bg-transparent">
        <div id="cardpaso2" class="card bg-transparent">
          <div id="cardbodypaso" class="card-body ">
            <h5 id="h5paso" class="card-title">
              Encuentra un cuidador
            </h5>
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109884/Animalium/buscar-icon_udxb4g.png"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" class="card-text">
              Busca un cuidador que se ajuste a los días de tu viaje, lee las
              reseñas y selecciona el cuidado que mejor se adapte a las
              necesidades de tus mascotas.
            </p>
          </div>
        </div>
        <div id="cardpaso2" class="card bg-transparent">
          <div id="cardbodypaso" class="card-body">
            <h5 id="h5paso" class="card-title">
              Reserva
            </h5>
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109882/Animalium/calendar-icon_y5sf2z.png"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" class="card-text">
              Reserva con el cuidador seleccionando con total confianza.
              Pensando en el bienestar de tu mascota, sólo encontrarás a los
              mejores cuidadores.
            </p>
          </div>
        </div>
        <div id="cardpaso2" class="card bg-transparent">
          <div id="cardbodypaso" class="card-body">
            <h5 id="h5paso" class="card-title">
              ¡Gana dinero extra!
            </h5>
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109880/Animalium/heart-icon_mrr2jf.png"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" class="card-text">
              Aprovecha tu tiempo libre y genera ingresos extras cuidando
              mascotas.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="d-flex justify-content-center bg-transparent mt-5">
          <h1 id="h1paso">
            <strong>¿Cuáles son los pasos a seguir?</strong>
          </h1>
        </div>
      </div>

      <div class="stepper d-flex flex-column mt-5 ">
        <div id="steppericon" class="d-flex mb-1">
          <div class="d-flex flex-column pr-4 align-items-center">
            <div id="circle" class="rounded-circle text-white">
              1
            </div>
            <div id="line" class="line h-50"></div>
          </div>
          <div id="infostepper">
            <h5 id="h5stepper" class="text-dark">
              ¡Postúlate!
            </h5>
            <p id="lead" class="lead text-muted pb-3">
              Optional
            </p>
          </div>
        </div>
        <div id="steppericon" class="d-flex mb-1">
          <div class="d-flex flex-column pr-4 align-items-center">
            <div id="circle" class="rounded-circle text-white">
              2
            </div>
            <div id="line" class="line h-100"></div>
          </div>
          <div id="infostepper">
            <h5 id="h5stepper" class="text-dark">
              Revisaremos tu perfil
            </h5>
            <p id="lead" class="lead text-muted pb-3">
              Optional
            </p>
          </div>
        </div>
        <div id="steppericon" class="d-flex mb-1">
          <div class="d-flex flex-column pr-4 align-items-center">
            <div id="circle" class="rounded-circle text-white">
              3
            </div>
            <div id="line" class="line h-100"></div>
          </div>
          <div id="infostepper">
            <h5 id="h5stepper" class="text-dark">
              Acepta solicitudes
            </h5>
            <p id="lead" class="lead text-muted pb-3">
              Optional
            </p>
          </div>
        </div>
        <div id="steppericon" class="d-flex mb-1">
          <div class="d-flex flex-column pr-4 align-items-center">
            <div id="circle" class="rounded-circle text-white">
              4
            </div>
            <div id="line" class="line h-100 d-none"></div>
          </div>
          <div id="infostepper" className="mb-5">
            <h5 id="h5stepper" class="text-dark">
              Recibe tus pagos
            </h5>
            <p id="lead" class="lead text-muted pb-3">
              Optional
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="d-flex justify-content-center bg-transparent mt-5">
          <h1 id="h1paso">
            <strong>Descubre todos los beneficios siendo cuidador</strong>
          </h1>
        </div>
      </div>

      <div class="row d-flex justify-content-center bg-transparent">
        <div id="cardpaso2" class="card bg-transparent">
          <div id="cardbodypaso" class="card-body ">
            <h5 id="h5paso" class="card-title">
              Flexibilidad
            </h5>
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109884/Animalium/buscar-icon_udxb4g.png"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" class="card-text">
              Tu decides cuando estas disponible, horarios, cuantas mascotas
              puedes cuidar, tus tarifas y mucho más!!
            </p>
          </div>
        </div>
        <div id="cardpaso2" class="card bg-transparent">
          <div id="cardbodypaso" class="card-body">
            <h5 id="h5paso" class="card-title">
              Ayuda y Soporte
            </h5>
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109882/Animalium/calendar-icon_y5sf2z.png"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" class="card-text">
              Cuentas con todo el equipo Animalium para gestionar tus
              solicitudes y ayuda en caso de algún contratiempo.
            </p>
          </div>
        </div>
        <div id="cardpaso2" class="card bg-transparent">
          <div id="cardbodypaso" class="card-body">
            <h5 id="h5paso" class="card-title">
              ¡Gana dinero extra!
            </h5>
            <div class="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109880/Animalium/heart-icon_mrr2jf.png"
                id="imgpaso"
                alt=""
              />
            </div>
            <p id="ppaso" class="card-text">
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
