import { useContext } from "react";
import { cartContext } from "./store/cartContext";
import Cart from "./Cart";

function CartContainer(){
  const { cart, addToCart } = useContext(cartContext);
  function ItemCart(producto){
    return(
      <Cart 
      key = {producto.id}
      id = {producto.id}
      imagen = {producto.imagen}
      product = {producto.product}
      marca = {producto.marca}
      precio = {producto.precio}
      cant = {producto.quantity}
      stock = {producto.stock}
      />
    );
  }
  let cantidadTotal = 0;
  let precioTotal = 0;
  cart.map((item) => {
    console.log("entre al map de cart_container")
    cantidadTotal = cantidadTotal + item.quantity;
    precioTotal = precioTotal + item.quantity * item.precio;
  });

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <h2>Carrito de Compras</h2>
          <div>{cart.map(ItemCart)}</div>
          <a href="/">
            <p>Volver</p>
          </a>
        </div>
        <div>
          <h5>TOTAL</h5>
          <hr />
          <div>
            <div> Cantidad: {cantidadTotal} </div>
            <div> Total: ${precioTotal} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;