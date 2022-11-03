import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ProfileCuidador = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container rounded bg-white mt-5 mb-5 d-flex justify-content-center">
      <div className="row ms-5">
        <div className="col-md-6 border-right me-4" id="cardprofile">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-1"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            ></img>
            <span className="font-weight-bold">
              Carga una foto y completa tu perfil ;
            </span>
            <span className="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
          <div className="mt-5 text-center">
            <button className="btn btn-primary profile-button" type="button">
              Completa tu perfil
            </button>
          </div>
        </div>
        <div className="col-md-6 border-right">
          <div className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-right">Hola! Me llamo Mariana</h2>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-right">
                Sus mascotas son parte de animalium desde 2022
              </h6>
            </div>
            <div className="row mt-3">
              <div className="col-md-10">
                <form>
                  <label className="labels mb-2" style={{ fontSize: "16px" }}>
                    Acerca de Mariana:
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Escribe en esta sección un poco de tí y por qué deberían de contratarte. Por ejemplo : ¨Mi casa es espaciosa y tengo un amplio jardín. Los paseo en las mañanas y permito que duerman en mi cama."
                    rows="5"
                  ></textarea>
                  <button
                    className="btn btn-primary profile-button mt-2"
                    type="button"
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
                  Mascotas de Mariana:
                </label>
                <div className="App">
                  <div className="file">
                    <form>
                      <label for="archivo" id="archivolabel">
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
  );
};
