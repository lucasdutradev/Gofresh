import { Redirect } from "react-router-dom";
import checkOrange from "../../images/check.svg";
import checkGrey from "../../images/checkgrey.svg";
import {
  PrincipalContainer,
  Header,
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
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { ConfigContext } from "../../Providers/userConfig";
import { CartEndContext } from "../../Providers/cartEnd";

export const OrderDetails = () => {
  const history = useHistory();

  const [change, setChange] = useState(true);

  const { cart } = useContext(CartContext);
  const { selected } = useContext(ConfigContext);
  const { userInput } = useContext(CartEndContext);

  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  return (
    <PrincipalContainer>
      <Header>
        <button onClick={() => history.push("/menu")}>IR PARA LISTA</button>
      </Header>
      <Main>
        <Section1>
          <h1>Detalhes do pedido</h1>
        </Section1>
        <Section2>
          <p>
            Entrega do pedido: <span>{console.log(selected.idDays)}</span>
          </p>
          <p>
            Numero de ref.: <span>#24658</span>
          </p>
          <p>
            Total: <span>R$250,00</span>
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
                  {" "}
                  <img alt="ButtonGray" src={checkGrey} />{" "}
                </ButtonGray>
                <span>│</span>
                <ButtonGray>
                  {" "}
                  <img alt="ButtonGray" src={checkGrey} />{" "}
                </ButtonGray>
                <span>│</span>
                <ButtonGray>
                  {" "}
                  <img alt="ButtonGray" src={checkGrey} />{" "}
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
                Refeição suficiente para {userInput.days} dias e{" "}
                {selected.idMeal} pessoas.
              </p>
              {cart.map((item) => {
                return <span>{item.name} </span>;
              })}{" "}
              {console.log(cart)}
            </div>
          </Section6>
        )}
      </Main>
    </PrincipalContainer>
  );
};
