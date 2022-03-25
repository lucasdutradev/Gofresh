import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/api";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@ItemUser")) || []
  );

  const addToCart = (item) => setCart([...cart, item]);

  const removeFromCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.name !== item.name);
    setCart(newCart);
  };

  const token = localStorage.getItem("@Token");
  const userId = localStorage.getItem("@IdUser");

  const pushProduct = () => {
    const body = {
      userId: Number(userId),
      cart,
    };

    Api.post("/userproducts", body, {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    })
      .then((_) => {})
      .catch((_) => {});
  };

  useEffect(() => {
    localStorage.setItem("@ItemUser", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, pushProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
