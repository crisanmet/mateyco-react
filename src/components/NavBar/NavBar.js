import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBarStyle.css";

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <h1>MateYCo</h1>
        <a href="#home">Home</a>
        <a href="#productos">Productos</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
        <CartWidget />
      </nav>
    </header>
  );
}

export default NavBar;
