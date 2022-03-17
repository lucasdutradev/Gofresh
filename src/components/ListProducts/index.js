import CardList from "../CardList";
import {
  ContainerListProducts,
  ContainerTitleCardapio,
  TitleCardapio,
  SubTitleCardapio,
  ContainerCardListMap,
} from "./style";
import { CountPageContext } from "../../Providers/countPage";
import { useContext, useEffect } from "react";

const ListProducts = () => {
  const { getList, list, newList, page, advancePage, goBackPage } =
    useContext(CountPageContext);
  const newLength = newList.length;

  useEffect(() => {
    getList();
  }, []);

  return (
    <ContainerListProducts>
      {console.log(newList)}
      <ContainerTitleCardapio>
        <TitleCardapio>Cardapio</TitleCardapio>
        <SubTitleCardapio>Go fresh in your home</SubTitleCardapio>
      </ContainerTitleCardapio>
      <ContainerCardListMap>
        {newList.map((list, index) => (
          <div key={index}>
            <CardList data={list} />
          </div>
        ))}
        <div className="pageSelector">
          <button onClick={goBackPage}> anterior</button>
          <p>{page}</p>
          <button onClick={advancePage}> proximo </button>
        </div>
      </ContainerCardListMap>
    </ContainerListProducts>
  );
};

export default ListProducts;
