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
import { useContext } from "react";

const ListProducts = () => {
  const { sliceList, countPage, advancePage, goBackPage } =
    useContext(CountPageContext);
  const next = ">";
  const back = "<";

  return (
    <ContainerListProducts>
      <ContainerTitleCardapio>
        <TitleCardapio>Cardapio</TitleCardapio>
        <SubTitleCardapio>Go fresh in your home</SubTitleCardapio>
      </ContainerTitleCardapio>
      <ContainerCardListMap>
        {sliceList.map((list, index) => (
          <div key={index}>
            <CardList data={list} />
          </div>
        ))}
      </ContainerCardListMap>
      <ContainerPageSelector>
        <ButtonPage onClick={goBackPage}>{back}</ButtonPage>
        <NumberPage>{countPage}</NumberPage>
        <ButtonPage onClick={advancePage}>{next}</ButtonPage>
      </ContainerPageSelector>
    </ContainerListProducts>
  );
};

export default ListProducts;
