import { useContext, useEffect, useState, createContext } from "react";
import { ListContext } from "../list";

export const CardFavoriteContext = createContext([]);

export const CardFavoriteProvider = ({ children }) => {
  const { list } = useContext(ListContext);
  const [listFavorite, setListFavorite] = useState([]);

  const pageFavorite = () => {
    setListFavorite(list.filter((fav) => fav.type === "Favoritos"));
  };

  useEffect(() => {
    pageFavorite();
  }, [list]);

  return (
    <CardFavoriteContext.Provider value={{ listFavorite }}>
      {children}
    </CardFavoriteContext.Provider>
  );
};
