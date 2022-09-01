import { createContext, useState, useContext } from "react";

export const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    console.log(item,quantity);
    const exist = cart.find((element) => element.id == item.id);
    if (exist) {
      console.log("Entre al IF");
      setCart(
        cart.map((element) =>
          element.id == item.id
            ? { ...exist, quantity: exist.quantity + quantity }
            : element
        )
      );
    } else {
      let copyCart = [...cart];
      copyCart.push({ ...item, quantity: quantity });
      setCart(copyCart);
      console.log("Entre al ELSE");
      console.log(copyCart);
      console.log(item, quantity);
    }
  }

  function removeToCart(item) {
    setCart(cart.filter((itemInCart) => itemInCart.id !== item.id));
  } /*Por ahora no lo uso, recien cuando tenga pagina carrito*/

  function updateToCart(Item, quantity) {
    setCart(
      cart.map((item) =>
        item.id == Item.id ? { ...Item, quantity: quantity } : item
      )
    );
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, removeToCart, updateToCart }}>
      {children}
    </cartContext.Provider>
  );
}
