import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const SobreNosotros = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div
        className="container bg-team mt-3 mb-5"
        style={{ height: "435.23px", width: "1052.42px" }}
      ></div>

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
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668190823/Gaby-brief_p6g5m4.jpg"
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
              <p className="card-text fs-6">
                Empecé mi camino como diseñadora UX en el 2020 ❤️ .Amo mucho
                pintar, ir a eventos de pintura, recitales, leer, ver pelis, ir
                a la playa y hacer cursos para seguir creciendo
                profesionalmente.
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
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668190831/Danii-brief_z3suvy.jpg"
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
              <p className="card-text fs-6">
                Como Ing. de Petróleo he trabajado en diferentes empresas en el
                área de perforación de pozos. Me gusta estudiar, viajar, ver
                peliculas y series, los deportes, planificar y gestionar
                proyectos.
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
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668190837/Cesar-brief_o6ntua.jpg"
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
              <p className="card-text fs-6">
                Estudiante de Ing. informática en la Univ. Alejandro de Humboldt
                y trabajo en el área de coctelería. Tengo un perro llamado Bolt
                y una gata Nala. Me encanta la tecnologia y el desarrollo, los
                animales y los deportes.
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
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668190817/Joan-brief_rjalgq.jpg"
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
              <p className="card-text fs-6">
                Me desempeño en infraestructura y seguridad de datos apuntando a
                las Tecnologías para la Información y las Comunicaciones (TIC),
                sistemas informáticos, soporte de software y en la gestión de
                proyectos.
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
              HTML, CSS, Javascript,
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668192954/image_89_pez19r.jpg"
                id="imgpaso"
                style={{
                  height: "170px",
                  width: "270px",
                  objectFit: "cover",
                  paddingRight: "33px",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              Bootstrap
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668193044/image_90_j0bla6.jpg"
                id="imgpaso"
                alt=""
                style={{
                  height: "126px",
                  width: "158px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              React
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668193094/image_91_rwcpgv.jpg"
                id="imgpaso"
                alt=""
                style={{
                  height: "143px",
                  width: "218px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center bg-transparent">
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body ">
            <h5 id="h5paso" className="card-title">
              Flask
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668193173/image_92_md9ocx.jpg"
                id="imgpaso"
                alt=""
                style={{
                  height: "128px",
                  width: "229px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              Python
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668193202/image_93_alywps.jpg"
                id="imgpaso"
                style={{
                  height: "157px",
                  width: "143px",
                  objectFit: "cover",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="cardpaso2" className="card bg-transparent">
          <div id="cardbodypaso" className="card-body">
            <h5 id="h5paso" className="card-title">
              PostgreSQL
            </h5>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668193231/image_94_nm7jic.jpg"
                id="imgpaso"
                alt=""
                style={{
                  height: "145px",
                  width: "141px",
                  objectFit: "cover",
                }}
              />
            </div>
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
