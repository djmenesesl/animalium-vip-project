import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ModalContactarLogin } from "../component/modalContactarLogin";
import { ModalContactoCuidador } from "../component/modalContactoCuidador";
import { ModalTerminosYCondiciones } from "../component/modalTerminosYCondiciones";

import { Context } from "../store/appContext";

export const ProfileCuidadorPublic = () => {
  const { store, actions } = useContext(Context);
  const [cuidador, setCuidador] = useState();
  const [botonActivo, setBotonActivo] = useState(false);
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
                {cuidador.imagen ? (
                  <img
                    className="rounded-circle mt-1"
                    style={{ width: "150px", height: "150px" }}
                    src={cuidador.imagen}
                  ></img>
                ) : (
                  <img
                    className="rounded-circle mt-1"
                    style={{ width: "150px", height: "150px" }}
                    src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667244121/Animalium/Avatar-profile_n9gilo.png"
                  ></img>
                )}
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
                    {cuidador.precio_dia}$
                  </p>
                  <p class="card-text fw-bold">
                    <i class="fa-solid fa-location-dot me-1"></i>
                    {cuidador.ubicacion}
                  </p>

                  <p class="card-text fw-bold">
                    <input
                      class="input-terminos form-check-input me-2"
                      type="checkbox"
                      value={botonActivo}
                      onChange={(event) => {
                        setBotonActivo(event.target.value);
                      }}
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
                      Términos y
                    </Link>{" "}
                  </p>
                  <p class="card-text fw-bold ms-3">
                    <Link
                      target={"_blank"}
                      to=""
                      style={{
                        color: "#20C997",
                        marginLeft: "5px",
                        textDecoration: "underline",
                      }}
                    >
                      Condiciones
                    </Link>{" "}
                    del servicio
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
                  disabled={!botonActivo}
                  style={{
                    background: "#20C997",
                    color: "white",
                    borderRadius: "16px",
                    border: "transparent",
                  }}
                >
                  Contactar al cuidador
                </button>
                {localStorage.getItem("token") ? (
                  <ModalContactoCuidador cuidador={cuidador} />
                ) : (
                  <ModalContactarLogin />
                )}
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
                        <strong>Acerca de {cuidador.nombre}:</strong>
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Escribe en esta sección un poco de tí y por qué deberían de contratarte. Por ejemplo : ¨Mi casa es espaciosa y tengo un amplio jardín. Los paseo en las mañanas y permito que duerman en mi cama."
                        rows="5"
                        value={cuidador.descripcion}
                      ></textarea>
                    </form>
                  </div>
                  <div className="col-md-10">
                    <label
                      className="labels mt-4 mb-2"
                      style={{ fontSize: "16px" }}
                    >
                      <strong>
                        Mascotas que ha cuidado {cuidador.nombre}:
                      </strong>
                    </label>
                    <div classNameName="App">
                      <div className="file">
                        <form>
                          <label htmlFor="archivo" id="archivolabel">
                            <i
                              className="fa-solid fa-plus d-flex justify-content-center"
                              id="plusicon"
                            ></i>
                            <p id="labelarchivo">Fotos de mascotas cuidadas</p>
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
                        <strong>Reseñas:</strong>
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
