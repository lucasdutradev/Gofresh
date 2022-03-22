import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../services/api";

export const ConfigContext = createContext({});

export const ConfigProvider = ({ children }) => {
    const [selected, setSelected] = useState({
        idDay: "",
        activeDay: false,
        idMeal: "",
        activeMeal: false,
    });

    const user = JSON.parse(localStorage.getItem("@IdUser")) || "";
    console.log(user);
    const token = JSON.parse(localStorage.getItem("@Token"));
    console.log(token);

    const getUser = () => {
        Api.get(`/users/${user}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                console.log(response);
                localStorage.setItem(
                    "@UserName",
                    JSON.stringify(response.data)
                );
            })
            .catch((_) => {
                console.log(_);
                toast.error("erro na requisição da api do config provider");
            });
    };

    useEffect(() => getUser(), []);

    return (
        <ConfigContext.Provider value={{ selected, setSelected, getUser }}>
            {children}
        </ConfigContext.Provider>
    );
};
