import { createContext, useState } from "react";

export const ChangeCategoryContext = createContext([]);

export const ChangeCategoryProvider = ({ children }) => {
  const [titleCategory, setTitleCategory] = useState("");

  const changeCategory = (data) => setTitleCategory(data);

  return (
    <ChangeCategoryContext.Provider value={{ titleCategory, changeCategory }}>
      {children}
    </ChangeCategoryContext.Provider>
  );
};
