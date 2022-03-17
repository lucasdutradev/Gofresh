import { createContext } from "react";
import { Api } from "../../services/api";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
  const handleSubmitPost = (data) => {
    Api.post("/register", data)
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  };

  return (
    <RegisterContext.Provider value={{ handleSubmitPost }}>
      {children}
    </RegisterContext.Provider>
  );
};
