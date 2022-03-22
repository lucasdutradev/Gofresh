import { useEffect } from "react";
import { createContext, useState } from "react";
import { Api } from "../../services/api";

export const CartEndContext = createContext({});

export const CartEndProvider = ({ children }) => {
  const [userInput, setUserInput] = useState({ hours: "", days: 0 });
  return (
    <CartEndContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </CartEndContext.Provider>
  );
};
