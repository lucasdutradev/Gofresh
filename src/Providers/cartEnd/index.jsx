import { createContext, useState } from "react";

export const CartEndContext = createContext({});

export const CartEndProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({ hours: "", days: 0 });
  return (
    <CartEndContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </CartEndContext.Provider>
  );
};
