import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../services/api";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@ItemUser")) || []
  );

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
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
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
