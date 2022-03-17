import { createContext, useState } from "react";

import { Api } from "../../services/api";

export const CountPageContext = createContext([]);

export const CountPageProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [countPage, setCountPage] = useState(0);
  const listSlice = list.slice(0, 9);
  const [newList, setNewList] = useState(listSlice);

  const getList = () => {
    Api.get("/products")
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const advancePage = () => {
    if (list.length / 9 - 1 >= countPage) {
      setCountPage(countPage + 1);
      sliceList();
    }
  };

  const goBackPage = () => {
    if (countPage !== 0) {
      setCountPage(countPage - 1);
      sliceList();
    }
  };

  const sliceList = () => {
    const initialSlice = countPage * 9;
    let finalSlice = countPage * 9 + 9;
    if (finalSlice > list.length) {
      finalSlice = list.length;
    }
    setNewList(list.slice(initialSlice, finalSlice));
  };

  const page = countPage + 1;

  return (
    <CountPageContext.Provider
      value={{
        list,
        getList,
        newList,
        setNewList,
        advancePage,
        goBackPage,
        page,
        sliceList,
      }}
    >
      {console.log(listSlice)}
      {children}
    </CountPageContext.Provider>
  );
};
