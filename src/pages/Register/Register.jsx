import "./Register.css";
import React, { useState } from "react";

const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Authenticate the user
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Correo"
            value={"nameValue"}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={"password"}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="INICIAR SESION" />
        </div>
      </form>
    </div>
  );
};

export default Register;
