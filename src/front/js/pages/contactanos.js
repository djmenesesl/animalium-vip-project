import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Contactanos = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="contenedor">
      <div className="grupo">
        <h1>Contáctanos</h1>
      </div>
    </div>
  );
};
