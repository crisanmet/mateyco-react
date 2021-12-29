import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} size="2x"></FontAwesomeIcon>
      <span>{cart.length} </span>
    </div>
  );
}

export default CartWidget;
