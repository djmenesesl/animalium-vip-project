import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
const { RangePicker } = DatePicker;
import moment from "moment";

import { Context } from "../store/appContext";

export const Cuidadores = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="contenedor">
      <div className="container-fluid bg-hero-cuidadores">
        <div
          className="container bg-transparent mb-5 text-light"
          id="buscador-tope"
        >
          <div className="row pt-1 bg-transparent">
            <div
              className="col-7 fw-bold bg-transparent"
              style={{ fontSize: "56px" }}
            >
              ¡Empecemos la búsqueda del mejor cuidador!
            </div>
          </div>
        </div>
        <div className="container buscador border align-items-center justify-content-center align-middle pt-5">
          <div className="row">
            <div className="col-md-3">
              <label for="validationCustom04" className="form-label">
                <strong>Tipo de mascota</strong>
              </label>
              <select
                style={{ fontSize: "15px" }}
                className="form-select"
                id="validationDefault04"
                required
              >
                <option selected disabled value="">
                  Seleccionar...
                </option>
                <option value="1">Perro</option>
                <option value="2">Gato</option>
              </select>
            </div>
            <div className="col-md-3">
              <label for="validationCustom04" className="form-label">
                <strong>Cantidad</strong>
              </label>
              <select
                style={{ fontSize: "15px" }}
                className="form-select"
                id="validationDefault04"
                required
              >
                <option selected disabled value="">
                  Seleccionar...
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="col-md-6">
              <label for="validationCustom04" className="form-label">
                <strong>Fechas</strong>
              </label>
              <div className="calendar">
                <RangePicker
                  className="w-75"
                  style={{ fontSize: "27px", borderRadius: "0.25rem" }}
                  onChange={(values) => {
                    setDates(
                      values.map((item) => {
                        return moment(item).format("DD-MM-YYYY");
                      })
                    );
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <label for="validationCustom04" className="form-label">
                <strong>Ubicación</strong>
              </label>
              <select className="form-select" id="validationDefault04" required>
                <option selected disabled value="">
                  Seleccionar...
                </option>
                <option value="1">Caracas</option>
                <option value="2">Maturín</option>
              </select>
            </div>
            <div className="col-md-6 mt-1 pb-1">
              <button type="button" className="boton-cuidador w-75 p-2 mt-4">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "white", background: "transparent" }}
                ></i>{" "}
                Buscar cuidador
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-patitas pt-1">
        <div class="container bg-transparent">
          <div class="d-flex bg-transparent mt-5 ps-5">
            <h1 id="h1" className="bg-transparent">
              <strong>Cuidadores destacados</strong>
            </h1>
          </div>
        </div>
        <div className="container-fluid bg-transparent">
          <div class="row d-flex justify-content-center bg-transparent">
            <div id="cardcuidador" class="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163838/Animalium/pexels-oleksandr-pidvalnyi-1174081_1_uo4xzu.png"
                id="imgcuidador"
                class="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                class="position-absolute top-0 end-0 bg-transparent"
              />
              <div class="card-body">
                <h6 id="h6cuidador">
                  <strong>Natalia Andrade</strong>
                  <span id="span" class="fa fa-star checked"></span>
                  <span id="prating">5.0</span>
                </h6>
                <p id="pcuidador" class="card-text">
                  Tengo 22 años, actualmente soy estudiante de medicina
                  Veterinaria. Desde pequeña me han gustado los animales...
                </p>
                <p id="pcuidadorlocation">
                  <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                  Caracas
                </p>
              </div>
            </div>
            <div id="cardcuidador" class="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163831/Animalium/pexels-hikmet-9682588_2_nvxzrs.png"
                id="imgcuidador"
                class="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                class="position-absolute top-0 end-0 bg-transparent"
              />
              <div class="card-body">
                <div class="row d-flex justify-content-center">
                  <h6 id="h6cuidador">
                    <strong>Miguel Rodríguez</strong>
                    <span id="span" class="fa fa-star checked"></span>
                    <span id="prating">5.0</span>
                  </h6>
                </div>
                <p id="pcuidador" class="card-text">
                  Crecí con animales y he sido rescatista, trabajo desde mi casa
                  y tengo el tiempo para darles cariño a las mascotas...
                </p>
                <p id="pcuidadorlocation">
                  <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                  Maturin
                </p>
              </div>
            </div>
            <div id="cardcuidador" class="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163832/Animalium/pexels-cottonbro-6318274_2_ug64zg.png"
                id="imgcuidador"
                class="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                class="position-absolute top-0 end-0 bg-transparent"
              />
              <div class="card-body">
                <h6 id="h6cuidador">
                  <strong>Sandra Abreu</strong>
                  <span id="span" class="fa fa-star checked"></span>
                  <span id="prating">5.0</span>
                </h6>
                <p id="pcuidador" class="card-text">
                  Me encantan las mascotas, estoy disponible para darles
                  atención y cuidarlos❤️ Lo más importante es que ellos...
                </p>
                <p id="pcuidadorlocation">
                  <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                  Caracas
                </p>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center bg-transparent">
            <div id="cardcuidador" class="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163838/Animalium/pexels-oleksandr-pidvalnyi-1174081_1_uo4xzu.png"
                id="imgcuidador"
                class="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                class="position-absolute top-0 end-0 bg-transparent"
              />
              <div class="card-body">
                <h6 id="h6cuidador">
                  <strong>Natalia Andrade</strong>
                  <span id="span" class="fa fa-star checked"></span>
                  <span id="prating">5.0</span>
                </h6>
                <p id="pcuidador" class="card-text">
                  Tengo 22 años, actualmente soy estudiante de medicina
                  Veterinaria. Desde pequeña me han gustado los animales...
                </p>
                <p id="pcuidadorlocation">
                  <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                  Caracas
                </p>
              </div>
            </div>
            <div id="cardcuidador" class="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163831/Animalium/pexels-hikmet-9682588_2_nvxzrs.png"
                id="imgcuidador"
                class="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                class="position-absolute top-0 end-0 bg-transparent"
              />
              <div class="card-body">
                <div class="row d-flex justify-content-center">
                  <h6 id="h6cuidador">
                    <strong>Miguel Rodríguez</strong>
                    <span id="span" class="fa fa-star checked"></span>
                    <span id="prating">5.0</span>
                  </h6>
                </div>
                <p id="pcuidador" class="card-text">
                  Crecí con animales y he sido rescatista, trabajo desde mi casa
                  y tengo el tiempo para darles cariño a las mascotas...
                </p>
                <p id="pcuidadorlocation">
                  <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                  Maturin
                </p>
              </div>
            </div>
            <div id="cardcuidador" class="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163832/Animalium/pexels-cottonbro-6318274_2_ug64zg.png"
                id="imgcuidador"
                class="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                class="position-absolute top-0 end-0 bg-transparent"
              />
              <div class="card-body">
                <h6 id="h6cuidador">
                  <strong>Sandra Abreu</strong>
                  <span id="span" class="fa fa-star checked"></span>
                  <span id="prating">5.0</span>
                </h6>
                <p id="pcuidador" class="card-text">
                  Me encantan las mascotas, estoy disponible para darles
                  atención y cuidarlos❤️ Lo más importante es que ellos...
                </p>
                <p id="pcuidadorlocation">
                  <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                  Caracas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
