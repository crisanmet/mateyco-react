import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBarStyle.css";

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="titulo">
          MateYCo
        </Link>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/productos" activeClassName="active">
          Productos
        </NavLink>
        <NavLink to="/nosotros" activeClassName="active">
          Nosotros
        </NavLink>
        <NavLink to="/contacto" activeClassName="active">
          Contacto
        </NavLink>

        <CartWidget />
      </nav>
    </header>
  );
}

export default NavBar;
