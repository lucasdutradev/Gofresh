import { useState } from "react";
import { Redirect } from "react-router-dom";
import { CartEndStyles } from "./style";

export const CartEnd = ({ day, people }) => {
  const [userInput, setUserInput] = useState({ hours: "", days: "" });
  const receivingHours = ["8:00", "10:00", "14:00", "16:00", "19:00"];
  const receivingDays = ["segunda", "quarta", "sábado"];

  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }

  return (
    <CartEndStyles>
      <body>
        <header>
          <button>ir para lista</button>
        </header>
        <div className="container">
          <h1>Finalizar</h1>
          <p>{`Dia de recebimento:${day}`}</p>
          <p>
            Horário de recebimento:
            <select
              className="Select"
              onChange={(event) =>
                setUserInput({ ...userInput, hours: event.target.value })
              }
            >
              {receivingHours.map((e, i) => (
                <option key={i} value="hours">
                  {e}
                </option>
              ))}
            </select>
          </p>
          <p>{`Pessoas por refeição:${people}`}</p>
          <p>
            Refeições para quantos dias?
            <select
              className="Select"
              onChange={(event) =>
                setUserInput({ ...userInput, days: event.target.value })
              }
            >
              {receivingDays.map((e, i) => (
                <option key={i} value="days">
                  {e}
                </option>
              ))}
            </select>
          </p>
          <div className="lunchPrices">
            <p>Preço de cada refeição:</p>
            <p>R$ 15,00</p>
            <input placeholder="Digite o código de convite"></input>
          </div>

          {/* <h3>Total: R$ {15 * people * 2 * day},00</h3> */}
          <div className="containerButton">
            <button>PAGAR</button>
          </div>
        </div>
      </body>
    </CartEndStyles>
  );
};
