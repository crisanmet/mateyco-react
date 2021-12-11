import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = (props) => {
  return (
    <div className="productos-ind" id={props.id}>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title} </h3>
      <div className="precios">
        <span>$</span>
        <p className="precio">{props.price} </p>
      </div>

      <ItemCount />
    </div>
  );
};
export default Item;
