import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Registro = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  let navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/user", {
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
    <div className="container-fluid">
      <div className="container p-2 w-75 bg-light mt-3 rounded shadow">
        <div class="row align-items-stretch">
          <div className="col bg-registro d-none d-lg-block col-ms-5 col-lg-5 col-xl-6 rounded"></div>
          <div className="col bg-white p-5 rounded-end">
            <div className="text-end">
              <img src="" alt=""></img>
            </div>
            <h2 className="fw-bold text-center py-2">Registro</h2>
            <h6 className="fw-bold text-center py-2">
              ¡Qué gusto conocer a tu mascota!
            </h6>
            <h6 className="fw-bold text-center py-2">¿Quieres ser cuidador?</h6>
            <form action="#">
              <div className="mb-4">
                <label for="name" className="form-label">
                  Nombre
                </label>
                <input type="text" className="form-control" name="name"></input>
                <label for="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="apellido"
                ></input>
                <label for="email" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                ></input>
                <label for="telefono" className="form-label">
                  Telefono
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="telefono"
                ></input>
              </div>
              <div className="mb-4">
                <label for="Password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="Password"
                  className="form-control"
                  name="Password"
                ></input>
                <label for="Password" className="form-label">
                  Repetir contraseña
                </label>
                <input
                  type="Password"
                  className="form-control"
                  name="Password"
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
    /*
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
      */
  );
};
