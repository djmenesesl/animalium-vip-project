import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ProfileCliente = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row d-flex">
        <div className="col-6">
          <div id="cardprofile" class="card" style={{ width: "18rem" }}>
            <div class="imgprofile d-flex justify-content-center">
              <img
                id="imgprofile"
                src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667244121/Animalium/Avatar-profile_n9gilo.png"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <p class="card-text p-4">Carga una foto y completa tu perfil</p>
            </div>
            <div class="card-body d-flex justify-content-center">
              <button type="button" className="boton-cuidador w-75 p-2 mt-4">
                Completar Perfil
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h3 style={{ width: "360px" }}>¡Hola! Me Llamo Mariana</h3>
          <p>
            <strong>Sus mascotas son parte de Animalium desde 2022</strong>
          </p>
          <h6>Acerca de Mariana:</h6>
          <textarea
            placeholder="Escribe sobre ti en esta sección"
            rows="5"
            cols="40"
          ></textarea>
          <h6 className="mt-4">Mascotas de Mariana:</h6>
          <input type="text" />
          <h6 className="mt-4">Reseñas:</h6>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
