import { useContext, useEffect } from "react";
import { CartEndContext } from "../../Providers/cartEnd";

export const CartEndAux = () => {
  const { userInput, setUserInput } = useContext(CartEndContext);
  const receivingHours = ["8:00", "10:00", "14:00", "16:00", "19:00"];
  const eatingDays = [1, 2, 3, 4, 5, 6, 7];
  console.log(userInput);

  const calculator = () => {
    let total =
      15 * parseInt(userInput.infoMeal) * 2 * parseInt(userInput.days);
    console.log(total);
    setUserInput({
      ...userInput,
      total: total.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
    });
    return total;
  };

  let width = window.screen.width;

  useEffect(() => {
    calculator();
  }, [userInput.days]);

  return (
    <>
      <h1>Finalizar</h1>
      <div className="container">
        <div className="container1">
          <p>{`Dia de recebimento: ${userInput.infoDay}`}</p>
          <p>
            Horário de recebimento:
            <select
              className="Select"
              onChange={(event) => {
                setUserInput({ ...userInput, hours: event.target.value });
              }}
            >
              {receivingHours.map((hours, i) => (
                <option key={i} value={hours}>
                  {hours}
                </option>
              ))}
            </select>
          </p>
          <p>{`Pessoas por refeição: ${userInput.infoMeal}`}</p>
          <p>
            Refeições para quantos dias?
            <select
              className="Select"
              onChange={(event) => {
                setUserInput({
                  ...userInput,
                  days: parseInt(event.target.value),
                });
              }}
            >
              {eatingDays.map((days, i) => (
                <option key={i}>{days}</option>
              ))}
            </select>
          </p>
          <div className="lunchPrices">
            <p>Preço de cada refeição:</p>
            <p>R$ 15,00</p>
          </div>
          <input placeholder="Digite o código de convite"></input>

          <h3>Total: R$ {userInput.total},00</h3>

          {/* <h4>Desconto: </h4> */}
          <div className="containerButton">
            <button>PAGAR</button>
          </div>
        </div>
        {width > 800 && (
          <div className="container2">
            <img src="delivery.png" alt="" />
          </div>
        )}
      </div>
    </>
  );
};
