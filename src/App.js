import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Category } from "./components/Category/Category";
import { Cart } from "./components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Error404 from "./components/Error/Error404";
import { CheckOut } from "./components/CheckOut/CheckOut";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer></ItemListContainer>}
          ></Route>
          <Route
            exact
            path="/category/:categoryName/:id"
            element={<ItemListContainer></ItemListContainer>}
          ></Route>
          <Route exact path="/category/" element={<Category />}></Route>
          <Route
            exact
            path="/category/:categoryName"
            element={<Category />}
          ></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/checkout" element={<CheckOut />}></Route>
          <Route exact path="*" component={Error404} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
