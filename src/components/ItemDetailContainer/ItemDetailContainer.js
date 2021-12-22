import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const { id } = useParams();

  const API = "http://localhost:3002/productos";
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

  useEffect(() => {
    const getItem = async () => {
      try {
        let responseApi = await fetch(
          `http://localhost:3002/producto/${id}`,
          options
        );
        let jsonResponse = await responseApi.json();

        setItem(jsonResponse);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, [id]);

  if (id > 0) {
    return (
      <ItemDetail
        key={item.id}
        id={item.id}
        title={item.nombre}
        image={item.img}
        price={item.precio}
      />
    );
  }

  return (
    <div className="productos-contenedor">
      {items &&
        items.map((item) => {
          console.log(item);
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
