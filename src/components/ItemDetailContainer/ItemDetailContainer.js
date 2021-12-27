import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const { categoryName, id } = useParams();

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

        setItems(jsonResponse);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, []);

  useEffect(() => {
    const getItemCategory = async () => {
      try {
        let responseApi = await fetch(`${API}/${id}`, options);
        let jsonResponse = await responseApi.json();

        setItem(jsonResponse);
      } catch (error) {
        console.log(error);
      }
    };
    getItemCategory();
  }, [categoryName, id]);

  if (id > 0) {
    return (
      <ItemDetail
        key={item.id}
        category={item.categoryName}
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
          return (
            <ItemDetail
              key={item.id}
              category={item.categoryName}
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
