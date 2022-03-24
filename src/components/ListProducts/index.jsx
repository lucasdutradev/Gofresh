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
import { ListContext } from "../../Providers/list";
import { CardFavoriteContext } from "../../Providers/cardFavorite";
import { CardNewsContext } from "../../Providers/cardNews";
import { ChangeCategoryContext } from "../../Providers/changeCategory";
import { useContext, useEffect, useState } from "react";

const ListProducts = () => {
  const { sliceList, countPage, setCountPage, advancePage, goBackPage } =
    useContext(CountPageContext);
  const { searchList } = useContext(ListContext);
  const { listFavorite } = useContext(CardFavoriteContext);
  const { listNews } = useContext(CardNewsContext);
  const { titleCategory } = useContext(ChangeCategoryContext);
  const [finalList, setFinalList] = useState([sliceList]);

  const FinalList = () => {
    if (searchList.length === 0 && titleCategory === "all") {
      setFinalList(sliceList);
    } else if (searchList.length === 0 && titleCategory === "favorite") {
      setFinalList(listFavorite);
      setCountPage(1);
    } else if (searchList.length === 0 && titleCategory === "news") {
      setFinalList(listNews);
      setCountPage(1);
    } else {
      const initialSlice = (countPage - 1) * 9;
      const finalSlice = countPage * 9;
      setFinalList(searchList.slice(initialSlice, finalSlice));
    }
  };

  useEffect(() => {
    FinalList();
  }, [searchList, sliceList, titleCategory]);

  return (
    <ContainerListProducts>
      <ContainerTitleCardapio>
        <TitleCardapio>Cardapio</TitleCardapio>
        <SubTitleCardapio>Go fresh in your home</SubTitleCardapio>
      </ContainerTitleCardapio>
      <ContainerCardListMap>
        {finalList.length === 0
          ? sliceList.map((list, index) => (
              <div key={index}>
                <CardList data={list} />
              </div>
            ))
          : finalList.map((list, index) => (
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
