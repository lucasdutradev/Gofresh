import { useContext } from "react";
import { ConfigContext } from "../../Providers/userConfig";
import { CartEndContext } from "../../Providers/cartEnd";

export const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
export const people = [1, 2, 3, 4, 5, 6, 7];
export const cards = [
  { name: "visa", img: "visaIcon.png" },
  { name: "master", img: "masterIcon.png" },
  { name: "payPal", img: "payPalIcon.png" },
  { name: "boleto", img: "boletoIcon.png" },
  { name: "americanExpress", img: "americanExpressIcon.png" },
  { name: "elo", img: "eloIcon.png" },
  { name: "pix", img: "pixIcon.png" },
];

export const ConfigsContainer = () => {
  const { selected, setSelected } = useContext(ConfigContext);
  const { userInput, setUserInput } = useContext(CartEndContext);

  const onClickDay = (e) => {
    setUserInput({ ...userInput, infoDay: e });

    if (selected.activeDay) {
      let lastSelected = document.getElementById(selected.idDay);
      lastSelected.style.backgroundColor = "rgba(238, 238, 238, 1)";
      lastSelected.style.color = "black";
    }
    setSelected({ ...selected, idDay: e, activeDay: true });

    let btnElement = document.getElementById(e);
    btnElement.style.backgroundColor = "rgba(244, 67, 53, 1)";
    btnElement.style.color = "white";
  };
  const onClickPPMeal = (e) => {
    setUserInput({ ...userInput, infoMeal: e });

    if (selected.activeMeal) {
      let lastSelected = document.getElementById(selected.idMeal);
      lastSelected.style.backgroundColor = "rgba(238, 238, 238, 1)";
      lastSelected.style.color = "black";
    }
    setSelected({ ...selected, idMeal: e, activeMeal: true });

    let btnElement = document.getElementById(e);
    btnElement.style.backgroundColor = "rgba(244, 67, 53, 1)";
    btnElement.style.color = "white";
  };

  return (
    <div className="configsContainer">
      <p>configurações</p>
      <h2>Selecione o dia de recebimento:</h2>
      {days.map((e, i) => (
        <button id={e} key={i} onClick={() => onClickDay(e)}>
          {e}
        </button>
      ))}
      <h2>Quantas pessoas comem por refeição?</h2>
      {people.map((e, i) => (
        <button id={e} key={i} onClick={() => onClickPPMeal(e)}>
          {e}
        </button>
      ))}
      <h2>Adicione uma forma de pagamento:</h2>
      {cards.map((e, i) => (
        <button id={e.name} className="payment" key={i}>
          <img src={e.img} alt={e.name} />
        </button>
      ))}
    </div>
  );
};
