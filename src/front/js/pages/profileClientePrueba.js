import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ProfileCuidador = () => {
  const { store, actions } = useContext(Context);
  const [ubicacion, setUbicacion] = useState([]);
  const [cantidadMascota, setCantidadMascota] = useState([]);
  const [tipoMascota, setTipoMascota] = useState([]);
  const [tarifa, setTarifa] = useState([]);
  const [descripcion, setDescripcion] = useState([]);
  const [imagen, setImagen] = useState([]);
  const [clientes, setClientes] = useState([]);

  async function SetProfileCliente() {
    try {
      const response = await fetch(process.env.BACKEND_URL + `/cliente`, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      });
      if (!response.ok) {
        alert("Bienvenido");
        return;
      }
      const body = await response.json();
      console.log(body);
      setClientes(body);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    SetProfileCliente();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/cuidador", {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          imagen: imagen,
          ubicacion: ubicacion,
          cantidadMascota: cantidadMascota,
          tipoMascota: tipoMascota,
          descripcion: descripcion,
          tarifa: tarifa,
        }),
      });
      if (!response.ok) {
        alert("Error al actualizar el usuario");
        return;
      }
      alert("Perfil actualizado");
    } catch (error) {
      console.log(error);
    }
  }

  return <div className="container"></div>;
};
