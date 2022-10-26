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
          tipoMascota: tipoMascota,
          cantidadMascota: cantidadMascota,
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
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="inputName4" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            value={nombre}
            onChange={(event) => {
              setNombre(event.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="inputApellido4" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="inputApellido4"
            value={apellido}
            onChange={(event) => {
              setApellido(event.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="inputTelefono4" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTelefono4"
            value={telefono}
            onChange={(event) => {
              setTelefono(event.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <label for="ivalidationDefault04" className="form-label">
            Ubicación
          </label>
          <select
            style={{ fontSize: "15px" }}
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
            <option value="1">Caracas</option>
            <option value="2">Maturín</option>
          </select>
        </div>
        <div className="col-md-4">
          <label for="inputTelefono4" className="form-label">
            Tipo de mascota que cuidas
          </label>
          <select
            style={{ fontSize: "15px" }}
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
            <option value="1">Perro</option>
            <option value="2">Gato</option>
          </select>
        </div>
        <div className="col-md-4">
          <label for="inputTelefono4" className="form-label">
            Cantidad de mascotas que puedes cuidar
          </label>
          <select
            style={{ fontSize: "15px" }}
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
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Ingresa de nuevo tu Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
