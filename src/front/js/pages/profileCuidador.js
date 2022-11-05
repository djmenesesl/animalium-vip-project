import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ProfileCuidador = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid px-0">
      <div
        className="alert alert-dismissible fade show ps-5"
        role="alert"
        style={{ background: "#B0FAE4", color: "#00543B", fontSize: "16px" }}
      >
        <i class="fa-solid fa-circle-info bg-transparent me-1"></i>Completa tu
        perfil para empezar a cuidar mascotas
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <div className="container rounded bg-white mt-5 mb-5 d-flex justify-content-center">
        <div className="row ms-5">
          <div
            className="col-md-6 border-right me-4"
            id="cardprofile"
            style={{ height: "580px" }}
          >
            <div className="d-flex flex-column align-items-center text-center p-3 py-4">
              <img
                className="rounded-circle mt-1"
                width="150px"
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667244121/Animalium/Avatar-profile_n9gilo.png"
              ></img>
              <div class="card-body text-start">
                <p class="card-text fw-bold">
                  <i class="fa-solid fa-shield-halved"></i> Identidad verificada
                </p>
                <p class="card-text fw-bold">
                  <i class="fa-solid fa-star me-1"></i>0 Reseñas
                </p>
                <p class="card-text fw-bold">
                  <i class="fa-solid fa-paw me-1"></i>Miguel cuida a:
                </p>
                <p class="card-text">Perro</p>
                <p class="card-text fw-bold">
                  <i class="fa-solid fa-location-dot me-1"></i>Monto por día y
                  hora
                </p>
                <p class="card-text fw-bold">
                  <i class="fa-solid fa-location-dot me-1"></i>Caracas
                </p>
                <p class="card-text fw-bold" style={{ color: "#00543B" }}>
                  Carga una foto y completa tu perfil ;)
                </p>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary profile-button" type="button">
                Completar perfil
              </button>
            </div>
          </div>
          <div className="col-md-6 border-right">
            <div className="p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">Hola! Me llamo Miguel</h2>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-right">
                  Es cuidador en animalium desde 2022{" "}
                  <i
                    class="fa-solid fa-paw me-1"
                    style={{ color: "#28FCBD" }}
                  ></i>
                </h6>
              </div>
              <div className="row mt-3">
                <div className="col-md-10">
                  <form>
                    <label className="labels mb-2" style={{ fontSize: "16px" }}>
                      Acerca de Miguel:
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Escribe en esta sección un poco de tí y por qué deberían de contratarte. Por ejemplo : ¨Mi casa es espaciosa y tengo un amplio jardín. Los paseo en las mañanas y permito que duerman en mi cama."
                      rows="5"
                    ></textarea>
                    <button
                      className="btn btn-primary mt-2"
                      type="button"
                      style={{
                        background: "#20C997",
                        color: "white",
                        borderRadius: "8px",
                        border: "transparent",
                      }}
                    >
                      Actualizar
                    </button>
                  </form>
                </div>
                <div className="col-md-10">
                  <label
                    className="labels mt-4 mb-2"
                    style={{ fontSize: "16px" }}
                  >
                    Mascotas que ha cuidado Miguel:
                  </label>
                  <div classNameName="App">
                    <div className="file">
                      <form>
                        <label htmlFor="archivo" id="archivolabel">
                          <i
                            className="fa-solid fa-plus d-flex justify-content-center"
                            id="plusicon"
                          ></i>
                          <p id="labelarchivo">Carga fotos de tus mascotas</p>
                        </label>
                        <input type="file" id="archivo" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-10">
                  <form>
                    <label
                      className="labels mt-4 mb-2"
                      style={{ fontSize: "16px" }}
                    >
                      Reseñas:
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="En esta sección, se mostrarán las reseñas que dejarán tus clientes!"
                      value=""
                    ></textarea>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
