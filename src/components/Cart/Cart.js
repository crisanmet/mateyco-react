import react, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  return (
    <section className="container-carrito">
      <table>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        {cart.length > 0 ? (
          cart.map((art) => (
            <CartItem
              image={art.image}
              title={art.name}
              price={art.price}
              cantidad={art.cantidad}
              id={art.id}
            />
          ))
        ) : (
          <section className="carrito-vacio">
            <h2>Su carrito está vacío</h2>
            <Link to="/">Volver al Home</Link>
          </section>
        )}
      </table>
    </section>
  );
};
