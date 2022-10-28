import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ProfileCuidador = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="contenedor">
      <div className="grupo">
        <h1>Hola Cuidador, Bienvenido a tu perfil</h1>
      </div>
    </div>
  );
};
