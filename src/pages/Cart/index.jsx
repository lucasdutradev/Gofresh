import CardList from "../../components/CardList";
import { ContainerCart } from "./style";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Cart = ({ data }) => {
  const { cart, pushProduct } = useContext(CartContext);
  const history = useHistory();
  const handleSubmit = () => {
    if (localStorage.getItem("@Token")) {
      pushProduct();
      history.push("/cartend");
    } else {
      history.push("/login");
    }
  };
  return (
    <ContainerCart>
      <div className="containerHeader">
        <Link to="/menu">
          <button>&lt; ir ao menu</button>
        </Link>
      </div>
      <h1>Carrinho</h1>
      <div className="containerCart">
        {cart.map((data, index) => (
          <CardList key={index} negative data={data} />
        ))}
        <div className="containerCartButton">
          {cart.length === 0 ? (
            <span>Você ainda não possui pratos adicionados ao carrinho!</span>
          ) : (
            <button onClick={handleSubmit}>Finalizar</button>
          )}
        </div>
      </div>
    </ContainerCart>
  );
};

export default Cart;
