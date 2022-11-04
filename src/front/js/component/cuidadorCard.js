import React, { Component } from "react";

export const CuidadorCard = ({ item }) => (
  <div id="cardcuidador" className="card bg-transparent">
    <img
      src={item.imagen}
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
      <h6 id="h6cuidador">
        <strong>{`${item.nombre} ${item.apellido}`}</strong>
        <span id="span" className="fa fa-star checked"></span>
        <span id="prating">{item.rating}</span>
      </h6>
      <p id="pcuidador" className="card-text">
        "Tengo 22 años, actualmente soy estudiante de medicina Veterinaria.
        Desde pequeña me han gustado los animales..."
      </p>
      <p id="pcuidadorlocation">
        <i id="locationcuidador" className="fa-solid fa-location-dot"></i>
        {item.ubicacion}
      </p>
    </div>
  </div>
);
