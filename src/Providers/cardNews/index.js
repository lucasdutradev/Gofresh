import { useContext, useEffect, useState, createContext } from "react";
import { ListContext } from "../list";

export const CardNewsContext = createContext([]);

export const CardNewsProvider = ({ children }) => {
  const { list } = useContext(ListContext);
  const [listNews, setListNews] = useState([]);

  const pageNews = () => {
    setListNews(list.filter((news) => news.type === "Novidades"));
  };

  useEffect(() => {
    pageNews();
  }, [list]);

  return (
    <CardNewsContext.Provider value={{ listNews }}>
      {children}
    </CardNewsContext.Provider>
  );
};
