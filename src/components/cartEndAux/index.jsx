import { useContext, useEffect } from "react";
import { CartEndContext } from "../../Providers/cartEnd";
import { ConfigContext } from "../../Providers/userConfig";
import { Api } from "../../services/api";

export const CartEndAux = () => {
    const { userInput, setUserInput } = useContext(CartEndContext);
    const receivingHours = ["8:00", "10:00", "14:00", "16:00", "19:00"];
    const eatingDays = [1, 2, 3, 4, 5, 6, 7];

    let width = window.screen.width;

    const codeCheck = () => {
        Api.get("/codes")
            .then((response) => {
                let validation = response.data.find((item, i) => {
                    return item.code === userInput.code;
                });
                setUserInput({
                    ...userInput,
                    offer: parseFloat(validation.offer),
                });
            })
            .catch((err) => console.log(err));
    };

    const calculator = () => {
        let total =
            15 * parseInt(userInput.infoMeal) * 2 * parseInt(userInput.days);

        if (userInput.offer) {
            let discount = userInput.offer * total;
            setUserInput({ ...userInput, total: total - discount });
        } else {
            setUserInput({ ...userInput, total: total });
        }
    };

    useEffect(() => {
        calculator();
    }, [userInput.days || userInput.infoMeal || userInput.offer]);

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
                                setUserInput({
                                    ...userInput,
                                    hours: event.target.value,
                                });
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
                    <div className="codeInput">
                        <input
                            onChange={(event) => {
                                setUserInput({
                                    ...userInput,
                                    code: event.target.value,
                                });
                            }}
                            placeholder="Digite o código de convite"
                        ></input>
                        <button onClick={codeCheck}>Aplicar</button>
                    </div>

                    <h3>Total: R$ {userInput.total},00</h3>

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
