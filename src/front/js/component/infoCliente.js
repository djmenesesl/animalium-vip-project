import React, { Component } from "react";

export const InfoCliente = ({ item }) => (
  <div className="container-fluid px-0">
    <div
      className="alert alert-dismissible fade show ps-5"
      role="alert"
      style={{ background: "#B0FAE4", color: "#00543B", fontSize: "16px" }}
    >
      <i class="fa-solid fa-circle-info bg-transparent me-1"></i>Completa tu
      perfil para empezar a disfrutar del servicio Animalium
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
                <i class="fa-solid fa-paw me-1"></i>
                {item.nombre} tiene:
              </p>
              <p class="card-text">{item.tipoMascota} </p>
              <p class="card-text fw-bold">
                <i class="fa-solid fa-location-dot me-1"></i>
                {item.ubicacion}
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
                          ¿Qué mascota tienes?
                        </label>
                        <select
                          style={{ fontSize: "15px" }}
                          className="form-select"
                          id="validationDefault04"
                          required
                          value={tipoMascota}
                          onChange={(event) => {
                            setTipoMascota(event.target.value);
                          }}
                        >
                          <option selected disabled value="">
                            Seleccionar...
                          </option>
                          <option value="Perro">Perro</option>
                          <option value="Gato">Gato</option>
                        </select>
                      </div>
                      <div class="col-4">
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
                          value={cantidadMascota}
                          onChange={(event) => {
                            setCantidadMascota(event.target.value);
                          }}
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
                      <div class="col-4">
                        <label
                          for="validationDefault04"
                          class="col-form-label mb-2"
                        >
                          Ubicación:
                        </label>
                        <select
                          className="form-select"
                          id="validationDefault04"
                          required
                          value={ubicacion}
                          onChange={(event) => {
                            setUbicacion(event.target.value);
                          }}
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
                            <input
                              type="file"
                              id="archivo"
                              value={imagen}
                              onChange={(event) => {
                                setImagen(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={handleSubmit}
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
              <h2 className="text-right">Hola! Me llamo {item.nombre}</h2>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-right">
                Sus mascotas son parte de animalium desde 2022{" "}
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
                    Acerca de {item.nombre}:
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Escribe en esta sección un poco de tí y por qué deberían de contratarte. Por ejemplo : ¨Mi casa es espaciosa y tengo un amplio jardín. Los paseo en las mañanas y permito que duerman en mi cama."
                    rows="5"
                    value={descripcion}
                    onChange={(event) => {
                      setDescripcion(event.target.value);
                    }}
                  ></textarea>
                  <button
                    className="btn btn-primary mt-2"
                    type="button"
                    onClick={handleSubmit}
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
                  Mascotas de {item.nombre}:
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
