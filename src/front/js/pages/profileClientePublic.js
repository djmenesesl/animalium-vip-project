import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ProfileClientePublic = () => {
  const { store, actions } = useContext(Context);

  return (
    <div class="container rounded bg-white mt-5 mb-5 d-flex justify-content-center">
      <div class="row">
        <div class="col-md-6 border-right" id="cardprofile">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-1"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            ></img>
            <span class="font-weight-bold">
              Carga una foto y completa tu perfil ;
            </span>
            <span class="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary profile-button" type="button">
              Completa tu perfil
            </button>
          </div>
        </div>
        <div class="col-md-6 border-right">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="text-right">Hola! Me llamo Mariana</h2>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="text-right">
                Sus mascotas son parte de animalium desde 2022
              </h6>
            </div>
            <div class="row mt-3">
              <div class="col-md-10">
                <form>
                  <label class="labels mb-2" style={{ fontSize: "16px" }}>
                    Acerca de Mariana:
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    placeholder="Escribe en esta sección un poco de tí y por qué deberían de contratarte. Por ejemplo : ¨Mi casa es espaciosa y tengo un amplio jardín. Los paseo en las mañanas y permito que duerman en mi cama."
                    rows="5"
                  ></textarea>
                  <button
                    class="btn btn-primary profile-button mt-2"
                    type="button"
                  >
                    Actualizar
                  </button>
                </form>
              </div>
              <div class="col-md-10">
                <label class="labels mt-4 mb-2" style={{ fontSize: "16px" }}>
                  Mascotas de Mariana:
                </label>
                <div className="App">
                  <div class="file">
                    <form>
                      <label for="archivo" id="archivolabel">
                        <i
                          class="fa-solid fa-plus d-flex justify-content-center"
                          id="plusicon"
                        ></i>
                        <p id="labelarchivo">Carga fotos de tus mascotas</p>
                      </label>
                      <input type="file" id="archivo" />
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-10">
                <form>
                  <label class="labels mt-4 mb-2" style={{ fontSize: "16px" }}>
                    Reseñas:
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
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
    /*/<div className="container d-flex justify-content-center">
      <div className="row d-flex">
        <div className="col-6">
          <div id="cardprofile" class="card" style={{ width: "18rem" }}>
            <div class="imgprofile d-flex justify-content-center">
              <img
                id="imgprofile"
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667270697/Animalium/Avatar-Mariana_m1maix.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <p class="card-text text-center fw-bold">
                <i class="fa-solid fa-shield-halved"></i> Identidad verificada
              </p>
              <p class="card-text text-center fw-bold">
                <i class="fa-solid fa-star"></i>Reseñas
              </p>
              <p class="card-text text-center fw-bold">Mariana tiene:</p>
              <p class="card-text text-center">1 perro</p>
              <p class="card-text text-center fw-bold">
                <i class="fa-solid fa-location-dot"></i>Caracas
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h3 style={{ width: "360px" }}>¡Hola! Me Llamo Mariana</h3>
          <p>
            <strong>Sus mascotas son parte de Animalium desde 2022</strong>
          </p>
          <h6 className="fw-bold">Acerca de Mariana:</h6>
          <p style={{ width: "360px" }}>
            Tengo un hermoso perrito llamado Toby. Lo amamos mucho. Tiene 4 años
            y le encanta ir a pasear y jugar con otros perritos.
          </p>
          <h6 className="mt-4">Mascotas de Mariana:</h6>
          <img src="" alt="" />
        </div>
      </div>
    </div>*/
  );
};
