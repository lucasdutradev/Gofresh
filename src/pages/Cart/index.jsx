import CardList from "../../components/CardList";
import { ContainerCart } from "./style";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
const Cart = ({ data }) => {
  const { cart, pushProduct } = useContext(CartContext);
  console.log(cart);
  return (
    <ContainerCart>
      <div className="containerBody">
        <div className="containerHeader">
          <button>ir para lista</button>
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
