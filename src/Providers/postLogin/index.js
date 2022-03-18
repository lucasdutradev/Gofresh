import { createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../../services/api";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const handleSubmitPostLogin = (data) => {
    Api.post("/login", data)
      .then((_) => {
        toast.success("Seja bem vindo(a)!");
      })
      .catch((_) => {
        toast.error("e-mail ou senha incorretos");
      });
  };
  return (
    <LoginContext.Provider value={{ handleSubmitPostLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
