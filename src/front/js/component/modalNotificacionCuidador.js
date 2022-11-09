import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const ModalContactarLogin = () => {
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
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body pb-0">
              <div class="row">
                <div class="modaltittles col-12 ">
                  <h5
                    class="modal-title-1"
                    id="exampleModalLabel"
                    style={{ fontSize: "24px" }}
                  >
                    Mensajes
                  </h5>
                  <h5
                    class="modal-title-1"
                    id="exampleModalLabel"
                    style={{ fontSize: "24px" }}
                  >
                    Tienes una nueva solicitud!
                  </h5>
                </div>
              </div>
              <div class="row-fluid d-flex justify-content-center ">
                <div>
                  <img
                    src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667342806/Animalium/Avatar_k0z1ns.png"
                    id="modalimg"
                    className="bg-transparent"
                    alt="..."
                  />
                </div>
                <div class="infomodal">
                  <p
                    class="modal-title text-start"
                    id="exampleModalLabel"
                    style={{ fontSize: "24px" }}
                  >
                    Cesar Gorge
                  </p>

                  <p className="terminos-modal text-start mb-2">
                    <i class=" modal-icon fa-solid fa-paw"></i>2 perros
                  </p>
                  <p className="terminos-modal text-start mb-2 ">
                    <i class="modal-icon fa-regular fa-calendar"></i>
                    21-24 NOV
                  </p>
                </div>
              </div>
            </div>
            <div class="container">
              <div>
                <button
                  type="button"
                  class="btn-contactar btn btn-primary mt-3"
                >
                  <Link target={"blank"} to="/login" style={{ color: "white" }}>
                    Aprobar
                  </Link>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="btn-contactar btn-outline-primary mt-1"
                  style={{ color: "#20c997" }}
                  disabled
                >
                  Cancelar
                </button>
              </div>
            </div>
            <div class="modal-footer "></div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};
