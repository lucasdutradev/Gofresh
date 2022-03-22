import CardList from "../../components/CardList";
import { ContainerCart } from "./style";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Cart = ({ data }) => {
  const history = useHistory();
  const [cart, setCart] = useState([]);

  return (
    <ContainerCart>
      <div className="containerBody">
        <div className="containerHeader">
          <button onClick={() => history.push("/menu")}>ir para lista</button>
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
