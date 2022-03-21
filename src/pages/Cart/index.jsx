import CardList from "../../components/CardList";
import { ContainerCart } from "./style";
import { useState, useHistory } from "react";

const Cart = ({ data }) => {
  const [cart, setCart] = useState([]);
  const history = useHistory();
  return (
    <ContainerCart>
      <div className="containerBody">
        <div className="containerHeader">
          <button>ir para lista</button>
        </div>
        <div className="containerCart">
          <h1>Carrinho</h1>
          {cart.map((data) => (
            <CardList data={data} />
          ))}
          <div className="containerCartButton">
            <button>Finalizar</button>
          </div>
        </div>
      </div>
    </ContainerCart>
  );
};

export default Cart;
