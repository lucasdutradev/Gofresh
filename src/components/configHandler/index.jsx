import { useContext } from "react";
import { ConfigContext } from "../../Providers/userConfig";
import { CartEndContext } from "../../Providers/cartEnd";
import { days, people, cards } from "../configAux";
import { ConfigsContains } from "./style";

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
    <ConfigsContains>
      <h3>configurações</h3>
      <h2>Selecione o dia de recebimento:</h2>
      <div className="mapContainer">
        {days.map((day, i) => (
          <button id={day} key={i} onClick={() => onClickDay(day)}>
            {day}
          </button>
        ))}
      </div>
      <h2>Quantas pessoas comem por refeição?</h2>
      <div className="mapContainer">
        {people.map((person, i) => (
          <button id={person} key={i} onClick={() => onClickPPMeal(person)}>
            {person}
          </button>
        ))}
      </div>

      <h2>Adicione uma forma de pagamento:</h2>
      <div className="mapContainer">
        {cards.map((card, i) => (
          <button id={card.name} className="payment" key={i}>
            <img src={card.img} alt={card.name} />
          </button>
        ))}
      </div>
    </ConfigsContains>
  );
};
