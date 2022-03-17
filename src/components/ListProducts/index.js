import CardList from "../CardList";
import {
  ContainerListProducts,
  ContainerTitleCardapio,
  TitleCardapio,
  SubTitleCardapio,
  ContainerCardListMap,
} from "./style";
import { ListContext } from "../../Providers/list";
import { useContext, useEffect } from "react";

const ListProducts = () => {
  const { list, getList } = useContext(ListContext);

  useEffect(() => {
    getList();
  }, []);

  return (
    <ContainerListProducts>
      <ContainerTitleCardapio>
        <TitleCardapio>Cardapio</TitleCardapio>
        <SubTitleCardapio>Go fresh in your home</SubTitleCardapio>
      </ContainerTitleCardapio>
      <ContainerCardListMap>
        {" "}
        {list.map((list, index) => (
          <div key={index}>
            <CardList data={list} />
          </div>
        ))}
      </ContainerCardListMap>
    </ContainerListProducts>
  );
};

export default ListProducts;
