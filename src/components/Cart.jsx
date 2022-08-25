import { useContext, useState } from "react";
import { cartContext} from "./store/cartContext";

function Cart({ precio, imagen, product, stock, id, cant}) {
  const [quantity, setQuantity] = useState(cant);
  let total = precio * quantity;
  let ID = id;
  const { cart, removeToCart, updateToCart } = useContext(cartContext);

  function BorrarItem() {
    const itemRemove = cart.find((item) => item.id === ID);
    removeToCart(itemRemove);
  }

  function SumarItem() {
    setQuantity(quantity + 1);
    const itemUpdate = cart.find((item) => item.id === ID);
    updateToCart(itemUpdate, quantity);
  }

  function RestarItem() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    const itemUpdate = cart.find((item) => item.id === ID);
    updateToCart(itemUpdate, quantity);
  }

  return (
    <div>
      <img src={imagen}></img>
      <p>{product}</p>
      <div>
        <a onClick={RestarItem}>-</a>
        <p>{quantity}</p>
        <a onClick={quantity < stock ? SumarItem : null}>+</a>
      </div>
      <div>
        <p> ${total} </p>
        <p onClick={BorrarItem}> Borrar </p>
      </div>
    </div>
  );
}

export default Cart;