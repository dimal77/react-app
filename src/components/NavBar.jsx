import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
      <div className="container">
        <a className="navbar-brand" href="#!">
          <span>Tecnology</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i>
            <FontAwesomeIcon icon={faBars} />
          </i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Contacto
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i>
                  <FontAwesomeIcon icon={faCartPlus} />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
