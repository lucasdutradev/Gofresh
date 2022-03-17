import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/api";

export const ListContext = createContext([]);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const getList = () => {
    Api.get("/products")
      .then((response) => {
        console.log(response);
        setList(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ListContext.Provider value={{ list, getList }}>
      {children}
    </ListContext.Provider>
  );
};
