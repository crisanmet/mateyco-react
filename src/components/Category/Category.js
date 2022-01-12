import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import "../Category/Category.css";

export const Category = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getItem = () => {
      setLoading(true);
      const API = getFirestore();

      const itemsCollection = collection(API, "productos");
      if (componentMounted) {
        getDocs(itemsCollection).then((res) => {
          setData(res.docs.map((art) => ({ ...art.data() })));
          setFilter(res.docs.map((art) => ({ ...art.data() })));
          setLoading(false);
        });
        return (componentMounted = false);
      }
    };
    getItem();
  }, []);

  const Loading = () => {
    return (
      <>
        <h3 className="loader">Cargando...</h3>
      </>
    );
  };

  const filterProducts = (cat) => {
    const categorySelected = data.filter((art) => art.categoryName === cat);

    setFilter(categorySelected);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons-categorias">
          <Link to="/category/">
            <button onClick={() => setFilter(data)}>Todos</button>
          </Link>
          <Link to="/category/yerba">
            <button onClick={() => filterProducts("yerba")}>Yerbas</button>{" "}
          </Link>
          <Link to="/category/termo">
            <button onClick={() => filterProducts("termo")}>Termos</button>
          </Link>
          <Link to="/category/bombilla">
            <button onClick={() => filterProducts("bombilla")}>
              Bombillas
            </button>
          </Link>
        </div>
        <div className="productos-contenedor">
          {filter.map((art) => {
            return (
              <>
                <ItemDetail
                  key={art.id}
                  category={art.categoryName}
                  id={art.id}
                  title={art.nombre}
                  image={art.img}
                  price={art.precio}
                />
              </>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="titulo-categoria">
        <h2>Nuevos Productos</h2>
      </div>
      <div className="categorias">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};
