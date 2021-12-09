import react, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initialValue = 1, stock = 10 }) => {
  const [value, setValue] = useState(initialValue);

  const agregarCarrito = () => {
    if (value < stock) setValue((val) => val + 1);
    else alert("No hay mas stock");
  };

  const eliminarCarrito = () => {
    if (value <= 0) return;
    setValue((val) => val - 1);
  };
  return (
    <div className="cantidad">
      <span>Cantidad:</span>
      <p>{value} </p>

      <span>/Kg</span>
      <button type="button" className="btn" onClick={agregarCarrito}>
        Agregar al Carrito
      </button>
      <button type="button" className="btn" onClick={eliminarCarrito}>
        Eliminar del carrito
      </button>
    </div>
  );
};

export default ItemCount;
