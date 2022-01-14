import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../CheckOut/CheckOut.css";

export const CheckOut = () => {
  const [cart, setCart] = useContext(CartContext);
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleNombreInput = (e) => {
    setValues({ ...values, nombre: e.target.value });
  };
  const handleApellidoInput = (e) => {
    setValues({ ...values, apellido: e.target.value });
  };
  const handleEmailInput = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.nombre && values.apellido && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div class="success-message">Gracias! Por su compra</div>
        ) : null}

        <input
          onChange={handleNombreInput}
          value={values.nombre}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Nombre"
          name="firstName"
        />

        {submitted && !values.nombre ? (
          <span id="first-name-error">Por favor ingrese su nombre.</span>
        ) : null}

        <input
          onChange={handleApellidoInput}
          value={values.apellido}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Apellido"
          name="lastName"
        />
        {submitted && !values.apellido ? (
          <span id="last-name-error">Por favor ingrese su apellido</span>
        ) : null}

        <input
          onChange={handleEmailInput}
          value={values.email}
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span id="email-error">Por favor ingresar un Email vàlido</span>
        ) : null}

        <button class="form-field" type="submit">
          Pagar!
        </button>
      </form>
    </div>
  );
};
