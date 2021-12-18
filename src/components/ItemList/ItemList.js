import React from "react";
import ItemDetail from "../Item/Item";

const Promesa = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve(true);
    }, 500);
    Promesa.then(() => {
      <ItemList />;
    });
    throw new Error("error");
  } catch (error) {
    console.log(error);
  }
});

export const ItemList = ({ items }) => {
  return (
    <div className="productos-contenedor">
      {items.map((el) => {
        return (
          <ItemDetail
            key={el.id}
            id={el.id}
            title={el.nombre}
            image={el.img}
            price={el.precio}
          />
        );
      })}
    </div>
  );
};
