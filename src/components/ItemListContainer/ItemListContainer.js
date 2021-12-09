import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <React.Fragment>
      <section className="container-productos">
        <h3>!Bienvendino a {props.nombre}¡ </h3>
        <p>Muy pronto encontrará nuestros productos aquí</p>
      </section>
      <ItemCount />
    </React.Fragment>
  );
};
export default ItemListContainer;
