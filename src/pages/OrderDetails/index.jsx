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
export const OrderDetails = () => {
  const history = useHistory();

  const [change, setChange] = useState(true);

  const { cart } = useContext(CartContext);

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
            Entrega do pedido: <span>Segunda-feira</span>
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
              <p>Refeição suficiente para X dias e X pessoas.</p>
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
