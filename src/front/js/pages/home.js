import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
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

      <div className="container h-100">
        <div className="card mb-3" style={{ height: "300px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="../../img/rigo-baby.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
