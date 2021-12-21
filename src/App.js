import React, { Fragment } from "react";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer></ItemListContainer>}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
