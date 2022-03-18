import { UserConfigStyles } from "./styles";

export const UserConfig = () => {
  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const people = [1, 2, 3, 4, 5, 6, 7];
  return (
    <UserConfigStyles>
      <body>
        <header>
          <button>ir para lista</button>
        </header>
        <div className="container">
          <div className="iconContainer">
            <div className="icon">L</div>
            <div>Nome do usuário</div>
          </div>

          <div className="configsContainer">
            {" "}
            <p>configurações</p>
            <h2>Selecione o dia de recebimento:</h2>
            {days.map((e, i) => (
              <button key={i}>{e}</button>
            ))}
            <h2>Quantas pessoas comem por refeição?</h2>
            {people.map((e, i) => (
              <button key={i}>{e}</button>
            ))}
            <h2>Adicione uma forma de pagamento:</h2>
            {/* {cards.map((e,i) => (
          <button key={i}>{e.img}</button>
        ))} */}
            {/* INSERIR ARRAY DE CARTÕES NO MAP */}
          </div>
        </div>
      </body>
    </UserConfigStyles>
  );
};
