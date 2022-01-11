import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import "../Category/Category.css";

export const Category = () => {
  const [categories, setCategories] = useState();
  const [categorySelected, setCategorySelected] = useState(false);
  const { categoryName } = useParams();

  const filterResults = (e) => {
    const category = e.toLowerCase();

    const API = getFirestore();

    const itemsCollection = collection(API, "productos");
    getDocs(itemsCollection).then((res) => {
      console.log(res.docs.map((art) => ({ ...art.data() })));
      const result = res.docs.map((art) => ({ ...art.data() }));
      const categorySelected = result
        .filter((art) => {
          return art.categoryName === category;
        })
        .map((item) => {
          return item;
        });
      setCategorySelected(true);
      setCategories(categorySelected);
    });
  };

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

  console.log(categorySelected);
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
                    <Link to={`/category/${item.categoryName}`}>
                      <li onClick={(e) => filterResults(e.target.innerText)}>
                        {item.categoryName}
                      </li>
                    </Link>
                  </ul>
                </div>
              );
            })}
      </div>
    </>
  );
};
