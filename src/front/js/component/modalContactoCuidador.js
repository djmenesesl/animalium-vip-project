import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const ModalContactoCuidador = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid px-0">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <h5 class="modal-title-1" id="exampleModalLabel">
                    ¡Informamos al cuidador acerca de tu solicitud!
                  </h5>
                </div>
              </div>
              <div class="row">
                <div class="checkcircle">
                  <i class="fa-regular fa-circle-check"></i>
                </div>
                <div class="col">
                  <p
                    class="modal-title"
                    id="exampleModalLabel"
                    style={{ fontSize: "16px" }}
                  >
                    Puedes entrar en contacto para verificar disponibilidad por:
                  </p>
                </div>
              </div>
              <div class="row" style={{ fontSize: "16px" }}>
                <div class="col">
                  <p className="terminos-modal text-center mt-3 ">
                    <i class="modal-icon fa-solid fa-mobile-retro"></i>
                    04242448421
                  </p>
                  <p className="terminos-modal text-center mt-3 ">
                    <i class="modal-icon fa-regular fa-envelope"></i>
                    cesar@gmail.com
                  </p>
                </div>
              </div>
              <div class="mb-3 mt-5">
                <button type="button" class="btn-contactar btn btn-primary">
                  <Link target={"blank"} to="/login" style={{ color: "white" }}>
                    Continuar
                  </Link>
                </button>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};