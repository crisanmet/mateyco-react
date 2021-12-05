import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Carrito() {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} size="2x"></FontAwesomeIcon>
    </div>
  );
}

export default Carrito;
