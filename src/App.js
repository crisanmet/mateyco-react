import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Category } from "./components/Category/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
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
        <Route exact path="/category" element={<Category />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
