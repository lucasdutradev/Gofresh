import { useContext } from "react";
import { ConfigContext } from "../../Providers/userConfig";
import { CartEndContext } from "../../Providers/cartEnd";
import { days, people, cards } from "../configFeeder";
import { ConfigsContains } from "./style";

export const ConfigsContainer = () => {
  const { selected, setSelected } = useContext(ConfigContext);
  const { userInput, setUserInput } = useContext(CartEndContext);

  const onClickDay = (day) => {
    setUserInput({ ...userInput, infoDay: day });

    if (selected.activeDay) {
      let lastSelected = document.getElementById(selected.idDay);
      lastSelected.style.backgroundColor = "#ccc";
      lastSelected.style.color = "black";
    }
    setSelected({ ...selected, idDay: day, activeDay: true });

    let btnElement = document.getElementById(day);
    btnElement.style.backgroundColor = "rgba(244, 67, 53, 1)";
    btnElement.style.color = "white";
  };

  const onClickPPMeal = (person) => {
    setUserInput({ ...userInput, infoMeal: person });

    if (selected.activeMeal) {
      let lastSelected = document.getElementById(selected.idMeal);
      lastSelected.style.backgroundColor = "#ccc";
      lastSelected.style.color = "black";
    }
    setSelected({ ...selected, idMeal: person, activeMeal: true });

    let btnElement = document.getElementById(person);
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
