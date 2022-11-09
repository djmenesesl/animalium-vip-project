import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CuidadorCard = ({ item }) => {
  const { imagen } = item;
  return (
    <div id="cardcuidador" className="card bg-transparent">
      <img
        src={imagen}
        id="imgcuidador"
        className="card-img-top bg-transparent"
        alt="..."
      />

      <img
        src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
        alt=""
        id="certificadohuella"
        className="position-absolute top-0 end-0 bg-transparent"
      />

      <div className="card-body">
        <Link to={`/cuidador/${item.id}`}>
          <h6 id="h6cuidador">
            <strong>{`${item.nombre} ${item.apellido}`}</strong>
            <span id="span" className="fa fa-star checked"></span>
            <span id="prating">{item.rating}</span>
          </h6>
          <p id="pcuidador" className="card-text">
            {item.descripcion}
          </p>
          <p id="pcuidadorlocation">
            <i id="locationcuidador" className="fa-solid fa-location-dot"></i>
            {item.ubicacion}
          </p>
        </Link>
      </div>
    </div>
  );
};
