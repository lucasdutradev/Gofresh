import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../services/api";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const handleSubmitPostLogin = (data) => {
    Api.post("/login", data)
      .then((response) => {
        toast.success("Seja bem vindo(a)!");
        localStorage.setItem(
          "@Token",
          JSON.stringify(response.data.accessToken)
        );
        setIsLogin(true);
      })
      .catch((_) => {
        toast.error("e-mail ou senha incorretos");
      });
  };
  return (
    <LoginContext.Provider
      value={{ handleSubmitPostLogin, isLogin, setIsLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};
