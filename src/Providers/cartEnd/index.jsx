import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/api";

export const CartEndContext = createContext({});

export const CartEndProvider = ({ children }) => {
  const cart = JSON.parse(localStorage.getItem("@ItemUser")) || [];
  const [userInput, setUserInput] = useState({
    hours: "",
    days: cart.length,
    offer: 0,
  });

  const codeCheck = () => {
    Api.get("/codes")
      .then((response) => {
        const validation = response.data.find(
          (item) => item.code === userInput.code
        );
        setUserInput({ ...userInput, offer: validation.offer });
        const countMath = 15 * userInput.infoMeal * 2 * cart.length;
        const discountMath = countMath * validation.offer;
        setUserInput({ ...userInput, total: countMath - discountMath });
      })
      .catch((_) => {});
  };

  const calculator = () => {
    if (userInput.infoMeal !== undefined && userInput.days !== undefined) {
      const total = 15 * userInput.infoMeal * 2 * cart.length;
      const discount = userInput.offer * total;
      setUserInput({ ...userInput, total: total - discount });
    }
  };

  useEffect(() => {
    calculator();
  }, [userInput.infoMeal]);

  return (
    <CartEndContext.Provider value={{ userInput, setUserInput, codeCheck }}>
      {children}
    </CartEndContext.Provider>
  );
};
