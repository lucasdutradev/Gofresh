import { Redirect } from "react-router-dom";
import { CartEndStyles } from "./style";
import { CartEndAux } from "../../components/cartEndAux";
import { ButtonReturn } from "../../components/ButtonReturn";
import { HeaderB } from "../../components/HeaderB";

export const CartEnd = () => {
  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  return (
    <CartEndStyles>
      <>
        <HeaderB />
        <CartEndAux />
      </>
    </CartEndStyles>
  );
};
