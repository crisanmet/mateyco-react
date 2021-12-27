import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import "../Category/Category.css";

export const Category = (props) => {
  const [categories, setCategories] = useState();
  const [categorySelected, setCategorySelected] = useState(false);

  const API = "http://localhost:3002";

  const FilterResults = async (e) => {
    const category = e.toLowerCase();
    try {
      let responseApi = await fetch(`${API}/productos `);
      let jsonResponse = await responseApi.json();
      const result = await jsonResponse
        .filter((cat) => {
          return cat.categoryName === category;
        })
        .map((item) => {
          return item;
        });

      setCategorySelected(true);
      setCategories(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getItem = async () => {
      try {
        let responseApi = await fetch(`${API}/categories`);
        let jsonResponse = await responseApi.json();

        setCategories(jsonResponse);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, []);

  return (
    <>
      <div className="productos-contenedor">
        {categorySelected
          ? categories &&
            categories.map((item) => {
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
            })
          : categories &&
            categories.map((item) => {
              return (
                <div className="categories">
                  <ul>
                    <li onClick={(e) => FilterResults(e.target.innerText)}>
                      {item.categoryName} <Link to="/hola"> </Link>
                    </li>
                  </ul>
                </div>
              );
            })}
      </div>
    </>
  );
};
