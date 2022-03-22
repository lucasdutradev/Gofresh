import { useState } from "react";
import { Redirect } from "react-router-dom";
import { CartEndStyles } from "./style";
import { CartEndAux } from "../../components/cartEndAux";
import { ButtonReturn } from "../../components/ButtonReturn";

export const CartEnd = () => {
  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  if (!localStorage.getItem("@InfoDay")) {
    return <Redirect to="/configuration" />;
  }

  return (
    <CartEndStyles>
      <body>
        <header>
          <ButtonReturn />
        </header>
        <CartEndAux />
      </body>
    </CartEndStyles>
  );
};
