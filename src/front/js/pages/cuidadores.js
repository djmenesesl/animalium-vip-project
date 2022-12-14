import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
const { RangePicker } = DatePicker;
import moment from "moment";

import { Context } from "../store/appContext";
import { CuidadorCard } from "../component/cuidadorCard";

export const Cuidadores = () => {
  const { store, actions } = useContext(Context);
  const [mascota, setMascota] = useState([]);
  const [cantidad, setCantidad] = useState([]);
  const [cuidadoresTop, setCuidadoresTop] = useState([]);
  const [ubicacion, setUbicacion] = useState([]);
  const [busqueda, setBusqueda] = useState(false);

  async function setCuidadores() {
    try {
      const response = await fetch(
        process.env.BACKEND_URL + `/api/cuidadores?landingcuidador=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      if (!response.ok) {
        alert("No hay cuidadores en tu ciudad");
        return;
      }
      const body = await response.json();
      console.log(body);
      actions.addCuidadores(body);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (store.cuidadores.length > 0) {
      setBusqueda(true);
      return;
    }
    setCuidadores();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        process.env.BACKEND_URL +
          `/api/cuidadores?ubicacion=${ubicacion}&tipomascota=${mascota}&cantidadmascota=${cantidad}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      if (!response.ok) {
        alert("No hay cuidadores en tu ciudad");
        return;
      }
      const body = await response.json();
      console.log(body);
      actions.addCuidadores(body);
      setBusqueda(true);
    } catch (error) {
      console.log(error);
    }
  }

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
              ??Empecemos la b??squeda del mejor cuidador!
            </div>
          </div>
        </div>
        <div className="container buscador border align-items-center justify-content-center align-middle pt-5">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                <strong>Tipo de mascota</strong>
              </label>
              <select
                style={{ fontSize: "15px" }}
                className="form-select"
                id="validationDefault04"
                required
                value={mascota}
                onChange={(event) => {
                  setMascota(event.target.value);
                }}
              >
                <option selected disabled value="">
                  Seleccionar...
                </option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                <strong>Cantidad</strong>
              </label>
              <select
                style={{ fontSize: "15px" }}
                className="form-select"
                id="validationDefault04"
                required
                value={cantidad}
                onChange={(event) => {
                  setCantidad(event.target.value);
                }}
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
              <label htmlFor="validationCustom04" className="form-label">
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
              <label htmlFor="validationCustom04" className="form-label">
                <strong>Ubicaci??n</strong>
              </label>
              <select
                className="form-select"
                id="validationDefault04"
                required
                value={ubicacion}
                onChange={(event) => {
                  setUbicacion(event.target.value);
                }}
              >
                <option selected disabled value="">
                  Seleccionar...
                </option>
                <option value="Caracas">Caracas</option>
                <option value="Matur??n">Matur??n</option>
              </select>
            </div>
            <div className="col-md-6 mt-1 pb-1">
              <button
                type="button"
                className="boton-cuidador w-75 p-2 mt-4"
                onClick={handleSubmit}
              >
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
        <div className="container bg-transparent">
          <div className="d-flex bg-transparent mt-5 ps-5">
            <h1 id="h1" className="bg-transparent">
              {busqueda == true ? (
                <strong>Resultados</strong>
              ) : (
                <strong>Cuidadores Destacados</strong>
              )}
            </h1>
          </div>
        </div>
        <div className="container-fluid bg-transparent">
          <div className="row d-flex justify-content-center bg-transparent">
            {store.cuidadores.map((cardInfo, index) => {
              return <CuidadorCard item={cardInfo} key={index} />;
            })}
            {/*<div id="cardcuidador" className="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163832/Animalium/pexels-cottonbro-6318274_2_ug64zg.png"
                id="imgcuidador"
                className="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                className="position-absolute top-0 end-0 bg-transparent"
              />
              <div className="card-body">
                <h6 id="h6cuidador">
                  <strong>Sandra Abreu</strong>
                  <span id="span" className="fa fa-star checked"></span>
                  <span id="prating">5.0</span>
                </h6>
                <p id="pcuidador" className="card-text">
                  Me encantan las mascotas, estoy disponible para darles
                  atenci??n y cuidarlos?????? Lo m??s importante es que ellos...
                </p>
                <p id="pcuidadorlocation">
                  <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                  Caracas
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center bg-transparent">
            <div id="cardcuidador" className="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163838/Animalium/pexels-oleksandr-pidvalnyi-1174081_1_uo4xzu.png"
                id="imgcuidador"
                className="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                className="position-absolute top-0 end-0 bg-transparent"
              />
              <div className="card-body">
                <h6 id="h6cuidador">
                  <strong>Natalia Andrade</strong>
                  <span id="span" className="fa fa-star checked"></span>
                  <span id="prating">5.0</span>
                </h6>
                <p id="pcuidador" className="card-text">
                  Tengo 22 a??os, actualmente soy estudiante de medicina
                  Veterinaria. Desde peque??a me han gustado los animales...
                </p>
                <p id="pcuidadorlocation">
                  <i
                    id="locationcuidador"
                    className="fa-solid fa-location-dot"
                  ></i>
                  Caracas
                </p>
              </div>
            </div>
            <div id="cardcuidador" className="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163831/Animalium/pexels-hikmet-9682588_2_nvxzrs.png"
                id="imgcuidador"
                className="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                class="position-absolute top-0 end-0 bg-transparent"
              />
              <div className="card-body">
                <div className="row d-flex justify-content-center">
                  <h6 id="h6cuidador">
                    <strong>Miguel Rodr??guez</strong>
                    <span id="span" className="fa fa-star checked"></span>
                    <span id="prating">5.0</span>
                  </h6>
                </div>
                <p id="pcuidador" className="card-text">
                  Crec?? con animales y he sido rescatista, trabajo desde mi casa
                  y tengo el tiempo para darles cari??o a las mascotas...
                </p>
                <p id="pcuidadorlocation">
                  <i
                    id="locationcuidador"
                    className="fa-solid fa-location-dot"
                  ></i>
                  Maturin
                </p>
              </div>
            </div>
            <div id="cardcuidador" className="card bg-transparent">
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163832/Animalium/pexels-cottonbro-6318274_2_ug64zg.png"
                id="imgcuidador"
                className="card-img-top bg-transparent"
                alt="..."
              />
              <img
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
                alt=""
                id="certificadohuella"
                className="position-absolute top-0 end-0 bg-transparent"
              />
              <div className="card-body">
                <h6 id="h6cuidador">
                  <strong>Sandra Abreu</strong>
                  <span id="span" className="fa fa-star checked"></span>
                  <span id="prating">5.0</span>
                </h6>
                <p id="pcuidador" className="card-text">
                  Me encantan las mascotas, estoy disponible para darles
                  atenci??n y cuidarlos?????? Lo m??s importante es que ellos...
                </p>
                <p id="pcuidadorlocation">
                  <i
                    id="locationcuidador"
                    className="fa-solid fa-location-dot"
                  ></i>
                  Caracas
                </p>
              </div>
              </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
