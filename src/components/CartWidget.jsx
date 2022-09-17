import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function CartWidget() {
  return (
    <ul className="navbar-nav d-flex flex-row">
      <li className="nav-item me-3 me-lg-0">
        <Link className="nav-link" to="/cart">
          <i>
            <FontAwesomeIcon icon={faCartPlus} />
          </i>
        </Link>
      </li>
    </ul>
  );
}

export default CartWidget