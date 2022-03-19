import { Redirect } from "react-router-dom";
import { PrincipalContainer, Header, Main } from "./style";

export const OrderDetails = () => {
  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }
  return (
    <PrincipalContainer>
      <Header>
        <button>Ir para a lista</button>
      </Header>
      <Main>
        <section>
          <h1>Detalhes do pedido</h1>
          <p>Entrega do pedido </p>
          <p>Numero de ref.</p>
          <p>Total</p>
        </section>
        <section>
          <p>Status atual</p>
          <p>Descrição</p>
        </section>
        <section>
          <p>Pedido aceito </p>
          <p>Montando pedido</p>
          <p>Saindo para entrega</p>
          <p>Entregue</p>
        </section>
        <section>
          <button>CHEGOU!</button>
        </section>
      </Main>
    </PrincipalContainer>
  );
};
