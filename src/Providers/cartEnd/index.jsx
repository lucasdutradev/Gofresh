import { createContext, useState } from "react";
import { Api } from "../../services/api";
import { useEffect } from "react";

export const CartEndContext = createContext({});

export const CartEndProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({
    hours: "",
    days: 0,
    offer: 0,
    total: 0,
    infoMeal: 0,
    code: "",
  });

  const codeCheck = () => {
    Api.get("/codes")
      .then((response) => {
        const validation = response.data.find(
          (item) => item.code === userInput.code
        );
        const offer = parseFloat(validation.offer);
        setUserInput({ ...userInput, offer: offer });
      })
      .catch((_) => console.log(_));
  };

  const calculator = () => {
    const total = 15 * userInput.infoMeal * 2 * userInput.days;

    if (userInput.offer) {
      let discount = userInput.offer * total - total;
      setUserInput({ ...userInput, total: discount });
    } else {
      setUserInput({ ...userInput, total: total });
    }
  };

  useEffect(() => {
    calculator();
  }, [userInput.days || userInput.infoMeal || userInput.offer]);

  return (
    <CartEndContext.Provider value={{ userInput, setUserInput, codeCheck }}>
      {children}
    </CartEndContext.Provider>
  );
};
