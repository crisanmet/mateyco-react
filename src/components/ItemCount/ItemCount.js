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

  function agregarItemCarrito(id, value) {
    if (value < stock) setValue((val) => val + 1);
    else alert("No hay mas stock");
    if (cart.some((p) => p.id === id)) {
      let newCart = [...cart];

      let repetido = newCart.find((p) => p.id === id);

      repetido.cantidad += 1;

      setCart(newCart);
    } else {
      setCart([...cart, carrito]);
    }
  }
  console.log(cart);

  function eliminarItemCarrito(id) {
    if (value <= 0) return;
    setValue((val) => (val = 0));
    let newCart = cart.filter((p) => p.id !== id);

    setCart(newCart);
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
      </div>
    </div>
  );
};

export default ItemCount;
