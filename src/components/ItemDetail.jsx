import React from 'react';
import ItemCount from './ItemCount';
import { useContext, useState } from "react";
import {cartContext} from "../components/store/cartContext";


function ItemDetail({ marca, precio, imagen, product, stock,id}) {
    const [quantityInCart,setQuantityInCart] = useState(0);
    const {addToCart} = useContext(cartContext);

      function handleAdd(quantity) {
        setQuantityInCart(quantity);
        const itemToCart = { marca, precio, imagen, product, stock,id };
        addToCart(itemToCart, quantity);
      }

  return (
    <div style={{ marginLeft: "10px" }}>
      <div className="card" style={{ width: "255px" }}>
        <img
          src={imagen}
          className="card-img-top mx-auto"
          alt="PC"
          style={{
            width: "250px",
            height: "250px",
          }}
        />
        <div className="card-body">
          <h4 className="card-title">{product}</h4>
          <p>{marca}</p>
          <p>{precio}</p>
        </div>
        <div className="itemView-quantity">
          {quantityInCart === 0 ? (
          <ItemCount inventory={stock} onAdd={handleAdd} initial ={1}/>
          ) : ( <a href="/cart">Ir al Carrito</a>)}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail