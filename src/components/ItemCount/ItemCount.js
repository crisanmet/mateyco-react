import react, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ItemCount.css";

const ItemCount = ({
  initialValue,
  stock = 10,
  id,
  title,
  price,
  cantidad,
}) => {
  const [value, setValue] = useState(initialValue);
  const [cart, setCart] = useContext(CartContext);

  const carrito = {
    id: id,
    name: title,
    price: price,
    cantidad: cantidad,
  };

  const agregarCarrito = (id) => {
    if (value < stock) setValue((val) => val + 1);
    else alert("No hay mas stock");
    const existe = () => {
      if (cart.length === 0)
        setCart((carritoActual) => [...carritoActual, carrito]);
      cart.forEach((item) => {
        if (item.id === id) {
          item.cantidad += 1;
          setCart((carritoActual) => [...carritoActual]);
        } else {
          setCart((carritoActual) => [...carritoActual, carrito]);
        }
      });
    };
    existe();
  };
  console.log(cart);

  const eliminarCarrito = (id) => {
    if (value <= 0) return;
    setValue((val) => val - 1);

    const existe = () => {
      cart.forEach((item) => {
        // if (item.cantidad < 1) {
        //   const copyCart = [...cart];
        //   copyCart.filter((cartItem) => cartItem.id !== id);
        //   setCart(copyCart);
        // }
        if (item.id === id) {
          item.cantidad -= 1;
          setCart((carritoActual) => [...carritoActual]);
        } else {
          setCart((carritoActual) => [...carritoActual, carrito]);
        }
      });
    };
    existe();
  };
  return (
    <div className="cantidad">
      <span>Cantidad:</span>
      <p>{value} </p>

      <span>/Kg</span>
      <div className="botones">
        <button
          type="button"
          className="btn"
          onClick={() => {
            agregarCarrito(id);
          }}
        >
          Agregar
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            eliminarCarrito(id);
          }}
        >
          Eliminar
        </button>
        <Link to="/cart">
          <button type="button" className="btn">
            Terminar compra!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
