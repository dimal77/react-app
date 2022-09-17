import React from 'react';
import ItemCount from './ItemCount';
import { useContext, useState } from "react";
import {cartContext} from "../components/store/cartContext";
import { Link } from 'react-router-dom';


function ItemDetail({ marca, precio, imagen, product, stock,id,descripcion}) {
    const [quantityInCart,setQuantityInCart] = useState(0);
    const {addToCart} = useContext(cartContext);

      function handleAdd(quantity) {
        setQuantityInCart(quantity);
        const itemToCart = { marca, precio, imagen, product, stock,id,descripcion };
        addToCart(itemToCart, quantity);
      }

  return (
    <>
      <section class="bg-light">
        <div class="container pb-5">
          <div class="row">
            <div class="col-lg-5 mt-5">
              <div class="card mb-3">
                <img
                  class="card-img img-fluid"
                  src={imagen}
                  alt={product + " " + marca}
                  title={product + " " + marca}
                />
              </div>
            </div>
            <div class="col-lg-7 mt-5">
              <div class="card">
                <div class="card-body">
                  <h1 class="h2">{product}</h1>
                  <p>
                    <strong>Marca:</strong> {marca}
                  </p>
                  <p>
                    <strong>Descripcion:</strong> {descripcion}
                  </p>
                  <p class="h3 py-2">
                    <strong>Precio: </strong>${precio}
                  </p>

                  <div className="itemView-quantity">
                    {quantityInCart === 0 ? (
                      <ItemCount
                        inventory={stock}
                        onAdd={handleAdd}
                        initial={1}
                      />
                    ) : (
                      <Link to="/cart">Ir al Carrito</Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default ItemDetail