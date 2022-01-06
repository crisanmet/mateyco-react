import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

export const CartItem = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const [value, setValue] = useState(props.cantidad);

  const precioTotalUnitario = (id) => {
    const articulo = cart.find((p) => p.id === id);
    const totalArticulo = articulo.cantidad * articulo.price;

    return totalArticulo;
  };

  const aumentarItem = (value, id) => {
    setValue((val) => val + 1);
    if (cart.some((p) => p.id === id)) {
      let newCart = [...cart];

      let repetido = newCart.find((p) => p.id === id);

      repetido.cantidad += 1;

      setCart(newCart);
    }
  };
  const disminuirItem = (value, id) => {
    if (cart.some((p) => p.id === id)) {
      let newCart = [...cart];

      let repetido = newCart.find((p) => p.id === id);

      repetido.cantidad -= 1;
      if (repetido.cantidad < 1) {
        let newCart = cart.filter((p) => p.id !== id);

        setCart(newCart);
      } else {
        setCart(newCart);
      }
    }
    setValue((val) => val - 1);
  };
  const eliminarItem = (id) => {
    let newCart = cart.filter((p) => p.id !== id);

    setCart(newCart);
  };

  return (
    <tr>
      <td>
        <img src={props.image} className="img-td"></img>
      </td>
      <td>{props.title}</td>
      <td>${props.price} </td>
      <td>{value} </td>
      <td className="container-btn">
        <button
          className="btn-carrito"
          onClick={() => {
            aumentarItem(value, props.id);
          }}
        >
          +
        </button>
        <button
          className="btn-carrito-eliminar"
          onClick={() => {
            disminuirItem(value, props.id);
          }}
        >
          -
        </button>
      </td>
      <td>${new Intl.NumberFormat().format(precioTotalUnitario(props.id))} </td>
    </tr>
  );
};
