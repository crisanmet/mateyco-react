import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../CheckOut/CheckOut.css";

export const CheckOut = () => {
  const [cart, setCart] = useContext(CartContext);

  let total = 0;

  cart.forEach((art) => {
    total += art.price * art.cantidad;
  });

  const [order, setOrder] = useState({
    nombre: "",
    apellido: "",
    email: "",
    cart,
    total,
  });
  console.log(order);

  const handleNombreInput = (e) => {
    setOrder({ ...order, nombre: e.target.value });
  };
  const handleApellidoInput = (e) => {
    setOrder({ ...order, apellido: e.target.value });
  };
  const handleEmailInput = (e) => {
    setOrder({ ...order, email: e.target.value });
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (order.nombre && order.apellido && order.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        <h2>Confirme sus datos:</h2>
        {submitted && valid ? (
          <div class="success-message">Gracias! Por su compra</div>
        ) : null}

        <input
          onChange={handleNombreInput}
          value={order.nombre}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Nombre"
          name="firstName"
        />

        {submitted && !order.nombre ? (
          <span id="first-name-error" className="span-form">
            Por favor ingrese su nombre.
          </span>
        ) : null}

        <input
          onChange={handleApellidoInput}
          value={order.apellido}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Apellido"
          name="lastName"
        />
        {submitted && !order.apellido ? (
          <span id="last-name-error" className="span-form">
            Por favor ingrese su apellido
          </span>
        ) : null}

        <input
          onChange={handleEmailInput}
          value={order.email}
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
        />
        {submitted && !order.email ? (
          <span id="email-error" className="span-form">
            Por favor ingresar un Email vàlido
          </span>
        ) : null}

        <button class="form-field" type="submit">
          Pagar!
        </button>
      </form>
    </div>
  );
};
