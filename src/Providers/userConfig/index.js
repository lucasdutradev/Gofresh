import { useEffect } from "react";
import { createContext, useState } from "react";
import { Api } from "../../services/api";

export const ConfigContext = createContext({});

export const ConfigProvider = ({ children }) => {
  const [selected, setSelected] = useState({
    idDay: "",
    activeDay: false,
    idMeal: "",
    activeMeal: false,
  });

  const [userInfo, setUserInfo] = useState([]);

  const userId = JSON.parse(localStorage.getItem("@IdUser"));
  const token = localStorage.getItem("@Token");

  const getUser = () => {
    Api.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ConfigContext.Provider
      value={{ selected, setSelected, getUser, userInfo }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
