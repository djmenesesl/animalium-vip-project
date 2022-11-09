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
        <div class="modal-dialog">
          <div class="modal-content ">
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
                  <h5
                    class="modal-title"
                    id="exampleModalLabel"
                    style={{ marginLeft: "10px" }}
                  >
                    ¡Inicia sesión para poder continuar!
                  </h5>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-10">
                  <p
                    class="modal-title"
                    id="exampleModalLabel"
                    style={{ marginLeft: "90px", fontSize: "16px" }}
                  >
                    Para poder contactar con el cuidador es necesario que
                    inicies sesión.
                  </p>
                </div>
              </div>
              <div class="mb-3 mt-5" style={{ marginLeft: "142px" }}>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{
                    background: "#20C997",
                    color: "white",
                    borderRadius: "16px",
                    border: "transparent",
                    marginRight: "150px",
                  }}
                >
                  <Link target={"blank"} to="/login" style={{ color: "white" }}>
                    Iniciar Sesión
                  </Link>
                </button>
              </div>
              <div
                class="row mt-4"
                style={{ marginLeft: "50px", fontSize: "16px" }}
              >
                <div class="col-10">
                  <p className="text-center mt-3">
                    ¿No tienes cuenta aún?
                    <Link
                      target={"_blank"}
                      to="/registro"
                      style={{
                        color: "#20C997",
                        marginLeft: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      Regístrate
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
