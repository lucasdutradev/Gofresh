import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../services/api";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    Api.get(`/userProducts`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((err) => console.log(err));
  };

  const postCart = (data) => {
    Api.post(`/userProducts`, data)
      .then((_) => {
        toast.success("Adicionado no Carrinho");
      })
      .catch((_) => {
        toast.error("Carrinho cheio");
      });
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    postCart(item);
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.name !== item.name);
    setCart(newCart);
  };

  useEffect(() => {
    getCart();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
      {console.log(cart)}
    </CartContext.Provider>
  );
};
