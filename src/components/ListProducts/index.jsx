import CardList from "../CardList";
import {
  ContainerListProducts,
  ContainerTitleCardapio,
  TitleCardapio,
  SubTitleCardapio,
  ContainerCardListMap,
  ContainerPageSelector,
  ButtonPage,
  NumberPage,
} from "./style";
import { CountPageContext } from "../../Providers/countPage";
import { useContext, useEffect, useState } from "react";
import { ListContext } from "../../Providers/list";

const ListProducts = () => {
  const { sliceList, countPage, advancePage, goBackPage } =
    useContext(CountPageContext);
  const { searchList } = useContext(ListContext);
  const [finalList, setFinalList] = useState([]);

  const FinalList = () => {
    if (searchList.length === 0) {
      setFinalList(sliceList);
    } else {
      const initialSlice = (countPage - 1) * 9;
      const finalSlice = countPage * 9;
      setFinalList(searchList.slice(initialSlice, finalSlice));
    }
  };

  useEffect(() => {
    FinalList();
  }, [searchList, sliceList]);

  return (
    <ContainerListProducts>
      <ContainerTitleCardapio>
        <TitleCardapio>Cardapio</TitleCardapio>
        <SubTitleCardapio>Go fresh in your home</SubTitleCardapio>
      </ContainerTitleCardapio>
      <ContainerCardListMap>
        {finalList.map((list, index) => (
          <div key={index}>
            <CardList data={list} />
          </div>
        ))}
      </ContainerCardListMap>
      <ContainerPageSelector>
        <ButtonPage onClick={goBackPage}>&lt;</ButtonPage>
        <NumberPage>{countPage}</NumberPage>
        <ButtonPage onClick={advancePage}>&gt;</ButtonPage>
      </ContainerPageSelector>
    </ContainerListProducts>
  );
};

export default ListProducts;
