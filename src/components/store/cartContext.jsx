import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    console.log("ok");
    console.log(item, quantity);

    if(cart.some(itemInCart=>itemInCart.id===item.id)){

    }
    else{
    let copyCart = [...cart];
    copyCart.push({...item, quantity:quantity});
    setCart(copyCart);
  }
}

  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}
