import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">

        <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
          <img src="./assets/img/logo-4.png" width={240} />
        </Link>

      <div className="container">
        <Link className="navbar-brand" to="/" />
          
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
          <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/categoria/pc">PC's</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/categoria/pantallas">Pantallas</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/categoria/accesorios">Accesorios</NavLink>
                  </li>
              </ul>
          </div>
          <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
              </div>
              <CartWidget />
          </div>
        </div>

        </div> 
      </div>
    </nav>
  );
}

export default NavBar;
