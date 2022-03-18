import { createContext, useEffect, useState } from "react";

import { Api } from "../../services/api";

export const CountPageContext = createContext([]);

export const CountPageProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [totalArray, setTotalArray] = useState();
  const [newList, setNewList] = useState(list.slice(0, 9));

  const getList = () => {
    Api.get(`/products?_page=${countPage}&_limit=9`)
      .then((response) => {
        setList(response.data);
        setTotalArray(response.headers.link);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const advancePage = () => {
    if (3 > countPage) {
      setCountPage(countPage + 1);
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
        list,
        getList,
        newList,
        setNewList,
        advancePage,
        goBackPage,
        countPage,
      }}
    >
      {console.log(totalArray)}
      {children}
    </CountPageContext.Provider>
  );
};
