import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        alert("Error iniciando sesión");
        return;
      }
      alert("User authenticated");
      const body = await response.json();
      console.log(body);
      localStorage.setItem("token", body.token);
      navigate("/cliente/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid bg-patitas">
      <div className="container p-2 w-75 bg-light mt-3 rounded shadow">
        <div class="row align-items-stretch">
          <div className="col bg-login d-none d-lg-block col-ms-5 col-lg-5 col-xl-6 rounded"></div>
          <div className="col bg-white p-5 rounded-end">
            <div className="text-end">
              <img src="" alt=""></img>
            </div>
            <h2
              className="fw-bold text-center py-2"
              style={{
                fontSize: "32px",
                fontWeight: "500",
              }}
            >
              Ingresa a tu cuenta
            </h2>
            <h6
              className="fw-bold text-center py-2"
              style={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Qué gusto tenerte de vuelta
            </h6>
            <form action="#">
              <div className="mb-4">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
              </div>
              <div className="mb-1">
                <label for="Password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="Password"
                  className="form-control"
                  name="Password"
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
              </div>
              <div className="mb-3">
                <span>
                  <a
                    href="#"
                    style={{
                      color: "#20C997",
                      float: "right",
                      textDecoration: "underline",
                    }}
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </span>
              </div>
              <br></br>
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
                  Ingresar
                </button>
              </div>
            </form>

            <div className="col  text-center mt-5">
              ¿Aun no tienes una cuenta?
              <a href="#" style={{ color: "#20C997" }} className="ms-1">
                Registrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    /*
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Contraseña
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
            Iniciar Sesión
          </button>
        </div>
      </form>
      */
  );
};
