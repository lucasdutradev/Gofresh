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

  const user = JSON.parse(localStorage.getItem("@IdUser"));

  const getUser = () => {
    Api.get("/users/1")
      .then((response) => {
        console.log(response);
        localStorage.setItem("@UserName", JSON.stringify(response.data));
      })
      .catch((_) => {
        toast.error("deu ruim mlkada");
      });
  };

  useEffect(() => getUser(), []);

  return (
    <ConfigContext.Provider value={{ selected, setSelected, getUser }}>
      {children}
    </ConfigContext.Provider>
  );
};
