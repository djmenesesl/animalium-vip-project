import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
const { RangePicker } = DatePicker;
import moment from "moment";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [dates, setDates] = useState([]);
  console.log(dates);

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid bg-hero">
        <div
          className="container bg-transparent mb-5 text-light"
          id="buscador-tope"
        >
          <div className="row pt-5 bg-transparent">
            <div className="col-7 fs-1 fw-bold bg-transparent">
              ¡Tu mascota se sentirá tan feliz como en casa!
            </div>
            <div className="col-8 fs-4 bg-transparent">
              Contamos con la red de cuidadores más grande y confiable de toda
              Venezuela
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
                  Please Select...
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option>...</option>
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
                  Please Select...
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option>...</option>
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
                  Please Select...
                </option>
                <option value="1">Caracas</option>
                <option value="2">Maturín</option>
                <option value="3">Three</option>
                <option>...</option>
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

      <div className="row mt-4">
        <div className="col-12 text-center fs-2 fw-bold">
          Las mascotas son parte de nuestra familia
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-9 text-center fs-4 align-items-center justify-content-center mb-3">
          Brindar una experiencia llena de amor y cuidados es nuestra promesa.
          Damos tranquilidad y felicidad tanto a mascotas como a sus dueños.
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 className="card-title text-center">Encuentra un cuidador</h5>
            </div>
            <i className="fa-solid fa-person-walking-with-cane fs-1 text-center"></i>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">Reserva</h5>
            </div>
            <i class="fa-solid fa-house fs-1 text-center"></i>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">Y listo!</h5>
            </div>
            <i class="fa-solid fa-face-smile-wink fs-1 text-center"></i>
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
                className="card-title"
                style={{
                  backgroundColor: "#623CEA",
                  color: "white",
                  fontSize: "48px",
                }}
              >
                ¿Quieres ser cuidador?
              </div>

              <p
                className="card-text"
                style={{
                  backgroundColor: "#623CEA",
                  color: "#FAFAFA",
                  fontSize: "16px",
                }}
              >
                Puedes aplicar en este botón
              </p>
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
          <div className="col-md-4" style={{ backgroundColor: "#623CEA" }}>
            <img
              src="https://images.hola.com/imagenes/mascotas/20221020219416/razas-perros-toy/1-154-385/razas-de-perro-toy-m.jpg?tx=w_360"
              className="img-fluid rounded-start"
              alt="..."
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
