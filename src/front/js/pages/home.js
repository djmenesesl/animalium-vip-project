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
    <div className="container">
      <div className="container buscador border border-3 ps-5">
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

      <div
        className="container card justify-content-center align-items-center"
        style={{
          width: "1027px",
          height: "501px",
          backgroundColor: "#623CEA",
          borderRadius: "15px",
          marginTop: "100px",
          marginBottom: "100px",
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
