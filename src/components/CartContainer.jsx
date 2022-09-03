import { useContext } from "react";
import { cartContext } from "./store/cartContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import firestoredb from ".././services/firebase";
import { getDocs,Timestamp,getFirestore, collection, addDoc } from "firebase/firestore";


function CartContainer(){
  const { cart, addToCart } = useContext(cartContext);
  let total = 0;
  cart.forEach((item) => (total += item.precio * item.quantity));

  const ordenDeCompra = {
    buyer: { name: "Martin", email: "dima@hotmail.com", telefono: "3333333" },
    items: [...cart],
    total: total,
    date: new Date(),
  };

  async function Enviar() {
    const collectionProducts = collection(firestoredb, "pedido");
    const docref = await addDoc(collectionProducts, ordenDeCompra);
    console.log(docref);
    console.log(docref.id);
    alert("Su id de compra es: " + docref.id);
  };


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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h2>Carrito de Compras</h2>
          <table style={{ width: "90vw" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Miniatura</th>
                <th style={{ textAlign: "center" }}>Producto</th>
                <th style={{ textAlign: "center" }}>Cantidad</th>
                <th style={{ textAlign: "center" }}>Total</th>
                <th style={{ textAlign: "center" }}>Borrar</th>
              </tr>
            </thead>
            <tbody>{cart.map(ItemCart)}</tbody>
          </table>
          <Link to="/">
            <p>Volver</p>
          </Link>
        </div>
        <div>
          <h5>TOTAL</h5>
          <hr />
          <div>
            <div> Cantidad: {cantidadTotal} </div>
            <div> Total: ${precioTotal} </div>
          </div>
          <div>
            <button onClick={Enviar}>Enviar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;