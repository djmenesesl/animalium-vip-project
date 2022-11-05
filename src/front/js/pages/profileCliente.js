import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileClienteEdit } from "../component/profileClienteEdit";

import { Context } from "../store/appContext";

export const ProfileCliente = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <ProfileClienteEdit />
    </div>
  );
};
