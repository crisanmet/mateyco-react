import React from "react";
import "./Styles/ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <section className="container-productos">
      <h3>!Bienvendino a {props.nombre}¡ </h3>
      <p>Muy pronto encontrará nuestros productos aquí</p>
    </section>
  );
};
export default ItemListContainer;
