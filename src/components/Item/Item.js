import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="productos-ind" id={props.id}>
      <Link to={`/producto/${props.id}`}>
        <img src={props.image} alt={props.title}></img>
      </Link>
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
