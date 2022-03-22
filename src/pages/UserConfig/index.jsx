import { Redirect } from "react-router-dom";
import { UserConfigStyles } from "./style";
import { useContext } from "react";
import { ConfigContext } from "../../Providers/userConfig";
import { ConfigsContainer } from "../../components/configHandler";
import { Link } from "react-router-dom";
import { ButtonReturn } from "../../components/ButtonReturn";

export const UserConfig = () => {
<<<<<<< HEAD
  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const people = [1, 2, 3, 4, 5, 6, 7];
  const cards = [
    { name: "visa", img: "visaIcon.png" },
    { name: "master", img: "masterIcon.png" },
    { name: "payPal", img: "payPalIcon.png" },
    { name: "boleto", img: "boletoIcon.png" },
    { name: "americanExpress", img: "americanExpressIcon.png" },
    { name: "elo", img: "eloIcon.png" },
  ];
=======
  const { selected, setSelected, userInfo } = useContext(ConfigContext);

  if (!localStorage.getItem("@Token")) {
    return <Redirect to="/login" />;
  }
>>>>>>> 74526c243b77db260fd49869b564e1b4e21cb552

  return (
    <UserConfigStyles>
      <>
        <header>
          <ButtonReturn />
        </header>

<<<<<<< HEAD
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
            <ul>
              {cards.map((e, i) => (
                <li key={i}>
                  <button className="payment">
                    <img src={e.img} alt={e.name} />
                  </button>
                </li>
              ))}
            </ul>
=======
        {userInfo.name && (
          <div className="container">
            <div className="iconContainer">
              <div className="icon">{userInfo.name[0]}</div>
            </div>
            <h1>{userInfo.name}</h1>
            <ConfigsContainer />
>>>>>>> 74526c243b77db260fd49869b564e1b4e21cb552
          </div>
        )}

        <p className="toCartEnd">
          <Link to="/cartEnd">Finalizar</Link>
        </p>
      </>
    </UserConfigStyles>
  );
};
