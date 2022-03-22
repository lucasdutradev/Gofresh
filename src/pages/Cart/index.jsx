import CardList from "../../components/CardList";
import { ContainerCart } from "./style";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Cart = ({ data }) => {
  const { cart } = useContext(CartContext);

  console.log(cart);
  const history = useHistory();
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
            {cart.length === 0 ? (
              <span>Carinho vazio, adicione produtos!</span>
            ) : (
              <button>Finalizar</button>
            )}
          </div>
        </div>
      </div>
    </ContainerCart>
  );
};

export default Cart;
