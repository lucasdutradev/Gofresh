import { Redirect } from "react-router-dom";
import { UserConfigStyles } from "./style";

export const UserConfig = () => {
  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const people = [1, 2, 3, 4, 5, 6, 7];
  const cards = [
    { name: "visa", img: "visaIcon.png" },
    { name: "master", img: "masterIcon.png" },
    { name: "payPal", img: "payPalIcon.png" },
    { name: "boleto", img: "boletoIcon.png" },
    { name: "americanExpress", img: "americanExpress.png" },
    { name: "elo", img: "eloIcon.png" },
  ];

  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  return (
    <UserConfigStyles>
      <body>
        <header>
          <button>ir para lista</button>
        </header>
        <div className="container">
          <div className="iconContainer">
            <div className="icon">L</div>
          </div>
          <h1>Nome do usuário</h1>

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
            {cards.map((e, i) => (
              <button className="payment" key={i}>
                <img src={e.img} alt={e.name} />
              </button>
            ))}
          </div>
        </div>
      </body>
    </UserConfigStyles>
  );
};
