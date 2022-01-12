import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <section className="container-error">
      <h1>Error 404</h1>
      <h3 className="error-p">La página solicitada no fue encontrada.</h3>

      <Link to="/" className="btn-error">
        Volver al Home
      </Link>
    </section>
  );
}

export default Error404;
