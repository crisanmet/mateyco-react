import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  const API = "http://localhost:5000/Yerbas";
  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    const getItem = async () => {
      try {
        let responseApi = await fetch(API, options);
        let jsonResponse = await responseApi.json();

        console.log(jsonResponse);
        setItems(jsonResponse);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, []);

  return (
    <div className="productos-contenedor">
      {items &&
        items.map((item) => {
          return (
            <ItemDetail
              key={item.id}
              id={item.id}
              title={item.nombre}
              image={item.img}
              price={item.precio}
            />
          );
        })}
    </div>
  );
};
