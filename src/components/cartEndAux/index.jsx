import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Providers/cart";
import { CartEndContext } from "../../Providers/cartEnd";

export const CartEndAux = () => {
    const { userInput, setUserInput, codeCheck } = useContext(CartEndContext);
    const receivingHours = ["8:00", "10:00", "14:00", "16:00", "19:00"];
    const { cart } = useContext(CartContext);
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
                    <p>{`Refeições para ${cart.length} dias`}</p>
                    <div className="lunchPrices">
                        <p>Preço de cada refeição:</p>
                        <p>R$ 15,00</p>
                    </div>
                    <div className="codeInput">
                        <input
                            onBlur={() => {
                                codeCheck();
                            }}
                            onChange={(event) => {
                                setUserInput({
                                    ...userInput,
                                    code: event.target.value,
                                });
                            }}
                            placeholder="Digite o código de convite"
                        ></input>
                    </div>

                    <h3>
                        {`Total: ${
                            userInput.total &&
                            userInput.total.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })
                        }`}
                    </h3>

                    <div className="containerButton">
                        <Link to="/orderdetails">
                            <button>PAGAR</button>
                        </Link>
                    </div>
                </div>
                {/* {width > 800 && (
          <div className="container2">
            <img src="delivery.png" alt="" />
          </div>
        )} */}
            </div>
        </>
    );
};
