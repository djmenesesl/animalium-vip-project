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
                    Términos y condiciones del servicio
                  </h5>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <p
                    class="modal-title"
                    id="exampleModalLabel"
                    style={{ fontSize: "16px" }}
                  >
                    Para continuar, acepta los términos y condiciones del
                    servicio:
                  </p>
                </div>
              </div>
              <div class="row mt-4" style={{ fontSize: "16px" }}>
                <div class="col">
                  <p className="terminos-modal text-center mt-3 ">
                    <input
                      class="input-terminos form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    Acepto los
                    <Link
                      target={"_blank"}
                      to=""
                      style={{
                        color: "#20C997",
                        marginLeft: "5px",
                        textDecoration: "underline",
                      }}
                    >
                      Términos y Condiciones
                    </Link>{" "}
                    del servicio
                  </p>
                </div>
              </div>
              <div class="mb-3 mt-5">
                <button type="button" class="btn-contactar btn btn-primary">
                  <Link target={"blank"} to="" style={{ color: "white" }}>
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
