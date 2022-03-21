import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/api";

export const ListContext = createContext([]);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const getList = () => {
    Api.get("/products")
      .then((response) => {
        setList(response.data);
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getList(), []);

  return (
    <ListContext.Provider value={{ list, setList, searchList, setSearchList }}>
      {children}
    </ListContext.Provider>
  );
};
