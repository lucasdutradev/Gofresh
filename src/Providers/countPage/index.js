import { createContext, useContext, useEffect, useState } from "react";
import { ListContext } from "../list";
import { Api } from "../../services/api";

export const CountPageContext = createContext([]);

export const CountPageProvider = ({ children }) => {
  const [sliceList, setSliceList] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [finalList, setFinalList] = useState([]);
  const { list, searchList } = useContext(ListContext);

  const getList = () => {
    Api.get(`/products?_page=${countPage}&_limit=9`)
      .then((response) => {
        setSliceList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const advancePage = () => {
    if (searchList.length === 0) {
      if (list.length / 9 > countPage) {
        setCountPage(countPage + 1);
      }
    } else {
      if (searchList.length / 9 > countPage) {
        setCountPage(countPage + 1);
      }
    }
  };

  const goBackPage = () => {
    if (countPage > 1) {
      setCountPage(countPage - 1);
    }
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
        finalList,
        setFinalList,
        setCountPage,
      }}
    >
      {children}
    </CountPageContext.Provider>
  );
};
