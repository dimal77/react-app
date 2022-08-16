import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Tecnology
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/detalle/1">Detalle 1</NavLink>
            <NavLink to="/detalle/2">Detalle 2</NavLink>
          </div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
