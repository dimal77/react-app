import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <ul className="navbar-nav d-flex flex-row">
      <li className="nav-item me-3 me-lg-0">
        <a className="nav-link" href="#!">
          <i>
            <FontAwesomeIcon icon={faCartPlus} />
          </i>
        </a>
      </li>
    </ul>
  );
}

export default CartWidget