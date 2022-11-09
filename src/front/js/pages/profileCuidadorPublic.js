import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const ProfileCuidadorPublic = () => {
  const { store, actions } = useContext(Context);
  const [cuidador, setCuidador] = useState();
  const params = useParams();
  console.log(params);

  async function getCuidador() {
    try {
      const response = await fetch(
        process.env.BACKEND_URL + `/api/cuidador/${params.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      if (!response.ok) {
        alert("Hubo un problema con tu solicitud");
        return;
      }
      const body = await response.json();
      setCuidador(body.user);
      console.log(body);
      return body.user;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCuidador();
  }, []);

  return (
    <div className="container-fluid px-0">
      {cuidador ? (
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
                    <i class="fa-solid fa-shield-halved"></i> Identidad
                    verificada
                  </p>
                  <p class="card-text fw-bold">
                    <i class="fa-solid fa-star me-1"></i>0 Reseñas
                  </p>
                  <p class="card-text fw-bold">
                    <i class="fa-solid fa-paw me-1"></i>
                    {cuidador.nombre} cuida a:
                  </p>
                  <p class="card-text">{cuidador.tipo_mascota}</p>
                  <p class="card-text fw-bold">
                    <i class="fa-solid fa-coins me-1"></i>Tarifa por día:{" "}
                    {cuidador.precio_dia}
                  </p>
                  <p class="card-text fw-bold">
                    <i class="fa-solid fa-location-dot me-1"></i>
                    {cuidador.ubicacion}
                  </p>
                  <p class="card-text fw-bold" style={{ color: "#00543B" }}>
                    Carga una foto y completa tu perfil ;)
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                  style={{
                    background: "#20C997",
                    color: "white",
                    borderRadius: "16px",
                    border: "transparent",
                  }}
                >
                  Completar perfil
                </button>

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
                        <h5
                          class="modal-title"
                          id="exampleModalLabel"
                          style={{ marginLeft: "145px" }}
                        >
                          Completa tu perfil
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div class="modal-body">
                        <div class="row">
                          <div class="col-4">
                            <label
                              for="validationDefault04"
                              class="col-form-label mb-2"
                            >
                              ¿Qué cuidas?
                            </label>
                            <select
                              style={{ fontSize: "15px" }}
                              className="form-select"
                              id="validationDefault04"
                              required
                              value={cuidador.tipo_mascota}
                            >
                              <option selected disabled value="">
                                Seleccionar...
                              </option>
                              <option value="Perro">Perro</option>
                              <option value="Gato">Gato</option>
                            </select>
                          </div>
                          <div class="col-4 mb-2">
                            <label
                              for="validationDefault04"
                              class="col-form-label mb-2"
                            >
                              ¿Cuántas?
                            </label>
                            <select
                              style={{ fontSize: "15px" }}
                              className="form-select"
                              id="validationDefault04"
                              required
                              value={cuidador.cantidad_mascota}
                            >
                              <option selected disabled value="">
                                Seleccionar...
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                          <div class="col-4 mb-2">
                            <label
                              htmlFor="validationDefault04"
                              className="col-form-label mb-2"
                              style={{ fontSize: "13px" }}
                            >
                              Tarifa por dia:
                            </label>

                            <div class="input-group mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Tarifa en $"
                                aria-label="Username"
                                value={cuidador.precio_dia}
                              />
                            </div>
                          </div>
                          <div
                            className="col-10 mt-2"
                            style={{ marginLeft: "35px" }}
                          >
                            <label
                              for="validationDefault04"
                              className="col-form-label mb-2"
                            >
                              Ubicación:
                            </label>
                            <select
                              className="form-select"
                              id="validationDefault04"
                              required
                              value={cuidador.ubicacion}
                            >
                              <option selected disabled value="">
                                Seleccionar...
                              </option>
                              <option value="Caracas">Caracas</option>
                              <option value="Maturín">Maturín</option>
                            </select>
                          </div>
                        </div>
                        <div class="mb-3 mt-5" style={{ marginLeft: "142px" }}>
                          <div className="col-md-10">
                            <div classNameName="App">
                              <div className="file">
                                <label htmlFor="archivo" id="archivolabel">
                                  <i
                                    className="fa-solid fa-plus d-flex justify-content-center"
                                    id="plusicon"
                                  ></i>
                                  <p id="labelarchivo">Carga tu foto aquí</p>
                                </label>
                                <input type="file" id="archivo" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          style={{
                            background: "#20C997",
                            color: "white",
                            borderRadius: "16px",
                            border: "transparent",
                            marginRight: "155px",
                          }}
                        >
                          Actualiza tus datos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 border-right">
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="text-right">
                    Hola! Me llamo {cuidador.nombre}
                  </h2>
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
                      <label
                        className="labels mb-2"
                        style={{ fontSize: "16px" }}
                      >
                        Acerca de {cuidador.nombre}:
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Escribe en esta sección un poco de tí y por qué deberían de contratarte. Por ejemplo : ¨Mi casa es espaciosa y tengo un amplio jardín. Los paseo en las mañanas y permito que duerman en mi cama."
                        rows="5"
                        value={cuidador.descripcion}
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
                      Mascotas que ha cuidado {cuidador.nombre}:
                    </label>
                    <div classNameName="App">
                      <div className="file">
                        <form>
                          <label htmlFor="archivo" id="archivolabel">
                            <i
                              className="fa-solid fa-plus d-flex justify-content-center"
                              id="plusicon"
                            ></i>
                            <p id="labelarchivo">
                              Carga fotos de las mascotas que has cuidado
                            </p>
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
      ) : (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};
