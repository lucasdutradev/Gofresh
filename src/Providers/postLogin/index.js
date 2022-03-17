import { createContext } from "react";
import { Api } from "../../services/api";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const handleSubmitPostLogin = (data) => {
    Api.post("/login", data)
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  };
  return (
    <LoginContext.Provider value={{ handleSubmitPostLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
