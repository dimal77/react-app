import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link style={{ marginRight: "70px" }} className="navbar-brand" to="/">
          Tecnology
        </Link>
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
            <NavLink style={{ marginRight: "20px" }} className="navLink" to="/">
              Home
            </NavLink>
            <NavLink
              style={{ marginRight: "20px" }}
              className="navLink"
              to="/categoria/pc"
            >
              PC's
            </NavLink>
            <NavLink
              style={{ marginRight: "20px" }}
              className="navLink"
              to="/categoria/pantallas"
            >
              Pantallas
            </NavLink>
            <NavLink
              style={{ marginRight: "20px" }}
              className="navLink"
              to="/categoria/accesorios"
            >
              Accesorios
            </NavLink>
          </div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
