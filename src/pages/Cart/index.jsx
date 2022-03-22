import CardList from "../../components/CardList";
import { ContainerCart } from "./style";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { useHistory } from "react-router-dom/";
const Cart = ({ data }) => {
<<<<<<< HEAD
  // const [cart, setCart] = useState([]);
  const { cart } = useContext(CartContext);
  const history = useHistory();
=======
  const { cart, pushProduct } = useContext(CartContext);
  console.log(cart);
>>>>>>> e863958acbdc41f8a932e97ca393e5acf21d56d5
  return (
    <ContainerCart>
      <div className="containerBody">
        <div className="containerHeader">
          <button onClick={() => history.push("/menu")}>ir para lista</button>
        </div>
        <div className="containerCart">
          <h1>Carrinho</h1>
          {cart.map((data) => (
            <CardList negative data={data} />
          ))}
          <div className="containerCartButton">
            <button onClick={() => pushProduct()}>Finalizar</button>
          </div>
        </div>
      </div>
    </ContainerCart>
  );
};

export default Cart;
