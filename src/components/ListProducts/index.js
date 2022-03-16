import CardList from "../CardList";
import { listaTeste } from "../../utils/ListaTeste";

const ListProducts = () => {
  return (
    <div>
      {listaTeste.map((list, index) => (
        <div key={index}>
          teste
          <CardList data={list} />
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
