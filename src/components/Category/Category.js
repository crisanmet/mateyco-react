import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";
import {
  collection,
  getDoc,
  doc,
  get,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import "../Category/Category.css";

export const Category = () => {
  const [categories, setCategories] = useState();
  const [categorySelected, setCategorySelected] = useState(false);
  const { categoryName } = useParams();

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

  // useEffect(() => {
  //   const getItem = async () => {
  //     try {
  //       let responseApi = await fetch(`${API}/categories`);
  //       let jsonResponse = await responseApi.json();

  //       setCategories(jsonResponse);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getItem();
  // }, []);

  useEffect(() => {
    const getItem = () => {
      const API = getFirestore();

      const itemsCollection = collection(API, "categories");
      getDocs(itemsCollection).then((res) => {
        console.log(res.docs.map((art) => ({ ...art.data() })));
        setCategories(res.docs.map((art) => ({ ...art.data() })));
      });
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
                      {item.categoryName}
                    </li>
                  </ul>
                </div>
              );
            })}
      </div>
    </>
  );
};
