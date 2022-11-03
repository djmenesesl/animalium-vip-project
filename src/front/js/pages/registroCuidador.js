import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const RegistroCuidador = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [tipoMascota, setTipoMascota] = useState("");
  const [cantidadMascota, setCantidadMascota] = useState("");

  let navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/cuidador", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          nombre: nombre,
          apellido: apellido,
          telefono: telefono,
          ubicacion: ubicacion,
          tipo_mascota: tipoMascota,
          cantidad_mascota: cantidadMascota,
        }),
      });
      if (!response.ok) {
        alert("Error al crear el usuario");
        return;
      }
      alert("Usuario creado");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid bg-patitas">
      <div className="container p-2 w-75 bg-light mt-3 rounded shadow">
        <div className="row align-items-stretch">
          <div className="col bg-registro-cuidador d-none d-lg-block col-ms-5 col-lg-5 col-xl-6 rounded"></div>
          <div className="col bg-white p-5 rounded-end">
            <h2
              className="fw-bold text-center"
              style={{
                fontSize: "32px",
                fontWeight: "500",
              }}
            >
              Registro
            </h2>
            <h6
              className="fw-bold text-center py-2"
              style={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              ¡Genera ingresos extra cuidando mascotas!
            </h6>

            <form action="#" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nnputname4" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname4"
                  aria-describedby="emailHelp"
                  value={nombre}
                  onChange={(event) => {
                    setNombre(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="inputapellido4" className="form-label mt-2">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputapellido4"
                  aria-describedby="emailHelp"
                  value={apellido}
                  onChange={(event) => {
                    setApellido(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="nputemail4" className="form-label mt-2">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail4"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="inputtelefono4" className="form-label mt-2">
                  Telefono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputtelefono4"
                  aria-describedby="emailHelp"
                  value={telefono}
                  onChange={(event) => {
                    setTelefono(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label
                  htmlFor="ivalidationDefault04"
                  className="form-label mt-2"
                >
                  Ubicación
                </label>
                <select
                  style={{
                    fontSize: "15px",
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                  className="form-select"
                  id="validationDefault04"
                  value={ubicacion}
                  onChange={(event) => {
                    setUbicacion(event.target.value);
                  }}
                  required
                >
                  <option selected disabled value="">
                    ¿Dónde te encuentras?
                  </option>
                  <option value="Caracas">Caracas</option>
                  <option value="Maturín">Maturín</option>
                </select>
                <label htmlFor="inputTelefono4" className="form-label mt-2">
                  Tipo de mascota
                </label>
                <select
                  style={{
                    fontSize: "15px",
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                  className="form-select"
                  id="validationDefault04"
                  value={tipoMascota}
                  onChange={(event) => {
                    setTipoMascota(event.target.value);
                  }}
                  required
                >
                  <option selected disabled value="">
                    ¿Qué tipo de mascota cuidas?
                  </option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                </select>
                <label htmlFor="inputTelefono4" className="form-label mt-2">
                  Cantidad de mascotas
                </label>
                <select
                  style={{
                    fontSize: "15px",
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                  className="form-select"
                  id="validationDefault04"
                  value={cantidadMascota}
                  onChange={(event) => {
                    setCantidadMascota(event.target.value);
                  }}
                  required
                >
                  <option selected disabled value="">
                    ¿Cuantas mascotas puedes cuidar?
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div className="col-md-4"></div>
              <div className="mb-4">
                <label htmlFor="Password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="Password"
                  className="form-control"
                  id="inputpassword4"
                  aria-describedby="emailHelp"
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="inputpassword4" className="form-label mt-2">
                  Repetir contraseña
                </label>
                <input
                  type="Password"
                  className="form-control"
                  id="inputpassword4"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    backgroundColor: "#20C997",
                    border: "1px solid #20C997",
                    borderRadius: "8px",
                  }}
                >
                  Crear Cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
