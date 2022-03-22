import { Redirect } from "react-router-dom";
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
} from "./style";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const OrderDetails = () => {
  const history = useHistory();

  const [change, setChange] = useState(true);

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
              <div1>
                <button> ✔️ </button>
                <span>│</span>
                <button> ✔️ </button>
                <span>│</span>
                <button> ✔️ </button>
                <span>│</span>
                <button> ✔️ </button>
              </div1>
              <div2>
                <p>Pedido aceito </p>
                <p>Montando pedido</p>
                <p>Saindo para entrega</p>
                <p>Entregue</p>
              </div2>
            </Section4>
            <Section5>
              <button>CHEGOU!</button>
            </Section5>
          </div>
        ) : (
          <Section6>
            <div>
              <p>Refeição suficiente para X dias e X pessoas.</p>
              <span>Nome do prato.</span>
              <span>Nome do prato.</span>
              <span>Nome do prato.</span>
            </div>
          </Section6>
        )}
      </Main>
    </PrincipalContainer>
  );
};
