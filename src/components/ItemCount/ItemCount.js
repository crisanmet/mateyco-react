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
  image,
}) => {
  const [value, setValue] = useState(initialValue);
  const [cart, setCart] = useContext(CartContext);

  const carrito = {
    id: id,
    name: title,
    price: price,
    image: image,
    cantidad,
  };

  function agregarItemCarrito(id, value) {
    // if (value < stock)
    setValue((val) => val + 1);
    // else alert("No hay mas stock");
  }

  function agregarAlCarrito(id, value) {
    if (cart.some((p) => p.id === id)) {
      let newCart = [...cart];

      let repetido = newCart.find((p) => p.id === id);

      repetido.cantidad += value;

      setCart(newCart);
    } else {
      carrito.cantidad = value;
      setCart([...cart, carrito]);
    }
    setValue(0);
  }
  function eliminarItemCarrito() {
    if (value <= 0) return;
    setValue((val) => val - 1);
  }

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
            agregarItemCarrito(id, value);
          }}
        >
          +
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            eliminarItemCarrito(id);
          }}
        >
          -
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            agregarAlCarrito(id, value);
          }}
        >
          Agregar!
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
