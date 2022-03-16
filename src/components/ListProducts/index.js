import CardList from "../CardList";
import { listaTeste } from "../../utils/ListaTeste";

const ListProducts = () => {
  return (
    <div>
      <div className="containerTitleCardapio">
        <h2>Cardapio</h2>
        <h1>Go fresh your home</h1>
      </div>
      {listaTeste.map((list, index) => (
        <div key={index}>
          <CardList data={list} />
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
