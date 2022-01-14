import react, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const precioTotal = () => {
    let total = 0;

    cart.forEach((art) => {
      total += art.price * art.cantidad;
    });
    return total;
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

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
          <>
            <th className="carrito-vacio" scope="row" colSpan={6}>
              Carrito vacío -{" "}
              <Link to="/">
                <button className="btn">Volver al Home</button>
              </Link>
            </th>
          </>
        )}
      </table>
      {cart.length > 0 && (
        <section className="total">
          <p>Total: ${new Intl.NumberFormat().format(precioTotal())} </p>
        </section>
      )}
      {cart.length > 0 && (
        <section className="comprar">
          <Link to="/checkout">
            <button className="btn-comprar">Comprar</button>{" "}
          </Link>
          <button
            className="btn-eliminar"
            onClick={() => {
              vaciarCarrito();
            }}
          >
            Vaciar carrito
          </button>
        </section>
      )}
    </section>
  );
};
