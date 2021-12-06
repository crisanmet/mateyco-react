import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

import "./App.css";

function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer nombre="MateyCo" />
    </Fragment>
  );
}

export default App;
