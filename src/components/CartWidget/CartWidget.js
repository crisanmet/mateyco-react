import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../CartWidget/CartWidget.css";

function CartWidget() {
  const [cart, setCart] = useContext(CartContext);
  let count = 0;
  cart.forEach((item) => {
    count += item.cantidad;
  });

  return (
    <div>
      <Link to="/cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="2x"
          className="icon"
        ></FontAwesomeIcon>
        <span className="count">{count} </span>
      </Link>
    </div>
  );
}

export default CartWidget;
