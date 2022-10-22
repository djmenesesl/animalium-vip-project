import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div class="container buscador">
        <div class="row">
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Tipo de mascota
            </label>
            <select class="form-select" id="validationDefault04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">
              Cantidad
            </label>
            <select class="form-select" id="validationDefault04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <label for="validationCustom04" class="form-label">
              Ubicacion
            </label>
            <select class="form-select" id="validationDefault04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-6 mt-1 pb-1">
            <button type="button" class="boton-cuidador w-75 p-2 mt-4">
              Buscar cuidador
            </button>
          </div>
        </div>
      </div>
      /*
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
