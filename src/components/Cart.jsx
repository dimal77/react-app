import { useContext, useState } from "react";
import { cartContext} from "./store/cartContext";

function Cart({ precio, imagen, product, stock, id, cant}) {
  console.log("Llegue al CART")
  console.log(id,cant)
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

const mystyle = {
      paddingLeft: "5px",
      paddingRight: "5px",
      textAlign:"center"
    };

  return (
    <tr>
      <td style={mystyle}>
        <img src={imagen} height={50}></img>
      </td>
      <td style={mystyle}>{product}</td>
      <td style={mystyle}>
        <button onClick={RestarItem}>-</button>
        &nbsp;&nbsp;{quantity}&nbsp;&nbsp;
        <button onClick={quantity < stock ? SumarItem : null}>+</button>
      </td>
      <td style={mystyle}>
        <p> ${total} </p>
      </td>
      <td style={mystyle}>
        <button onClick={BorrarItem}> &nbsp;&nbsp; X &nbsp;&nbsp;</button>
      </td>
    </tr>
  );
}

export default Cart;