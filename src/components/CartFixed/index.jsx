import { useContext } from "react";
import Bag from "../../images/bag.png";
import { CartContext } from "../../Providers/cart";
import { ContainerBag } from "./style";

const CartFixed = () => {
  const { cart } = useContext(CartContext);
  return (
    <ContainerBag>
      <span className="counter">{cart.length}</span>
      <img src={Bag} alt="Cart" />
    </ContainerBag>
  );
};

export default CartFixed;
