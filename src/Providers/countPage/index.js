import { createContext, useContext, useEffect, useState } from "react";
import { ListContext } from "../list";
import { Api } from "../../services/api";
import { ChangeCategoryContext } from "../changeCategory";

export const CountPageContext = createContext([]);

export const CountPageProvider = ({ children }) => {
  const [sliceList, setSliceList] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const { list, searchList } = useContext(ListContext);
  const { changeCategory } = useContext(ChangeCategoryContext);

  const getList = () => {
    Api.get(`/products?_page=${countPage}&_limit=9`)
      .then((response) => {
        setSliceList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const advancePage = () => {
    if (searchList.length === 0 || changeCategory === "all") {
      list.length / 9 > countPage && setCountPage(countPage + 1);
    } else {
      searchList.length / 9 > countPage && setCountPage(countPage + 1);
    }
    scrollToTop();
  };
  const goBackPage = () => {
    countPage > 1 && setCountPage(countPage - 1);
    scrollToTop();
  };

  useEffect(() => {
    getList();
  }, [countPage]);

  return (
    <CountPageContext.Provider
      value={{
        advancePage,
        goBackPage,
        countPage,
        sliceList,
        setSliceList,
        setCountPage,
      }}
    >
      {children}
    </CountPageContext.Provider>
  );
};
