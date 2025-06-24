import { createContext, useState, useContext } from "react";

const CartContext = createContext();

function getCartFromLocalStorage() {
  return localStorage.getItem("shoppingCart") ? JSON.parse(localStorage.getItem("shoppingCart")) : [];
}

function setItemToCart(item) {
  const shoppingCart = getCartFromLocalStorage();
  localStorage.setItem("shoppingCart", JSON.stringify([...shoppingCart, item]));
}

function removeItemFromCart(itemId) {
  let shoppingCart = getCartFromLocalStorage();
  const updatedCart = shoppingCart.filter((item) => item.id !== itemId);
  localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
}

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(() => {
    const shoppingCart = getCartFromLocalStorage();
    const storedCount = shoppingCart.length;
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  const getItemsCart = () => {
    return getCartFromLocalStorage();
  };

  const addItemCart = (item) => {
    setCartCount((prevCount) => prevCount + 1);
    setItemToCart(item);
  };

  const removeItemCart = (id) => {
    setCartCount((prevCount) => Math.max(0, prevCount - 1));
    removeItemFromCart(id);
  };

  const value = {
    cartCount,
    getItemsCart,
    addItemCart,
    removeItemCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
