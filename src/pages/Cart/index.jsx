import CardList from "../../components/CardList";
import { ContainerCart } from "./style";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { useHistory } from "react-router";

const Cart = ({ data }) => {
  // const [cart, setCart] = useState([]);
  const { cart } = useContext(CartContext);
  const history = useHistory();

  return (
    <ContainerCart>
      {console.log(cart)}
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
