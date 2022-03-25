import { Redirect } from "react-router-dom";
import checkOrange from "../../images/check.svg";
import checkGrey from "../../images/checkgrey.svg";
import {
  PrincipalContainer,
  Main,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Div1,
  Div2,
  ButtonRed,
  ButtonGray,
} from "./style";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { CartEndContext } from "../../Providers/cartEnd";
import HeaderB from "../../components/HeaderB";

export const OrderDetails = () => {
  const [change, setChange] = useState(true);

  const { cart } = useContext(CartContext);
  const { userInput } = useContext(CartEndContext);

  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  return (
    <PrincipalContainer>
      <HeaderB />
      <Main>
        <Section1>
          <h1>Detalhes do pedido</h1>
        </Section1>
        <Section2>
          <p>
            Entrega do pedido: <span>{userInput.infoDay}</span>
          </p>
          <p>
            Numero de ref.: <span>#24658</span>
          </p>
          <p>
            Total:
            <span>
              {userInput.total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>
        </Section2>

        <Section3>
          <button onClick={() => setChange(true)}>Status atual</button>
          <button onClick={() => setChange(false)}>Descrição</button>
        </Section3>

        {change ? (
          <div>
            <Section4>
              <Div1>
                <ButtonRed>
                  <img alt="ButtonRed" src={checkOrange} />
                </ButtonRed>
                <span>│</span>
                <ButtonGray>
                  <img alt="ButtonGray" src={checkGrey} />
                </ButtonGray>
                <span>│</span>
                <ButtonGray>
                  <img alt="ButtonGray" src={checkGrey} />
                </ButtonGray>
                <span>│</span>
                <ButtonGray>
                  <img alt="ButtonGray" src={checkGrey} />
                </ButtonGray>
              </Div1>
              <Div2>
                <p>Pedido aceito </p>
                <p>Montando pedido</p>
                <p>Saindo para entrega</p>
                <p>Entregue</p>
              </Div2>
            </Section4>
            <Section5>
              <button>CHEGOU!</button>
            </Section5>
          </div>
        ) : (
          <Section6>
            <div>
              <p>
                {`Refeição suficiente para ${userInput.days} dias e ${userInput.infoMeal} pessoas.`}
              </p>
              {cart.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </div>
          </Section6>
        )}
      </Main>
    </PrincipalContainer>
  );
};
