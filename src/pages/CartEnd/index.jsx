import { Redirect } from "react-router-dom";
import { CartEndStyles } from "./style";
import { CartEndAux } from "../../components/cartEndAux";
import HeaderB from "../../components/HeaderB";
import { CartEndContext } from "../../Providers/cartEnd";
import { useContext } from "react";

export const CartEnd = () => {
  const { userInput } = useContext(CartEndContext);

  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  } else if (!userInput.infoDay || !userInput.infoMeal) {
    return <Redirect to="/configuration" />;
  }

  return (
    <CartEndStyles>
      <HeaderB />
      <CartEndAux />
    </CartEndStyles>
  );
};
