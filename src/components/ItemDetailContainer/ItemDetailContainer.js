import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {
  collection,
  getDoc,
  doc,
  get,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const { categoryName, id } = useParams();

  useEffect(() => {
    const getItem = () => {
      const API = getFirestore();

      const itemsCollection = collection(API, "productos");
      getDocs(itemsCollection).then((res) => {
        console.log(res.docs.map((art) => ({ ...art.data() })));
        setItems(res.docs.map((art) => ({ ...art.data() })));
      });
    };
    getItem();
  }, []);

  useEffect(() => {
    const db = getFirestore();

    const API = doc(db, "productos", `${id}`);
    getDoc(API).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
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
