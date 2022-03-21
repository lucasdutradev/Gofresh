import { Redirect } from "react-router-dom";
import { PrincipalContainer, Header, Main } from "./style";
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
        <section1>
          <div>
            <h1>Detalhes do pedido</h1>
          </div>
        </section1>
        <section2>
          <p>
            Entrega do pedido: <span>Segunda-feira</span>
          </p>
          <p>
            Numero de ref.: <span>#24658</span>
          </p>
          <p>
            Total: <span>R$250,00</span>
          </p>
        </section2>

        <section3>
          <button onClick={() => setChange(true)}>Status atual</button>
          <button onClick={() => setChange(false)}>Descrição</button>
        </section3>

        {change ? (
          <div>
            <section4>
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
            </section4>
            <section5>
              <button>CHEGOU!</button>
            </section5>
          </div>
        ) : (
          <section6>
            <div>
              <p>Refeição suficiente para X dias e X pessoas.</p>
              <span>Nome do prato.</span>
              <span>Nome do prato.</span>
              <span>Nome do prato.</span>
            </div>
          </section6>
        )}
      </Main>
    </PrincipalContainer>
  );
};
